import NavButton from "@/shared/ui/Buttons/NavButton/NavButton";
import "../styles/styles.css";
import { ProxyMode, useProxyModeStore } from "@/modules/ProxyMode";

interface INavButton {
  type: ProxyMode;
  text: string;
  onClick: () => void;
}

function ProxyModeSwitcher() {
  const { setProxyMode, proxyMode } = useProxyModeStore();
  const NAV_BUTTONS: INavButton[] = [
    {
      type: "DOMAIN",
      text: "Domains",
      onClick: () => setProxyMode("DOMAIN"),
    },
    {
      type: "PROXY",
      text: "Proxies",
      onClick: () => setProxyMode("PROXY"),
    },
  ];

  return (
    <nav className="switcher_container">
      {NAV_BUTTONS.map((button) => {
        return (
          <NavButton
            isActive={proxyMode === button.type}
            text={button.text}
            onClick={button.onClick}
          />
        );
      })}
    </nav>
  );
}

export default ProxyModeSwitcher;
