import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="pb-20">
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Link
            href="/work"
            className="font-mono text-xs tracking-wider text-muted transition-colors hover:text-accent"
          >
            ← All work
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-muted-dim uppercase">
            {project.featured ? <span className="text-accent">Featured</span> : null}
            <span>{project.kind}</span>
            <span>{project.year}</span>
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">{project.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live demo ↗
              </a>
            ) : null}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="section-label">
              Overview
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {project.description}
            </p>

            <h2 className="section-label mt-10">
              Highlights
            </h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span className="text-accent">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="border border-border bg-surface/50 p-6 h-fit">
            <h2 className="section-label">
              Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-6 font-mono text-xs text-muted-dim">
              Built as part of my path into professional full-stack development.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-sm text-muted">
            Want something like this built?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Let&apos;s talk
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
