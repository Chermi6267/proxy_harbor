import { useDomainStore } from "@/modules/BrowserTabs";
import { useProxyCatalogStore } from "@/modules/ProxyCatalog";
import { useCallback } from "react";

export const useStoresUpdate = () => {
  const proxyInit = useProxyCatalogStore((s) => s.init);
  const tabsInit = useDomainStore((s) => s.init);

  const update = useCallback(() => {
    proxyInit();
    tabsInit();
  }, [proxyInit, tabsInit]);

  return { update };
};
