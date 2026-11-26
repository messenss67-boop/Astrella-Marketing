import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/work";
export function FeaturedWork({
  project,
  first,
  onOpen,
}: {
  project: Project;
  first: boolean;
  onOpen: () => void;
}) {
  return (
    <article className="kite-feature" aria-labelledby={project.id + "-heading"}>
      <div className="kite-copy">
        <p className="v2-eyebrow">
          {project.industry} · {project.service}
        </p>
        <h3 id={project.id + "-heading"}>
          {project.id === "kite-and-key" ? (
            <>
              Kite <i>&amp;</i> Key
            </>
          ) : (
            project.title
          )}
        </h3>
        <p>{project.summary}</p>
        <div className="featured-actions">
          <a className="v2-button" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Visit live website <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <button className="v2-text-link" onClick={onOpen}>
            View case study
          </button>
        </div>
      </div>
      <figure className="kite-screens">
        <div className="kite-browser">
          <div className="kite-bar">
            <i aria-hidden="true" />
            {new URL(project.liveUrl).hostname}
          </div>
          <img
            src={project.cover.src}
            alt={project.cover.alt}
            width={1440}
            height={900}
            fetchPriority={first ? "high" : "auto"}
            loading={first ? "eager" : "lazy"}
          />
        </div>
        <img
          className="kite-phone"
          src={project.mobile.src}
          alt={project.mobile.alt}
          width={390}
          height={844}
          loading={first ? "eager" : "lazy"}
        />
      </figure>
    </article>
  );
}
