import type { Metadata } from "next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.brand} — ${site.fullName}`,
    template: `%s | ${site.brand}`,
  },
  description: `${site.fullName} (${site.brand}) — ${site.headline}`,
  metadataBase: new URL(site.contact.portfolio),
  icons: {
    icon: [{ url: "/images/logo-transparent.png", type: "image/png" }],
    apple: [{ url: "/images/logo-transparent.png" }],
  },
  openGraph: {
    title: `${site.brand} — ${site.fullName}`,
    description: site.headline,
    url: site.contact.portfolio,
    siteName: site.brand,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.brand} — ${site.fullName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — ${site.fullName}`,
    description: site.headline,
    images: [site.ogImage],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.brand,
  url: site.contact.portfolio,
  jobTitle: site.role,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: site.location,
  },
  sameAs: [site.contact.github, site.contact.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${plexMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-[var(--header-h)]">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
