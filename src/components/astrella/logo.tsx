export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-serif tracking-[0.02em] ${compact ? "text-xl" : "text-2xl"} text-ivory`}
      >
        ASTRELLA
      </span>
      <span
        className={`mt-1 font-sans uppercase text-ivory-dim/80 ${
          compact ? "text-[0.6rem] tracking-[0.42em]" : "text-[0.68rem] tracking-[0.46em]"
        }`}
      >
        Marketing
      </span>
    </span>
  );
}
