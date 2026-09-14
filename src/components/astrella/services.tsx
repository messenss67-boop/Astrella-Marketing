import { useState } from "react";
import { Reveal, RevealLines, SectionLabel } from "./reveal";
import { Star } from "./star";

const SERVICES = [
  {
    n: "01",
    title: "Websites",
    copy: "Strategy, messaging, design and development for brands that need a sharper digital presence and a stronger reason to stay in the room.",
    caps: ["UX strategy", "Art direction", "Design systems", "Development", "SEO", "Accessibility"],
  },
  {
    n: "02",
    title: "Brand identity",
    copy: "Positioning and visual identity work that makes a brand easier to understand, easier to trust and harder to confuse with the rest of the market.",
    caps: ["Positioning", "Naming", "Visual identity", "Guidelines", "Campaign direction"],
  },
  {
    n: "03",
    title: "Digital experiences",
    copy: "Landing pages, campaign builds and editorial experiences created to move fast without losing the point of view that makes the brand memorable.",
    caps: ["Landing pages", "Campaign design", "Interactive design", "Storytelling", "Motion"],
  },
  {
    n: "04",
    title: "Growth",
    copy: "A clear system for ongoing improvement: sharper content, smarter conversion paths and a website that keeps earning attention over time.",
    caps: [
      "SEO",
      "Conversion review",
      "Content structure",
      "Performance tuning",
      "Ongoing refinement",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="services-heading"
    >
      <SectionLabel index="03" title="Services" />

      <h2 id="services-heading" className="display mt-10 text-[clamp(2.5rem,7vw,6rem)]">
        <RevealLines lines={[<>A focused offer.</>, <>Built for real work.</>]} />
      </h2>

      <div className="mt-16 border-t border-line">
        {SERVICES.map((s, i) => {
          const open = active === i;
          return (
            <Reveal key={s.n} delay={i * 80}>
              <div
                className="group border-b border-line"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setActive(open ? null : i)}
                  data-cursor="cta"
                  className="flex w-full items-start justify-between gap-6 py-10 text-left sm:py-14"
                >
                  <span className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-baseline sm:gap-10">
                    <span className="label-xs pt-2 transition-colors duration-500 group-hover:text-lavender">
                      {s.n}
                    </span>
                    <span
                      className={`font-serif text-[clamp(2rem,5.2vw,4.25rem)] leading-[1.02] tracking-tight transition-colors duration-500 ${
                        open ? "text-ivory" : "text-ivory-dim group-hover:text-ivory"
                      }`}
                    >
                      {s.title}
                    </span>
                  </span>
                  <span
                    className={`mt-3 shrink-0 text-lavender transition-transform duration-700 ease-out ${open ? "rotate-90" : ""}`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows,opacity] duration-700 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-12 sm:grid-cols-12">
                      <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:col-span-6 sm:col-start-2">
                        {s.copy}
                      </p>
                      <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:col-span-4">
                        {s.caps.map((c) => (
                          <li
                            key={c}
                            className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-ivory-dim"
                          >
                            <Star className="h-2 w-2 text-lavender/80" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
