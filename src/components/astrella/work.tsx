import { useEffect, useState } from "react";
import { PROJECTS, type Project } from "@/data/work";
import { Reveal, RevealLines, SectionLabel } from "./reveal";
import { Star } from "./star";
import { useInquiry } from "./inquiry";
import { ArrowRight, MagneticButton } from "./magnetic";

export function Work() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="work-heading">
      <div className="shell">
        <SectionLabel index="03" title="Selected work" />

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 id="work-heading" className="display text-[clamp(2.5rem,7vw,6rem)]">
            <RevealLines lines={[<>Selected work.</>]} />
          </h2>
          <Reveal delay={120} className="max-w-xs">
            <p className="font-serif text-xl leading-snug text-ivory-dim">
              Built with intention.
              <br />
              Designed to be remembered.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 space-y-24 sm:space-y-32">
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.id} project={p} flip={i % 2 === 1} onOpen={() => setOpenProject(p)} />
        ))}
      </div>

      {openProject && <CaseStudy project={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  );
}

function ProjectImages({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[7/5]">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} concept visual ${i + 1} of ${images.length}`}
          width={1408}
          height={1008}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.035] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <span className="pointer-events-none absolute inset-0 bg-ink/20 transition-opacity duration-700 group-hover:opacity-0" />

      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActive(i);
              }}
              aria-label={`Show image ${i + 1} of ${images.length}`}
              aria-current={i === active}
              data-cursor="cta"
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-5 bg-gold" : "w-1.5 bg-ivory/40 hover:bg-gold/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectRow({
  project,
  flip,
  onOpen,
}: {
  project: Project;
  flip: boolean;
  onOpen: () => void;
}) {
  return (
    <Reveal>
      <article className="shell">
        <div
          role="button"
          tabIndex={0}
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpen();
            }
          }}
          data-cursor="view"
          aria-label={`Open case study: ${project.title}`}
          className="group block w-full cursor-pointer text-left"
        >
          <div className={`grid items-end gap-6 md:gap-8 lg:grid-cols-12 ${flip ? "" : ""}`}>
            <div className={`lg:col-span-8 ${flip ? "lg:order-2 lg:col-start-5" : ""}`}>
              <ProjectImages images={project.images ?? [project.image]} title={project.title} />
            </div>

            <div
              className={`lg:col-span-4 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-faint">
                  {project.index}
                </span>
                <Star className="h-2.5 w-2.5 text-lavender opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <h3 className="mt-8 text-balance font-serif text-[clamp(2.5rem,4.6vw,4.25rem)] leading-[0.98] tracking-[-0.01em] text-ivory transition-transform duration-700 ease-out group-hover:translate-x-1">
                {project.title}
              </h3>
              <p className="mt-7 max-w-sm text-[0.8125rem] leading-[1.75] text-muted-foreground">
                {project.summary}
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-line pt-6 sm:grid-cols-3">
                {[
                  ["Industry", project.industry],
                  ["Service", project.service],
                  ["Year", project.year],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[0.625rem] font-medium uppercase tracking-[0.26em] text-faint">
                      {k}
                    </dt>
                    <dd className="mt-2 text-[0.8rem] tracking-normal text-ivory-dim">{v}</dd>
                  </div>
                ))}
              </dl>
              <span className="link-underline mt-9 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ivory transition-colors duration-500 group-hover:text-gold">
                View case <ArrowRight />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  const { open } = useInquiry();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      className="fixed inset-0 z-[75] overflow-y-auto bg-ink"
      style={{ animation: "fade-in .45s var(--ease-out-expo) both" }}
    >
      <div className="sticky top-0 z-10 border-b border-line bg-ink/80 backdrop-blur-xl">
        <div className="shell flex items-center justify-between py-4">
          <span className="label-xs">Case study {project.index}</span>
          <button
            type="button"
            onClick={onClose}
            data-cursor="cta"
            className="text-[0.7rem] uppercase tracking-[0.2em] text-ivory transition-colors hover:text-lavender"
          >
            Close ✕
          </button>
        </div>
      </div>

      <div className="shell pb-24 pt-14">
        <h2 className="display max-w-[14ch] text-[clamp(2.5rem,8vw,7rem)]">{project.title}</h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
          {[
            ["Client", project.client],
            ["Industry", project.industry],
            ["Service", project.service],
            ["Year", project.year],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="label-xs">{k}</dt>
              <dd className="mt-2 text-sm text-ivory-dim">{v}</dd>
            </div>
          ))}
        </dl>

        <img
          src={project.image}
          alt={`${project.title} concept visual`}
          width={1408}
          height={1008}
          loading="lazy"
          decoding="async"
          className="mt-12 aspect-[16/10] w-full object-cover"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            {project.sections.map((s) => (
              <div key={s.heading}>
                <h3 className="font-serif text-3xl tracking-tight text-ivory">{s.heading}</h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <aside className="lg:col-span-4">
            <p className="label-xs">Scope</p>
            <ul className="mt-5 space-y-3">
              {project.scope.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-ivory-dim">
                  <Star className="h-2 w-2 text-lavender" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-10 border-l border-line pl-4 text-xs leading-relaxed text-faint">
              Concept work presented to illustrate the studio&rsquo;s approach, tone and system
              thinking.
            </p>
          </aside>
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <MagneticButton
            onClick={() => {
              onClose();
              open();
            }}
          >
            Start a project <ArrowRight />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
