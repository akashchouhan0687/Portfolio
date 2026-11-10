import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Reveal({ children, delay = 0, y = 48, as: Tag = "div", className = "" }: {
  children: ReactNode; delay?: number; y?: number; as?: ElementType; className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current!;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = gsap.fromTo(el, { y, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, delay, ease: "power3.out", immediateRender: false,
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
    });
    return () => { t.scrollTrigger?.kill(); t.kill(); gsap.set(el, { clearProps: "opacity,transform" }); };
  }, [delay, y]);
  return <Tag ref={ref} className={className}>{children}</Tag>;
}
