import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { Reveal } from "../components/Reveal";

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(to);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease: [0.16, 1, 0.3, 1], onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

const stats = [{ n: 2, s: "+", l: "Years coding" }, { n: 10, s: "+", l: "Projects built" }, { n: 5, s: "+", l: "Technologies used" }, { n: 300, s: "+", l: "Commits on GitHub" }];

export default function Profile() {
  return (
    <section id="profile" className="px-5 py-28 md:px-10 md:py-40">
      <Reveal><p className="label mb-6">01 — Profile</p></Reveal>
      <Reveal as="h2" className="max-w-5xl font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
        I love turning ideas into <span className="text-(--color-accent)">clean, working</span> software — learning by building real projects, from database to the last pixel.
      </Reveal>
      <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-(--color-ink)/15 bg-(--color-ink)/15 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08} className="bg-(--color-canvas) p-6 md:p-10">
            <div className="font-display text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold leading-none tracking-tight whitespace-nowrap"><Count to={s.n} suffix={s.s} /></div>
            <div className="label mt-3">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
