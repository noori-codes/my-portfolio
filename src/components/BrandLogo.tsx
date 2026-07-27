import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  size?: "sm" | "md" | "lg" | "hero";
  linked?: boolean;
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-16 w-16",
  hero: "h-[min(42vw,14rem)] w-[min(42vw,14rem)] sm:h-56 sm:w-56",
} as const;

export function BrandLogo({
  size = "sm",
  linked = true,
  className = "",
  priority = false,
}: Props) {
  const box = sizes[size];
  const src = size === "hero" ? site.logo : site.logoMark;

  const mark = (
    <span
      className={`relative inline-block overflow-hidden border border-border/60 bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(61,214,140,0.08)] ${box} ${className}`}
    >
      <Image
        src={src}
        alt={site.brand}
        fill
        sizes={
          size === "hero"
            ? "(max-width: 640px) 42vw, 224px"
            : size === "lg"
              ? "64px"
              : "44px"
        }
        priority={priority}
        className="object-cover object-center"
      />
    </span>
  );

  if (!linked) return mark;

  return (
    <Link href="/" aria-label={`${site.brand} home`} className="inline-flex shrink-0">
      {mark}
    </Link>
  );
}
