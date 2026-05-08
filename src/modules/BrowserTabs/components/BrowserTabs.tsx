import BrowserTab from "./DomainItem/BrowserTab";
import { type ChromeTab } from "@/shared/types/ChromeTab";
import { useDomainStore } from "../store/BrowserTabs.store";
import { useEffect } from "react";
import { useProxyCatalogStore } from "@/modules/ProxyCatalog";

function BrowserTabs() {
  const { tabs, init } = useDomainStore();
  const { proxies } = useProxyCatalogStore();

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="elements_cont">
      <ul className="elements">
        {tabs.map((el: ChromeTab) => {
          return <BrowserTab {...el} proxies={proxies} key={el.id} />;
        })}
      </ul>
    </div>
  );
}

export default BrowserTabs;
