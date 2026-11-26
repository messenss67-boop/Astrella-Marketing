import { ArrowUpRight } from "lucide-react";
import { useModalFocus } from "./use-modal-focus";
import { useEffect, useState, useRef } from "react";
import { FeaturedWork } from "./featured-work";
import { PROJECTS, type Project } from "@/data/work";
import { useExitTransition } from "./reveal";
import { Star } from "./star";
import { useInquiry } from "./inquiry";
import { ArrowRight, MagneticButton } from "./magnetic";

export function Work() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [displayProject, setDisplayProject] = useState<Project | null>(null);

  useEffect(() => {
    if (openProject) setDisplayProject(openProject);
  }, [openProject]);

  return (
    <section id="work" className="scroll-mt-24 pb-24 sm:pb-32" aria-labelledby="work-heading">
      <div className="shell">
        <h2 id="work-heading" className="work-heading">
          Selected work
        </h2>
        {PROJECTS.map((project, index) => (
          <FeaturedWork
            key={project.id}
            first={index === 0}
            project={project}
            onOpen={() => setOpenProject(project)}
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
            Visit live website <ArrowUpRight size={16} aria-hidden="true" className="ml-2" />
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
