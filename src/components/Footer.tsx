import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <BrandLogo size="sm" wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.headline}
            </p>
          </div>

          <div className="sm:text-right">
            <nav
              className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm sm:justify-end"
              aria-label="Footer"
            >
              {site.nav.map((item) => (
                <Link key={item.path} href={item.path} className="footer-link">
                  {item.name}
                </Link>
              ))}
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
              <a
                href={site.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                YouTube
              </a>
            </nav>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-4 inline-block font-mono text-xs text-muted-dim transition-colors hover:text-accent"
            >
              {site.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-dim">
            © {year} {site.fullName}
          </p>
          <p className="font-mono text-xs text-muted-dim">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
