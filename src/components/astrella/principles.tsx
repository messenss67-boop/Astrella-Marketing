import { Reveal, RevealLines } from "./reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Small by design",
    body: "A studio of a few, not a floor of many. Fewer clients, longer attention spans, better work.",
  },
  {
    n: "02",
    title: "Strategy before decoration",
    body: "Beauty without a point is wallpaper. Every decision starts with what the brand needs to prove.",
  },
  {
    n: "03",
    title: "Obsessed with detail",
    body: "Kerning, easing curves, the weight of a hover. The things nobody names but everybody feels.",
  },
  {
    n: "04",
    title: "Built to perform",
    body: "Fast, accessible, measurable. A site that looks expensive and behaves even better.",
  },
];

export function Principles() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      aria-labelledby="principles-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url(/images/nebula-star.jpg)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 60% at 50% 45%, var(--ink) 0%, color-mix(in oklab, var(--ink) 88%, transparent) 45%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--ink) 0%, transparent 20%, transparent 80%, var(--ink) 100%)",
          }}
        />
      </div>

      <div className="shell relative">
        <h2 id="principles-heading" className="display max-w-[16ch] text-[clamp(2.25rem,6vw,5rem)]">
          <RevealLines lines={[<>What we won&rsquo;t</>, <>compromise on.</>]} />
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 sm:gap-x-16 lg:gap-x-24">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 80} className={i % 2 === 1 ? "sm:mt-16" : ""}>
              <article className="group max-w-md">
                <span className="font-serif text-[clamp(3rem,7vw,4.5rem)] leading-none text-lavender/25 transition-colors duration-300 group-hover:text-lavender/50">
                  {p.n}
                </span>
                <h3 className="mt-4 font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-tight tracking-tight text-ivory">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
