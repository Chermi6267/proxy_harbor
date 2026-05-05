import { create } from "zustand";
import { fetchProxies } from "../api/fetchProxies";
import { type ProxyCatalogItem } from "../types";

type ProxyCatalogStore = {
  proxies: ProxyCatalogItem[];
  setProxy: (proxies: ProxyCatalogItem[]) => void;
  init: () => void;
};

export const useProxyCatalogStore = create<ProxyCatalogStore>((set) => ({
  proxies: [],
  setProxy: (proxies: ProxyCatalogItem[]) => set({ proxies }),
  init: async () => {
    const data = await fetchProxies();

    set({ proxies: data || [] });
  },
}));
