import "../../styles/style.css";
import { type ChromeTab } from "@/shared/types/ChromeTab";
import AcceptButton from "@/shared/ui/Buttons/IconButtons/AcceptButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { calculateHeight } from "../../utils/calculateHeight";
import { useLayoutEffect, useRef, useState } from "react";
import { BrowserTabShell } from "./BrowserTabShell";
import { BrowserTabTitle } from "./BrowserTabTitle";
import { addDomianToProxy } from "../../api/addDomainToProxy";

function BrowserTab(
  props: Omit<ChromeTab, "id"> & {
    proxies: { id: number; name: string; url: string }[];
  },
) {
  const { title, domain, proxies } = props;
  const [isOpen, setIsOpen] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const domainContRef = useRef<HTMLDivElement | null>(null);
  const proxyListRef = useRef<HTMLUListElement | null>(null);
  const [tHeight, setTHeight] = useState(0);

  useLayoutEffect(() => {
    setTHeight(calculateHeight(domainContRef));
  }, [isOpen, proxies]);

  useGSAP(
    () => {
      gsap.registerPlugin(MorphSVGPlugin);

      tlRef.current?.kill();

      const tl = gsap.timeline({ paused: true });

      tl.to("#initialPathId", {
        morphSVG: "#animatedPathId",
        duration: 1,
        ease: "expo.inOut",
      })
        .fromTo(
          domainContRef.current,
          { height: 35 },
          {
            height: tHeight + 10,
            duration: 1,
            ease: "expo.inOut",
          },
          0,
        )
        .fromTo(
          ".domain_proxy_list_item",
          {
            opacity: 0,
            x: "-50%",
          },
          {
            stagger: 0.1,
            opacity: 1,
            x: "0%",
          },
          0.5,
        );

      tlRef.current = tl;

      if (isOpen) {
        tl.progress(1);
      } else {
        tl.progress(0);
      }
    },
    { scope: domainContRef, dependencies: [tHeight] },
  );

  useGSAP(() => {
    if (!tlRef.current) return;

    isOpen ? tlRef.current.play() : tlRef.current.reverse();
  }, [isOpen]);

  return (
    <div ref={domainContRef} className={`domain_cont ${isOpen ? "open" : ""}`}>
      <BrowserTabTitle title={domain && domain !== "" ? domain : title} />

      <ul ref={proxyListRef} className="domain_proxy_list_cont">
        {proxies.map((proxy) => {
          return (
            <li key={proxy.url} className="domain_proxy_list_item">
              <p className="list_item__p">{proxy.name}</p>
              <AcceptButton
                onClick={async () => {
                  await addDomianToProxy(domain, proxy.id);
                }}
                className="list_item_accept_btn"
              />
            </li>
          );
        })}
      </ul>

      <AcceptButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        isLoading={isOpen}
        className="domain_accept_btn"
      />

      <BrowserTabShell height={tHeight} />
    </div>
  );
}

export default BrowserTab;
