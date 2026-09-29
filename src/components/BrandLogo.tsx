import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  size?: "sm" | "md" | "lg";
  linked?: boolean;
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: "h-9 w-11",
  md: "h-11 w-14",
  lg: "h-14 w-[4.5rem]",
} as const;

export function BrandLogo({
  size = "sm",
  linked = true,
  className = "",
  priority = false,
}: Props) {
  const box = sizes[size];

  const mark = (
    <span className={`relative inline-block ${box} ${className}`}>
      <Image
        src={site.logo}
        alt={linked ? "" : site.brand}
        fill
        sizes={size === "lg" ? "72px" : size === "md" ? "56px" : "44px"}
        priority={priority}
        className="object-contain object-center"
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
