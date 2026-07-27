import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.fullName} — projects, teaching, and collaboration.`,
};

const links = [
  { label: "Email", href: `mailto:${site.contact.email}`, value: site.contact.email },
  { label: "GitHub", href: site.contact.github, value: "github.com/noori-codes", external: true },
  { label: "YouTube", href: site.contact.youtube, value: "@techwithimx", external: true },
  { label: "Location", href: null, value: site.location },
] as const;

export default function ContactPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Projects, teaching, or collaboration—reach out anytime. Email is the
            fastest way to get a reply.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Direct links
            </h2>
            <ul className="mt-6 space-y-5">
              {links.map((item) => (
                <li key={item.label} className="border-b border-border pb-4">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-muted-dim uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...("external" in item && item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="mt-1 inline-block text-lg text-foreground transition-colors hover:text-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs text-muted-dim">
              status: <span className="text-accent">{site.availability.toLowerCase()}</span>
            </p>
          </div>

          <div className="border border-border bg-surface/50 p-6 sm:p-8">
            <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Send a message
            </h2>
            <p className="mt-2 mb-6 text-sm text-muted">
              Fills a mailto draft in your email client—no spam backend, just a
              direct line.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
