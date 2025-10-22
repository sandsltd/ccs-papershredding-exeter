import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

// Dynamic imports to reduce initial bundle size
const Header = dynamic(() => import("../components/Header"), {
  ssr: true,
  loading: () => <div className="h-16 bg-white border-b border-gray-200" />
});

const Footer = dynamic(() => import("../components/Footer"), {
  ssr: true
});

import ClientComponents from "../components/ClientComponents";
import CriticalCSS from "../components/CriticalCSS";

export const metadata: Metadata = {
  title: "Paper Shredding Bournemouth | Professional Document Destruction | Secure Shredding",
  description: "Professional paper shredding services in Bournemouth. Secure document destruction for homes and businesses. BS EN 15713 compliant. Collection and drop-off services available. Free quotes.",
  keywords: "paper shredding bournemouth, document destruction bournemouth, secure shredding bournemouth, confidential waste bournemouth, shredding service bournemouth, document disposal bournemouth, paper destruction bournemouth",
  alternates: {
    canonical: "https://papershreddingbournemouth.co.uk",
  },
  openGraph: {
    title: "Paper Shredding Bournemouth | Professional Document Destruction",
    description: "Professional paper shredding services in Bournemouth. Secure document destruction for homes and businesses. BS EN 15713 compliant.",
    url: "https://papershreddingbournemouth.co.uk",
    siteName: "Paper Shredding Bournemouth",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://papershreddingbournemouth.co.uk/images/paper-shredding-bournemouth.jpg",
        width: 1200,
        height: 630,
        alt: "Paper Shredding Bournemouth - Professional Document Destruction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper Shredding Bournemouth | Professional Document Destruction",
    description: "Professional paper shredding services in Bournemouth. BS EN 15713 compliant.",
    images: ["https://papershreddingbournemouth.co.uk/images/paper-shredding-bournemouth.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
      </head>
      <body className="bg-white text-black">
        <CriticalCSS />
        <ClientComponents 
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          ADS_CONVERSION_ID="AW-923018527"
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}