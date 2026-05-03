import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLocation } from "react-router-dom";

export default function MainLayout({ children }) {
  const location = useLocation();

  const showFooter = location.pathname === "/";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      {children}
      {showFooter && <Footer />}
    </div>
  );
}
