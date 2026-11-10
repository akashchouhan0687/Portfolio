import { Github, Linkedin } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Magnetic } from "../components/Magnetic";
export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-(--color-accent) px-5 py-28 text-white md:px-10 md:py-40">
      <Reveal><p className="font-mono text-xs uppercase tracking-[0.18em] text-white/80">04 — Say hello</p></Reveal>
      <Reveal as="h2" className="mt-6 font-display text-[clamp(3rem,11vw,10rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">Let's make something good.</Reveal>
      <Reveal delay={0.15} className="mt-14 flex flex-wrap items-center gap-8">
        <Magnetic strength={0.4}><a href="mailto:akashchouhan0687@gmail.com" className="inline-block rounded-full bg-(--color-ink) px-10 py-5 font-mono text-sm uppercase tracking-widest transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-white">akashchouhan0687@gmail.com</a></Magnetic>
        <div className="flex gap-3">
          {[[Github, "GitHub", "https://github.com/akashchouhan0687"], [Linkedin, "LinkedIn", "https://www.linkedin.com/in/akash-chouhan-1684673a8/"]].map(([I, n, h]: any) => (
            <Magnetic key={n}><a href={h} target="_blank" rel="noopener noreferrer" aria-label={n} className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-white"><I className="h-5 w-5" /></a></Magnetic>
          ))}
        </div>
      </Reveal>
      <footer className="mt-24 font-mono text-xs uppercase tracking-widest text-white/80">© 2026 Akash Chouhan — Designed & built with care</footer>
    </section>
  );
}
