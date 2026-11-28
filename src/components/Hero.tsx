import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const stageProjects = site.projects.filter((p) => p.featured).slice(0, 3);

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="page-shell relative grid items-center gap-12 py-16 sm:gap-14 sm:py-20 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-10 lg:gap-12 lg:py-24">
        <div className="max-w-xl">
          <p className="animate-rise index-mark">
            {site.fullName}
            <span className="text-muted-dim"> · </span>
            {site.location}
          </p>

          <h1 className="animate-rise delay-1 mt-6 font-sans text-[clamp(4.5rem,15vw,8.5rem)] leading-[0.82] font-bold tracking-[-0.07em] text-foreground">
            {site.brand}
          </h1>

          <p className="animate-rise delay-2 mt-7 max-w-md font-serif text-xl leading-snug text-foreground/90 sm:text-2xl sm:leading-snug">
            {site.headline}
          </p>

          <p className="animate-rise delay-2 mt-4 max-w-md text-sm leading-relaxed text-muted">
            Full-stack products—from the first pixel to the final query.
          </p>

          <div className="animate-rise delay-3 mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link href="/work" className="btn btn-primary">
              Selected work
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              Start a conversation →
            </Link>
          </div>
        </div>

        <div className="animate-rise delay-2 relative">
          <div className="product-stage" aria-hidden>
            {stageProjects[2]?.image ? (
              <div className="product-stage__card product-stage__card--c">
                <Image
                  src={stageProjects[2].image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 70vw, 320px"
                  className="object-cover object-top"
                />
              </div>
            ) : null}
            {stageProjects[1]?.image ? (
              <div className="product-stage__card product-stage__card--b">
                <Image
                  src={stageProjects[1].image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 80vw, 360px"
                  className="object-cover object-top"
                />
              </div>
            ) : null}
            {stageProjects[0]?.image ? (
              <div className="product-stage__card product-stage__card--a">
                <Image
                  src={stageProjects[0].image}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover object-top"
                />
              </div>
            ) : null}
          </div>
          <p className="mt-5 font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
            FrameOne · LinkHub · IMX OS
          </p>
        </div>
      </div>
    </section>
  );
}
