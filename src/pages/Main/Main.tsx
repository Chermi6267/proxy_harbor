import "./style.css";
import Label from "widgets/Label/Label";
import ProxyModeSwitcher from "modules/ProxyModeSwitcher";
import ProxyDomainCarousel from "modules/ProxyDomainCarousel";

function Main() {
  return (
    <main className="main">
      <Label />
      <ProxyModeSwitcher />
      <ProxyDomainCarousel />
    </main>
  );
}

export default Main;
