import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { SocialIcons } from "@/components/SocialIcons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.fullName} — projects, teaching, and collaboration.`,
};

export default function ContactPage() {
  return (
    <div className="pb-28">
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(var(--accent-rgb),0.07),transparent_45%)]"
          aria-hidden
        />
        <div className="page-shell relative py-16 sm:py-20 lg:py-24">
          <p className="section-label">{site.availability}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Start a conversation.
            <span className="mt-2 block text-foreground/90">
              One message is enough.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Projects, teaching, APIs, or collaboration—tell me what you&apos;re
            building. I usually reply within a day or two.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="page-shell grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <p className="section-label">Message</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Write me directly
            </h2>
            <p className="mt-3 mb-9 max-w-md text-sm leading-relaxed text-muted">
              Name, email, and a short note on the goal or timeline.
            </p>
            <ContactForm />
          </div>

          <aside className="h-fit border-t border-border pt-8 lg:sticky lg:top-24 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="section-label">Elsewhere</p>
            <p className="mt-3 mb-8 text-sm leading-relaxed text-muted">
              Prefer email or social? Use these.
            </p>

            <div className="space-y-7">
              <div>
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  Email
                </p>
                <CopyEmail className="mt-2" />
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  Social
                </p>
                <div className="mt-3 flex flex-col gap-2.5">
                  <a
                    href={site.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-muted transition-colors hover:text-accent"
                  >
                    GitHub · noori-codes ↗
                  </a>
                  <a
                    href={site.contact.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-muted transition-colors hover:text-accent"
                  >
                    YouTube · @techwithimx ↗
                  </a>
                </div>
                <div className="mt-4">
                  <SocialIcons />
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  Location
                </p>
                <p className="mt-2 text-sm text-foreground/90">{site.location}</p>
              </div>

              <div className="border-t border-border pt-7">
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-dim uppercase">
                  Response time
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Most messages get a reply within 1–2 days.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
