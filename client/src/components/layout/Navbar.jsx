import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          <span className="text-cyan-400">Access</span>
          <span className="text-indigo-400">ora</span>
        </h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/transport">Transport</Link>
        </div>

        <Link
          to="/login"
          className="rounded-xl bg-indigo-500 px-5 py-2 hover:bg-indigo-600"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
