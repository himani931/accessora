import MainLayout from "@/layouts/MainLayout";
import useAuthStore from "@/store/useAuthStore";
import AccessibilityPanel from "@/components/accessibility/AccessibilityPanel";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import { BookOpen, Briefcase, Star, Activity } from "lucide-react";

export default function DashboardPage() {
  const { user, savedJobs, savedCourses } = useAuthStore();

  const jobs = savedJobs || [];
  const courses = savedCourses || [];

  const completedCourses = courses.filter((c) => c.progress === 100).length;

  const avgProgress =
    courses.length > 0
      ? (
          courses.reduce((acc, c) => acc + (c.progress || 0), 0) /
          courses.length
        ).toFixed(0)
      : 0;

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold">Welcome, {user?.name || "User"}</h1>

        <p className="mt-3 text-slate-300">
          Your personalized accessibility dashboard
        </p>

        {/* KPI */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Briefcase className="mb-3 text-cyan-400" />
            <h3 className="text-3xl font-bold">{jobs.length}</h3>
            <p className="text-slate-400">Saved Jobs</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <BookOpen className="mb-3 text-indigo-400" />
            <h3 className="text-3xl font-bold">{courses.length}</h3>
            <p className="text-slate-400">Enrolled Courses</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Star className="mb-3 text-yellow-400" />
            <h3 className="text-3xl font-bold">{completedCourses}</h3>
            <p className="text-slate-400">Completed Courses</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Activity className="mb-3 text-green-400" />
            <h3 className="text-3xl font-bold">{avgProgress}%</h3>
            <p className="text-slate-400">Avg Progress</p>
          </div>
        </div>

        <div className="mt-16">
          <AnalyticsChart />
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-3xl font-bold">Accessibility Settings</h2>
          <AccessibilityPanel />
        </div>
      </div>
    </MainLayout>
  );
}
