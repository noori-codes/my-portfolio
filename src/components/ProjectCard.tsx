import Link from "next/link";
import type { Project } from "@/lib/site";

type Props = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index }: Props) {
  const number =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <article className="project-row group border-t border-border py-5 transition-colors first:border-t-0 sm:py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {number ? (
              <span className="font-mono text-[11px] text-muted-dim">
                {number}
              </span>
            ) : null}
            <span className="font-mono text-[10px] tracking-[0.14em] text-muted-dim uppercase">
              {project.kind}
            </span>
            <span className="font-mono text-[10px] text-muted-dim">
              {project.year}
            </span>
          </div>

          <h3 className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
            <Link href={`/work/${project.slug}`}>{project.name}</Link>
          </h3>
          <p className="mt-1.5 max-w-xl text-sm text-muted">{project.tagline}</p>

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted-dim">
            {project.stack.slice(0, 5).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-4 font-mono text-sm sm:justify-end">
          <Link
            href={`/work/${project.slug}`}
            className="text-accent transition-opacity hover:opacity-80"
          >
            Details →
          </Link>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              Live ↗
            </a>
          ) : null}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            Code ↗
          </a>
        </div>
      </div>
    </article>
  );
}
