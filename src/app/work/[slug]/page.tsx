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

  const title = project.name;
  const description = project.description;
  const url = `${site.contact.portfolio}/work/${project.slug}`;
  const image = project.image ?? site.ogImage;
  const imageAlt = project.image
    ? `${project.name} — ${project.tagline}`
    : `${site.brand} — ${site.fullName}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.name} | ${site.brand}`,
      description,
      url,
      siteName: site.brand,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${site.brand}`,
      description,
      images: [image],
    },
  };
}

function adjacentProjects(slug: string): {
  prev: Project | undefined;
  next: Project | undefined;
} {
  const index = site.projects.findIndex((p) => p.slug === slug);
  if (index < 0) return { prev: undefined, next: undefined };
  const len = site.projects.length;
  return {
    prev: site.projects[(index - 1 + len) % len],
    next: site.projects[(index + 1) % len],
  };
}

function absoluteUrl(path: string) {
  return new URL(path, site.contact.portfolio).toString();
}

function projectJsonLd(project: Project) {
  const pageUrl = absoluteUrl(`/work/${project.slug}`);
  const sameAs = [project.live, project.github].filter(
    (value): value is string => Boolean(value),
  );

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: project.tagline,
    description: project.description,
    url: pageUrl,
    dateCreated: project.year,
    keywords: project.stack.join(", "),
    author: {
      "@type": "Person",
      name: site.fullName,
      url: site.contact.portfolio,
    },
    creator: {
      "@type": "Person",
      name: site.fullName,
      url: site.contact.portfolio,
    },
    ...(project.image
      ? { image: absoluteUrl(project.image) }
      : { image: absoluteUrl(site.ogImage) }),
    ...(sameAs.length ? { sameAs } : {}),
    ...(project.live
      ? {
          mainEntity: {
            "@type": "WebApplication",
            name: project.name,
            url: project.live,
            applicationCategory: "WebApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires a modern web browser",
          },
        }
      : {}),
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = adjacentProjects(slug);
  const jsonLd = projectJsonLd(project);
  const story = project.caseStudy
    ? [
        { label: "Problem", body: project.caseStudy.problem },
        { label: "Approach", body: project.caseStudy.approach },
        { label: "Outcome", body: project.caseStudy.outcome },
      ]
    : [{ label: "Overview", body: project.description }];

  return (
    <div className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-border py-16 sm:py-24">
        <div className="page-shell">
          <Link
            href="/work"
            className="font-mono text-xs tracking-wider text-muted transition-colors hover:text-accent"
          >
            ← All work
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
            {project.featured ? (
              <span className="text-accent">Featured</span>
            ) : null}
            <span>{project.kind}</span>
            <span>{project.year}</span>
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">
            {project.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
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
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub ↗
              </a>
            ) : null}
          </div>

          {project.image ? (
            <div className="mt-14 sm:mt-16">
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

      <section className="py-16 sm:py-24">
        <div className="page-shell grid gap-16 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div className="space-y-12 sm:space-y-14">
            {story.map((block, i) => (
              <div key={block.label} className="border-t border-border pt-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-mono text-[0.7rem] tracking-[0.18em] text-accent uppercase">
                    {block.label}
                  </h2>
                </div>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                  {block.body}
                </p>
              </div>
            ))}

            {project.caseStudy?.decisions?.length ? (
              <div className="border-t border-border pt-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">
                    {String(story.length + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-mono text-[0.7rem] tracking-[0.18em] text-accent uppercase">
                    Key decisions
                  </h2>
                </div>
                <ul className="mt-6 space-y-4">
                  {project.caseStudy.decisions.map((item) => (
                    <li key={item} className="flex gap-3 text-muted">
                      <span className="mt-2 size-1 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="border-t border-border pt-8">
              <h2 className="section-label">Highlights</h2>
              <ul className="mt-6 space-y-4">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <span className="mt-2 size-1 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit border-t border-border pt-8 lg:sticky lg:top-24 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <h2 className="section-label">Stack</h2>
            <ul className="mt-6 space-y-2.5">
              {project.stack.map((tech) => (
                <li key={tech} className="font-mono text-sm text-muted">
                  {tech}
                </li>
              ))}
            </ul>

            {project.caseStudy?.stackWhy ? (
              <p className="mt-8 text-sm leading-relaxed text-muted">
                {project.caseStudy.stackWhy}
              </p>
            ) : null}

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
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted transition-colors hover:text-accent"
                >
                  View source ↗
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border py-12">
        <div className="page-shell">
          <p className="font-mono text-sm text-muted">
            Need a similar build?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Message me
            </Link>
            .
          </p>
        </div>
      </section>

      {(prev || next) && (
        <nav className="border-t border-border" aria-label="Adjacent projects">
          <div className="page-shell grid sm:grid-cols-2 sm:px-0">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group border-b border-border py-10 transition-colors hover:bg-surface/40 sm:border-r sm:border-b-0 sm:pr-8"
              >
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  ← Previous
                </p>
                <p className="mt-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                  {prev.name}
                </p>
                <p className="mt-2 font-mono text-[11px] text-muted-dim">
                  {prev.kind}
                  <span className="text-border"> · </span>
                  {prev.year}
                </p>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className={`group py-10 text-right transition-colors hover:bg-surface/40 sm:pl-8 ${
                  prev ? "" : "sm:col-start-2"
                }`}
              >
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  Next →
                </p>
                <p className="mt-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                  {next.name}
                </p>
                <p className="mt-2 font-mono text-[11px] text-muted-dim">
                  {next.kind}
                  <span className="text-border"> · </span>
                  {next.year}
                </p>
              </Link>
            ) : null}
          </div>
        </nav>
      )}
    </div>
  );
}
