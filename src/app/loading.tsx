/** Silent route fallback — no “Loading” label competing with first paint. */
export default function Loading() {
  return (
    <div
      className="min-h-[calc(100svh-var(--header-h))]"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="page-shell grid min-h-[calc(100svh-var(--header-h))] items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
        <div className="max-w-xl" aria-hidden>
          <div className="h-3 w-40 bg-surface-2" />
          <div className="mt-6 h-[clamp(4.25rem,14vw,8rem)] w-[min(100%,14rem)] bg-surface-2" />
          <div className="mt-6 h-5 w-full max-w-md bg-surface" />
          <div className="mt-3 h-5 w-2/3 max-w-sm bg-surface" />
          <div className="mt-10 h-11 w-32 bg-surface-2" />
        </div>
        <div
          className="relative mx-auto aspect-4/5 w-full max-w-[19rem] bg-surface-2 sm:max-w-sm lg:mx-0 lg:ml-auto lg:max-w-[22rem]"
          aria-hidden
        />
      </div>
      <p className="sr-only">Loading page…</p>
    </div>
  );
}
