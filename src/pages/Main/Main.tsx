import "./style.css";
import DomainList from "modules/DomainList";
import Label from "widgets/Label/Label";
import ProxyModeSwitcher from "modules/ProxyModeSwitcher";

function Main() {
  return (
    <main className="main">
      <Label />
      <ProxyModeSwitcher />
      <DomainList />
    </main>
  );
}

export default Main;
