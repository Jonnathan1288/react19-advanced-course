import { create } from "zustand";
import type { HookInterface } from "../components/course/card-list/card-list";

interface MenuStore {
    itemSelect: HookInterface | null;
    setItemSelect: (p: HookInterface) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
    itemSelect: null,
    setItemSelect: (p) => set({ itemSelect: p }),
}));    