import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

const projects = [
  { t: "Pulse Analytics", k: "SaaS dashboard", y: "2026", tags: "React · FastAPI · Postgres", hue: 38 },
  { t: "Nomad Atlas", k: "Travel planner", y: "2025", tags: "Next.js · Maps · Stripe", hue: 200 },
  { t: "Inkwell", k: "Writing app", y: "2025", tags: "TypeScript · CRDT · Electron", hue: 290 },
  { t: "Fieldnotes CLI", k: "Developer tool", y: "2024", tags: "Rust · Terminal UI", hue: 150 },
];

export default function Work() {
  const [a, setA] = useState(0);
  return (
    <section id="work" className="bg-(--color-ink) px-5 py-28 text-(--color-canvas) md:px-10 md:py-40">
      <Reveal><p className="label mb-6 !text-(--color-canvas)/60">02 — Selected work</p></Reveal>
      <Reveal as="h2" className="mb-16 font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-none tracking-tight">Things I've shipped</Reveal>
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <ul>
          {projects.map((p, i) => (
            <Reveal as="li" key={p.t} delay={i * 0.07}>
              <a href="#contact" data-hover onMouseEnter={() => setA(i)} onFocus={() => setA(i)}
                className="group flex items-center justify-between gap-4 border-t border-white/20 py-7 transition-all duration-500 hover:pl-4 focus-visible:ring-2 focus-visible:ring-(--color-accent)">
                <div>
                  <span className="font-mono text-xs text-white/50">0{i + 1} / {p.y}</span>
                  <h3 className={`font-display text-3xl font-bold tracking-tight transition-colors md:text-5xl ${a === i ? "text-(--color-accent)" : ""}`}>{p.t}</h3>
                  <span className="mt-1 block text-sm text-white/60">{p.k} — {p.tags}</span>
                </div>
                <ArrowUpRight className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:rotate-45 group-hover:text-(--color-accent)" />
              </a>
            </Reveal>
          ))}
          <li className="border-t border-white/20" />
        </ul>
        <div className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl lg:block lg:sticky lg:top-28 lg:self-start">
          <AnimatePresence mode="wait">
            <motion.div key={a} initial={{ opacity: 0, scale: 1.08, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0 p-8"
              style={{ background: `linear-gradient(135deg, oklch(0.7 0.19 ${projects[a].hue}), oklch(0.35 0.12 ${projects[a].hue + 40}))` }}>
              <div className="flex h-full flex-col justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-white/80">{projects[a].k}</span>
                <div>
                  <div className="mb-4 space-y-2">{[80, 55, 70].map((w, j) => <motion.div key={j} className="h-3 rounded-full bg-white/40" initial={{ width: 0 }} animate={{ width: `${w}%` }} transition={{ delay: 0.3 + j * 0.1, duration: 0.8 }} />)}</div>
                  <div className="font-display text-6xl font-extrabold leading-none text-white">{projects[a].t}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
