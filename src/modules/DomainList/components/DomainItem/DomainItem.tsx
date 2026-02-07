import "../../styles/style.css";
import { type ChromeTab } from "shared/types/ChromeTab";
import AcceptButton from "shared/ui/Buttons/IconButtons/AcceptButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { calculateHeight } from "../../utils/calculateHeight";
import { useLayoutEffect, useRef, useState } from "react";
import { DomainItemShell } from "./DomainItemShell";
import { DomainItemTitle } from "./DomainItemTitle";

function DomainItem(props: Omit<ChromeTab, "id">) {
  const { title, domain } = props;
  const [isOpen, setIsOpen] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const domainContRef = useRef<HTMLDivElement | null>(null);
  const proxyListRef = useRef<HTMLUListElement | null>(null);
  const [tHeight, setTHeight] = useState(0);

  useLayoutEffect(() => {
    setTHeight(calculateHeight(domainContRef));
  }, [isOpen]);

  useGSAP(
    () => {
      gsap.registerPlugin(MorphSVGPlugin);
      tlRef.current = gsap
        .timeline({ paused: true })
        .to(
          "#initialPathId", // DomainItemShell
          {
            morphSVG: "#animatedPathId", // DomainItemShell
            duration: 1,
            ease: "expo.inOut",
          },
          0,
        )
        .fromTo(
          domainContRef.current,
          { height: 35 },
          {
            height: tHeight + 10, // padding
            duration: 1,
            ease: "expo.inOut",
          },
          0,
        )
        .fromTo(
          ".domain_proxy_list_item",
          {
            opacity: 0,
            translateX: "-50%",
          },

          { stagger: 0.1, opacity: 1, translateX: "0%" },
          0.5,
        );
    },
    { scope: domainContRef, dependencies: [tHeight] },
  );

  useGSAP(() => {
    if (!tlRef.current) return;

    if (isOpen) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [isOpen]);

  return (
    <div ref={domainContRef} className={`domain_cont ${isOpen ? "open" : ""}`}>
      <DomainItemTitle title={domain && domain !== "" ? domain : title} />

      <ul ref={proxyListRef} className="domain_proxy_list_cont">
        <li className="domain_proxy_list_item">
          <p className="list_item__p">Proxy 1Proxy 1Proxy 1Proxy 1Proxy 1</p>
          <AcceptButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="list_item_accept_btn"
          />
        </li>

        <li className="domain_proxy_list_item">
          <p className="list_item__p">Proxy 2</p>
          <AcceptButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="list_item_accept_btn"
          />
        </li>

        <li className="domain_proxy_list_item">
          <p className="list_item__p">Proxy 3</p>
          <AcceptButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="list_item_accept_btn"
          />
        </li>
      </ul>

      <AcceptButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        isLoading={isOpen}
        className="domain_accept_btn"
      />

      <DomainItemShell height={tHeight} />
    </div>
  );
}

export default DomainItem;
