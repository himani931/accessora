import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccessibilitySelector from "@/components/accessibility/AccessibilitySelector";
import MainLayout from "@/layouts/MainLayout";
import useAuthStore from "@/store/useAuthStore";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, accessibility } = useAuthStore();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      await register({
        ...form,
        accessibility,
      });

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h1 className="mb-8 text-4xl font-bold">Create Account</h1>

          <input
            placeholder="Full name"
            className="mb-4 w-full rounded-xl bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            className="mb-4 w-full rounded-xl bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="mb-8 w-full rounded-xl bg-white/5 p-4"
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <AccessibilitySelector />

          <button
            onClick={handleSubmit}
            className="mt-8 w-full rounded-2xl bg-indigo-500 py-4 font-semibold"
          >
            Create Account
          </button>
          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
