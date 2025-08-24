import NavButton from "components/Buttons/NavButton";
import "./style.css";

type Props = {
  menuState: string;
  setMenuState: (value: string) => void;
};

function NavigationMenu({ menuState, setMenuState }: Props) {
  return (
    <nav className="nav_menu">
      <NavButton
        isActive={menuState === "tabs"}
        onClick={() => setMenuState("tabs")}
        text={"Tabs"}
      />

      <NavButton
        isActive={menuState === "my_proxies"}
        onClick={() => setMenuState("my_proxies")}
        text={"My proxies"}
      />
    </nav>
  );
}

export default NavigationMenu;
