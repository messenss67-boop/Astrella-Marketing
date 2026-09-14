import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

/** Opacity + translate + blur reveal, shared across every section. */
export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}

interface RevealLinesProps {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  step?: number;
}

/** Sequential line-by-line masked reveal for editorial headlines. */
export function RevealLines({
  lines,
  className = "",
  lineClassName = "",
  step = 90,
}: RevealLinesProps) {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);
  return (
    <div ref={ref} data-visible={visible} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`line-mask ${lineClassName}`}
          style={{ "--reveal-delay": `${i * step}ms` } as React.CSSProperties}
        >
          <span>{line}</span>
        </span>
      ))}
    </div>
  );
}

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="flex items-center gap-3">
      <span className="label-xs">
        {index} / {title}
      </span>
      <span className="h-px w-10 bg-line-strong sm:w-16" />
    </Reveal>
  );
}
