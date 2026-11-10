import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="section-title mt-5 max-w-2xl">
            Have a product in mind?
          </h2>
          <p className="section-lede">
            Tell me what you&apos;re building—I&apos;ll reply within a day or two.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
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
        </Reveal>
      </div>
    </section>
  );
}
