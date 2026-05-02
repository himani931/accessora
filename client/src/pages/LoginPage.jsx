import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import useAuthStore from "@/store/useAuthStore";
import { Mail, Lock } from "lucide-react";
import GoogleLoginButton from "@/components/common/GoogleLoginButton";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await login(form);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />

        <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
          <h1 className="mb-2 text-center text-4xl font-bold">Welcome Back</h1>

          <p className="mb-8 text-center text-slate-300">
            Sign in to Accessora
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-4">
              <Mail className="text-slate-400" size={18} />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent outline-none"
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-4">
              <Lock className="text-slate-400" size={18} />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none"
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full rounded-2xl bg-indigo-500 py-4 font-semibold transition hover:bg-indigo-600"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <GoogleLoginButton />

            <p className="text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <Link to="/register" className="text-cyan-400">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
