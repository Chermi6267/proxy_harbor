import { useProxyModeStore } from "@/modules/ProxyMode";
import "../styles/styles.css";
import DomainList from "@/modules/DomainList";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

type ProxyDomainCarousel = {
  children: React.ReactNode[];
};

const MENUS = [
  {
    component: <DomainList />,
    id: "DOMAIN",
  },
  {
    component: <DomainList />,
    id: "PROXY",
  },
];

function ProxyDomainCarousel() {
  const { proxyMode } = useProxyModeStore();
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      [...ref.current.children].map((el, index) => {
        gsap.set(el, { x: `${index * 100}%` });
      });
    },
    { dependencies: [], scope: ref },
  );

  useGSAP(
    () => {
      if (!ref.current) return;
      const activeIndex = MENUS.findIndex((m) => m.id === proxyMode);

      [...ref.current.children].map((el, index) => {
        gsap.to(el, {
          x: `${(index - activeIndex) * 100}%`,
          duration: 0.4,
          ease: "back",
        });
      });
    },
    { dependencies: [proxyMode], scope: ref },
  );

  return (
    <div ref={ref} className="carousel_container">
      {MENUS.map((child, index) => {
        return (
          <div key={child.id} className="carousel_item">
            {child.component}
          </div>
        );
      })}
    </div>
  );
}

export default ProxyDomainCarousel;
