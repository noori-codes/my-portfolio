import type { Metadata } from "next";
import Link from "next/link";
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
            Full-stack apps and frontends with public demos—Node, Express,
            MongoDB, React, and more.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl space-y-5 px-5 sm:px-8">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

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
