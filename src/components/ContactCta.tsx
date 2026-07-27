import Link from "next/link";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
          Contact
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Have a project, a class, or a collaboration in mind?
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          I build full-stack apps and teach practical computing. Reach out—email
          is the fastest path.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex bg-accent px-5 py-3 font-mono text-sm font-medium text-[#04140c] transition-colors hover:bg-accent-dim hover:text-foreground"
          >
            Start a conversation
          </Link>
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {site.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
