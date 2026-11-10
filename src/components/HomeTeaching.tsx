import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function HomeTeaching() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
        <Reveal>
          <p className="section-label">Teaching</p>
          <h2 className="section-title mt-4 max-w-lg">
            I teach the craft behind the ship.
          </h2>
          <p className="section-lede">
            Computer instructor by day—Windows, Linux, Office, and web
            foundations—plus practical lessons on{" "}
            <span className="text-foreground/85">@techwithimx</span>.
          </p>
        </Reveal>

        <Reveal delay={70}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 lg:border-t-0 lg:pt-0">
            <a
              href={site.contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Watch on YouTube ↗
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
