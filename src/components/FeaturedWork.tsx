import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { ProjectCard } from "./ProjectCard";

export function FeaturedWork() {
  const featured = site.projects.find((p) => p.featured) ?? site.projects[0];
  const others = site.projects.filter((p) => !p.featured).slice(0, 3);

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
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

        <Reveal>
          <ProjectCard project={featured} featured />
        </Reveal>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
