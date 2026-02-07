import { create } from "zustand";
import { ProxyMode } from "../types/proxyMode";

export type ProxyModeStore = {
  proxyMode: ProxyMode;
  setProxyMode: (state: ProxyMode) => void;
};

export const useProxyModeStore = create<ProxyModeStore>((set) => ({
  proxyMode: "DOMAIN",
  setProxyMode: (proxyMode: ProxyMode) => set({ proxyMode: proxyMode }),
}));
