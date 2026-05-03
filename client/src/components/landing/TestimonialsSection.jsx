import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Visually Impaired Learner",
    text: "Accessora helped me learn web development independently with voice navigation and accessible content.",
  },
  {
    name: "Rahul Verma",
    role: "Remote Developer",
    text: "The inclusive jobs portal matched me with disability-friendly companies that truly support accessibility.",
  },
  {
    name: "Ananya Singh",
    role: "Wheelchair User",
    text: "Accessible transport routes and smart navigation made commuting much easier for me.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-bold">
          Stories of Impact
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <Quote className="mb-5 text-cyan-400" />

              <p className="text-slate-300 leading-8">{item.text}</p>

              <div className="mt-6">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
