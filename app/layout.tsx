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
  title: "Bespoke Tailoring | Handcrafted Luxury",
  description: "Indian bespoke tailoring house. Crafted for generations.",
};

import Footer from "@/components/Footer";

// ... existing imports

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ChatWidget from "@/components/ChatWidget";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-background text-foreground`}
      >
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          {children}
          <Footer />
          <ChatWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
