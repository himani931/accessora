import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";

export default function HeroSection() {
  const { user, token } = useAuthStore();
  const isLoggedIn = !!(user || token);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-[10%] top-[25%] h-52 w-52 rounded-full border border-white/20 bg-white/10 backdrop-blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl">
            <Sparkles size={16} className="text-cyan-400" />
            <span>AI Powered Inclusive Platform</span>
          </div>

          <h1 className="mx-auto max-w-5xl text-6xl font-bold leading-tight md:text-8xl">
            One Platform.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Equal Access.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 md:text-xl">
            Education, jobs, mobility and AI accessibility — unified for
            differently-abled individuals.
          </p>

          {isLoggedIn && (
            <p className="mt-5 text-cyan-400 text-lg font-medium">
              Welcome back, {user?.name}
            </p>
          )}

          <div className="mt-10 flex justify-center gap-5">
            <Link
              to={isLoggedIn ? "/dashboard" : "/register"}
              className="rounded-2xl bg-indigo-500 px-7 py-4 font-semibold transition hover:scale-105 hover:bg-indigo-600"
            >
              {isLoggedIn ? "Go to Dashboard" : "Get Started"}
            </Link>

            <Link
              to="/learn"
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-7 py-4 backdrop-blur-xl transition hover:scale-105"
            >
              Explore Platform <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
