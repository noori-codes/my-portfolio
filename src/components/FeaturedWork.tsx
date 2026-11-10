import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function FeaturedWork() {
  const featured = site.projects.filter((p) => p.featured);

  return (
    <section id="work" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4 sm:mb-16">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Flagship projects</h2>
            <p className="section-lede">
              Two products built end to end—auth, APIs, polish, and real
              deploys.
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
      </div>
    </section>
  );
}
