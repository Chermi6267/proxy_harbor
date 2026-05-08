import ProxyItem from "./ProxyItem/ProxyItem";
import { useProxyCatalogStore } from "../store/ProxyCatalog.store";
import { useEffect } from "react";
import { ProxyCatalogItem } from "../types";
import AddProxyMenu from "@/modules/AddProxyMenu";

function ProxyCatalog() {
  const { init, proxies } = useProxyCatalogStore();

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <AddProxyMenu />
      <div className="elements_cont">
        <ul className="elements">
          {proxies.map((el: ProxyCatalogItem) => {
            return <ProxyItem {...el} key={el.id} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default ProxyCatalog;
