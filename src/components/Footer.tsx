import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-3">
          <BrandLogo size="sm" />
          <p className="text-sm text-muted">
            © {year} {site.fullName}. Built with Next.js.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm" aria-label="Footer">
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
          <a href={`mailto:${site.contact.email}`} className="footer-link">
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
