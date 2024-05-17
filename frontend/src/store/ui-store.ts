import { create } from "zustand";

interface IUseMenuState {
    isSideMenuOpen: boolean;

    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const useMenuState = create<IUseMenuState>()(set => ({
    isSideMenuOpen: false,

    openSideMenu: () => set({ isSideMenuOpen: true }),
    closeSideMenu: () => set({ isSideMenuOpen: false })
}))