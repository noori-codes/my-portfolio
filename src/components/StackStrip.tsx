import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const groups = [
  { label: "Frontend", items: site.skills.frontend },
  { label: "Backend", items: site.skills.backend },
  { label: "Data", items: site.skills.database },
  { label: "Tools", items: site.skills.tools },
] as const;

export function StackStrip() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-6">
          <p className="section-label">Stack</p>
          <h2 className="section-title max-w-lg">Tools I use to ship</h2>
          <p className="mt-2 max-w-lg text-sm text-muted">
            A focused JavaScript stack for full-stack apps—clear layers,
            practical tools.
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 60}>
              <div className="h-full border border-border bg-surface/40 p-4 transition-[border-color,background] duration-300 hover:border-accent/30 hover:bg-surface">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
                    {group.label}
                  </h3>
                  <span className="font-mono text-[10px] text-muted-dim">
                    {group.items.length}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-3 border border-border bg-surface/30 p-4">
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
            Concepts
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {site.concepts.map((concept) => (
              <span
                key={concept}
                className="border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                {concept}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
