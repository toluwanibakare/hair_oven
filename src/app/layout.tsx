import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HAIR OVEN - Exceptional Hair. Extraordinary You.",
    template: "%s - HAIR OVEN",
  },
  description:
    "Born in Africa, crafted without compromise. Luxury human hair - Raw Reserve, Signature & Essentials. Oven Veil™ invisible hairline. Bespoke atelier. Where beauty meets the art of hair.",
  keywords: ["hair", "wigs", "raw hair", "virgin hair", "lace frontal", "hair oven", "bespoke wig", "luxury hair"],
  openGraph: {
    title: "HAIR OVEN - Exceptional Hair. Extraordinary You.",
    description: "Where beauty meets the art of hair. Luxury hair house born in Africa, serving women globally.",
    type: "website",
  },
};

import { ScrollFeatures } from "@/components/scroll-features";
import { PageTransition } from "@/components/page-transition";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#FFFCF8] text-[#1A1A1A]">
        <CartProvider>
          <ScrollFeatures />
          <Navigation />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
