import "../../styles/style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { useLayoutEffect, useRef, useState } from "react";
import { ProxyItemShell } from "./ProxyItemShell";
import { ProxyItemTitle } from "./ProxyItemTitle";
import { type ProxyCatalogItem } from "../../types";
import SettingsButton from "@/shared/ui/Buttons/IconButtons/SettingsButton";
import { calculateHeight } from "@/shared/utils/calculateHeight";
import CrossButton from "@/shared/ui/Buttons/IconButtons/CrossButton";
import { deleteDomain } from "../../api/deleteDomain";
import { useStoresUpdate } from "@/modules/StoresUpdater";
import { errorHander, successHander } from "@/shared/hotToast/handlers";
import NavButton from "@/shared/ui/Buttons/NavButton/NavButton";
import { deleteProxy } from "../../api/deleteProxy";

function ProxyItem(props: ProxyCatalogItem) {
  const { domains, url, id } = props;
  const [isOpen, setIsOpen] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const proxyContRef = useRef<HTMLDivElement | null>(null);
  const { update } = useStoresUpdate();
  const [tHeight, setTHeight] = useState(0);

  const INITIAL_PATH_ID =
    "initialPathId" + url.replaceAll(/[^a-zA-Z0-9-_]/g, "");

  const ANIMATED_PATH_ID =
    "animatedPathId" + url.replaceAll(/[^a-zA-Z0-9-_]/g, "");

  useLayoutEffect(() => {
    setTHeight(calculateHeight(proxyContRef, ".proxy_list_cont"));
  }, [isOpen, props]);

  useGSAP(
    () => {
      gsap.registerPlugin(MorphSVGPlugin);

      tlRef.current?.kill();

      const tl = gsap.timeline({ paused: true });

      tl.to("#" + INITIAL_PATH_ID, {
        morphSVG: "#" + ANIMATED_PATH_ID,
        duration: 1,
        ease: "expo.inOut",
        onStart: () => {
          MorphSVGPlugin.convertToPath("#" + ANIMATED_PATH_ID, true);
        },
      })
        .fromTo(
          proxyContRef.current,
          { height: 35 },
          {
            height: tHeight + 10,
            duration: 1,
            ease: "expo.inOut",
          },
          0,
        )
        .fromTo(
          ".proxy_url_cont",
          {
            opacity: 0,
            x: "-50%",
          },
          {
            stagger: domains.length > 15 ? 0 : 0.1,
            opacity: 1,
            x: "0%",
          },
        )
        .fromTo(
          ".proxy_list_item",
          {
            opacity: 0,
            x: "-50%",
          },
          {
            stagger: domains.length > 15 ? 0 : 0.1,
            opacity: 1,
            x: "0%",
          },
          0.5,
        )
        .fromTo(
          ".nav_button",
          {
            opacity: 0,
            x: "-50%",
          },
          {
            opacity: 1,
            x: "0%",
          },
        );

      tlRef.current = tl;

      if (isOpen) {
        tl.progress(1);
      } else {
        tl.progress(0);
      }
    },
    { scope: proxyContRef, dependencies: [tHeight, props] },
  );

  useGSAP(() => {
    if (!tlRef.current) return;

    isOpen ? tlRef.current.play() : tlRef.current.reverse();
  }, [isOpen]);

  return (
    <div ref={proxyContRef} className={`proxy_cont ${isOpen ? "open" : ""}`}>
      <ProxyItemTitle {...props} field="name" />

      <div className="proxy_url_cont">
        <ProxyItemTitle {...props} field="url" />
      </div>

      <ul className="proxy_list_cont">
        {domains.map((domain) => {
          return (
            <li key={domain.domain} className="proxy_list_item">
              <p className="list_item__p">{domain.domain}</p>
              <CrossButton
                onClick={async () => {
                  await deleteDomain(domain.id)
                    .then((res) => {
                      update();
                      successHander();
                    })
                    .catch((err) => {
                      console.error(err);
                      errorHander();
                    });
                }}
                className="list_item_accept_btn"
              />
            </li>
          );
        })}

        <NavButton
          text="Delete"
          onClick={async () => {
            await deleteProxy(id)
              .then((res) => {
                successHander();
                update();
              })
              .catch((error) => errorHander());
          }}
          isActive={false}
        />
      </ul>

      <SettingsButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        isLoading={isOpen}
        className="proxy_accept_btn"
      />

      <ProxyItemShell
        key={tHeight}
        initialPathId={INITIAL_PATH_ID}
        animatedPathId={ANIMATED_PATH_ID}
        height={tHeight}
      />
    </div>
  );
}

export default ProxyItem;
