const row1 = ["TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL", "Tailwind"];
const row2 = ["Docker", "GraphQL", "Redis", "Figma", "GSAP", "Rust", "AWS", "Playwright"];
function Row({ items, rev, outline }: { items: string[]; rev?: boolean; outline?: boolean }) {
  const list = [...items, ...items];
  return (
    <div className="marquee-wrap overflow-hidden py-2">
      <div className={`marquee ${rev ? "rev" : ""} flex w-max gap-10`}>
        {list.map((w, i) => (
          <span key={i} className={`flex items-center gap-10 font-display text-6xl font-extrabold tracking-tight md:text-8xl ${outline ? "outline-text" : ""}`}>
            {w}<span className="text-(--color-accent)">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
export default function Toolbox() {
  return (
    <section aria-label="Toolbox" className="overflow-hidden py-24">
      <Row items={row1} /><Row items={row2} rev outline />
    </section>
  );
}
