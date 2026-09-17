import { Star } from "./star";

const COLUMNS = [
  {
    title: "Studio",
    links: [
      ["Services", "#services"],
      ["Work", "#work"],
      ["Process", "#process"],
      ["About", "#about"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["Start a project", "#contact"],
      ["Email", "mailto:hello@astrellamarketing.com"],
    ],
  },
];

/** Real profile URLs to be added — kept as unlinked labels until then. */
const SOCIALS: { label: string; href: string | null }[] = [
  { label: "Instagram", href: null },
  { label: "LinkedIn", href: null },
];

export function Footer() {
  return (
    <footer className="border-t border-line pt-16 sm:pt-20">
      <div className="shell">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="display text-[clamp(3rem,11vw,9rem)] leading-[0.86] text-ivory">
              Astrella
            </p>
            <p className="mt-3 text-[0.8rem] uppercase tracking-[0.5em] text-ivory-dim">
              Marketing
            </p>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A boutique creative studio for brands that want a stronger point of view and a digital
              presence that actually feels considered.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} className="lg:col-span-2" aria-label={col.title}>
              <p className="label-xs">{col.title}</p>
              <ul className="mt-6 space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(href!.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="link-underline text-sm text-ivory-dim transition-colors hover:text-gold"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-2">
            <p className="label-xs">Reach</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory-dim">
              <li>
                <a
                  href="mailto:hello@astrellamarketing.com"
                  className="link-underline transition-colors hover:text-gold"
                >
                  hello@astrellamarketing.com
                </a>
              </li>
              <li className="text-faint">Cape Town · Worldwide</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="label-xs">Follow</p>
            <ul className="mt-6 space-y-3 text-sm">
              {SOCIALS.map((s) =>
                s.href ? (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline text-ivory-dim transition-colors hover:text-gold"
                    >
                      {s.label}
                    </a>
                  </li>
                ) : (
                  <li key={s.label} className="text-faint">
                    {s.label}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line py-8 sm:mt-20 sm:flex-row sm:items-center">
          <p className="label-xs">© 2026 Astrella Marketing</p>
          <p className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-faint">
            <Star className="h-2 w-2 text-lavender" />
            Crafted with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
