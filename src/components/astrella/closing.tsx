import { useState, type FormEvent, type ReactNode } from "react";
import { Reveal, RevealLines } from "./reveal";
import { Star } from "./star";
import { ArrowRight, MagneticButton } from "./magnetic";

const NEEDS = [
  "Website Design",
  "Website Development",
  "Social Media",
  "Brand Presence",
  "Creative Direction",
  "Other",
];
const BUDGETS = ["R10k–R25k", "R25k–R50k", "R50k–R100k", "R100k+"];

function Pill({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      data-cursor="cta"
      className={`rounded-full border px-4 py-2 text-[0.68rem] uppercase tracking-[0.14em] transition-all duration-400 ease-out ${
        selected
          ? "border-lavender bg-lavender text-ink"
          : "border-line-strong text-ivory-dim hover:border-lavender hover:text-lavender"
      }`}
    >
      {label}
    </button>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="group block">
      <span className="label-xs transition-colors duration-300 group-focus-within:text-lavender">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClasses =
  "mt-3 w-full border border-line bg-transparent px-4 py-3 text-sm text-ivory outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-faint focus:border-lavender focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--lavender)_16%,transparent)]";

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
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleNeed = (n: string) => {
    setNeeds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please add your name and a valid email address.");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setSubmitted(true);
  };

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
          <span className="label-xs">07 / Contact</span>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[58%_1fr] lg:items-start lg:gap-20">
          {/* Left — headline & context */}
          <div>
            <h2
              id="closing-heading"
              className="display max-w-[15ch] text-[clamp(2.75rem,7.4vw,6.5rem)] leading-[0.98]"
            >
              <RevealLines
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
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inset-0 animate-pulse rounded-full bg-lavender" />
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-ivory-dim">
                Currently accepting new projects
              </span>
            </Reveal>

            <Reveal delay={380} className="mt-14 hidden sm:block">
              <a
                href="mailto:hello@astrellamarketing.com"
                data-cursor="cta"
                className="group inline-flex items-center gap-2 text-sm text-ivory-dim transition-colors duration-500 hover:text-ivory"
              >
                <span className="text-faint">Prefer email?</span>
                <span className="relative">
                  hello@astrellamarketing.com
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-lavender transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-500 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </Reveal>
          </div>

          {/* Right — enquiry card */}
          <Reveal delay={200}>
            <div className="border border-line bg-ink-soft p-6 sm:p-9">
              {submitted ? (
                <div className="flex min-h-[22rem] flex-col justify-center">
                  <Star className="h-6 w-6 text-lavender" />
                  <p className="mt-6 font-serif text-2xl tracking-tight text-ivory">
                    Thank you, {form.name.split(" ")[0] || "friend"}.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    We read every enquiry ourselves and reply within two working days.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-lavender">
                    Start a project
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Tell us a little about what you have in mind.
                  </p>

                  <div className="mt-8 space-y-6">
                    <Field label="Your name">
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClasses}
                      />
                    </Field>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Email address">
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClasses}
                        />
                      </Field>
                      <Field label="Company / Brand">
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className={inputClasses}
                        />
                      </Field>
                    </div>

                    <div>
                      <span className="label-xs">What can we help with?</span>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {NEEDS.map((n) => (
                          <Pill
                            key={n}
                            label={n}
                            selected={needs.includes(n)}
                            onClick={() => toggleNeed(n)}
                          />
                        ))}
                      </div>
                    </div>

                    <Field label="Tell us about your project">
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClasses} resize-none`}
                      />
                    </Field>

                    <div>
                      <span className="label-xs">Estimated budget</span>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {BUDGETS.map((b) => (
                          <Pill
                            key={b}
                            label={b}
                            selected={budget === b}
                            onClick={() => setBudget(budget === b ? null : b)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {error && (
                    <p role="alert" className="mt-6 text-sm text-lavender">
                      {error}
                    </p>
                  )}

                  <MagneticButton
                    type="submit"
                    variant="invert"
                    fullWidth
                    disabled={isSubmitting}
                    className="mt-8"
                  >
                    {isSubmitting ? "Sending..." : "Send enquiry"} <ArrowRight />
                  </MagneticButton>
                </form>
              )}
            </div>

            <a
              href="mailto:hello@astrellamarketing.com"
              data-cursor="cta"
              className="group mt-8 flex items-center gap-2 text-sm text-ivory-dim transition-colors duration-500 hover:text-ivory sm:hidden"
            >
              <span className="text-faint">Prefer email?</span>
              <span className="relative">
                hello@astrellamarketing.com
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-lavender transition-transform duration-500 ease-out group-hover:scale-x-100"
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
