import { create } from "zustand";
import { fetchProxies } from "../api/fetchProxies";

export type ProxyItem = {
  id: number;
  name: string;
  url: string;
  domains: {
    id: number;
    domain: string;
  }[];
};

type ProxyStore = {
  proxies: ProxyItem[];
  setProxy: (proxies: ProxyItem[]) => void;
  init: () => void;
};

export const useProxyListStore = create<ProxyStore>((set) => ({
  proxies: [],
  setProxy: (proxies: ProxyItem[]) => set({ proxies }),
  init: async () => {
    const data = await fetchProxies();

    set({ proxies: data || [] });
  },
}));
