import { useEffect, useRef, useState } from "react";

/**
 * Contextual desktop cursor. Reads `data-cursor` on the hovered element:
 * "cta" | "view" | "explore" | "drag". Disabled on touch and reduced motion.
 */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [mode, setMode] = useState<string>("default");
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return undefined;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      setMoved(true);
      const target = (e.target as HTMLElement | null)?.closest?.("[data-cursor]");
      const next = target?.getAttribute("data-cursor") ?? "default";
      setMode(next);

      setLabel(
        next === "view" ? "VIEW" : next === "explore" ? "EXPLORE" : next === "drag" ? "DRAG" : null,
      );
    };

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  const size = label ? 74 : mode === "cta" ? 34 : 9;

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden items-center justify-center rounded-full border border-lavender/70 text-[0.6rem] tracking-[0.2em] text-ink transition-[width,height,background-color] duration-300 ease-out md:flex"
      style={{
        width: size,
        height: size,
        opacity: moved ? 1 : 0,
        backgroundColor: label
          ? "var(--lavender)"
          : mode === "cta"
            ? "transparent"
            : "var(--lavender)",
      }}
    >
      {label}
    </div>
  );
}
