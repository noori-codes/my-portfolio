import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.fullName} — full-stack developer and computer instructor.`,
};

const skillGroups = [
  { label: "Frontend", items: site.skills.frontend },
  { label: "Backend", items: site.skills.backend },
  { label: "Data", items: site.skills.database },
  { label: "Tools", items: site.skills.tools },
] as const;

const featuredNames = site.projects
  .filter((p) => p.featured)
  .map((p) => p.name)
  .join(", ");

export default function AboutPage() {
  return (
    <div className="pb-28">
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_20%,rgba(var(--accent-rgb),0.07),transparent_45%)]"
          aria-hidden
        />
        <div className="page-shell relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div className="max-w-xl">
            <p className="section-label">About</p>
            <h1 className="mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Products in production.
              <span className="mt-2 block text-foreground/90">
                Teaching in the room.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {site.fullName} — {site.role} based in {site.location}. I ship
              full-stack apps and teach people the craft behind them.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/work" className="btn btn-primary">
                See the work
              </Link>
              <a
                href={site.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                @techwithimx ↗
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto lg:max-w-md">
            <div
              className="pointer-events-none absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-rgb),0.14),transparent_68%)] blur-2xl"
              aria-hidden
            />
            <div className="about-photo relative aspect-4/5 overflow-hidden border border-border/70 bg-surface-2 shadow-[0_30px_80px_-44px_rgba(0,0,0,0.9)]">
              <Image
                src={site.profileImage}
                alt={site.fullName}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 400px"
                className="object-cover object-[center_12%] saturate-[0.92]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent"
                aria-hidden
              />
            </div>
            <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
              {site.availability}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="section-label">Story</p>
            <h2 className="section-title max-w-sm">
              Build it. Ship it. Teach it.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              {site.summary}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-dim">
              Right now that looks like {featuredNames}—real deploys, not
              tutorial clones.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="page-shell">
          <Reveal className="mb-12">
            <p className="section-label">Two lanes</p>
            <h2 className="section-title">How I spend my days</h2>
          </Reveal>

          <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                Ship
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Full-stack products
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                Auth, APIs, databases, and polished UIs—end to end. I care about
                product thinking as much as the stack.
              </p>
              <ul className="mt-6 space-y-2.5 font-mono text-sm text-muted-dim">
                {site.services.map((service) => (
                  <li key={service.title} className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden />
                    {service.title}
                  </li>
                ))}
              </ul>
              <Link
                href="/work"
                className="mt-7 inline-block font-mono text-sm text-accent transition-opacity hover:opacity-80"
              >
                Browse projects →
              </Link>
            </Reveal>

            <Reveal delay={70}>
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                Teach
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Computer instructor
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-muted">
                {site.experience[0]?.description}
              </p>
              <p className="mt-5 font-mono text-[11px] tracking-wide text-muted-dim">
                {site.experience[0]?.topics.join(" · ")}
              </p>
              <a
                href={site.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block font-mono text-sm text-accent transition-opacity hover:opacity-80"
              >
                Watch @techwithimx ↗
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <div className="page-shell">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Stack</p>
              <h2 className="section-title">Tools I ship with</h2>
            </div>
            <p className="max-w-xs font-mono text-[11px] leading-relaxed tracking-wide text-muted-dim">
              Focused JavaScript stack—clear layers, practical tools.
            </p>
          </Reveal>

          <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 40}>
                <h3 className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80} className="mt-10 border-t border-border pt-7">
            <p className="font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
              Concepts
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.concepts.join(" · ")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-14 sm:py-16">
        <div className="page-shell grid gap-10 sm:grid-cols-3">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
              Languages
            </p>
            <ul className="mt-4 space-y-3">
              {site.languages.map((lang) => (
                <li key={lang.name}>
                  <p className="font-medium">{lang.name}</p>
                  <p className="font-mono text-xs text-muted-dim">{lang.level}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={50}>
            <p className="font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
              Learning now
            </p>
            <ul className="mt-4 space-y-2">
              {site.learning.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90}>
            <p className="font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
              Focus
            </p>
            <ul className="mt-4 space-y-2">
              {site.goals.slice(0, 3).map((goal) => (
                <li key={goal} className="text-sm text-muted">
                  {goal}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[10px] leading-relaxed tracking-wide text-muted-dim">
              Also studying · {site.education.level}, {site.education.grade}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="page-shell">
          <Reveal>
            <p className="section-label">Contact</p>
            <h2 className="section-title max-w-xl">
              Building something—or teaching a room?
            </h2>
            <p className="section-lede">
              Projects, APIs, curriculum, or collaboration. One message is
              enough.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
              <a
                href={`mailto:${site.contact.email}`}
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                {site.contact.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
