import useAuthStore from "@/store/useAuthStore";

export default function useAccessibilityTheme() {
  const { accessibility } = useAuthStore();

  const styles = {
    fontSize:
      accessibility.fontScale === "large"
        ? "20px"
        : accessibility.fontScale === "xl"
          ? "24px"
          : "16px",
    filter: accessibility.contrast === "high" ? "contrast(150%)" : "none",
  };

  return styles;
}
