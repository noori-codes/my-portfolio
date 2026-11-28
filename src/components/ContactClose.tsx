import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function ContactClose() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(var(--accent-rgb),0.08),transparent_50%)]"
        aria-hidden
      />
      <div className="page-shell relative">
        <Reveal>
          <p className="section-kicker">Next</p>
          <h2 className="mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.045em]">
            Building something that needs a full-stack hand?
          </h2>
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-muted">
            Tell me what you&apos;re making. I usually reply within a day or
            two.
          </p>

          <div className="mt-10 flex flex-col gap-8 border-t border-border pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                <span className="size-1.5 shrink-0 bg-accent" aria-hidden />
                {site.availability}
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-3 inline-block font-mono text-sm text-muted transition-colors hover:text-accent sm:text-base"
              >
                {site.contact.email}
              </a>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0 self-start sm:self-auto">
              Write me
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
