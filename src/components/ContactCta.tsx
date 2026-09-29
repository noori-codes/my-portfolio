import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="border-t border-border py-28 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <p className="section-label">Next step</p>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-accent uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              Available for work
            </span>
          </div>

          <h2 className="section-title mt-5 max-w-2xl">
            Have a project in mind?
          </h2>
          <p className="section-lede">
            Tell me what you&apos;re building—I&apos;ll reply by email.
          </p>

          <div className="mt-10">
            <Link href="/contact" className="btn btn-primary">
              Contact me
            </Link>
            <p className="mt-5 font-mono text-sm text-muted-dim">
              Or write directly:{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-muted transition-colors hover:text-accent"
              >
                {site.contact.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
