import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, useScroll, useSpring } from "motion/react";
import { Magnetic } from "./Magnetic";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [big, setBig] = useState(false);
  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.classList.add("cursor-on");
    const x = gsap.quickTo(dot.current, "x", { duration: 0.25, ease: "power3" });
    const y = gsap.quickTo(dot.current, "y", { duration: 0.25, ease: "power3" });
    const mv = (e: MouseEvent) => { x(e.clientX); y(e.clientY); setBig(!!(e.target as HTMLElement).closest("a,button,[data-hover]")); };
    window.addEventListener("mousemove", mv);
    return () => { window.removeEventListener("mousemove", mv); document.documentElement.classList.remove("cursor-on"); };
  }, []);
  return (
    <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[100] hidden [@media(pointer:fine)]:block">
      <motion.div animate={{ scale: big ? 3.2 : 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="-ml-2 -mt-2 h-4 w-4 rounded-full bg-white mix-blend-difference" />
    </div>
  );
}

export function Progress() {
  const { scrollYProgress } = useScroll();
  const s = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div style={{ scaleX: s }} className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-(--color-accent)" />;
}

export function Nav() {
  const links = ["Work", "Profile", "Process", "Contact"];
  return (
    <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 md:px-10 backdrop-blur-md bg-(--color-canvas)/70">
      <a href="#top" className="font-display text-lg font-extrabold tracking-tight">akash<span className="text-(--color-accent)">.</span>dev</a>
      <nav className="hidden gap-8 md:flex">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="group relative font-mono text-xs uppercase tracking-widest py-2">
            {l}<span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-(--color-accent) transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        ))}
      </nav>
      <Magnetic><a href="#contact" className="rounded-full bg-(--color-ink) px-5 py-3 font-mono text-xs uppercase tracking-widest text-(--color-canvas) transition-colors hover:bg-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent)">Hire me</a></Magnetic>
    </motion.header>
  );
}
