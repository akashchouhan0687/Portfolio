import TechText from "../components/TechText.jsx";

export default function NameBand() {
  return (
    <section aria-label="Name" className="relative -mt-10 px-2 pb-6 md:-mt-16 md:px-6">
      <h2 className="sr-only">Akash Chouhan</h2>
      <div className="font-display text-(--color-ink)" style={{ width: "100%", height: "clamp(200px, 30vw, 420px)", position: "relative" }}>
        <TechText
          text="Akash Chouhan"
          fontWeight={800}
          fontSize={220}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          intro="assemble"
          introDuration={2.2}
          clickKick
          guides={false}
          accentColor="oklch(0.62 0.21 38)"
        />
      </div>
    </section>
  );
}
