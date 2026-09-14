import { useEffect, useRef } from "react";
import { RevealLines, Reveal } from "./reveal";
import { ArrowRight, MagneticButton } from "./magnetic";
import { Star } from "./star";
import { useInquiry } from "./inquiry";

function Celestial() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 26;
      ty = (e.clientY / window.innerHeight - 0.5) * 26;
    };
    const loop = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-[-6%] hidden w-[38vw] items-center justify-center md:flex lg:w-[32vw]"
    >
      <svg ref={ref} viewBox="0 0 600 600" className="h-full w-full will-change-transform">
        <circle cx="300" cy="300" r="250" fill="none" stroke="var(--line)" strokeWidth="0.75" />
        <circle
          cx="300"
          cy="300"
          r="170"
          fill="none"
          stroke="var(--line)"
          strokeWidth="0.75"
          strokeDasharray="1 9"
        />
        <g className="spin-slow" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="550" cy="300" r="2" fill="var(--lavender)" />
        </g>
        <polygon
          points="300,232 313.2,292.4 373.6,292.9 324.5,325.5 340.2,384.6 300,349.9 259.8,384.6 275.5,325.5 226.4,292.9 286.8,292.4"
          fill="color-mix(in oklab, var(--lavender) 70%, transparent)"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  const { open } = useInquiry();

  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36"
    >
      <Celestial />

      <div className="shell relative">
        <Reveal className="flex items-center gap-3">
          <Star className="h-2.5 w-2.5 text-lavender" />
          <span className="label-xs">Independent creative studio</span>
        </Reveal>

        <h1 className="display mt-8 max-w-[15ch] text-[clamp(2.8rem,12vw,10rem)] leading-[0.9] sm:text-[clamp(3.25rem,10vw,10rem)]">
          <RevealLines
            lines={[
              <>Design that</>,
              <>
                makes the <em className="not-italic text-lavender">work</em>
              </>,
              <>feel unmistakably yours.</>,
            ]}
          />
        </h1>

        <div className="mt-10 flex flex-col gap-8 border-t border-line pt-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          <Reveal delay={120} className="max-w-xl">
            <p className="text-base leading-relaxed text-muted-foreground">
              Astrella helps brands sharpen their positioning, clarify the story, and build a
              digital presence that feels considered from the first scroll to the final click.
            </p>
          </Reveal>

          <Reveal
            delay={200}
            className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton onClick={open} className="w-full justify-center sm:w-auto">
              Start a project <ArrowRight />
            </MagneticButton>
            <a
              href="#work"
              data-cursor="cta"
              className="group inline-flex min-h-12 items-center justify-center gap-3 border border-line-strong px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-ivory transition-colors duration-500 hover:border-gold hover:text-gold sm:px-7"
            >
              View our work
              <span
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-y-1"
              >
                ↓
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
