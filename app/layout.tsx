import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Tailor House | Bespoke Tailoring in Bangalore",
  description: "Experience the art of bespoke tailoring in Bangalore. Premier custom suits, wedding sherwanis, and handcrafted luxury menswear. Creating legacies, one stitch at a time.",
  openGraph: {
    title: "The Tailor House | Bespoke Tailoring in Bangalore",
    description: "Premier bespoke tailoring house in Bangalore. Handcrafted custom suits and wedding wear.",
    type: "website",
    locale: "en_IN",
  },
  verification: {
    google: "FOJM0mviqtEH3wBBf2axZ9ILWBKHo9fO25VQMjQGk-g",
  },
};

import Footer from "@/components/Footer";

// ... existing imports

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ChatWidget from "@/components/ChatWidget";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>
            <Preloader />
            <CustomCursor />
            {children}
            <Footer />
            <ChatWidget />
            <ThemeToggle />
          </SmoothScroll>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Tailor",
              "name": "The Tailoring House",
              "url": "https://the-tailor-house.vercel.app",
              "description": "Luxury bespoke tailoring house crafting custom suits and garments with precision and heritage craftsmanship.",
              "areaServed": {
                "@type": "City",
                "name": "Bangalore"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "IN"
              },
              "priceRange": "$$$",
              "sameAs": []
            })
          }}
        />
      </body>
    </html>
  );
}
