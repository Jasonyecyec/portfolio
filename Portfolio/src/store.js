import { create } from "zustand";

const useToggleMode = create((set) => ({
  isActive: false,
  toggleActive: () => set((state) => ({ isActive: !state.isActive })),
  isShow: false,
  toggleShow: () => set((state) => ({ isShow: !state.isShow })),
}));

export { useToggleMode };
