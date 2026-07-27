import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="border border-border bg-surface/40 p-6 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <p className="section-label">Contact</p>
              <span className="inline-flex items-center gap-2 border border-accent/25 bg-accent-glow px-2.5 py-1 font-mono text-[10px] tracking-wider text-accent uppercase">
                <span className="size-1.5 rounded-full bg-accent" />
                Available
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a project, a class, or a collaboration in mind?
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              I build full-stack apps and teach practical computing. Email is the
              fastest path—or jump straight to GitHub.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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

            <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              <a
                href={`mailto:${site.contact.email}`}
                className="group border border-border bg-background/40 p-4 transition-colors hover:border-accent/35"
              >
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  Email
                </p>
                <p className="mt-2 text-sm break-all transition-colors group-hover:text-accent">
                  {site.contact.email}
                </p>
              </a>
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border bg-background/40 p-4 transition-colors hover:border-accent/35"
              >
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  GitHub
                </p>
                <p className="mt-2 text-sm transition-colors group-hover:text-accent">
                  noori-codes
                </p>
              </a>
              <a
                href={site.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border bg-background/40 p-4 transition-colors hover:border-accent/35"
              >
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  YouTube
                </p>
                <p className="mt-2 text-sm transition-colors group-hover:text-accent">
                  @techwithimx
                </p>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
