import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@/components/layout/Analytics";
import { JsonLd } from "@/components/layout/JsonLd";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/config/site";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Managed Print Services",
    template: "%s | Cheetara Prints",
  },
  description: site.description,
  icons: {
    icon: site.icon,
    apple: site.icon,
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [{ url: site.logo, alt: site.name }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${bricolage.variable} ${jetbrains.variable} h-full`}>
      <body className="min-h-full bg-ground font-sans text-ink antialiased">
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.legalName,
              url: site.url,
              logo: `${site.url}${site.logo}`,
              image: `${site.url}${site.logo}`,
              description: site.description,
              areaServed: "US",
              ...(site.phone
                ? {
                    telephone: site.phone,
                    contactPoint: {
                      "@type": "ContactPoint",
                      telephone: site.phone,
                      contactType: "customer service",
                    },
                  }
                : {}),
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: site.name,
              url: site.url,
            },
          ]}
        />
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
