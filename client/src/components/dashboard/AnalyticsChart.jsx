import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const progressData = [
  { name: "Mon", progress: 20 },
  { name: "Tue", progress: 35 },
  { name: "Wed", progress: 50 },
  { name: "Thu", progress: 65 },
  { name: "Fri", progress: 72 },
  { name: "Sat", progress: 84 },
  { name: "Sun", progress: 95 },
];

const accessData = [
  { name: "Voice", value: 35 },
  { name: "Screen Reader", value: 25 },
  { name: "High Contrast", value: 20 },
  { name: "Caption", value: 20 },
];

const COLORS = ["#22d3ee", "#6366f1", "#10b981", "#f59e0b"];

export default function AnalyticsChart() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Progress Chart */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Learning Progress
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={progressData}>
              <defs>
                <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

              <XAxis dataKey="name" stroke="#cbd5e1" />

              <YAxis stroke="#cbd5e1" />

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  color: "white",
                }}
              />

              <Area
                type="monotone"
                dataKey="progress"
                stroke="#22d3ee"
                strokeWidth={3}
                fill="url(#colorProgress)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Accessibility Usage
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={accessData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {accessData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Legend />

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  color: "white",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
