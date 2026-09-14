import { Reveal, RevealLines } from "./reveal";
import { Star } from "./star";
import { ArrowRight, MagneticButton } from "./magnetic";
import { useInquiry } from "./inquiry";

export function Closing() {
  const { open } = useInquiry();

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-line py-28 sm:py-40"
      aria-labelledby="closing-heading"
    >
      <div className="shell relative">
        <div className="flex items-center gap-3">
          <Star className="h-2.5 w-2.5 text-lavender" />
          <span className="label-xs">05 / Contact</span>
        </div>

        <h2
          id="closing-heading"
          className="display mt-10 max-w-[15ch] text-[clamp(2.75rem,9vw,8rem)]"
        >
          <RevealLines lines={[<>Have a project</>, <>worth doing well?</>]} />
        </h2>

        <div className="mt-14 flex flex-col gap-10 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
          <Reveal delay={140} className="max-w-sm">
            <p className="text-base leading-relaxed text-muted-foreground">
              We take on a small number of projects at a time. Tell us what you&rsquo;re building
              and we&rsquo;ll reply within two working days.
            </p>
          </Reveal>

          <Reveal
            delay={220}
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
          >
            <MagneticButton onClick={open}>
              Start a project <ArrowRight />
            </MagneticButton>
            <a
              href="mailto:hello@astrellamarketing.com"
              className="link-underline py-3 text-sm tracking-wide text-ivory-dim"
            >
              hello@astrellamarketing.com
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
