import "./style.css";
import ActiveViewContainer from "@/modules/ActiveViewContainer";
import ViewToggle from "@/modules/ViewToggle";
import Label from "@/shared/ui/Label/Label";
import { useEffect } from "react";
import { useProxyCatalogStore } from "@/modules/ProxyCatalog";

function Main() {
  const proxyStore = useProxyCatalogStore();

  useEffect(() => {
    proxyStore.init();
  }, []);

  return (
    <main className="main">
      <Label />
      <ViewToggle />
      <ActiveViewContainer />
    </main>
  );
}

export default Main;
