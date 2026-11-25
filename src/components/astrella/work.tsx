import { useModalFocus } from "./use-modal-focus";
import { useEffect, useState, useRef, type CSSProperties } from "react";
import { PROJECTS, type Project, type ProjectImage } from "@/data/work";
import { Reveal, RevealLines, SectionLabel, useExitTransition } from "./reveal";
import { Star } from "./star";
import { useInquiry } from "./inquiry";
import { ArrowRight, MagneticButton } from "./magnetic";

/** CSS custom properties consumed by the `.obj-focus` utility in styles.css. */
function focusStyle(img: ProjectImage): CSSProperties {
  return {
    "--obj-focus": img.focus ?? "center",
    "--obj-focus-sm": img.focusWide ?? "center",
  } as CSSProperties;
}

export function Work() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [displayProject, setDisplayProject] = useState<Project | null>(null);

  useEffect(() => {
    if (openProject) setDisplayProject(openProject);
  }, [openProject]);

  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="work-heading">
      <div className="shell">
        <SectionLabel title="Selected work" />

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 id="work-heading" className="display text-[clamp(2.5rem,7vw,6rem)]">
            <RevealLines lines={[<>Selected work.</>]} />
          </h2>
          <Reveal delay={120} className="max-w-xs">
            <p className="font-serif text-xl leading-snug text-ivory-dim">
              Client websites and studio studies.
              <br />
              Our approach, made visible.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 space-y-24 sm:space-y-32">
        {PROJECTS.map((p, i) => (
          <ProjectRow
            key={p.id}
            project={p}
            flip={i % 2 === 1}
            full={i === PROJECTS.length - 1}
            onOpen={() => setOpenProject(p)}
          />
        ))}
      </div>

      {displayProject && (
        <CaseStudy
          project={displayProject}
          open={openProject !== null}
          onClose={() => setOpenProject(null)}
        />
      )}
    </section>
  );
}

function ProjectImages({
  images,
  wide = false,
  screenshot = false,
  onOpen,
  title,
}: {
  images: ProjectImage[];
  wide?: boolean;
  screenshot?: boolean;
  onOpen: () => void;
  title: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div
      className={`relative w-full overflow-hidden ${screenshot ? "client-gallery aspect-[8/5]" : wide ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/5] sm:aspect-[7/5]"}`}
    >
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={1408}
          height={1008}
          loading="lazy"
          decoding="async"
          style={focusStyle(img)}
          className={`obj-focus absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.03] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <span className="pointer-events-none absolute inset-0 bg-ink/20 transition-opacity duration-300 group-hover:opacity-0" />

      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open case study: ${title}`}
        className="absolute inset-0 z-[1]"
      />
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 z-10 flex items-center">
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
              className="group/dot flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-5 bg-lavender"
                    : "w-1.5 bg-ivory/40 group-hover/dot:bg-lavender/70"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {[
        ["Industry", project.industry],
        ["Service", project.service],
        ["Status", project.liveUrl ? "Client project" : "Concept study"],
      ]
        .filter(([, value]) => value)
        .map(([k, v]) => (
          <div key={k}>
            <dt className="text-[0.625rem] font-medium uppercase tracking-[0.26em] text-faint">
              {k}
            </dt>
            <dd className="mt-2 text-[0.8rem] tracking-normal text-ivory-dim">{v}</dd>
          </div>
        ))}
    </dl>
  );
}

function ProjectRow({
  project,
  flip,
  full = false,
  onOpen,
}: {
  project: Project;
  flip: boolean;
  full?: boolean;
  onOpen: () => void;
}) {
  const trigger = (
    <div className="group block w-full cursor-pointer text-left transition-opacity duration-150 active:opacity-90">
      {full ? (
        <>
          <ProjectImages images={project.gallery} wide onOpen={onOpen} title={project.title} />
          <div className="mt-8 flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-baseline gap-4">
                <span className="text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-faint">
                  {project.index}
                </span>
                <Star className="h-2.5 w-2.5 text-lavender opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <h3 className="mt-6 text-balance font-serif text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.01em] text-ivory transition-transform duration-300 ease-out group-hover:translate-x-1">
                {project.title}
              </h3>
            </div>
            <div className="max-w-sm sm:shrink-0">
              <p className="text-[0.8125rem] leading-[1.75] text-muted-foreground">
                {project.summary}
              </p>
              <div className="mt-6 border-t border-line pt-6">
                <ProjectMeta project={project} />
              </div>
              <button
                type="button"
                onClick={onOpen}
                className="link-underline mt-6 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ivory transition-colors duration-300 group-hover:text-lavender"
              >
                View case <ArrowRight />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="grid items-end gap-6 md:gap-8 lg:grid-cols-12">
          <div className={`lg:col-span-8 ${flip ? "lg:order-2 lg:col-start-5" : ""}`}>
            <ProjectImages
              screenshot={Boolean(project.liveUrl)}
              images={project.gallery}
              onOpen={onOpen}
              title={project.title}
            />
          </div>

          <div
            className={`lg:col-span-4 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div className="flex items-baseline gap-4">
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-faint">
                {project.index}
              </span>
              <Star className="h-2.5 w-2.5 text-lavender opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <h3 className="mt-8 text-balance font-serif text-[clamp(2.5rem,4.6vw,4.25rem)] leading-[0.98] tracking-[-0.01em] text-ivory transition-transform duration-300 ease-out group-hover:translate-x-1">
              {project.title}
            </h3>
            <p className="mt-7 max-w-sm text-[0.8125rem] leading-[1.75] text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-10 border-t border-line pt-6">
              <ProjectMeta project={project} />
            </div>
            {project.liveUrl && (
              <div>
                <a
                  className="v2-button mt-6"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live website ↗
                </a>
              </div>
            )}
            <button
              type="button"
              onClick={onOpen}
              className="link-underline mt-9 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ivory transition-colors duration-300 group-hover:text-lavender"
            >
              View case <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Reveal>
      <article className="shell">{trigger}</article>
    </Reveal>
  );
}

function CaseStudy({
  project,
  open,
  onClose,
}: {
  project: Project;
  open: boolean;
  onClose: () => void;
}) {
  const { open: openInquiry } = useInquiry();
  const { rendered, closing } = useExitTransition(open, 260);
  const ref = useRef<HTMLDivElement>(null);
  useModalFocus(ref, rendered, onClose);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!rendered) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      className="fixed inset-0 z-[75] overflow-y-auto bg-ink"
      style={{
        animation: closing
          ? "overlay-out 260ms var(--ease-soft) both"
          : "overlay-in 380ms var(--ease-out-expo) both",
      }}
    >
      <div className="sticky top-0 z-10 border-b border-line bg-ink/80 backdrop-blur-xl">
        <div className="shell flex items-center justify-between py-4">
          <span className="label-xs">Case study {project.index}</span>
          <button
            type="button"
            onClick={onClose}
            data-cursor="cta"
            className="text-[0.7rem] uppercase tracking-[0.2em] text-ivory transition-[color,opacity] duration-150 hover:text-lavender active:opacity-70"
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

        {project.liveUrl && (
          <a
            className="v2-button mt-6"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit live website ↗
          </a>
        )}
        <dl className="mt-12 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-5">
          {[
            ["Client", project.client],
            ["Industry", project.industry],
            ["Service", project.service],
            ["Status", project.liveUrl ? "Client project" : "Concept study"],
            ["Year", project.year],
          ]
            .filter(([, value]) => value)
            .map(([k, v]) => (
              <div key={k}>
                <dt className="label-xs">{k}</dt>
                <dd className="mt-2 text-sm text-ivory-dim">{v}</dd>
              </div>
            ))}
        </dl>

        {project.cover && (
          <img
            src={project.cover.src}
            alt={project.cover.alt}
            width={1408}
            height={1008}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: project.cover.focus ?? "center" }}
            className="mt-12 aspect-[16/10] w-full object-cover"
          />
        )}

        {project.gallery.filter((img) => img.src !== project.cover?.src).length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.gallery
              .filter((img) => img.src !== project.cover?.src)
              .map((img) => (
                <figure key={img.src}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1024}
                    height={731}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: img.focus ?? "center" }}
                    className={
                      project.liveUrl
                        ? "aspect-[4/3] w-full bg-ink-soft object-contain"
                        : "aspect-[4/3] w-full object-cover"
                    }
                  />
                  <figcaption className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-faint">
                    {img.label}
                  </figcaption>
                </figure>
              ))}
          </div>
        )}

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
            {!project.liveUrl && (
              <p className="mt-10 border-l border-line pl-4 text-xs leading-relaxed text-faint">
                Concept work presented to illustrate the studio&rsquo;s approach, tone and system
                thinking.
              </p>
            )}
          </aside>
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <MagneticButton
            onClick={() => {
              onClose();
              openInquiry();
            }}
          >
            Start a project <ArrowRight />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
