import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  url?: string | null;
  priority?: boolean;
  sizes?: string;
  className?: string;
  aspectClassName?: string;
  children?: ReactNode;
};

function displayUrl(url?: string | null) {
  if (!url) return "imx.local/project";
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

export function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 55vw",
  className = "",
  aspectClassName = "aspect-4/3 sm:aspect-16/10",
  children,
}: Props) {
  return (
    <div className={`browser-frame group/frame ${className}`}>
      <div className="browser-frame__chrome" aria-hidden>
        <div className="browser-frame__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-frame__url">
          <span className="browser-frame__lock" />
          {displayUrl(url)}
        </div>
      </div>

      <div
        className={`browser-frame__viewport relative overflow-hidden ${aspectClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.035]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent"
          aria-hidden
        />
        {children}
      </div>
    </div>
  );
}
