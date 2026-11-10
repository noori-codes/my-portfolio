import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--header-h))] overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_40%,rgba(var(--accent-rgb),0.08),transparent_45%)]"
        aria-hidden
      />

      <div className="page-shell relative grid min-h-[calc(100svh-var(--header-h))] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:py-24">
        <div className="max-w-xl">
          <p className="animate-fade-up font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {site.fullName}
            <span className="text-muted-dim"> · </span>
            {site.location}
          </p>

          <h1 className="animate-fade-up delay-1 mt-5 font-sans text-[clamp(4.25rem,14vw,8rem)] leading-[0.84] font-bold tracking-[-0.06em] text-foreground">
            {site.brand}
          </h1>

          <p className="animate-fade-up delay-2 mt-6 max-w-lg text-lg leading-snug text-foreground/90 sm:text-2xl sm:leading-snug">
            {site.headline}
          </p>

          <div className="animate-fade-up delay-3 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/work" className="btn btn-primary">
              View work
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              Contact →
            </Link>
          </div>
        </div>

        <div className="animate-fade-up delay-2 relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:mx-0 lg:ml-auto lg:max-w-[22rem]">
          <div className="hero-float-glow absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-rgb),0.22),transparent_70%)] blur-3xl" aria-hidden />
          <div className="hero-float-ring absolute inset-3 border border-accent/25" aria-hidden />

          <span className="hero-dot hero-dot--a" aria-hidden />
          <span className="hero-dot hero-dot--b" aria-hidden />
          <span className="hero-dot hero-dot--c" aria-hidden />

          <div className="hero-float relative aspect-4/5 overflow-hidden bg-surface-2 shadow-[0_35px_90px_-42px_rgba(0,0,0,0.92)]">
            <Image
              src={site.profileImage}
              alt={site.fullName}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 380px"
              className="object-cover object-[center_12%] saturate-[0.92] contrast-[1.04]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-background/10"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
