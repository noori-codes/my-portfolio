import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  size?: "sm" | "md" | "lg";
  linked?: boolean;
  className?: string;
};

const sizeClass = {
  sm: "text-base tracking-[-0.04em]",
  md: "text-lg tracking-[-0.045em]",
  lg: "text-xl tracking-[-0.05em]",
} as const;

export function BrandLogo({
  size = "md",
  linked = true,
  className = "",
}: Props) {
  const mark = (
    <span
      className={`inline-flex items-center gap-2 font-sans font-semibold text-foreground ${sizeClass[size]} ${className}`}
    >
      <span
        className="inline-block size-1.5 shrink-0 bg-accent"
        aria-hidden
      />
      {site.brand}
    </span>
  );

  if (!linked) {
    return (
      <span aria-label={site.brand} className="inline-flex shrink-0">
        {mark}
      </span>
    );
  }

  return (
    <Link
      href="/"
      aria-label={`${site.brand} home`}
      className="inline-flex shrink-0 transition-opacity hover:opacity-80"
    >
      {mark}
    </Link>
  );
}
