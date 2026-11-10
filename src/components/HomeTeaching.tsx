import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function HomeTeaching() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
        <Reveal>
          <p className="section-label">Teach</p>
          <h2 className="section-title max-w-lg">
            I teach the craft behind the ship.
          </h2>
          <p className="section-lede">
            Computer instructor covering systems, productivity tools, and web
            foundations—plus practical lessons on{" "}
            <span className="text-foreground/90">@techwithimx</span>.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-7 lg:border-t-0 lg:pt-0">
            <a
              href={site.contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              YouTube ↗
            </a>
            <Link
              href="/about"
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              About teaching →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
