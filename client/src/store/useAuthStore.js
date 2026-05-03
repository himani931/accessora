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

  savedJobs: JSON.parse(localStorage.getItem("savedJobs") || "[]"),

  toggleSaveJob: (job) =>
    set((state) => {
      const exists = state.savedJobs.find((j) => j.id === job.id);

      let updated;

      if (exists) {
        updated = state.savedJobs.filter((j) => j.id !== job.id);
      } else {
        updated = [...state.savedJobs, job];
      }

      localStorage.setItem("savedJobs", JSON.stringify(updated));

      return {
        savedJobs: updated,
      };
    }),

  savedCourses: JSON.parse(localStorage.getItem("savedCourses") || "[]"),

  toggleSaveCourse: (course) =>
    set((state) => {
      const exists = state.savedCourses.find((c) => c.id === course.id);

      let updated;

      if (exists) {
        updated = state.savedCourses.filter((c) => c.id !== course.id);
      } else {
        updated = [...state.savedCourses, course];
      }

      localStorage.setItem("savedCourses", JSON.stringify(updated));

      return {
        savedCourses: updated,
      };
    }),

  updateCourseProgress: (course, progress) =>
    set((state) => {
      const existing = state.savedCourses.find((c) => c.id === course.id);

      let updated = [];

      if (existing) {
        updated = state.savedCourses.map((c) =>
          c.id === course.id ? { ...c, progress } : c,
        );
      } else {
        updated = [
          ...state.savedCourses,
          {
            ...course,
            progress,
          },
        ];
      }

      localStorage.setItem("savedCourses", JSON.stringify(updated));

      return {
        savedCourses: updated,
      };
    }),

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
