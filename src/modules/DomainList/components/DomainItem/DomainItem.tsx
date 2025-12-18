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
  const proxyListRef = useRef<HTMLDivElement | null>(null);
  const [tHeight, setTHeight] = useState(0);

  useLayoutEffect(() => {
    setTHeight(calculateHeight(proxyListRef));
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
          0
        )
        .fromTo(
          proxyListRef.current,
          { height: 35 },
          {
            height: tHeight + 10, // padding
            duration: 1,
            ease: "expo.inOut",
          },
          0
        );
    },
    { scope: proxyListRef, dependencies: [tHeight] }
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
    <div ref={proxyListRef} className={`domain_cont ${isOpen ? "open" : ""}`}>
      <DomainItemTitle title={domain && domain !== "" ? domain : title} />

      <div className="domain_proxy_list_cont">
        <div className="domain_proxy_list_item"></div>
        <div className="domain_proxy_list_item"></div>
        <div className="domain_proxy_list_item"></div>
        <div className="domain_proxy_list_item"></div>
        <div className="domain_proxy_list_item"></div>
        <div className="domain_proxy_list_item"></div>
      </div>

      <AcceptButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="domain_accept_btn"
      />

      <DomainItemShell height={tHeight} />
    </div>
  );
}

export default DomainItem;
