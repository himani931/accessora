import { motion } from "framer-motion";
import { Users, BookOpen, Briefcase, MapPinned } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Accessible Users",
  },
  {
    icon: BookOpen,
    value: "1,200+",
    label: "Learning Resources",
  },
  {
    icon: Briefcase,
    value: "8,500+",
    label: "Inclusive Jobs",
  },
  {
    icon: MapPinned,
    value: "300+",
    label: "Accessible Routes",
  },
];

export default function StatsSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20">
                <Icon className="text-cyan-400" />
              </div>

              <h3 className="text-4xl font-bold">{item.value}</h3>

              <p className="mt-2 text-slate-300">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
