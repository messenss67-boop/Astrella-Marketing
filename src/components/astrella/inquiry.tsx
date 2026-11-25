import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
  type ReactNode,
} from "react";
import { useModalFocus } from "./use-modal-focus";

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

function InquiryModal() {
  const { isOpen, close } = useInquiry();
  const ref = useRef<HTMLDivElement>(null);
  useModalFocus(ref, isOpen, close);
  const [draft, setDraft] = useState<string | null>(null);
  useEffect(() => {
    if (!isOpen) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      setDraft(null);
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
      className="fixed inset-0 z-[80] overflow-y-auto bg-ink"
    >
      <div className="shell py-8">
        <button onClick={close} className="v2-text-link">
          Close ✕
        </button>
        <h2 id="enquiry-title" className="display mt-10 text-5xl sm:text-7xl">
          Tell us about your business.
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Prepare an enquiry below, then send it with your email app. Nothing is sent from this
          website. We reply to received emails within two working days.
        </p>
        <form
          className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const body = [
              "Name: " + data.get("name"),
              "Business: " + data.get("business"),
              "Email: " + data.get("email"),
              "Service: " + data.get("service"),
              "",
              data.get("message"),
            ].join("\n");
            setDraft(
              "mailto:sebastian@astrellamarketing.com?subject=" +
                encodeURIComponent("Project enquiry — " + data.get("name")) +
                "&body=" +
                encodeURIComponent(body),
            );
          }}
          onChange={() => setDraft(null)}
        >
          {[
            ["name", "Your name", "text", true],
            ["email", "Email address", "email", true],
            ["business", "Business name (optional)", "text", false],
          ].map(([name, label, type, required]) => (
            <label key={String(name)} className="grid gap-3">
              <span>{label}</span>
              <input
                name={String(name)}
                type={String(type)}
                required={Boolean(required)}
                maxLength={150}
                autoComplete={name === "business" ? "organization" : String(name)}
                className="border border-line-strong p-3"
              />
            </label>
          ))}
          <label className="grid gap-3">
            Service
            <select name="service" className="border border-line-strong bg-ink p-3">
              <option>Website design & development</option>
              <option>Social media marketing</option>
              <option>Brand identity</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="grid gap-3 sm:col-span-2">
            What would you like help with?
            <textarea
              name="message"
              required
              rows={4}
              maxLength={3000}
              className="border border-line-strong p-3"
            />
          </label>
          <p className="text-sm text-muted-foreground sm:col-span-2">
            Your details stay in your browser until you send the email. Please avoid sharing
            sensitive information. Read our{" "}
            <a href="/privacy" className="underline">
              privacy information
            </a>
            .
          </p>
          <button type="submit" className="v2-button justify-self-start">
            Prepare email ↗
          </button>
          {draft && (
            <div role="status" className="sm:col-span-2 border-t border-line pt-6">
              <p>
                Your email draft is ready. Use the link to open your email app, review it and press
                Send there.
              </p>
              <a href={draft} className="v2-button mt-4">
                Open email app ↗
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                No email app? Email sebastian@astrellamarketing.com directly, or call{" "}
                <a href="tel:+27823051165" className="underline">
                  082 305 1165
                </a>
                .
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
