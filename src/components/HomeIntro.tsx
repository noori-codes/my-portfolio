import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const facts = [
  { label: "Based in", value: site.location },
  { label: "Role", value: site.role },
  { label: "Focus", value: "Next.js · NestJS · Prisma" },
  { label: "Status", value: "Open to projects" },
] as const;

export function HomeIntro() {
  return (
    <section id="intro" className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title mt-4 max-w-md">
            Developer, instructor, and product builder.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.summary}
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-mono text-sm text-accent transition-opacity hover:opacity-80"
          >
            More about me →
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <dl className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm text-foreground/90 sm:text-base">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
