import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { isSecondaryProject, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected projects by ${site.fullName} — full-stack products, APIs, and modern frontends.`,
};

export default function WorkPage() {
  const featured = site.projects.filter((p) => p.featured);
  const archive = site.projects.filter((p) => !p.featured);
  const secondary = archive.filter((p) => isSecondaryProject(p.slug));
  const earlier = archive.filter((p) => !isSecondaryProject(p.slug));
  const withLive = site.projects.filter((p) => Boolean(p.live)).length;

  return (
    <div className="pb-28">
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(var(--accent-rgb),0.07),transparent_48%)]"
          aria-hidden
        />
        <div className="page-shell relative py-16 sm:py-20 lg:py-24">
          <p className="section-kicker">Work</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-[-0.05em] leading-[1.02]">
            Built end to end.
            <span className="mt-2 block text-foreground/85">
              Shipped for real.
            </span>
          </h1>
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-muted">
            Flagship products first—then stronger builds with public demos, then
            earlier foundations.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
            <span>
              <span className="text-accent">
                {String(featured.length).padStart(2, "0")}
              </span>{" "}
              flagship
            </span>
            <span>
              <span className="text-accent">
                {String(withLive).padStart(2, "0")}
              </span>{" "}
              with live demos
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-24">
        <div className="page-shell">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4 sm:mb-16">
            <div>
              <p className="section-kicker">Flagship</p>
              <h2 className="section-title">Products I stand behind</h2>
            </div>
            <p className="max-w-xs font-mono text-[11px] leading-relaxed tracking-wide text-muted-dim">
              Case studies with problem, approach, and outcome.
            </p>
          </Reveal>

          <div className="space-y-20 border-t border-border pt-12 sm:space-y-24 sm:pt-16">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 40}>
                <FeaturedProject
                  project={project}
                  index={i}
                  reverse={i % 2 === 1}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {secondary.length > 0 ? (
        <section className="border-b border-border py-16 sm:py-20">
          <div className="page-shell">
            <Reveal className="mb-10">
              <p className="section-kicker">Also shipping</p>
              <h2 className="section-title">Stronger builds</h2>
              <p className="section-lede">
                Full-stack practice with a public demo—closer to production
                product work.
              </p>
            </Reveal>
            <div className="border-t border-border">
              {secondary.map((project, i) => (
                <Reveal key={project.slug} delay={i * 35}>
                  <ProjectCard project={project} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {earlier.length > 0 ? (
        <section className="border-b border-border py-16 sm:py-20">
          <div className="page-shell">
            <Reveal className="mb-10">
              <p className="section-kicker">Earlier</p>
              <h2 className="section-title">Foundations</h2>
              <p className="section-lede">
                Landing pages, games, and backend drills—honest practice, not
                flagship claims.
              </p>
            </Reveal>

            <div className="mt-2 grid gap-px border border-border bg-border sm:grid-cols-2">
              {earlier.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group flex flex-col gap-4 bg-background p-6 transition-colors hover:bg-surface sm:p-8"
                >
                  {project.image ? (
                    <div className="relative aspect-16/10 overflow-hidden border border-border bg-surface-2">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 40vw"
                        className="object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-16/10 items-center justify-center border border-border bg-surface-2 font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
                      {project.name}
                    </div>
                  )}
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.14em] text-muted-dim uppercase">
                      {project.kind}
                      <span className="text-border"> · </span>
                      {project.year}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{project.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16 sm:py-20">
        <div className="page-shell">
          <Reveal>
            <p className="section-kicker">Next</p>
            <h2 className="section-title max-w-xl">
              Want something like this built?
            </h2>
            <p className="section-lede">
              More code on GitHub. For a product, API, or collaboration—send a
              note.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                GitHub ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
