import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import MainLayout from "@/layouts/MainLayout";
import JobCard from "@/components/jobs/JobCard";
import { jobs } from "@/data/jobs";

const filters = [
  "All",
  "Remote",
  "Flexible",
  "Screen Reader Friendly",
  "Caption Support",
];

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchMatch =
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase());

      const filterMatch =
        activeFilter === "All" ||
        job.accessible.includes(activeFilter) ||
        job.location.includes(activeFilter);

      return searchMatch && filterMatch;
    });
  }, [query, activeFilter]);

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold">Inclusive Jobs</h1>

        <p className="mt-3 text-slate-300">
          Opportunities designed for everyone
        </p>

        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <Search size={20} />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jobs..."
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 ${
                activeFilter === filter ? "bg-indigo-500" : "bg-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
