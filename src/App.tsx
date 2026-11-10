import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cursor, Nav, Progress } from "./components/Chrome";
import Hero from "./sections/Hero";
import NameBand from "./sections/NameBand";
import Profile from "./sections/Profile";
import Work from "./sections/Work";
import Toolbox from "./sections/Toolbox";
import Process from "./sections/Process";
import Contact from "./sections/Contact";

export default function App() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return (
    <>
      <Cursor /><Progress /><Nav />
      <main><Hero /><NameBand /><Profile /><Work /><Toolbox /><Process /><Contact /></main>
    </>
  );
}
