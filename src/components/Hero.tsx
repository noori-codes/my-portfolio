import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

const proof = ["LinkHub", "IMX OS", "Teaching"] as const;

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-var(--header-h))] overflow-hidden">
      <div
        className="hero-photo absolute inset-y-0 right-0 hidden w-[48%] lg:block xl:w-[50%]"
        aria-hidden
      >
        <Image
          src={site.profileImage}
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover object-[center_16%] saturate-[0.9] contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/55 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/25" />
        <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-accent/25 to-transparent" />
      </div>

      <div className="absolute inset-0 lg:hidden" aria-hidden>
        <Image
          src={site.profileImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%] opacity-25 saturate-[0.75]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/75 via-background/88 to-background" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-var(--header-h))] w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8 lg:py-24">
        <div className="animate-fade-up flex max-w-xl items-center gap-3">
          <BrandLogo size="sm" linked={false} priority />
          <p className="section-label">{site.availability}</p>
        </div>

        <h1 className="animate-fade-up delay-1 mt-7 font-sans text-[clamp(3.75rem,12vw,7rem)] leading-[0.9] font-bold tracking-[-0.05em] text-foreground">
          {site.brand}
        </h1>

        <p className="animate-fade-up delay-2 mt-6 max-w-lg text-xl leading-snug text-foreground/90 sm:text-2xl">
          {site.headline}
        </p>

        <p className="animate-fade-up delay-3 mt-5 font-mono text-sm text-muted">
          {site.fullName}
          <span className="text-muted-dim"> · </span>
          {site.role}
        </p>

        <ul className="animate-fade-up delay-3 mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-[0.12em] text-muted-dim uppercase">
          {proof.map((item, i) => (
            <li key={item} className="flex items-center gap-3">
              {i > 0 ? (
                <span className="text-border" aria-hidden>
                  /
                </span>
              ) : null}
              <span className="text-muted transition-colors hover:text-accent">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="animate-fade-up delay-4 mt-11 flex flex-wrap items-center gap-x-6 gap-y-3">
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
    </section>
  );
}
