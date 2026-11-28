import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function BuilderNote() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="hero-photo-wrap mx-auto max-w-[17rem] lg:mx-0 lg:max-w-[19rem]">
            <span className="hero-dot hero-dot--a" aria-hidden />
            <span className="hero-dot hero-dot--b" aria-hidden />
            <span className="hero-dot hero-dot--c" aria-hidden />
            <div className="hero-photo relative aspect-4/5 overflow-hidden bg-surface-2">
              <Image
                src={site.profileImage}
                alt={site.fullName}
                fill
                sizes="(max-width: 1024px) 70vw, 320px"
                className="object-cover object-[center_14%] saturate-[0.94]"
              />
              <div className="hero-photo-veil" aria-hidden />
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <p className="section-kicker">The builder</p>
          <h2 className="section-title max-w-lg">
            Curious enough to open the stack.
          </h2>
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-muted">
            {site.summary}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-dim">
            Based in {site.location}. I care about systems you can explain,
            interfaces you can feel, and shipping when it&apos;s ready—not when
            a tutorial ends.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link href="/about" className="btn btn-outline btn-sm">
              More about me
            </Link>
            <Link
              href="/work"
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              See the work →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
