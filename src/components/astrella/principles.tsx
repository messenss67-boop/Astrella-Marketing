import { Reveal, SectionLabel } from "./reveal";
import { Star } from "./star";

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
        <SectionLabel index="01" title="Why Astrella" />

        <h2 id="principles-heading" className="sr-only">
          Why Astrella
        </h2>

        <div className="mt-14 border-t border-line">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 60}>
              <article className="group grid items-baseline gap-4 border-b border-line py-10 sm:grid-cols-12 sm:gap-8 sm:py-14">
                <div className="sm:col-span-3">
                  <span className="label-xs transition-colors duration-500 group-hover:text-gold">
                    {p.n}
                  </span>
                </div>
                <div className="sm:col-span-5">
                  <h3 className="font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] leading-tight tracking-tight text-ivory transition-transform duration-700 ease-out group-hover:translate-x-1">
                    {p.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-px w-10 origin-left scale-x-100 bg-line-strong transition-all duration-700 ease-out group-hover:w-20 group-hover:bg-lavender"
                  />
                </div>
                <div className="flex items-start gap-6 sm:col-span-4">
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  <Star className="mt-1 h-3 w-3 shrink-0 text-lavender opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
