import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { LanguageProvider } from "@/context/language-context";
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
  title: "Build in Progress • HAIR OVEN Digital Flagship",
  description:
    "Our website is almost ready. HAIR OVEN is putting the final touches on our digital flagship. Sourcing single-donor raw reserves, Oven Veil™ technology, and bespoke Atelier commissions.",
  openGraph: {
    title: "Build in Progress • HAIR OVEN Digital Flagship",
    description:
      "Our website is almost ready. HAIR OVEN is preparing our digital flagship to present rare reserve hair collections and bespoke Atelier services.",
    url: "https://hairoven.com",
    siteName: "HAIR OVEN",
    images: [
      {
        url: "/coming_og-image.png",
        width: 1200,
        height: 630,
        alt: "HAIR OVEN Build in Progress",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build in Progress • HAIR OVEN Digital Flagship",
    description:
      "Our website is almost ready. HAIR OVEN is preparing our digital flagship to present rare reserve hair collections and bespoke Atelier services.",
    images: ["/coming_og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#FFFCF8] text-[#1A1A1A]">
        <LanguageProvider>
          <CartProvider>
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
