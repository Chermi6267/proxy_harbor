import { useViewModeStore } from "@/modules/ViewMode";
import "../styles/styles.css";
import BrowserTabs from "@/modules/BrowserTabs";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const MENUS = [
  {
    component: <BrowserTabs />,
    id: "DOMAIN",
  },
  {
    component: <BrowserTabs />,
    id: "PROXY",
  },
];

function ActiveViewContainer() {
  const { viewMode } = useViewModeStore();
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
      const activeIndex = MENUS.findIndex((m) => m.id === viewMode);

      [...ref.current.children].map((el, index) => {
        gsap.to(el, {
          x: `${(index - activeIndex) * 100}%`,
          duration: 0.4,
          ease: "back",
        });
      });
    },
    { dependencies: [viewMode], scope: ref },
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

export default ActiveViewContainer;
