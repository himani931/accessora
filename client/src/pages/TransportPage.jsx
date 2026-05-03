import MainLayout from "@/layouts/MainLayout";
import {
  Navigation,
  Accessibility,
  AlertTriangle,
  Mic,
  MapPin,
  Route,
} from "lucide-react";

const routes = [
  {
    id: 1,
    from: "Delhi Metro Station",
    to: "University Campus",
    time: "22 mins",
    accessible: true,
    elevator: "Working",
  },
  {
    id: 2,
    from: "City Bus Stop",
    to: "Tech Park",
    time: "35 mins",
    accessible: true,
    elevator: "Maintenance",
  },
  {
    id: 3,
    from: "Railway Junction",
    to: "Hospital",
    time: "18 mins",
    accessible: true,
    elevator: "Working",
  },
];

export default function TransportPage() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">Accessible Transport</h1>

          <p className="mt-4 text-lg text-slate-300">
            Find wheelchair-friendly routes, lifts, and emergency assistance.
          </p>
        </div>

        {/* Search */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              placeholder="Enter pickup location"
              className="flex-1 rounded-2xl bg-white/10 p-4 outline-none"
            />

            <input
              placeholder="Enter destination"
              className="flex-1 rounded-2xl bg-white/10 p-4 outline-none"
            />

            <button className="rounded-2xl bg-indigo-500 px-8 py-4 font-semibold hover:bg-indigo-600">
              Search Route
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6">
          {routes.map((route) => (
            <div
              key={route.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">
                    {route.from} → {route.to}
                  </h2>

                  <p className="mt-2 text-slate-300">
                    Travel Time: {route.time}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                    ♿ Accessible
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 ${
                      route.elevator === "Working"
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    🛗 {route.elevator}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <Navigation className="mx-auto mb-4 text-cyan-400" size={30} />
            <h3 className="font-semibold">Smart Routing</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <Accessibility className="mx-auto mb-4 text-green-400" size={30} />
            <h3 className="font-semibold">Wheelchair Friendly</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <Route className="mx-auto mb-4 text-indigo-400" size={30} />
            <h3 className="font-semibold">Lift Status</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <Mic className="mx-auto mb-4 text-pink-400" size={30} />
            <h3 className="font-semibold">Voice Guided</h3>
          </div>
        </div>

        {/* SOS */}
        <div className="mt-16 text-center">
          <button className="rounded-3xl bg-red-500 px-10 py-5 text-lg font-bold hover:bg-red-600">
            <AlertTriangle className="mr-2 inline" />
            Emergency SOS
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
