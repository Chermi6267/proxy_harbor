import NavButton from "@/shared/ui/Buttons/NavButton/NavButton";
import "../styles/styles.css";
import { ViewMode, useViewModeStore } from "@/modules/ViewMode";

interface INavButton {
  type: ViewMode;
  text: string;
  onClick: () => void;
}

function ViewToggle() {
  const { setViewMode, viewMode } = useViewModeStore();
  const NAV_BUTTONS: INavButton[] = [
    {
      type: "DOMAIN",
      text: "Domains",
      onClick: () => setViewMode("DOMAIN"),
    },
    {
      type: "PROXY",
      text: "Proxies",
      onClick: () => setViewMode("PROXY"),
    },
  ];

  return (
    <nav className="switcher_container">
      {NAV_BUTTONS.map((button) => {
        return (
          <NavButton
            key={button.type}
            isActive={viewMode === button.type}
            text={button.text}
            onClick={button.onClick}
          />
        );
      })}
    </nav>
  );
}

export default ViewToggle;
