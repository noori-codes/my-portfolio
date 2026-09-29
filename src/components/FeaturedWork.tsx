import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

/** Strong secondaries only — keeps flagships in focus */
const HOME_SECONDARY = new Set([
  "the-wild-oasis",
  "natours",
  "laslesvpn",
]);

export function FeaturedWork() {
  const featured = site.projects.filter((p) => p.featured);
  const others = site.projects.filter((p) => HOME_SECONDARY.has(p.slug));

  return (
    <section id="work" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4 sm:mb-16">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Flagship projects</h2>
            <p className="section-lede">
              Two products built end to end—product thinking, full-stack
              execution, and polish.
            </p>
          </div>
          <Link
            href="/work"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            All work →
          </Link>
        </Reveal>

        <div className="space-y-16 sm:space-y-20">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 50}>
              <FeaturedProject
                project={project}
                index={i}
                reverse={i % 2 === 1}
              />
            </Reveal>
          ))}
        </div>

        {others.length > 0 ? (
          <div className="mt-16 border-t border-border pt-10 sm:mt-20">
            <Reveal className="mb-2 flex flex-wrap items-end justify-between gap-3">
              <p className="section-label">Also shipping</p>
              <Link
                href="/work"
                className="font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                Full archive →
              </Link>
            </Reveal>
            <div className="border-t border-border">
              {others.map((project, i) => (
                <Reveal key={project.slug} delay={i * 40}>
                  <ProjectCard project={project} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
