import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--header-h))] overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_40%,rgba(var(--accent-rgb),0.06),transparent_50%)]"
        aria-hidden
      />

      <div className="page-shell relative grid min-h-[calc(100svh-var(--header-h))] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:py-24">
        <div className="max-w-xl">
          <p className="animate-rise font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {site.fullName}
            <span className="text-muted-dim"> · </span>
            {site.location}
          </p>

          <h1 className="animate-rise delay-1 mt-5 font-sans text-[clamp(4.25rem,14vw,8rem)] leading-[0.84] font-bold tracking-[-0.06em] text-foreground">
            {site.brand}
          </h1>

          <p className="animate-rise delay-2 mt-6 max-w-lg text-lg leading-snug text-foreground/90 sm:text-2xl sm:leading-snug">
            {site.headline}
          </p>

          <div className="animate-rise delay-3 mt-10">
            <Link href="/work" className="btn btn-primary">
              View work
            </Link>
          </div>
        </div>

        <div className="animate-rise delay-2 relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:mx-0 lg:ml-auto lg:max-w-[22rem]">
          <div className="hero-photo-wrap">
            <span className="hero-dot hero-dot--a" aria-hidden />
            <span className="hero-dot hero-dot--b" aria-hidden />
            <span className="hero-dot hero-dot--c" aria-hidden />
            <div className="hero-photo relative aspect-4/5 overflow-hidden bg-surface-2">
              <Image
                src={site.profileImage}
                alt={site.fullName}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover object-[center_14%] saturate-[0.94] contrast-[1.03]"
              />
              <div className="hero-photo-veil" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
