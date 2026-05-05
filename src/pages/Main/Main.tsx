import "./style.css";
import ProxyDomainCarousel from "@/modules/ProxyDomainCarousel";
import ProxyModeSwitcher from "@/modules/ProxyModeSwitcher";
import Label from "@/widgets/Label/Label";
import { useEffect } from "react";
import { useProxyListStore } from "@/modules/ProxyList";

function Main() {
  const proxyStore = useProxyListStore();

  useEffect(() => {
    proxyStore.init();
  }, []);

  return (
    <main className="main">
      <Label />
      <ProxyModeSwitcher />
      <ProxyDomainCarousel />
    </main>
  );
}

export default Main;
