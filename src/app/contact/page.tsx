import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.fullName} — projects, teaching, and collaboration.`,
};

const sideLinks = [
  {
    label: "Email",
    href: `mailto:${site.contact.email}`,
    value: site.contact.email,
  },
  {
    label: "GitHub",
    href: site.contact.github,
    value: "noori-codes",
    external: true,
  },
  {
    label: "YouTube",
    href: site.contact.youtube,
    value: "@techwithimx",
    external: true,
  },
  {
    label: "Location",
    href: null,
    value: site.location,
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
            Send a message below. I usually reply within a day or two.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <p className="section-label">Message</p>
            <p className="mt-3 mb-8 max-w-md text-sm text-muted">
              Name, email, and what you need help with.
            </p>
            <ContactForm />
          </div>

          <aside className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="section-label">Other ways</p>
            <p className="mt-3 mb-8 text-sm text-muted">
              Prefer a direct link? Use these.
            </p>
            <div className="divide-y divide-border border-y border-border">
              {sideLinks.map((item) => (
                <div key={item.label} className="py-4">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...("external" in item && item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="mt-1.5 inline-block text-sm break-all transition-colors hover:text-accent sm:text-base"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-sm sm:text-base">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
