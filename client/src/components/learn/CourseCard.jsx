import { Bookmark } from "lucide-react";
import useAuthStore from "@/store/useAuthStore";

export default function CourseCard({ course }) {
  const { savedCourses, toggleSaveCourse, updateCourseProgress } =
    useAuthStore();

  const saved = savedCourses.some((c) => c.id === course.id);

  const handleContinue = () => {
    const next = Math.min((course.progress || 0) + 10, 100);

    updateCourseProgress(course, next);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:scale-[1.02]">
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold">{course.title}</h3>

        <Bookmark
          onClick={() => toggleSaveCourse(course)}
          fill={saved ? "currentColor" : "none"}
          className={`cursor-pointer ${saved ? "text-yellow-400" : ""}`}
        />
      </div>

      <p className="mt-2 text-slate-300">{course.provider}</p>

      <div className="mt-4 flex gap-3 text-sm text-slate-400">
        <span>{course.level}</span>
        <span>•</span>
        <span>{course.duration}</span>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex justify-between">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-indigo-500"
            style={{
              width: `${course.progress}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {course.accessible.map((item) => (
          <span
            key={item}
            className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-300"
          >
            {item}
          </span>
        ))}
      </div>

      <button
        onClick={handleContinue}
        className="mt-6 w-full rounded-2xl bg-indigo-500 py-3 font-medium"
      >
        Continue Learning
      </button>
    </div>
  );
}
