import { Link, useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import useAuthStore from "@/store/useAuthStore";

export default function Navbar() {
  const navigate = useNavigate();

  const { user, token, logout } = useAuthStore();

  const isLoggedIn = !!(user || token);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-cyan-400">Access</span>
          <span className="text-indigo-400">ora</span>
        </Link>

        <div className="hidden gap-6 md:flex items-center">
          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link to="/learn" className="hover:text-cyan-400 transition">
            Learn
          </Link>

          <Link to="/jobs" className="hover:text-cyan-400 transition">
            Jobs
          </Link>

          <Link to="/transport" className="hover:text-cyan-400 transition">
            Transport
          </Link>

          {isLoggedIn && (
            <Link to="/profile" className="hover:text-cyan-400 transition">
              Profile
            </Link>
          )}
        </div>

        {!isLoggedIn ? (
          <div className="flex gap-3">
            <Link
              to="/login"
              className="rounded-xl bg-white/10 px-5 py-2 hover:bg-white/20 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-indigo-500 px-5 py-2 hover:bg-indigo-600 transition"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/profile"
              className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20 transition"
            >
              <User size={18} />
              <span className="max-w-[180px] truncate">
                {user?.name || "User"}
              </span>
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-xl bg-red-500/80 p-2 hover:bg-red-500 transition"
            >
              <LogOut size={18} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
