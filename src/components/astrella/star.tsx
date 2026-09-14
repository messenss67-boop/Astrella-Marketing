interface StarProps {
  className?: string;
  strokeOnly?: boolean;
}

/** The Astrella five-point star — the studio's recurring mark. */
export function Star({ className = "h-3 w-3", strokeOnly = false }: StarProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill={strokeOnly ? "none" : "currentColor"}
      stroke={strokeOnly ? "currentColor" : "none"}
      strokeWidth={strokeOnly ? 3 : 0}
    >
      <path d="M50 1 L61.8 34.5 L97.6 35.6 L69.2 57.4 L79.4 91.7 L50 71.5 L20.6 91.7 L30.8 57.4 L2.4 35.6 L38.2 34.5 Z" />
    </svg>
  );
}

/** Sharper five-point polygon variant, used for markers and indicators. */
export function StarPoint({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className} fill="currentColor">
      <polygon points="50,2 61,37 98,37 68,59 79,96 50,73 21,96 32,59 2,37 39,37" />
    </svg>
  );
}
