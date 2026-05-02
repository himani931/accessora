import { create } from "zustand";
import api from "@/services/api";

const token = localStorage.getItem("token");
const storedUser = localStorage.getItem("user");

const useAuthStore = create((set) => ({
  user: storedUser ? JSON.parse(storedUser) : null,
  token: token || null,

  accessibility: {
    disabilityType: [],
    fontScale: "normal",
    contrast: "normal",
    voiceNavigation: false,
    captions: true,
    signLanguage: false,
    dyslexiaFont: false,
    reduceMotion: false,
  },

  setUser: (user) =>
    set({
      user,
    }),

  setToken: (token) =>
    set({
      token,
    }),

  updateAccessibility: (data) =>
    set((state) => ({
      accessibility: {
        ...state.accessibility,
        ...data,
      },
    })),

  register: async (data) => {
    const res = await api.post("/auth/register", data);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    set({
      token: res.data.token,
      user: res.data.user,
    });
  },

  login: async (data) => {
    const res = await api.post("/auth/login", data);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    set({
      token: res.data.token,
      user: res.data.user,
    });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    set({
      token: null,
      user: null,
    });
  },
}));

export default useAuthStore;
