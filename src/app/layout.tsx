import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daria Karpenko - Portfolio | Développeur Web Full Stack",
  description: "Portfolio de Daria Karpenko, développeur web full stack spécialisée en Next.js, React, TypeScript. Recherche alternance en développement web. Découvrez mes projets et compétences.",
  keywords: ["développeur web", "full stack", "Next.js", "React", "TypeScript", "alternance", "portfolio", "Bordeaux", "ESD"],
  authors: [{ name: "Daria Karpenko" }],
  creator: "Daria Karpenko",
  publisher: "Daria Karpenko",
  metadataBase: new URL("https://portfolio.karpenkodaria.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daria Karpenko - Portfolio | Développeur Web Full Stack",
    description: "Portfolio de Daria Karpenko, développeur web full stack spécialisée en Next.js, React, TypeScript. Recherche alternance en développement web.",
    url: "https://portfolio.karpenkodaria.com",
    siteName: "Daria Karpenko Portfolio",
    images: [
      {
        url: "/img.png",
        width: 1200,
        height: 630,
        alt: "Daria Karpenko - Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daria Karpenko - Portfolio | Développeur Web Full Stack",
    description: "Portfolio de Daria Karpenko, développeur web full stack. Recherche alternance en développement web.",
    images: ["/img.png"],
    creator: "@karpetoryba",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black bg-gradient-to-b from-white to-neutral-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
