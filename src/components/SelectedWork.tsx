import Image from "next/image";
import Link from "next/link";
import { BrowserFrame } from "@/components/BrowserFrame";
import { Reveal } from "@/components/Reveal";
import { site, type Project } from "@/lib/site";

function StackLine({ project }: { project: Project }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-muted-dim">
      {project.stack.slice(0, 5).map((tech) => (
        <li key={tech} className="flex items-center gap-2">
          <span className="size-1 bg-accent/80" aria-hidden />
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
      <Link href={`/work/${project.slug}`} className="btn btn-outline btn-sm">
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
  );
}

function FrameOneBlock({ project }: { project: Project }) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        {project.image ? (
          <BrowserFrame
            src={project.image}
            alt={`${project.name} screenshot`}
            url={project.live}
            href={`/work/${project.slug}`}
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        ) : null}
      </div>
      <div className="lg:col-span-5">
        <p className="index-mark">01 — Flagship</p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 font-mono text-sm text-muted">{project.tagline}</p>
        <p className="mt-5 max-w-md font-serif text-[1.05rem] leading-relaxed text-muted">
          {project.description}
        </p>
        <StackLine project={project} />
        <ProjectActions project={project} />
      </div>
    </article>
  );
}

function LinkHubBlock({ project }: { project: Project }) {
  return (
    <article className="grid items-center gap-10 border-t border-border pt-16 sm:pt-20 lg:grid-cols-12 lg:gap-12">
      <div className="order-2 lg:order-1 lg:col-span-5">
        <p className="index-mark">02 — Flagship</p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 font-mono text-sm text-muted">{project.tagline}</p>
        <p className="mt-5 max-w-md font-serif text-[1.05rem] leading-relaxed text-muted">
          {project.description}
        </p>
        <StackLine project={project} />
        <ProjectActions project={project} />
      </div>
      <div className="order-1 lg:order-2 lg:col-span-7">
        {project.image ? (
          <div className="relative">
            <div className="absolute -inset-3 border border-border/60 sm:-inset-4" aria-hidden />
            <BrowserFrame
              src={project.image}
              alt={`${project.name} screenshot`}
              url={project.live}
              href={`/work/${project.slug}`}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ImxOsBlock({ project }: { project: Project }) {
  return (
    <article className="border-t border-border pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="index-mark justify-center">03 — Flagship</p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-3 font-mono text-sm text-muted">{project.tagline}</p>
        <p className="mx-auto mt-5 max-w-xl font-serif text-[1.05rem] leading-relaxed text-muted">
          {project.description}
        </p>
      </div>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {project.image ? (
          <div className="overflow-hidden border border-border bg-surface-2">
            <div className="relative aspect-16/10">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        ) : null}

        <div>
          <p className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
            Inside the OS
          </p>
          <ul className="mt-5 space-y-4">
            {project.highlights.slice(0, 4).map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <StackLine project={project} />
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  const featured = site.projects.filter((p) => p.featured);
  const [frameone, linkhub, imxOs] = featured;

  return (
    <section id="work" className="border-b border-border py-20 sm:py-28">
      <div className="page-shell">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4 sm:mb-16">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">Products I stand behind</h2>
            <p className="section-lede">
              Three full-stack builds—auth, APIs, polish, and public deploys.
            </p>
          </div>
          <Link
            href="/work"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Full archive →
          </Link>
        </Reveal>

        <div className="space-y-16 sm:space-y-20">
          {frameone ? (
            <Reveal>
              <FrameOneBlock project={frameone} />
            </Reveal>
          ) : null}
          {linkhub ? (
            <Reveal delay={40}>
              <LinkHubBlock project={linkhub} />
            </Reveal>
          ) : null}
          {imxOs ? (
            <Reveal delay={60}>
              <ImxOsBlock project={imxOs} />
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
