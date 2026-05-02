import useAuthStore from "@/store/useAuthStore";

export default function useAccessibilityTheme() {
  const { accessibility } = useAuthStore();

  const classes = [
    accessibility.fontScale === "large" && "text-lg",
    accessibility.fontScale === "xl" && "text-xl",

    accessibility.contrast === "high" && "contrast-125 brightness-110",

    accessibility.dyslexiaFont && "tracking-wide",

    accessibility.reduceMotion && "motion-reduce",
  ]
    .filter(Boolean)
    .join(" ");

  return classes;
}
