import { create } from "zustand";

export const myCounerStore = create((set) => ({
  count: 0,
  increase: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decrease: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },
  reset: () => set({ count: 0 }),
}));

export default myCounerStore;
