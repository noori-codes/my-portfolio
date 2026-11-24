import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function FeaturedWork() {
  const featured = site.projects.filter((p) => p.featured);
  const [lead, ...rest] = featured;

  if (!lead) return null;

  return (
    <section id="work" className="border-b border-border py-20 sm:py-28">
      <div className="page-shell">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4 sm:mb-16">
          <div>
            <p className="section-label">Work</p>
            <h2 className="section-title">Flagship products</h2>
            <p className="section-lede">
              Built end to end—auth, APIs, polish, and real deploys.
            </p>
          </div>
          <Link
            href="/work"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            All work →
          </Link>
        </Reveal>

        <Reveal>
          <FeaturedProject project={lead} index={0} />
        </Reveal>

        {rest.length > 0 ? (
          <Reveal delay={40} className="mt-16 border-t border-border sm:mt-20">
            <p className="pt-8 font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
              Also flagship
            </p>
            <div className="mt-2">
              {rest.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={i + 1}
                />
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
