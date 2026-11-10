import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";

export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const fine = typeof matchMedia !== "undefined" && !matchMedia("(pointer: coarse)").matches;
  const move = (e: React.MouseEvent) => {
    if (!fine) return;
    const r = ref.current!.getBoundingClientRect();
    gsap.to(ref.current, { x: (e.clientX - r.left - r.width / 2) * strength, y: (e.clientY - r.top - r.height / 2) * strength, duration: 0.4, ease: "power3.out" });
  };
  const leave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1,0.4)" });
  return <span ref={ref} onMouseMove={move} onMouseLeave={leave} className="inline-block">{children}</span>;
}
