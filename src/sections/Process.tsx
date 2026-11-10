import { Reveal } from "../components/Reveal";
const steps = [
  ["Listen", "We start with the problem, not the stack. I ask annoying questions so the build doesn't."],
  ["Prototype", "A clickable, honest version in days — so decisions are made on something real."],
  ["Build", "Typed, tested, accessible code. Small, frequent releases you can see and touch."],
  ["Polish", "Performance budgets, motion, edge cases. The last 10% that people actually feel."],
];
export default function Process() {
  return (
    <section id="process" className="px-5 py-28 md:px-10 md:py-40">
      <Reveal><p className="label mb-6">03 — How I build</p></Reveal>
      <Reveal as="h2" className="mb-16 font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-none tracking-tight">Four steps, no fluff</Reveal>
      <div className="grid gap-px overflow-hidden rounded-2xl bg-(--color-ink)/15 md:grid-cols-2">
        {steps.map(([t, d], i) => (
          <Reveal key={t} delay={(i % 2) * 0.1} className="group relative overflow-hidden bg-(--color-canvas) p-8 md:p-12">
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-(--color-accent) transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <div className="relative transition-colors duration-500 group-hover:text-white">
              <span className="font-mono text-sm">0{i + 1}</span>
              <h3 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">{t}</h3>
              <p className="mt-4 max-w-sm text-(--color-mute) transition-colors duration-500 group-hover:text-white/90">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
