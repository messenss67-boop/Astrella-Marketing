import { useInView } from "./reveal";
import { Star } from "./star";

const WORDS = "Small by design. Thoughtful by default.".split(" ");

export function Manifesto() {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="shell relative py-28 sm:py-40" aria-labelledby="manifesto-heading">
      <div ref={ref} className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 id="manifesto-heading" className="display text-[clamp(2.5rem,7.5vw,6.5rem)]">
            {WORDS.map((w, i) => (
              <span
                key={i}
                className="inline-block transition-all duration-700 ease-out"
                style={{
                  opacity: visible ? 1 : 0.12,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                {w}&nbsp;
              </span>
            ))}
          </h2>
        </div>

        <div className="lg:col-span-4 lg:pt-6">
          <Star className="h-3 w-3 text-lavender" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            We keep the roster intentionally small so the thinking stays sharp and the work stays
            close to the people who care about it most.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            No bloated agency layers. No recycled layouts. Just a clear point of view, deliberate
            decisions and a digital presence built to hold up in the real world.
          </p>
        </div>
      </div>
    </section>
  );
}
