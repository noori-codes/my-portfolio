import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.fullName} — projects, teaching, and collaboration.`,
};

const links = [
  {
    label: "Email",
    href: `mailto:${site.contact.email}`,
    value: site.contact.email,
    hint: "Fastest reply",
  },
  {
    label: "GitHub",
    href: site.contact.github,
    value: "github.com/noori-codes",
    hint: "Code & repos",
    external: true,
  },
  {
    label: "YouTube",
    href: site.contact.youtube,
    value: "@techwithimx",
    hint: "Teaching & tech",
    external: true,
  },
  {
    label: "Location",
    href: null,
    value: site.location,
    hint: "Based in",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="pb-28">
      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="section-label">Contact</p>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-accent uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              Available
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Let&apos;s build something
          </h1>
          <p className="section-lede mt-6">
            Projects, teaching, or collaboration—reach out anytime. Email is the
            fastest way to get a reply.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="divide-y divide-border border-y border-border">
            {links.map((item) => (
              <div key={item.label} className="py-5">
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  {item.label}
                  <span className="ml-2 text-muted-dim/70 normal-case tracking-normal">
                    · {item.hint}
                  </span>
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    {...("external" in item && item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-2 inline-block text-base break-all transition-colors hover:text-accent sm:text-lg"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-base sm:text-lg">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div>
            <p className="section-label">Send a message</p>
            <p className="mt-3 mb-8 max-w-md text-sm text-muted">
              Drop a note below and I&apos;ll reply by email.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
