import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--header-h))] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={site.profileImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] opacity-40 saturate-[0.55] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="noise-overlay absolute inset-0" aria-hidden />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--header-h))] w-full max-w-6xl flex-col justify-center px-5 py-16 sm:px-8">
        <div className="animate-fade-up flex items-center gap-3">
          <BrandLogo size="sm" linked={false} priority />
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            {site.availability}
          </p>
        </div>

        <h1 className="animate-fade-up delay-1 mt-5 font-sans text-[clamp(3.25rem,12vw,6.5rem)] leading-[0.92] font-bold tracking-[-0.04em] text-foreground">
          {site.brand}
        </h1>

        <p className="animate-fade-up delay-2 mt-4 font-mono text-sm text-muted sm:text-base">
          {site.fullName}
          <span className="text-muted-dim"> · </span>
          {site.role}
          <span className="text-muted-dim"> · </span>
          {site.location}
        </p>

        <p className="animate-fade-up delay-3 mt-6 max-w-xl text-lg leading-snug text-foreground/90 sm:text-xl">
          {site.headline}
        </p>

        <div className="animate-fade-up delay-4 mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex items-center bg-accent px-5 py-3 font-mono text-sm font-medium text-[#04140c] transition-colors hover:bg-accent-dim hover:text-foreground"
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-border bg-transparent px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-2 py-3 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            GitHub ↗
          </a>
        </div>

        <p className="animate-fade-up delay-5 mt-10 font-mono text-xs text-muted-dim sm:text-sm">
          <span className="text-accent">imx@portfolio</span>
          <span className="text-muted-dim">:~$ </span>
          <span className="cursor-blink text-muted">whoami</span>
        </p>
      </div>
    </section>
  );
}
