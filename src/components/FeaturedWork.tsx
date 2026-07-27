import Link from "next/link";
import { site } from "@/lib/site";
import { ProjectCard } from "./ProjectCard";

export function FeaturedWork() {
  const featured = site.projects.find((p) => p.featured) ?? site.projects[0];
  const others = site.projects.filter((p) => p.slug !== featured.slug).slice(0, 2);

  return (
    <section className="relative border-t border-border py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Selected work
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects that prove the stack
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            All work →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard project={featured} featured />
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
