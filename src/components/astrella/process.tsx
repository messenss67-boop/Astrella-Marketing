import { useEffect, useRef, useState } from "react";
import { RevealLines, SectionLabel } from "./reveal";
import { Star } from "./star";

const STAGES = [
  {
    n: "01",
    title: "Discovery",
    body: "We look at the business, the audience, the market and the real reason the website exists before a single design decision gets made.",
  },
  {
    n: "02",
    title: "Direction",
    body: "We define the message, the structure and the tone so the work has a clear point of view and a sharper reason to exist.",
  },
  {
    n: "03",
    title: "Design",
    body: "We shape the art direction, layout and motion system in a way that feels premium without becoming decorative for its own sake.",
  },
  {
    n: "04",
    title: "Build",
    body: "The site is developed with speed, accessibility and clarity in mind, so the final experience feels polished and useful on day one.",
  },
  {
    n: "05",
    title: "Launch",
    body: "We test, refine and hand over a considered digital presence that is ready to perform and easy to keep improving.",
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset["index"]);
            setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="relative overflow-hidden scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="process-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
          style={{ backgroundImage: "url(/images/nebula-constellation.jpg)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, var(--ink) 88%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--ink) 0%, transparent 18%, transparent 82%, var(--ink) 100%)",
          }}
        />
      </div>

      <div className="shell relative">
        <SectionLabel index="04" title="How we work" />

        <h2
          id="process-heading"
          className="display mt-10 max-w-[14ch] text-[clamp(2.5rem,7vw,6rem)]"
        >
          <RevealLines lines={[<>How the work</>, <>gets made.</>]} />
        </h2>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-line sm:block"
          >
            <div
              className="w-px bg-lavender transition-[height] duration-700 ease-out"
              style={{ height: `${(active / (STAGES.length - 1)) * 100}%` }}
            />
          </div>

          <ol className="relative border-t border-line">
            {STAGES.map((s, i) => (
              <li key={s.n}>
                <div
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  data-index={i}
                  className="group grid gap-4 border-b border-line py-10 sm:grid-cols-12 sm:gap-8 sm:py-14"
                >
                  <div className="flex items-center gap-4 sm:col-span-3">
                    <Star
                      className={`h-2.5 w-2.5 shrink-0 text-lavender transition-opacity duration-500 ${
                        active === i ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`label-xs transition-colors duration-500 group-hover:text-gold ${
                        active === i ? "text-gold" : ""
                      }`}
                    >
                      {s.n}
                    </span>
                  </div>
                  <h3 className="font-serif text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-tight text-ivory sm:col-span-4">
                    {s.title}
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:col-span-5">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
