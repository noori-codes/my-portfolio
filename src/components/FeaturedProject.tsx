import Link from "next/link";
import { BrowserFrame } from "@/components/BrowserFrame";
import type { Project } from "@/lib/site";

type Props = {
  project: Project;
  index: number;
  reverse?: boolean;
};

export function FeaturedProject({
  project,
  index,
  reverse = false,
}: Props) {
  const number = String(index + 1).padStart(2, "0");
  const stack = project.stack.slice(0, 5);

  return (
    <article className="group grid items-center gap-8 border-b border-border pb-16 last:border-b-0 last:pb-0 sm:pb-20 lg:grid-cols-12 lg:gap-12 lg:pb-24">
      <div
        className={`lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        {project.image ? (
          <Link href={`/work/${project.slug}`} className="project-media block">
            <BrowserFrame
              src={project.image}
              alt={`${project.name} screenshot`}
              url={project.live}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </Link>
        ) : (
          <Link
            href={`/work/${project.slug}`}
            className="project-media relative flex aspect-16/10 items-center justify-center overflow-hidden border border-border bg-surface"
          >
            <span
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(var(--accent-rgb),0.12),transparent_55%)]"
              aria-hidden
            />
            <span className="relative font-mono text-sm tracking-[0.14em] text-muted-dim uppercase">
              {project.name}
            </span>
          </Link>
        )}
      </div>

      <div
        className={`flex flex-col lg:col-span-5 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono text-sm text-accent">{number}</span>
          <span className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
            {project.kind}
          </span>
          <span className="font-mono text-[10px] text-muted-dim">
            {project.year}
          </span>
        </div>

        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors group-hover:text-accent"
          >
            {project.name}
          </Link>
        </h3>

        <p className="mt-2 font-mono text-sm text-muted">{project.tagline}</p>

        <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-muted-dim">
          {stack.map((tech) => (
            <li key={tech} className="flex items-center gap-2">
              <span className="size-1 bg-accent/70" aria-hidden />
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link
            href={`/work/${project.slug}`}
            className="btn btn-outline btn-sm"
          >
            Case study
          </Link>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              Live ↗
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              Code ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
