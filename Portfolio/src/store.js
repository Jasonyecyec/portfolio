import { create } from "zustand";

const useToggleMode = create((set) => ({
  isActive: false,
  toggleActive: () => set((state) => ({ isActive: !state.isActive })),
}));

export { useToggleMode };
