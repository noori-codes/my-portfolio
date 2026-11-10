import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialIcons } from "@/components/SocialIcons";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="page-shell py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-16">
          <div>
            <BrandLogo size="sm" wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Shipping full-stack products and teaching the craft behind them.
            </p>
            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted-dim uppercase">
              Explore
            </p>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer">
              {site.nav.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="footer-link w-fit font-mono text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted-dim uppercase">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={`mailto:${site.contact.email}`}
                className="footer-link w-fit font-mono text-sm break-all"
              >
                {site.contact.email}
              </a>
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link w-fit font-mono text-sm"
              >
                GitHub ↗
              </a>
              <a
                href={site.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link w-fit font-mono text-sm"
              >
                YouTube ↗
              </a>
              <p className="pt-1 font-mono text-sm text-muted">{site.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-dim">
            © {year} {site.fullName}
          </p>
          <p className="font-mono text-xs text-muted-dim">
            {site.brand} · ship &amp; teach
          </p>
        </div>
      </div>
    </footer>
  );
}
