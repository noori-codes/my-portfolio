import type { Metadata } from "next";
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
    <div className="pb-20">
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Work
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Selected projects
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Real builds across Node, Express, MongoDB, React, and Next.js—focused
            on auth, APIs, and usable interfaces.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
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
            <a href="/contact" className="text-accent hover:underline">
              Let&apos;s talk
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
