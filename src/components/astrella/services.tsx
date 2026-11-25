import { useState } from "react";
import { Reveal, RevealLines } from "./reveal";
import { Star } from "./star";

const SERVICES = [
  {
    n: "01",
    title: "Website design & development",
    flow: "Strategy → Design → Development → Growth",
    quote:
      "A website shouldn’t just look good. It should give people a reason to trust you and a reason to act.",
    copy: "Custom websites that make your services easy to understand and help visitors take action. Designed for mobile, built with performance and search visibility in mind.",
    caps: [
      "UX & strategy",
      "Copy direction",
      "UI design",
      "Development",
      "CMS",
      "SEO",
      "Analytics",
      "Launch optimisation",
    ],
  },
  {
    n: "02",
    title: "Social media marketing",
    flow: "Plan → Create → Publish → Review",
    quote:
      "Give people a reason to follow your business, and a clear path from interest to enquiry.",
    copy: "Content planning, creative direction and social media management that keep your business visible and consistent across the platforms your customers use.",
    caps: [
      "Content planning",
      "Social media management",
      "Creative direction",
      "Campaigns",
      "Reporting",
    ],
  },
  {
    n: "03",
    title: "Brand identity & creative direction",
    flow: "Concept → Direction → Build → Launch",
    quote: "Make your business recognisable wherever your customers meet it.",
    copy: "A consistent visual identity across your website, social content and everyday business materials.",
    caps: ["Visual identity", "Typography", "Brand guidelines", "Creative direction"],
  },
  {
    n: "04",
    title: "Growth",
    flow: "Review → Refine → Measure → Repeat",
    quote:
      "A launch is a starting line, not a finish line. The sites that keep earning attention are the ones someone keeps tending.",
    copy: "A clear system for ongoing improvement: sharper content, smarter conversion paths and a website that keeps earning attention over time.",
    caps: [
      "SEO",
      "Conversion review",
      "Content structure",
      "Performance tuning",
      "Analytics",
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
      <h2 id="services-heading" className="display text-[clamp(2.5rem,7vw,6rem)]">
        <RevealLines lines={[<>Look the part.</>, <>Reach the right people.</>]} />
      </h2>

      <div className="mt-16 border-t border-line">
        {SERVICES.map((s, i) => {
          const open = active === i;
          return (
            <Reveal key={s.n} delay={i * 80}>
              <div className="group border-b border-line">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`service-${i}`}
                  onClick={() => setActive(open ? null : i)}
                  data-cursor="cta"
                  className="flex w-full items-start justify-between gap-6 py-10 text-left transition-opacity duration-150 active:opacity-80 sm:py-14"
                >
                  <span className="flex min-w-0 flex-1 flex-col gap-5 sm:flex-row sm:items-baseline sm:gap-10">
                    <span className="label-xs pt-2 transition-colors duration-300 group-hover:text-lavender">
                      {s.n}
                    </span>
                    <span className="flex flex-col gap-2">
                      <span
                        className={`font-serif text-[clamp(2rem,5.2vw,4.25rem)] leading-[1.02] tracking-tight transition-colors duration-300 ${
                          open ? "text-ivory" : "text-ivory-dim group-hover:text-ivory"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-faint">
                        {s.flow}
                      </span>
                    </span>
                  </span>
                  <span
                    className={`mt-3 shrink-0 text-lavender transition-transform duration-300 ease-out ${open ? "rotate-90" : ""}`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>

                <div
                  id={`service-${i}`}
                  aria-hidden={!open}
                  className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-12 sm:grid-cols-12">
                      <div className="sm:col-span-6 sm:col-start-2">
                        <p className="max-w-md font-serif text-xl leading-snug tracking-tight text-ivory-dim">
                          &ldquo;{s.quote}&rdquo;
                        </p>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                          {s.copy}
                        </p>
                      </div>
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
