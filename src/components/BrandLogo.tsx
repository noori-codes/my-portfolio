import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  size?: "sm" | "md" | "lg";
  linked?: boolean;
  className?: string;
  priority?: boolean;
  /** Show IMX text beside the mark (header) */
  wordmark?: boolean;
};

const sizes = {
  sm: "h-9 w-11",
  md: "h-11 w-14",
  lg: "h-14 w-[4.5rem]",
} as const;

const wordmarkClass = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
} as const;

export function BrandLogo({
  size = "sm",
  linked = true,
  className = "",
  priority = false,
  wordmark = false,
}: Props) {
  const box = sizes[size];

  const mark = (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span className={`relative inline-block shrink-0 ${box}`}>
        <Image
          src={site.logo}
          alt=""
          fill
          sizes={size === "lg" ? "72px" : size === "md" ? "56px" : "44px"}
          priority={priority}
          className="object-contain object-center"
        />
      </span>
      {wordmark ? (
        <span
          className={`font-sans font-bold tracking-[-0.04em] text-foreground ${wordmarkClass[size]}`}
        >
          {site.brand}
        </span>
      ) : null}
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
      className="inline-flex shrink-0 transition-opacity hover:opacity-90"
    >
      {mark}
    </Link>
  );
}
