import { motion } from "framer-motion";
import { Brain, BookOpen, Briefcase, MapPinned } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Accessibility",
    desc: "Adaptive UI, voice support, contrast mode, smart recommendations.",
  },
  {
    icon: BookOpen,
    title: "Smart Learning",
    desc: "Accessible education with captions, TTS, ISL and AI roadmap.",
  },
  {
    icon: Briefcase,
    title: "Inclusive Jobs",
    desc: "Verified disability-friendly employers and AI job matching.",
  },
  {
    icon: MapPinned,
    title: "Accessible Mobility",
    desc: "Wheelchair-friendly routes, lift tracking and emergency SOS.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-bold">
          Designed for Inclusion
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20">
                  <Icon className="text-cyan-400" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
