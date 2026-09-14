import { Reveal, RevealLines, SectionLabel } from "./reveal";
import { Star } from "./star";

const FACTS = [
  ["Studio", "Independent & boutique"],
  ["Approach", "Strategy first, design second"],
  ["Typical fit", "Brands with a clear point of view"],
  ["Working style", "Senior attention, direct communication"],
];

export function About() {
  return (
    <section
      id="about"
      className="shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <SectionLabel index="05" title="About" />

      <div className="mt-12 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="about-heading" className="display text-[clamp(2.1rem,5.6vw,4.75rem)]">
            <RevealLines
              lines={[
                <>We believe good design</>,
                <>doesn&rsquo;t shout to be</>,
                <>noticed. It simply earns it.</>,
              ]}
            />
          </h2>

          <Reveal delay={140} className="mt-10 max-w-xl space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              Astrella began with a simple observation: too many brands look polished but sound
              generic. The work feels tidy, but the thinking behind it is either rushed or borrowed.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We work with brands that have a clear idea of what they stand for and want a digital
              presence that reflects it properly. That means stronger messaging, cleaner interfaces,
              more intentional systems and a site that can hold its own without trying too hard.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={200}>
            <Star className="h-3 w-3 text-lavender" />
            <dl className="mt-8 border-t border-line">
              {FACTS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-5"
                >
                  <dt className="label-xs">{k}</dt>
                  <dd className="text-right text-sm text-ivory-dim">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
