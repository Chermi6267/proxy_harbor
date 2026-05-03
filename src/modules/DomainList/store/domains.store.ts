import { create } from "zustand";
import type { ChromeTab } from "@/shared/types/ChromeTab";
import { fetchChromeTabs } from "../api/fetchChromeTabs";

type DomainStore = {
  domains: ChromeTab[];
  setDomains: (newDomains: ChromeTab[]) => void;
  init: () => Promise<void>;
};

export const useDomainStore = create<DomainStore>((set) => ({
  domains: [],
  setDomains: (newDomains) => set({ domains: newDomains }),
  init: async () => {
    const tabs = await fetchChromeTabs();

    if (tabs) {
      set({ domains: tabs });
    } else {
      console.error("Не удалось установить domains (zustand)");
    }
  },
}));
