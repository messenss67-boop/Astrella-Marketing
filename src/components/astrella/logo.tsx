export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src="/astrella-logo.png"
      alt="Astrella Marketing"
      className={`w-auto transition-all duration-700 ease-out ${compact ? "h-8" : "h-10"}`}
    />
  );
}
