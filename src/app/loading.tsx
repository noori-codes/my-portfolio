export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col justify-center py-20">
      <div className="page-shell">
        <p className="section-label">Loading</p>
        <div
          className="mt-5 h-12 w-full max-w-md animate-pulse bg-surface-2 sm:h-14"
          aria-hidden
        />
        <div
          className="mt-5 h-4 w-full max-w-lg animate-pulse bg-surface"
          aria-hidden
        />
        <div
          className="mt-3 h-4 w-2/3 max-w-sm animate-pulse bg-surface"
          aria-hidden
        />
        <p className="sr-only">Loading page…</p>
      </div>
    </div>
  );
}
