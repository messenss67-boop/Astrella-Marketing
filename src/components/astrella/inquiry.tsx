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

const BUILD = ["Website", "Brand", "Digital campaign", "Something else"];
const STAGE = ["Just an idea", "Planning", "Ready to build", "Already launched"];

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
      className={`group flex w-full items-center justify-between border-b border-line py-5 text-left transition-colors duration-400 ${
        selected ? "text-lavender" : "text-ivory hover:text-lavender"
      }`}
    >
      <span className="font-serif text-3xl tracking-tight sm:text-4xl">{label}</span>
      <span
        className="opacity-0 transition-opacity duration-400 group-hover:opacity-100 data-[on=true]:opacity-100"
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
  const [build, setBuild] = useState<string | null>(null);
  const [stage, setStage] = useState<string | null>(null);
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

  useEffect(() => {
    if (isOpen) return undefined;
    const t = setTimeout(() => {
      setStep(0);
      setBuild(null);
      setStage(null);
      setForm({ name: "", email: "", company: "", message: "" });
      setError(null);
      setIsSubmitting(false);
    }, 400);
    return () => clearTimeout(t);
  }, [isOpen]);

  if (!isOpen) return null;

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
    "What are you looking to build?",
    "What stage are you at?",
    "Tell us a little about it.",
    "Let's make something remarkable.",
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Start a project"
      className="fixed inset-0 z-[80] overflow-y-auto bg-ink"
      style={{ animation: "fade-in .4s var(--ease-out-expo) both" }}
    >
      <div className="shell flex min-h-dvh flex-col py-8">
        <div className="flex items-center justify-between">
          <span className="label-xs">Step {Math.min(step + 1, 4)} — 04</span>
          <button
            type="button"
            onClick={close}
            data-cursor="cta"
            className="label-xs text-ivory transition-colors hover:text-lavender"
          >
            Close ✕
          </button>
        </div>

        <div className="mt-2 h-px w-full bg-line">
          <div
            className="h-px bg-lavender transition-[width] duration-700 ease-out"
            style={{ width: `${((Math.min(step, 3) + 1) / 4) * 100}%` }}
          />
        </div>

        <div
          key={step}
          className="reveal flex flex-1 flex-col justify-center py-12"
          data-visible="true"
        >
          <h2 className="display max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">{steps[step]}</h2>

          {step === 0 && (
            <div className="mt-10 max-w-2xl">
              {BUILD.map((b) => (
                <Option
                  key={b}
                  label={b}
                  selected={build === b}
                  onSelect={() => {
                    setBuild(b);
                    setStep(1);
                  }}
                />
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="mt-10 max-w-2xl">
              {STAGE.map((s) => (
                <Option
                  key={s}
                  label={s}
                  selected={stage === s}
                  onSelect={() => {
                    setStage(s);
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
                  ["email", "Email", true],
                  ["company", "Company", false],
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
                <span className="label-xs">What are you building?</span>
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
                  {isSubmitting ? "Sending..." : "Send enquiry"} <ArrowRight />
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
                {build} · {stage}
              </p>
              <button
                type="button"
                onClick={close}
                data-cursor="cta"
                className="link-underline mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-ivory"
              >
                Back to the site
              </button>
            </div>
          )}

          {step > 0 && step < 3 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="link-underline mt-10 self-start text-[0.7rem] uppercase tracking-[0.2em] text-faint"
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
