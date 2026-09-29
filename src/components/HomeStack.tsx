import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const groups = [
  { label: "Frontend", items: site.skills.frontend },
  { label: "Backend", items: site.skills.backend },
  { label: "Data", items: site.skills.database },
  { label: "Tools", items: site.skills.tools },
] as const;

export function HomeStack() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-10 sm:mb-12">
          <p className="section-label">Stack</p>
          <h2 className="section-title max-w-lg">Tools I use to ship</h2>
          <p className="section-lede">
            A focused JavaScript stack for full-stack apps—clear layers,
            practical tools.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 50}>
              <div className="border-t border-border pt-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
                    {group.label}
                  </h3>
                  <span className="font-mono text-[10px] text-muted-dim">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/88">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-12 border-t border-border pt-7">
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted-dim uppercase">
            Concepts
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {site.concepts.map((concept) => (
              <span
                key={concept}
                className="font-mono text-[12px] text-muted transition-colors hover:text-accent"
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
