import { Reveal, SectionLabel } from "./reveal";
import { Star } from "./star";

const VALUES = [
  {
    title: "Direct access",
    copy: "You work with the people shaping the brief, the direction and the final build — no account layers, no unclear handoff.",
  },
  {
    title: "Clear thinking",
    copy: "Every decision is tied back to what the brand needs to say, who it needs to reach and what should stay out of the way.",
  },
  {
    title: "Refined execution",
    copy: "The final polish is not decoration. It is clarity, rhythm and the kind of detail that makes the work feel intentional.",
  },
];

const CLIENTS = ["Strategy", "Design", "Build", "Launch", "Refine", "Grow"];

export function Voices() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="voices-heading">
      <div className="shell">
        <SectionLabel index="06" title="How we work" />
        <h2 id="voices-heading" className="sr-only">
          How Astrella works
        </h2>

        <Reveal className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <Star className="h-3 w-3 text-lavender" />
            <div className="mt-7 space-y-6">
              {VALUES.map((value) => (
                <article key={value.title} className="border-b border-line pb-6">
                  <h3 className="font-serif text-[clamp(1.8rem,4vw,3rem)] tracking-tight text-ivory">
                    {value.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {value.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-end lg:col-span-3 lg:justify-end">
            <p className="max-w-[14rem] text-sm uppercase tracking-[0.24em] text-faint">
              Senior attention. Limited scope. Better outcomes.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        className="marquee-host mt-24 overflow-hidden border-y border-line py-6"
        aria-label="Studio capabilities"
      >
        <div
          className="marquee-track"
          style={{ "--marquee-duration": "60s" } as React.CSSProperties}
        >
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0">
              {CLIENTS.map((c, n) => (
                <span
                  key={`${dup}-${n}`}
                  className="px-10 text-[0.72rem] uppercase tracking-[0.28em] text-faint"
                >
                  {c}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
