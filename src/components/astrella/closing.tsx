import { Reveal, RevealLines } from "./reveal";
import { Star } from "./star";
import { ArrowRight, MagneticButton } from "./magnetic";
import { useInquiry } from "./inquiry";

const NEXT_STEPS = [
  { n: "01", label: "Tell us what you need" },
  { n: "02", label: "Give us a rough budget" },
  { n: "03", label: "Share the project details" },
  { n: "04", label: "We reply within two working days" },
];

function ContactBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-48 -top-56 h-[38rem] w-[38rem] rounded-full border border-line opacity-70" />
      <div className="absolute left-0 top-[38%] h-px w-1/4 bg-line" />
      <div className="absolute left-[16%] top-0 h-2/5 w-px bg-line opacity-70" />
      <Star className="absolute left-[9%] top-[22%] h-3 w-3 text-lavender opacity-[0.14]" />
      <Star className="absolute right-[22%] bottom-[18%] h-2 w-2 text-lavender opacity-[0.12]" />
      <span className="absolute right-[34%] top-[64%] h-1 w-1 rounded-full bg-lavender opacity-30" />
      <span className="absolute left-[42%] bottom-[12%] h-1 w-1 rounded-full bg-lavender opacity-20" />
    </div>
  );
}

export function Closing() {
  const { open } = useInquiry();

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-28 sm:py-40 lg:py-48"
      aria-labelledby="closing-heading"
    >
      <ContactBackdrop />

      <div className="shell relative">
        <Reveal className="flex items-center gap-4">
          <span className="h-px flex-1 bg-line" />
          <Star className="h-3 w-3 shrink-0 text-lavender" />
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <Reveal delay={60} className="mt-8 flex items-center gap-3">
          <Star className="h-2.5 w-2.5 text-lavender" />
          <span className="label-xs">Contact</span>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[58%_1fr] lg:items-start lg:gap-20">
          {/* Left — headline & context */}
          <div>
            <h2
              id="closing-heading"
              className="display max-w-[15ch] text-[clamp(2.75rem,7.4vw,6.5rem)] leading-[0.98]"
            >
              <RevealLines
                step={110}
                lines={[
                  <>Have a project</>,
                  <>
                    worth doing <span className="text-lavender">well?</span>
                  </>,
                ]}
              />
            </h2>

            <Reveal delay={260} className="mt-10 max-w-md">
              <p className="text-base leading-relaxed text-muted-foreground">
                We take on a small number of projects at a time. Tell us what you&rsquo;re building
                and we&rsquo;ll get back to you within two working days.
              </p>
            </Reveal>

            <Reveal delay={320} className="mt-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-ivory-dim">
                Currently accepting new projects
              </span>
            </Reveal>

            <Reveal delay={380} className="mt-10">
              <MagneticButton onClick={open}>
                Start a project <ArrowRight />
              </MagneticButton>
            </Reveal>

            <Reveal delay={420} className="mt-12 hidden sm:block">
              <a
                href="mailto:hello@astrellamarketing.com"
                data-cursor="cta"
                className="group inline-flex items-center gap-2 text-sm text-ivory-dim transition-colors duration-300 hover:text-ivory"
              >
                <span className="text-faint">Prefer email?</span>
                <span className="relative">
                  hello@astrellamarketing.com
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-lavender transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </Reveal>
          </div>

          {/* Right — what happens next */}
          <Reveal delay={200}>
            <div className="border border-line bg-ink-soft p-6 sm:p-9">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-lavender">
                What happens next
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A four-step enquiry. Takes about two minutes.
              </p>

              <ol className="mt-8 space-y-0">
                {NEXT_STEPS.map((s) => (
                  <li key={s.n} className="flex items-baseline gap-4 border-t border-line py-4">
                    <span className="label-xs shrink-0">{s.n}</span>
                    <span className="text-sm leading-relaxed text-ivory-dim">{s.label}</span>
                  </li>
                ))}
              </ol>
            </div>

            <a
              href="mailto:hello@astrellamarketing.com"
              data-cursor="cta"
              className="group mt-8 flex items-center gap-2 text-sm text-ivory-dim transition-colors duration-300 hover:text-ivory sm:hidden"
            >
              <span className="text-faint">Prefer email?</span>
              <span className="relative">
                hello@astrellamarketing.com
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-lavender transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
