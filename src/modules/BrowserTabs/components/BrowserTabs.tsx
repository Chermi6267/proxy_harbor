import Br from "./DomainItem/BrowserTab";
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
          return <Br {...el} proxies={proxies} key={el.id} />;
        })}
        {/* {domains.length > 0 ? (
          <DomainItem {...domains[0]} key={domains[0].id} />
        ) : null} */}
      </ul>
    </div>
  );
}

export default BrowserTabs;
