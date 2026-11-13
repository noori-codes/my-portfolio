import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";

type Props = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index }: Props) {
  const number =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : null;
  const titleId = `project-card-${project.slug}`;

  return (
    <article className="project-row group border-t border-border first:border-t-0">
      <Link
        href={`/work/${project.slug}`}
        aria-labelledby={titleId}
        className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-7 sm:py-7"
      >
        <div
          className="relative aspect-16/10 w-full shrink-0 overflow-hidden border border-border bg-surface-2 sm:w-40 md:w-48"
          aria-hidden
        >
          {project.image ? (
            <Image
              src={project.image}
              alt=""
              fill
              sizes="192px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,rgba(var(--accent-rgb),0.1),transparent_55%)] font-mono text-[10px] tracking-[0.14em] text-muted-dim uppercase">
              {project.name.slice(0, 2)}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div
            className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
            aria-hidden
          >
            {number ? (
              <span className="font-mono text-[11px] text-accent">{number}</span>
            ) : null}
            <span className="font-mono text-[10px] tracking-[0.14em] text-muted-dim uppercase">
              {project.kind}
            </span>
            <span className="font-mono text-[10px] text-muted-dim">
              {project.year}
            </span>
          </div>

          <h3
            id={titleId}
            className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl"
          >
            {project.name}
          </h3>
          <p className="mt-1.5 max-w-xl text-sm text-muted" aria-hidden>
            {project.tagline}
          </p>

          <div
            className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted-dim"
            aria-hidden
          >
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <span
          className="hidden shrink-0 font-mono text-sm text-accent sm:inline"
          aria-hidden
        >
          Details →
        </span>
      </Link>
    </article>
  );
}
