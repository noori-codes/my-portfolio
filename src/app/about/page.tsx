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
    <div className="pb-28">
      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="section-label">About</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Developer. Instructor. Builder.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/85">
            I ship full-stack web apps and teach people the craft behind them.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-4/5 w-full max-w-md overflow-hidden border border-border bg-surface-2">
              <Image
                src={site.profileImage}
                alt={site.fullName}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-[center_12%]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent"
                aria-hidden
              />
            </div>
            <div className="mt-5">
              <p className="text-lg font-semibold tracking-tight">
                {site.fullName}
              </p>
              <p className="mt-1 font-mono text-sm text-muted">
                {site.role}
                <span className="text-muted-dim"> · </span>
                {site.location}
              </p>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="border-t border-border pt-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">01</span>
                <h2 className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase">
                  Story
                </h2>
              </div>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {site.summary}
              </p>
            </div>

            <div className="mt-14 border-t border-border pt-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">02</span>
                <h2 className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase">
                  Path
                </h2>
              </div>

              <ol className="mt-8 space-y-10">
                {site.experience.map((job) => (
                  <li key={job.role} className="relative pl-6">
                    <span
                      className="absolute top-2 left-0 size-2 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span
                      className="absolute top-5 left-[3px] h-[calc(100%+1.5rem)] w-px bg-border"
                      aria-hidden
                    />
                    <h3 className="text-xl font-semibold tracking-tight">
                      {job.role}
                    </h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-muted">
                      {job.description}
                    </p>
                    <p className="mt-3 font-mono text-[11px] tracking-wide text-muted-dim">
                      {job.topics.join(" · ")}
                    </p>
                  </li>
                ))}

                <li className="relative pl-6">
                  <span
                    className="absolute top-2 left-0 size-2 rounded-full bg-accent/50"
                    aria-hidden
                  />
                  <h3 className="text-xl font-semibold tracking-tight">
                    {site.education.level}
                    <span className="text-muted"> · </span>
                    <span className="text-accent">{site.education.grade}</span>
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted">
                    {site.education.note}
                  </p>
                </li>
              </ol>
            </div>

            <div className="mt-14 grid gap-10 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <h2 className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase">
                  Languages
                </h2>
                <ul className="mt-4 space-y-3">
                  {site.languages.map((lang) => (
                    <li key={lang.name}>
                      <p className="font-medium">{lang.name}</p>
                      <p className="font-mono text-xs text-muted-dim">
                        {lang.level}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase">
                  Learning now
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {site.learning.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 border-t border-border pt-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">03</span>
                <h2 className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase">
                  How I can help
                </h2>
              </div>
              <div className="mt-8 space-y-8">
                {site.services.map((service, i) => (
                  <div
                    key={service.title}
                    className="grid gap-2 sm:grid-cols-[3rem_1fr] sm:gap-6"
                  >
                    <p className="font-mono text-sm text-muted-dim">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 border-t border-border pt-8">
              <h2 className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase">
                Focus
              </h2>
              <ul className="mt-5 space-y-3">
                {site.goals.map((goal) => (
                  <li key={goal} className="max-w-xl text-muted">
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 border-t border-border pt-10">
              <p className="max-w-md text-muted">
                Want to work together on a product, API, or curriculum?
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/contact" className="btn btn-primary">
                  Contact me
                </Link>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="font-mono text-sm text-muted transition-colors hover:text-accent"
                >
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
