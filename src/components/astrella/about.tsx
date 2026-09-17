import { useState } from "react";
import founders from "@/assets/founders.webp";
import { Reveal, RevealLines } from "./reveal";

const INTRO_PARAGRAPHS = [
  "We started Astrella Marketing with a simple belief: great marketing shouldn't just make a business look better. It should help it grow better.",
  "There's no shortage of agencies offering websites, social media, content and marketing. But too often, businesses end up with disconnected services, generic strategies and work that looks good without actually feeling like their brand.",
];

const MORE_PARAGRAPHS = [
  "That's where we do things differently.",
  "Astrella is an independent creative studio built around close collaboration, thoughtful strategy and work that is intentionally tailored to each business. From website design and development to social media, digital presence and creative direction, we bring everything together to create brands that feel considered, consistent and built to stand out.",
  "We keep our team small on purpose. It means more attention, more flexibility and a genuine relationship with the people behind every business we work with.",
  "No cookie-cutter packages. No recycled ideas. Just thoughtful creative work built around where your brand is now — and where you want to take it.",
];

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[47%_1fr] lg:items-center lg:gap-20">
        <Reveal>
          <img
            src={founders}
            alt="Astrella's Founder and Co-Founder"
            width={1254}
            height={1254}
            loading="lazy"
            decoding="async"
            className="w-full border border-line"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="label-xs text-lavender">[ About us ]</p>

          <h2
            id="about-heading"
            className="mt-6 text-[clamp(2.25rem,4.4vw,4rem)] leading-[1.08] tracking-tight"
          >
            <RevealLines
              lines={[
                <span className="font-sans font-bold text-ivory">A small team with</span>,
                <span className="font-serif italic text-lavender">big intentions.</span>,
              ]}
            />
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground">
            {INTRO_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div
            className="grid max-w-xl transition-[grid-template-rows,opacity] duration-700 ease-out"
            style={{ gridTemplateRows: expanded ? "1fr" : "0fr", opacity: expanded ? 1 : 0 }}
          >
            <div className="overflow-hidden">
              <div className="space-y-5 pt-5 text-base leading-relaxed text-muted-foreground">
                {MORE_PARAGRAPHS.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            data-cursor="cta"
            className="link-underline mt-7 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-ivory transition-colors duration-500 hover:text-gold"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
