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
    icon: [{ url: "/images/imx-mark.png", type: "image/png" }],
    apple: [{ url: "/images/imx-mark.png" }],
  },
  openGraph: {
    title: `${site.brand} — ${site.fullName}`,
    description: site.headline,
    url: site.contact.portfolio,
    siteName: site.brand,
    locale: "en_US",
    type: "website",
    images: [{ url: site.logo, width: 1023, height: 768, alt: `${site.brand} logo` }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${plexMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <Header />
        <main className="flex-1 pt-[var(--header-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
