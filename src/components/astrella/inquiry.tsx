import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Star } from "./star";
import { ArrowRight, MagneticButton } from "./magnetic";
import { useExitTransition } from "./reveal";

interface InquiryContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used inside InquiryProvider");
  return ctx;
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <InquiryContext.Provider value={value}>
      {children}
      <InquiryModal />
    </InquiryContext.Provider>
  );
}

const NEED = ["Website", "Digital presence", "Social", "Creative direction", "Something else"];
const BUDGET = ["R10k-R25k", "R25k-R50k", "R50k-R100k", "R100k+"];

function Option({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      data-cursor="cta"
      className={`group flex w-full items-center justify-between border-b border-line py-5 text-left transition-[color,opacity] duration-300 active:opacity-70 ${
        selected ? "text-lavender" : "text-ivory hover:text-lavender"
      }`}
    >
      <span className="font-serif text-3xl tracking-tight sm:text-4xl">{label}</span>
      <span
        className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 data-[on=true]:opacity-100"
        data-on={selected}
      >
        <Star className="h-3 w-3" />
      </span>
    </button>
  );
}

function InquiryModal() {
  const { isOpen, close } = useInquiry();
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const { rendered, closing } = useExitTransition(isOpen, 260);

  useEffect(() => {
    if (isOpen) return undefined;
    const t = setTimeout(() => {
      setStep(0);
      setNeed(null);
      setBudget(null);
      setForm({ name: "", email: "", company: "", message: "" });
      setError(null);
      setIsSubmitting(false);
    }, 260);
    return () => clearTimeout(t);
  }, [isOpen]);

  if (!rendered) return null;

  const submit = async () => {
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please add your name and a valid email address.");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setStep(3);
  };

  const steps = [
    "What do you need?",
    "What's the budget?",
    "Tell us about the project.",
    "Let's make something remarkable.",
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Start a project"
      className="fixed inset-0 z-[80] overflow-y-auto bg-ink"
      style={{
        animation: closing
          ? "overlay-out 260ms var(--ease-soft) both"
          : "overlay-in 380ms var(--ease-out-expo) both",
      }}
    >
      <div className="shell flex min-h-dvh flex-col py-8">
        <div className="flex items-center justify-between">
          <span className="label-xs">Step {Math.min(step + 1, 4)} of 4</span>
          <button
            type="button"
            onClick={close}
            data-cursor="cta"
            className="label-xs text-ivory transition-[color,opacity] duration-150 hover:text-lavender active:opacity-70"
          >
            Close ✕
          </button>
        </div>

        <div className="mt-2 h-px w-full bg-line">
          <div
            className="h-px bg-lavender transition-[width] duration-300 ease-out"
            style={{ width: `${((Math.min(step, 3) + 1) / 4) * 100}%` }}
          />
        </div>

        <div
          key={step}
          className="flex flex-1 flex-col justify-center py-12"
          style={{ animation: "overlay-item-in 380ms var(--ease-out-expo) both" }}
        >
          <h2 className="display max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">{steps[step]}</h2>

          {step === 0 && (
            <div className="mt-10 max-w-2xl">
              {NEED.map((n) => (
                <Option
                  key={n}
                  label={n}
                  selected={need === n}
                  onSelect={() => {
                    setNeed(n);
                    setStep(1);
                  }}
                />
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="mt-10 max-w-2xl">
              {BUDGET.map((b) => (
                <Option
                  key={b}
                  label={b}
                  selected={budget === b}
                  onSelect={() => {
                    setBudget(b);
                    setStep(2);
                  }}
                />
              ))}
            </div>
          )}

          {step === 2 && (
            <form
              className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                void submit();
              }}
            >
              {(
                [
                  ["name", "Name", true],
                  ["company", "Company", false],
                  ["email", "Email", true],
                ] as const
              ).map(([key, labelText, required]) => (
                <label key={key} className="block">
                  <span className="label-xs">
                    {labelText}
                    {required ? " *" : ""}
                  </span>
                  <input
                    required={required}
                    type={key === "email" ? "email" : "text"}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="mt-3 w-full border-b border-line bg-transparent pb-3 font-serif text-2xl text-ivory outline-none transition-colors focus:border-lavender"
                  />
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="label-xs">Tell us about the project</span>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-3 w-full resize-none border-b border-line bg-transparent pb-3 font-serif text-2xl text-ivory outline-none transition-colors focus:border-lavender"
                />
              </label>
              {error && (
                <p role="alert" className="text-sm text-lavender sm:col-span-2">
                  {error}
                </p>
              )}
              <div className="sm:col-span-2 flex items-center gap-4">
                <MagneticButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Start a conversation"} <ArrowRight />
                </MagneticButton>
                {isSubmitting && (
                  <span className="text-xs uppercase tracking-[0.2em] text-faint">
                    Preparing your message
                  </span>
                )}
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="mt-8 max-w-xl">
              <Star className="h-6 w-6 text-lavender" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Thank you, {form.name.split(" ")[0] || "friend"}. We read every enquiry ourselves
                and reply within two working days.
              </p>
              <p className="mt-4 text-sm text-faint">
                {need} · {budget}
              </p>
              <button
                type="button"
                onClick={close}
                data-cursor="cta"
                className="link-underline mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-ivory transition-[color,opacity] active:opacity-70 hover:text-lavender"
              >
                Back to the site
              </button>
            </div>
          )}

          {step > 0 && step < 3 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="link-underline mt-10 self-start text-[0.7rem] uppercase tracking-[0.2em] text-faint transition-[color,opacity] active:opacity-70 hover:text-lavender"
            >
              ← Back
            </button>
          )}
        </div>

        <p className="label-xs">hello@astrellamarketing.com</p>
      </div>
    </div>
  );
}
