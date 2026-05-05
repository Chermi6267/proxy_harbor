import { create } from "zustand";
import type { ChromeTab } from "@/shared/types/ChromeTab";
import { fetchChromeTabs } from "../api/fetchChromeTabs";

type BrowserTabsStore = {
  tabs: ChromeTab[];
  setTabs: (newDomains: ChromeTab[]) => void;
  init: () => Promise<void>;
};

export const useDomainStore = create<BrowserTabsStore>((set) => ({
  tabs: [],
  setTabs: (newTabs) => set({ tabs: newTabs }),
  init: async () => {
    const tabs = await fetchChromeTabs();

    if (tabs) {
      set({ tabs: tabs });
    } else {
      console.error("Не удалось установить domains (zustand)");
    }
  },
}));
