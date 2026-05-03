import MainLayout from "@/layouts/MainLayout";
import CourseCard from "@/components/learn/CourseCard";
import { courses } from "@/data/courses";
import useAuthStore from "@/store/useAuthStore";

export default function LearnPage() {
  const { savedCourses } = useAuthStore();

  const mergedCourses = courses.map((course) => {
    const saved = savedCourses.find((c) => c.id === course.id);

    return saved ? { ...course, ...saved } : course;
  });

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl font-bold">Learning Hub</h1>

        <p className="mt-3 text-slate-300">Inclusive learning for everyone</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mergedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
