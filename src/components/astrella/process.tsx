import { useEffect, useRef, useState } from "react";
import { RevealLines } from "./reveal";
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
  const refs = useRef<(HTMLLIElement | null)[]>([]);

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
        <h2 id="process-heading" className="display max-w-[14ch] text-[clamp(2.5rem,7vw,6rem)]">
          <RevealLines lines={[<>How the work</>, <>gets made.</>]} />
        </h2>

        <div className="relative mt-16 sm:pl-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-line sm:block"
          >
            <div
              className="w-px bg-lavender transition-[height] duration-300 ease-out"
              style={{ height: `${(active / (STAGES.length - 1)) * 100}%` }}
            />
          </div>

          <ol className="divide-y divide-line">
            {STAGES.map((s, i) => (
              <li
                key={s.n}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                className="group py-10 sm:py-12"
              >
                <div className="flex items-baseline gap-4">
                  <Star
                    className={`h-2.5 w-2.5 shrink-0 text-lavender transition-opacity duration-300 ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <h3 className="font-serif text-[clamp(1.9rem,3.6vw,2.75rem)] leading-tight tracking-tight text-ivory">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
