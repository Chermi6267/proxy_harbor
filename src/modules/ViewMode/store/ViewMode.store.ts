import { create } from "zustand";
import { type ViewMode } from "../types/proxyMode";

export type ViewModeStore = {
  viewMode: ViewMode;
  setViewMode: (state: ViewMode) => void;
};

export const useViewModeStore = create<ViewModeStore>((set) => ({
  viewMode: "DOMAIN",
  setViewMode: (viewMode: ViewMode) => set({ viewMode: viewMode }),
}));
