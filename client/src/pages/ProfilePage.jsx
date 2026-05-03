import MainLayout from "@/layouts/MainLayout";
import useAuthStore from "@/store/useAuthStore";
import JobCard from "@/components/jobs/JobCard";

export default function ProfilePage() {
  const { user, savedJobs, accessibility } = useAuthStore();

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h1 className="text-4xl font-bold">{user?.name}</h1>

          <p className="mt-2 text-slate-300">{user?.email}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {accessibility?.disabilityType?.map((item) => (
              <span
                key={item}
                className="rounded-full bg-indigo-500/20 px-4 py-2 text-indigo-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-bold">Saved Jobs</h2>

          {savedJobs.length === 0 ? (
            <p className="mt-4 text-slate-400">No saved jobs yet</p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {savedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
