import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  size?: "sm" | "md";
  linked?: boolean;
  className?: string;
  priority?: boolean;
  wordmark?: boolean;
};

const sizes = {
  sm: "h-8 w-9",
  md: "h-9 w-11",
} as const;

const wordmarkClass = {
  sm: "text-sm",
  md: "text-[0.95rem]",
} as const;

export function BrandLogo({
  size = "sm",
  linked = true,
  className = "",
  priority = false,
  wordmark = false,
}: Props) {
  const mark = (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`relative inline-block shrink-0 ${sizes[size]}`}>
        <Image
          src={site.logoMark}
          alt=""
          fill
          sizes={size === "md" ? "44px" : "36px"}
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
      className="inline-flex shrink-0 transition-opacity hover:opacity-85"
    >
      {mark}
    </Link>
  );
}
