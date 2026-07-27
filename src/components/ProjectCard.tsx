import Link from "next/link";
import type { Project } from "@/lib/site";

type Props = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: Props) {
  return (
    <article
      className={`group border border-border bg-surface/60 transition-[border-color,background] duration-300 hover:border-accent/40 hover:bg-surface-2 ${
        featured ? "p-6 sm:p-8 md:col-span-2" : "p-5 sm:p-6"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        {featured && (
          <span className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
            Featured
          </span>
        )}
        <span className="font-mono text-[10px] tracking-wider text-muted-dim uppercase">
          {project.stack[0]}
        </span>
      </div>

      <h3
        className={`mt-3 font-sans font-semibold tracking-tight ${
          featured ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {project.name}
      </h3>
      <p className="mt-1 font-mono text-sm text-muted">{project.tagline}</p>
      <p className={`mt-4 text-muted ${featured ? "max-w-2xl" : "text-sm"}`}>
        {project.description}
      </p>

      {featured && (
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2 font-mono text-sm text-muted">
              <span className="text-accent">▹</span>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition-opacity hover:opacity-80"
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
            Live demo ↗
          </a>
        ) : (
          <Link href="/contact" className="text-muted transition-colors hover:text-accent">
            Ask about this build →
          </Link>
        )}
      </div>
    </article>
  );
}
