import { MapPin, Bookmark } from "lucide-react";
import useAuthStore from "@/store/useAuthStore";

export default function JobCard({ job }) {
  const { savedJobs, toggleSaveJob } = useAuthStore();

  const saved = savedJobs.some((j) => j.id === job.id);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:scale-[1.02]">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{job.title}</h3>

          <p className="mt-1 text-slate-300">{job.company}</p>
        </div>

        <Bookmark
          onClick={() => toggleSaveJob(job)}
          fill={saved ? "currentColor" : "none"}
          className={`cursor-pointer ${saved ? "text-yellow-400" : ""}`}
        />
      </div>

      <div className="mt-5 flex items-center gap-2 text-slate-300">
        <MapPin size={18} />
        {job.location}
      </div>

      <p className="mt-3 font-medium">{job.salary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.accessible.map((item) => (
          <span
            key={item}
            className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-semibold text-green-400">{job.match}% Match</span>

        <button className="rounded-2xl bg-indigo-500 px-5 py-2">Apply</button>
      </div>
    </div>
  );
}
