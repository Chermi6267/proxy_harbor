import "./style.css";
import ActiveViewContainer from "@/modules/ActiveViewContainer";
import ViewToggle from "@/modules/ViewToggle";
import Label from "@/shared/ui/Label/Label";

function Main() {
  return (
    <main className="main">
      <Label />
      <ViewToggle />
      <ActiveViewContainer />
    </main>
  );
}

export default Main;
