import { useModalFocus } from "./use-modal-focus";
import { useEffect, useState, useRef } from "react";
import { Logo } from "./logo";
import { Star } from "./star";
import { useInquiry } from "./inquiry";
import { ArrowRight } from "./magnetic";
import { useExitTransition } from "./reveal";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
  { label: "About", href: "/#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { open } = useInquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "border-b border-line bg-ink/70 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-6"
        }`}
      >
        <nav className="shell flex items-center justify-between" aria-label="Primary">
          <a href="/#top" data-cursor="cta" aria-label="Astrella Marketing home">
            <Logo compact={scrolled} />
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-[0.7rem] uppercase tracking-[0.22em] text-ivory-dim transition-colors hover:text-lavender"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={open}
              data-cursor="cta"
              className="group hidden items-center gap-2 border border-line-strong px-5 py-3 text-[0.65rem] uppercase tracking-[0.22em] text-ivory transition-[color,border-color,opacity] duration-300 hover:border-lavender hover:text-lavender active:opacity-70 sm:inline-flex"
            >
              Start a project <ArrowRight />
            </button>

            <button
              type="button"
              onClick={() => setMenu(true)}
              aria-label="Open menu"
              aria-expanded={menu}
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-ink/70 text-ivory transition-[color,border-color,opacity] duration-300 hover:border-lavender hover:text-lavender active:opacity-70 lg:hidden"
            >
              <span className="flex flex-col items-center gap-[5px]">
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menu}
        onClose={() => setMenu(false)}
        onStart={() => {
          setMenu(false);
          open();
        }}
      />
    </>
  );
}

function MobileMenu({
  open,
  onClose,
  onStart,
}: {
  open: boolean;
  onClose: () => void;
  onStart: () => void;
}) {
  const { rendered, closing } = useExitTransition(open, 260);
  const ref = useRef<HTMLDivElement>(null);
  useModalFocus(ref, rendered, onClose);
  if (!rendered) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-ink px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))]"
      style={{
        animation: closing
          ? "overlay-out 220ms var(--ease-soft) both"
          : "overlay-in 320ms var(--ease-out-expo) both",
      }}
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex items-center justify-between py-4">
        <Logo compact />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="min-h-11 min-w-11 rounded-full border border-line-strong px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-ivory transition-opacity duration-150 active:opacity-70"
        >
          Close ✕
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center py-4" aria-label="Mobile">
        <ul>
          {LINKS.map((l, i) => (
            <li key={l.href} className="border-b border-line">
              <a
                href={l.href}
                onClick={onClose}
                className="flex items-baseline gap-3 py-5"
                style={
                  closing
                    ? undefined
                    : {
                        animation: `overlay-item-in 400ms var(--ease-out-expo) ${100 + i * 60}ms both`,
                      }
                }
              >
                <span className="label-xs">0{i + 1}</span>
                <span className="font-serif text-[2.5rem] leading-none tracking-tight text-ivory">
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onStart}
          className="mt-8 flex min-h-12 items-center justify-between bg-ivory px-5 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink transition-opacity duration-150 active:opacity-80"
        >
          Start a project <span aria-hidden="true">→</span>
        </button>
      </nav>

      <div className="flex items-end justify-between pb-2 pt-4">
        <div>
          <p className="label-xs">Studio</p>
          <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
            Website design and social media marketing for local businesses.
          </p>
          <a
            href="mailto:sebastian@astrellamarketing.com"
            className="link-underline mt-4 inline-block text-sm text-ivory transition-colors hover:text-lavender"
          >
            sebastian@astrellamarketing.com
          </a>
        </div>
        <Star className="h-4 w-4 text-lavender" />
      </div>
    </div>
  );
}
