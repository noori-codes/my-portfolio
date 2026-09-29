import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectCard } from "@/components/ProjectCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected projects by ${site.fullName} — full-stack apps, APIs, and modern frontends.`,
};

export default function WorkPage() {
  const featured = site.projects.filter((p) => p.featured);
  const rest = site.projects.filter((p) => !p.featured);

  return (
    <div className="pb-24">
      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="section-label">Work</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Selected projects
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            Full-stack products and frontends with public demos—built end to
            end.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl space-y-20 px-5 sm:space-y-28 sm:px-8">
          {featured.map((project, i) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={i}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {rest.length > 0 ? (
        <section className="border-t border-border py-14 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="section-label mb-6">Archive</p>
            <div className="border-t border-border">
              {rest.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
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
