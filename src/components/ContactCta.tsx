import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="border-t border-border py-28 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <p className="section-label">Contact</p>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-accent uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              Available for work
            </span>
          </div>

          <h2 className="section-title mt-5 max-w-2xl">
            Have a project, a class, or a collaboration in mind?
          </h2>
          <p className="section-lede">
            I build full-stack apps and teach practical computing. Email is the
            fastest path—or jump straight to GitHub.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Start a conversation
            </Link>
            <a href={`mailto:${site.contact.email}`} className="btn btn-outline">
              Email me
            </a>
            <a
              href={site.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-3 sm:gap-10">
            <a
              href={`mailto:${site.contact.email}`}
              className="group block transition-transform hover:translate-x-0.5"
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                Email
              </p>
              <p className="mt-2 text-sm break-all text-foreground/90 transition-colors group-hover:text-accent">
                {site.contact.email}
              </p>
            </a>
            <a
              href={site.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-transform hover:translate-x-0.5"
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                GitHub
              </p>
              <p className="mt-2 text-sm text-foreground/90 transition-colors group-hover:text-accent">
                noori-codes
              </p>
            </a>
            <a
              href={site.contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-transform hover:translate-x-0.5"
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                YouTube
              </p>
              <p className="mt-2 text-sm text-foreground/90 transition-colors group-hover:text-accent">
                @techwithimx
              </p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
