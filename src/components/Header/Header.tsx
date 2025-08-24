import FuzzyText from "components/FuzzyText/FuzzyText";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <FuzzyText
        color="hsla(0, 0%, 80%, 100%)"
        fontSize={"xx-large"}
        enableHover={false}
        baseIntensity={0.15}
      >
        Proxy Harbor
      </FuzzyText>
    </header>
  );
}

export default Header;
