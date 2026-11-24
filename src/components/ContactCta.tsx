import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="border-t border-border py-14 sm:py-16">
      <div className="page-shell">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div className="max-w-xl">
              <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                <span className="size-1.5 shrink-0 bg-accent" aria-hidden />
                {site.availability}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a product in mind?
              </h2>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-3 inline-block font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                {site.contact.email}
              </a>
            </div>

            <Link href="/contact" className="btn btn-primary shrink-0 self-start sm:self-auto">
              Start a conversation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
