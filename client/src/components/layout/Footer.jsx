import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 px-6 py-16 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-cyan-400">Access</span>
            <span className="text-indigo-400">ora</span>
          </h2>

          <p className="mt-4 max-w-sm text-slate-300 leading-7">
            AI-powered inclusive platform for accessible learning, jobs, and
            mobility.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

          <div className="space-y-3 text-slate-300">
            <Link to="/" className="block hover:text-cyan-400">
              Home
            </Link>

            <Link to="/learn" className="block hover:text-cyan-400">
              Learn
            </Link>

            <Link to="/jobs" className="block hover:text-cyan-400">
              Jobs
            </Link>

            <Link to="/transport" className="block hover:text-cyan-400">
              Transport
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold">Connect</h3>

          <div className="flex gap-4">
            {/* <button className="rounded-2xl bg-white/10 p-3 hover:bg-white/20">
              <GitHub />
            </button> */}

            {/* <button className="rounded-2xl bg-white/10 p-3 hover:bg-white/20">
              <Linkedin />
            </button> */}

            <button className="rounded-2xl bg-white/10 p-3 hover:bg-white/20">
              <Mail />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        © 2026 Accessora — Equal Access for Everyone
      </div>
    </footer>
  );
}
