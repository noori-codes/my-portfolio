import Link from "next/link";
import type { Project } from "@/lib/site";

type Props = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: Props) {
  if (featured) {
    return (
      <article className="group border border-border bg-surface/40 p-6 transition-[border-color,background,transform] duration-300 hover:border-accent/35 hover:bg-surface sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
            Featured
          </span>
          <span className="font-mono text-[10px] tracking-wider text-muted-dim uppercase">
            {project.kind}
          </span>
          <span className="font-mono text-[10px] text-muted-dim">{project.year}</span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
          <Link href={`/work/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className="mt-2 font-mono text-sm text-muted">{project.tagline}</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted">
              <span className="text-accent">▹</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/work/${project.slug}`} className="btn btn-primary">
            Case study
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            GitHub ↗
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Live demo ↗
            </a>
          ) : null}
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col border border-border bg-surface/30 p-5 transition-[border-color,background,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-surface sm:p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-mono text-[10px] tracking-wider text-muted-dim uppercase">
          {project.kind}
        </span>
        <span className="font-mono text-[10px] text-muted-dim">{project.year}</span>
      </div>

      <h3 className="mt-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        <Link href={`/work/${project.slug}`}>{project.name}</Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>
      <p className="mt-3 flex-1 text-sm text-muted/90">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="border border-border bg-background/50 px-2 py-0.5 font-mono text-[10px] text-muted-dim"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 font-mono text-sm">
        <Link
          href={`/work/${project.slug}`}
          className="text-accent transition-opacity hover:opacity-80"
        >
          Details →
        </Link>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-accent"
        >
          GitHub ↗
        </a>
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
      </div>
    </article>
  );
}
