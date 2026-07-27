import { site } from "@/lib/site";

const groups = [
  { label: "frontend", items: site.skills.frontend },
  { label: "backend", items: site.skills.backend },
  { label: "data", items: site.skills.database },
  { label: "tools", items: site.skills.tools },
] as const;

export function StackStrip() {
  return (
    <section className="relative border-t border-border py-20 sm:py-24">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
          Stack
        </p>
        <h2 className="mt-2 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
          Tools I use to ship
        </h2>

        <div className="mt-10 overflow-hidden border border-border bg-surface">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-[#ff5f56]" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="size-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-muted-dim">
              stack.json — {site.brand}
            </span>
          </div>
          <div className="space-y-5 p-5 font-mono text-sm sm:p-6">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="text-muted-dim">
                  <span className="text-accent">&quot;{group.label}&quot;</span>
                  <span className="text-muted">: [</span>
                </p>
                <p className="pl-4 text-foreground/90">
                  {group.items.map((item, i) => (
                    <span key={item}>
                      <span className="text-muted">&quot;</span>
                      {item}
                      <span className="text-muted">&quot;</span>
                      {i < group.items.length - 1 ? (
                        <span className="text-muted">, </span>
                      ) : null}
                    </span>
                  ))}
                </p>
                <p className="text-muted">],</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
