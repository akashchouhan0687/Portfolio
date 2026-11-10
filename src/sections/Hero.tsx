import { motion } from "motion/react";
import { Magnetic } from "../components/Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;
function Line({ text, delay, className = "" }: { text: string; delay: number; className?: string }) {
  return (
    <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
      {text.split("").map((c, i) => (
        <motion.span key={i} className="inline-block" initial={{ y: "110%", rotate: 6 }} animate={{ y: 0, rotate: 0 }}
          transition={{ duration: 1, ease, delay: delay + i * 0.04 }}>{c === " " ? "\u00A0" : c}</motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden px-5 pb-12 pt-32 md:px-10">
      <motion.div className="absolute right-[-6rem] top-24 h-72 w-72 rounded-full bg-(--color-accent)/25 blur-3xl md:h-[28rem] md:w-[28rem]"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-8 flex items-center gap-3">
        <span className="blink h-2.5 w-2.5 rounded-full bg-(--color-accent)" />
        <span className="label">Available for new projects — 2026</span>
      </motion.div>
      <h1 className="font-display text-[clamp(3.2rem,12.5vw,13rem)] font-extrabold leading-[0.88] tracking-[-0.04em]">
        <Line text="I build" delay={0.3} />
        <Line text="web things" delay={0.6} className="text-(--color-accent)" />
        <Line text="that move." delay={1.0} />
      </h1>
      <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.9, ease }}
          className="max-w-md text-lg text-(--color-mute)">
          Hi, I'm <b className="text-(--color-ink)">Akash Chouhan</b> — a full-stack developer crafting fast, accessible and a little bit delightful products.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="flex items-center gap-6">
          <Magnetic><a href="#work" className="rounded-full bg-(--color-accent) px-8 py-4 font-mono text-xs uppercase tracking-widest text-white transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-(--color-ink)">See my work ↓</a></Magnetic>
          <div className="relative hidden h-24 w-24 md:block">
            <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0"><defs><path id="c" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" /></defs>
              <text className="fill-(--color-ink) font-mono text-[10px] uppercase tracking-[0.25em]"><textPath href="#c">scroll • scroll • scroll • scroll •</textPath></text></svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
