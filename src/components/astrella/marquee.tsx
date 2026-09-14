import { Star } from "./star";

const WORDS = [
  "Web Design",
  "Creative Direction",
  "Social",
  "Digital",
  "Strategy",
  "Motion",
  "Astrella",
];

export function Marquee({ duration = 46 }: { duration?: number }) {
  const row = [...WORDS, ...WORDS];
  return (
    <div
      className="marquee-host relative overflow-hidden border-y border-line py-7"
      aria-hidden="true"
    >
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0">
            {row.map((w, i) => (
              <span key={`${dup}-${i}`} className="flex items-center gap-8 px-8">
                <span className="font-serif text-2xl tracking-tight text-ivory-dim sm:text-3xl">
                  {w}
                </span>
                <Star className="h-2.5 w-2.5 text-lavender/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
