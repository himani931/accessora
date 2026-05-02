import AccessibilitySelector from "@/components/accessibility/AccessibilitySelector";
import MainLayout from "@/layouts/MainLayout";

export default function RegisterPage() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h1 className="mb-8 text-4xl font-bold">Create Account</h1>

          <input
            placeholder="Full name"
            className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 p-4"
          />

          <input
            placeholder="Email"
            className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 p-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="mb-8 w-full rounded-xl border border-white/10 bg-white/5 p-4"
          />

          <AccessibilitySelector />

          <button className="mt-8 w-full rounded-2xl bg-indigo-500 py-4 font-semibold">
            Create Account
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
