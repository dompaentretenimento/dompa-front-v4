import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:8881"
  ),
  title: {
    default: "Dompa",
    template: "%s | Dompa",
  },
  description:
    "Dompa é uma plataforma que revoluciona o mercado com soluções inovadoras para campanhas promocionais, oferecendo experiências únicas e impulsionando marcas.",
  openGraph: {
    title: "Dompa",
    description:
      "Dompa é uma plataforma que revoluciona o mercado com soluções inovadoras para campanhas promocionais, oferecendo experiências únicas e impulsionando marcas.",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dompa",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:8881",
  description:
    "Dompa é uma plataforma que revoluciona o mercado com soluções inovadoras para campanhas promocionais, oferecendo experiências únicas e impulsionando marcas.",
  sameAs: [
    "https://www.facebook.com/grupodompa",
    "https://www.instagram.com/grupodompa",
    "https://www.linkedin.com/company/grupodompa",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-scroll-behavior="smooth" lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-[var(--font-primary)] antialiased">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
