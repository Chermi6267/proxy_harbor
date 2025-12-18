import "./style.css";
import DomainList from "modules/DomainList";
import Label from "widgets/Label/Label";
import { NODE_ENV } from "env";

function Main() {
  return (
    <main className="main">
      <Label />
      <DomainList />
    </main>
  );
}

export default Main;
