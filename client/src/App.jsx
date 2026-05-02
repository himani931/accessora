import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import useAccessibilityTheme from "@/hooks/useAccessibilityTheme";
import VoiceNavigator from "@/components/accessibility/VoiceNavigator";

export default function App() {
  const theme = useAccessibilityTheme();

  return (
    <BrowserRouter>
      <div className={theme}>
        <AppRoutes />
        <VoiceNavigator />
      </div>
    </BrowserRouter>
  );
}
