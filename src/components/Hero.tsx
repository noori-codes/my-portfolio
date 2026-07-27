import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--header-h))] overflow-hidden">
      <div className="absolute inset-0 bg-transparent" aria-hidden />
      <div className="hero-photo absolute inset-y-0 right-0 hidden w-[46%] lg:block" aria-hidden>
        <Image
          src={site.profileImage}
          alt=""
          fill
          priority
          sizes="46vw"
          className="object-cover object-[center_18%] opacity-80 saturate-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
      </div>

      <div className="absolute inset-0 lg:hidden" aria-hidden>
        <Image
          src={site.profileImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%] opacity-30 saturate-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--header-h))] w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8 lg:py-24">
        <div className="animate-fade-up flex max-w-xl items-center gap-3">
          <BrandLogo size="sm" linked={false} priority />
          <p className="section-label">{site.availability}</p>
        </div>

        <h1 className="animate-fade-up delay-1 mt-6 font-sans text-[clamp(3.25rem,11vw,6rem)] leading-[0.92] font-bold tracking-[-0.04em] text-foreground">
          {site.brand}
        </h1>

        <p className="animate-fade-up delay-2 mt-5 font-mono text-sm text-muted sm:text-base">
          {site.fullName}
          <span className="text-muted-dim"> · </span>
          {site.role}
          <span className="text-muted-dim"> · </span>
          {site.location}
        </p>

        <p className="animate-fade-up delay-3 mt-7 max-w-md text-lg leading-relaxed text-foreground/85 sm:text-xl">
          {site.headline}
        </p>

        <div className="animate-fade-up delay-4 mt-10 flex flex-wrap gap-3">
          <Link href="/work" className="btn btn-primary">
            View work
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Get in touch
          </Link>
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            GitHub ↗
          </a>
        </div>

        <p className="animate-fade-up delay-5 mt-14 font-mono text-xs text-muted-dim sm:text-sm">
          <span className="text-accent">imx@portfolio</span>
          <span className="text-muted-dim">:~$ </span>
          <span className="cursor-blink text-muted">whoami</span>
        </p>
      </div>
    </section>
  );
}
