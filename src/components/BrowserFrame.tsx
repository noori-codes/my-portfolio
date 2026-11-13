import Link from "next/link";
import type { ReactNode } from "react";
import { BrowserFrameImage } from "@/components/BrowserFrameImage";

type Props = {
  src: string;
  alt: string;
  url?: string | null;
  /** Optional case-study / detail link for the screenshot viewport. */
  href?: string;
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
  href,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 55vw",
  className = "",
  aspectClassName = "aspect-4/3 sm:aspect-16/10",
  children,
}: Props) {
  const host = displayUrl(url);
  const hasLive = Boolean(url);

  const media = (
    <BrowserFrameImage
      src={src}
      alt={href ? "" : alt}
      priority={priority}
      sizes={sizes}
    />
  );

  return (
    <div className={`browser-frame group/frame ${className}`}>
      <div className="browser-frame__chrome">
        <div className="browser-frame__dots" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        {hasLive && url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="browser-frame__url browser-frame__url--live"
            aria-label={`Open live demo ${host}`}
          >
            <span className="browser-frame__lock" aria-hidden />
            {host}
          </a>
        ) : (
          <div className="browser-frame__url" aria-hidden>
            <span className="browser-frame__lock" />
            {host}
          </div>
        )}
      </div>

      <div
        className={`browser-frame__viewport relative overflow-hidden bg-surface ${aspectClassName}`}
      >
        {href ? (
          <Link
            href={href}
            className="absolute inset-0 block"
            aria-label={alt}
          >
            {media}
          </Link>
        ) : (
          media
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent"
          aria-hidden
        />
        {children}
      </div>
    </div>
  );
}
