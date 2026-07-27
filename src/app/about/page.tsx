import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.fullName} — full-stack developer and computer instructor.`,
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-border py-16 sm:py-20">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            About
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Developer. Instructor. Builder.
          </h1>
          <p className="mt-2 font-mono text-sm text-accent">{site.role}</p>
          <p className="mt-4 max-w-2xl text-lg text-muted">{site.summary}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="relative aspect-square w-full max-w-[280px] overflow-hidden border border-border">
            <Image
              src={site.profileImage}
              alt={site.fullName}
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                Experience
              </h2>
              {site.experience.map((job) => (
                <div key={job.role} className="mt-4 border-l-2 border-accent/40 pl-5">
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="mt-2 text-muted">{job.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.topics.map((topic) => (
                      <span
                        key={topic}
                        className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                Education
              </h2>
              <p className="mt-3 text-lg font-semibold">
                {site.education.level}
                <span className="text-muted"> · </span>
                <span className="text-accent">{site.education.grade}</span>
              </p>
              <p className="mt-2 text-muted">{site.education.note}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                  Languages
                </h2>
                <ul className="mt-3 space-y-2">
                  {site.languages.map((lang) => (
                    <li key={lang.name} className="font-mono text-sm text-muted">
                      <span className="text-foreground">{lang.name}</span>
                      <span className="text-muted-dim"> — {lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                  Learning now
                </h2>
                <ul className="mt-3 space-y-2">
                  {site.learning.map((item) => (
                    <li key={item} className="font-mono text-sm text-muted">
                      <span className="text-accent">▹ </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                How I can help
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {site.services.map((service) => (
                  <div key={service.title} className="border border-border p-4">
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                Goals
              </h2>
              <ul className="mt-3 space-y-2">
                {site.goals.map((goal) => (
                  <li key={goal} className="flex gap-2 text-muted">
                    <span className="text-accent">→</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Work with me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
