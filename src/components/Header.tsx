"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialIcons } from "@/components/SocialIcons";
import { site } from "@/lib/site";

function isActivePath(pathname: string, path: string) {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

const mainNav = site.nav.filter(
  (item) => item.path !== "/" && item.path !== "/contact",
);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [navPath, setNavPath] = useState(pathname);
  const onContact = pathname === "/contact";

  if (navPath !== pathname) {
    setNavPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          ? "border-b border-border/80 bg-background/75 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="page-shell flex h-full items-center gap-4">
        <BrandLogo size="md" priority wordmark />

        <nav
          className="ml-auto hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const active = isActivePath(pathname, item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link${active ? " is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.name}
              </Link>
            );
          })}

          <span className="mx-0.5 h-3.5 w-px bg-border" aria-hidden />

          <SocialIcons />

          {!onContact ? (
            <Link href="/contact" className="btn btn-primary btn-sm">
              Contact
            </Link>
          ) : (
            <span className="font-mono text-xs tracking-wide text-accent">
              Contact
            </span>
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <SocialIcons />
          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-border bg-surface/80 transition-colors hover:border-accent/40"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-3.5 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-3.5 bg-foreground ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-3.5 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-b border-border bg-background/95 px-5 py-5 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.path);
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`nav-link nav-link--mobile${active ? " is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {!onContact ? (
            <Link href="/contact" className="btn btn-primary mt-5 w-full">
              Contact
            </Link>
          ) : null}
        </nav>
      ) : null}
    </header>
  );
}
