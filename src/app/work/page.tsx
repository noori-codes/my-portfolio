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
  const secondary = site.projects.filter((p) => secondarySet.has(p.slug));
  const earlier = site.projects.filter(
    (p) => !p.featured && !secondarySet.has(p.slug),
  );

  return (
    <div className="pb-24">
      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="section-label">Work</p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Selected projects
          </h1>
          <p className="section-lede mt-6">
            Flagship products first—then stronger builds and earlier practice
            work with public demos.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl space-y-16 px-5 sm:space-y-20 sm:px-8">
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
      </section>

      {secondary.length > 0 ? (
        <section className="border-t border-border py-14 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="section-label mb-6">Also shipping</p>
            <div className="border-t border-border">
              {secondary.map((project, i) => (
                <Reveal key={project.slug} delay={i * 40}>
                  <ProjectCard project={project} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {earlier.length > 0 ? (
        <section className="border-t border-border py-14 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="section-label mb-2">Earlier work</p>
            <p className="mb-6 max-w-lg text-sm text-muted">
              Foundations and experiments that led to the products above.
            </p>
            <div className="border-t border-border">
              {earlier.map((project, i) => (
                <Reveal key={project.slug} delay={i * 40}>
                  <ProjectCard project={project} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-sm text-muted">
            More on{" "}
            <a
              href={site.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
            . Want something built?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Let&apos;s talk
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
