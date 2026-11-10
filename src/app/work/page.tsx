import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected projects by ${site.fullName} — full-stack products, APIs, and modern frontends.`,
};

const secondarySet = new Set<string>(site.secondarySlugs);

export default function WorkPage() {
  const featured = site.projects.filter((p) => p.featured);
  const archive = site.projects.filter((p) => !p.featured);
  const secondary = archive.filter((p) => secondarySet.has(p.slug));
  const earlier = archive.filter((p) => !secondarySet.has(p.slug));

  return (
    <div className="pb-28">
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(var(--accent-rgb),0.07),transparent_45%)]"
          aria-hidden
        />
        <div className="page-shell relative py-16 sm:py-20 lg:py-24">
          <p className="section-label">Work</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Built end to end.
            <span className="mt-2 block text-foreground/90">
              Shipped for real.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Flagship products with auth, APIs, and polish—then stronger builds
            and earlier practice work with public demos.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
            <span>
              <span className="text-accent">{String(featured.length).padStart(2, "0")}</span>{" "}
              flagship
            </span>
            <span>
              <span className="text-accent">{String(archive.length).padStart(2, "0")}</span>{" "}
              more projects
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-24">
        <div className="page-shell">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4 sm:mb-16">
            <div>
              <p className="section-label">Flagship</p>
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
              <p className="section-label">Also shipping</p>
              <h2 className="section-title">Stronger builds</h2>
              <p className="section-lede">
                Full-stack practice and product UIs that moved me closer to
                production work.
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
              <p className="section-label">Earlier</p>
              <h2 className="section-title">Foundations</h2>
              <p className="section-lede">
                Landing pages and experiments that taught layout, state, and
                shipping to Vercel.
              </p>
            </Reveal>
            <div className="border-t border-border">
              {earlier.map((project, i) => (
                <Reveal key={project.slug} delay={i * 35}>
                  <ProjectCard project={project} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16 sm:py-20">
        <div className="page-shell">
          <Reveal>
            <p className="section-label">Next</p>
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
