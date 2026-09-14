import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "ghost";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  strength?: number;
}

/** Subtle magnetic pull on fine pointers; plain button everywhere else. */
export function MagneticButton({
  children,
  variant = "primary",
  strength = 12,
  className = "",
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const r = el.getBoundingClientRect();
    const dx = ((e.clientX - (r.left + r.width / 2)) / r.width) * strength * 2;
    const dy = ((e.clientY - (r.top + r.height / 2)) / r.height) * strength * 2;
    el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const base =
    "group inline-flex min-h-12 items-center justify-center gap-3 px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ease-out will-change-transform sm:px-7 sm:py-4";
  const styles =
    variant === "primary"
      ? "bg-ivory text-ink hover:bg-gold"
      : "border border-line-strong text-ivory hover:border-lavender hover:text-lavender";

  const mobileAlignment = "w-full justify-center sm:w-auto";

  return (
    <button
      ref={ref}
      data-cursor="cta"
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`${base} ${styles} ${mobileAlignment} ${className}`}
      style={{
        transition:
          "transform 0.45s var(--ease-out-expo), background-color .5s, color .5s, border-color .5s",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block transition-transform duration-500 ease-out group-hover:translate-x-1 ${className}`}
    >
      →
    </span>
  );
}
