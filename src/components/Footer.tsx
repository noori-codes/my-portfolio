import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const mainNav = site.nav.filter((item) => item.path !== "/contact");

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <BrandLogo size="sm" />
              <p className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                {site.brand}
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Full-stack apps, teaching, and products worth shipping.
            </p>
            <p className="mt-3 font-mono text-xs text-muted-dim">
              © {year} {site.fullName}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-14">
            <nav
              className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm"
              aria-label="Footer"
            >
              {mainNav.map((item) => (
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

            <div>
              <Link href="/contact" className="btn btn-primary btn-sm">
                Contact me
              </Link>
              <p className="mt-3 font-mono text-[11px] text-muted-dim">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
