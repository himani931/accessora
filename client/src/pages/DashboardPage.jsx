import MainLayout from "@/layouts/MainLayout";
import useAuthStore from "@/store/useAuthStore";
import AccessibilityPanel from "@/components/accessibility/AccessibilityPanel";

export default function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">Welcome, {user?.name}</h1>

        <p className="mt-3 text-slate-300">
          Personalized accessibility dashboard
        </p>

        <AccessibilityPanel />
      </div>
    </MainLayout>
  );
}
