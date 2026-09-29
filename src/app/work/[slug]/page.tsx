import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrowserFrame } from "@/components/BrowserFrame";
import { getProject, site, type Project } from "@/lib/site";

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

function nextProject(slug: string): Project | undefined {
  const index = site.projects.findIndex((p) => p.slug === slug);
  if (index < 0) return undefined;
  return site.projects[(index + 1) % site.projects.length];
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = nextProject(slug);
  const story = project.caseStudy
    ? [
        { label: "Problem", body: project.caseStudy.problem },
        { label: "Approach", body: project.caseStudy.approach },
        { label: "Outcome", body: project.caseStudy.outcome },
      ]
    : [{ label: "Overview", body: project.description }];

  return (
    <div className="pb-24">
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Link
            href="/work"
            className="font-mono text-xs tracking-wider text-muted transition-colors hover:text-accent"
          >
            ← All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-muted-dim uppercase">
            {project.featured ? <span className="text-accent">Featured</span> : null}
            <span>{project.kind}</span>
            <span>{project.year}</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">
            {project.tagline}
          </p>

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

          {project.image ? (
            <div className="mt-12 sm:mt-14">
              <BrowserFrame
                src={project.image}
                alt={`${project.name} screenshot`}
                url={project.live}
                priority
                sizes="(max-width: 1024px) 100vw, 72rem"
                aspectClassName="aspect-video"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div className="space-y-12 sm:space-y-14">
            {story.map((block, i) => (
              <div key={block.label} className="border-t border-border pt-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase">
                    {block.label}
                  </h2>
                </div>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                  {block.body}
                </p>
              </div>
            ))}

            <div className="border-t border-border pt-8">
              <h2 className="section-label">Highlights</h2>
              <ul className="mt-6 space-y-4">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit border-t border-border pt-8 lg:sticky lg:top-28">
            <h2 className="section-label">Stack</h2>
            <ul className="mt-6 space-y-2.5">
              {project.stack.map((tech) => (
                <li key={tech} className="font-mono text-sm text-muted">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3 border-t border-border pt-8 font-mono text-sm">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent transition-opacity hover:opacity-80"
                >
                  Open live demo ↗
                </a>
              ) : null}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted transition-colors hover:text-accent"
              >
                View source ↗
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-14">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-end justify-between gap-6 px-5 sm:px-8">
          <p className="font-mono text-sm text-muted">
            Want something like this built?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Let&apos;s talk
            </Link>
            .
          </p>
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group text-right transition-colors"
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                Next project
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight group-hover:text-accent">
                {next.name} →
              </p>
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  );
}
