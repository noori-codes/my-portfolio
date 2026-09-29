import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const proof = [
  { label: "LinkHub", href: "/work/linkhub" },
  { label: "IMX OS", href: "/work/imx-os" },
  { label: "Teaching", href: "/about" },
  { label: "Available", href: "/contact" },
] as const;

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--header-h))] overflow-hidden border-b border-border">
      <div
        className="hero-photo absolute inset-y-0 right-0 hidden w-[52%] lg:block"
        aria-hidden
      >
        <Image
          src={site.profileImage}
          alt=""
          fill
          priority
          sizes="52vw"
          className="object-cover object-[center_6%] saturate-[0.88] contrast-[1.06] brightness-[0.95]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/55 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-background/75 via-transparent to-background/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(61,214,140,0.08),transparent_55%)]" />
        <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-accent/35 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--header-h))] w-full max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="section-label animate-fade-up">{site.availability}</p>

          <h1 className="animate-fade-up delay-1 mt-6 font-sans text-[clamp(4rem,13vw,7.5rem)] leading-[0.88] font-bold tracking-[-0.055em] text-foreground">
            {site.brand}
          </h1>

          <p className="animate-fade-up delay-2 mt-6 max-w-lg text-xl leading-snug text-foreground/90 sm:text-2xl">
            {site.headline}
          </p>

          <p className="animate-fade-up delay-3 mt-5 font-mono text-sm text-muted">
            {site.fullName}
            <span className="text-muted-dim"> · </span>
            {site.role}
            <span className="text-muted-dim"> · </span>
            {site.location}
          </p>

          <ul className="animate-fade-up delay-3 mt-7 flex flex-wrap items-center gap-x-1 gap-y-2 font-mono text-[11px] tracking-[0.12em] text-muted-dim uppercase">
            {proof.map((item, i) => (
              <li key={item.label} className="flex items-center">
                {i > 0 ? (
                  <span className="mx-2.5 text-border sm:mx-3" aria-hidden>
                    /
                  </span>
                ) : null}
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="animate-fade-up delay-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/work" className="btn btn-primary">
              View work
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              Contact me →
            </Link>
          </div>
        </div>

        <div className="animate-fade-up delay-4 relative mt-12 aspect-4/5 w-full max-w-sm overflow-hidden border border-border lg:hidden">
          <Image
            src={site.profileImage}
            alt={site.fullName}
            fill
            priority
            sizes="90vw"
            className="object-cover object-[center_8%] saturate-[0.9]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent"
            aria-hidden
          />
        </div>

        <a
          href="#intro"
          className="hero-scroll animate-fade-up delay-5 mt-12 inline-flex w-fit items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-muted-dim uppercase transition-colors hover:text-accent lg:mt-16"
        >
          <span className="hero-scroll__line" aria-hidden />
          Scroll
        </a>
      </div>
    </section>
  );
}
