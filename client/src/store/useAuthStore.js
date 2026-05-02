import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  accessibility: {
    disabilityType: [],
    fontScale: "normal",
    contrast: "normal",
    voiceNavigation: false,
    captions: true,
    signLanguage: false,
  },

  setUser: (user) => set({ user }),

  updateAccessibility: (data) =>
    set((state) => ({
      accessibility: {
        ...state.accessibility,
        ...data,
      },
    })),
}));

export default useAuthStore;
