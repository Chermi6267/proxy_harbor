import "./style.css";
import DomainList from "@/modules/DomainList";
import Label from "@/widgets/Label/Label";

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
