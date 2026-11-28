import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function HowIBuild() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="page-shell">
        <Reveal className="max-w-2xl">
          <p className="section-kicker">How I build</p>
          <h2 className="section-title">One system, four layers</h2>
          <p className="section-lede">
            Full-stack for me means the interface, the API, the data, and the
            product shape stay in conversation—not separate handoffs.
          </p>
        </Reveal>

        <Reveal delay={50} className="capability-rail mt-12 sm:mt-14">
          {site.buildLayers.map((layer, i) => (
            <div key={layer.title} className="capability-item">
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                {String(i + 1).padStart(2, "0")}
                <span className="mt-2 block text-foreground normal-case tracking-[-0.02em] sm:mt-3 sm:text-base sm:tracking-[-0.03em]">
                  {layer.title}
                </span>
              </p>
              <p className="max-w-xl font-serif text-base leading-relaxed text-muted sm:text-lg">
                {layer.detail}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
