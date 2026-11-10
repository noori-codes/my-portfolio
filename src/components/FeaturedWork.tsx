import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function FeaturedWork() {
  const featured = site.projects.filter((p) => p.featured);

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

        <div className="space-y-20 sm:space-y-24">
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
      </div>
    </section>
  );
}
