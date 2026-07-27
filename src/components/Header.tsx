"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[var(--header-h)] transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center gap-4 px-5 sm:px-8">
        <BrandLogo size="sm" />

        <nav className="ml-auto hidden items-center gap-8 md:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active =
              pathname === item.path || pathname.startsWith(`${item.path}/`);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`font-mono text-sm transition-colors ${
                  active ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            GitHub ↗
          </a>
        </nav>

        <button
          type="button"
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border bg-surface md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[4px] rotate-45" : ""}`}
          />
          <span className={`block h-px w-4 bg-foreground ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-b border-border bg-surface px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {site.nav.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="font-mono text-sm text-foreground">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-accent"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
