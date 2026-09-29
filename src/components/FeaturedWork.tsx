import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function FeaturedWork() {
  const featured = site.projects.filter((p) => p.featured);
  const others = site.projects.filter((p) => !p.featured).slice(0, 4);

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4 sm:mb-20">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Projects that prove the stack</h2>
          </div>
          <Link
            href="/work"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            All work →
          </Link>
        </Reveal>

        <div className="space-y-20 sm:space-y-28">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <FeaturedProject
                project={project}
                index={i}
                reverse={i % 2 === 1}
              />
            </Reveal>
          ))}
        </div>

        {others.length > 0 ? (
          <div className="mt-20 border-t border-border pt-12 sm:mt-28">
            <Reveal className="mb-2">
              <p className="section-label">More projects</p>
            </Reveal>
            <div>
              {others.map((project, i) => (
                <Reveal key={project.slug} delay={i * 50}>
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
