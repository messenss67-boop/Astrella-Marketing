import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Star } from "./star";
import { useInquiry } from "./inquiry";
import { ArrowRight } from "./magnetic";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "border-b border-line bg-ink/70 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-6"
        }`}
      >
        <nav className="shell flex items-center justify-between" aria-label="Primary">
          <a href="#top" data-cursor="cta" aria-label="Astrella Marketing — home">
            <Logo compact={scrolled} />
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-[0.7rem] uppercase tracking-[0.22em] text-ivory-dim transition-colors hover:text-ivory"
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
              className="group hidden items-center gap-2 border border-line-strong px-5 py-3 text-[0.65rem] uppercase tracking-[0.22em] text-ivory transition-colors duration-500 hover:border-lavender hover:text-lavender sm:inline-flex"
            >
              Start a project <ArrowRight />
            </button>

            <button
              type="button"
              onClick={() => setMenu(true)}
              aria-label="Open menu"
              aria-expanded={menu}
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-ink/70 text-ivory transition-colors hover:border-lavender hover:text-lavender lg:hidden"
            >
              <span className="flex flex-col items-center gap-[5px]">
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {menu && (
        <MobileMenu
          onClose={() => setMenu(false)}
          onStart={() => {
            setMenu(false);
            open();
          }}
        />
      )}
    </>
  );
}

function MobileMenu({ onClose, onStart }: { onClose: () => void; onStart: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-ink px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))]"
      style={{ animation: "fade-in .45s var(--ease-out-expo) both" }}
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
          className="min-h-11 min-w-11 rounded-full border border-line-strong px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-ivory"
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
                style={{ animation: `fade-in .6s var(--ease-out-expo) ${120 + i * 80}ms both` }}
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
          className="mt-8 flex min-h-12 items-center justify-between bg-ivory px-5 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink"
        >
          Start a project <span aria-hidden="true">→</span>
        </button>
      </nav>

      <div className="flex items-end justify-between pb-2 pt-4">
        <div>
          <p className="label-xs">Studio</p>
          <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
            A boutique creative studio for websites, digital experiences and social.
          </p>
          <a
            href="mailto:hello@astrellamarketing.com"
            className="link-underline mt-4 inline-block text-sm text-ivory"
          >
            hello@astrellamarketing.com
          </a>
        </div>
        <Star className="h-4 w-4 text-lavender" />
      </div>
    </div>
  );
}
