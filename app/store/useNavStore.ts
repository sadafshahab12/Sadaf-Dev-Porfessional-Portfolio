import { create } from "zustand";

interface NavState {
  isOpen: boolean;
  mobileProjectOpen: boolean;
  toggleProjects: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useNavStore = create<NavState>((set) => ({
  isOpen: false,
  mobileProjectOpen: false,
  toggleProjects: () =>
    set((state) => ({
      mobileProjectOpen: !state.mobileProjectOpen,
    })),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false, mobileProjectOpen: false }),
}));
