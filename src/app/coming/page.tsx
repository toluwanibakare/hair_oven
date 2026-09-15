import type { Metadata } from "next";
import { ComingSoonContent } from "./coming-content";

export const metadata: Metadata = {
  title: "Build in Progress • Digital Flagship Preparation",
  description:
    "Our website is almost ready. HAIR OVEN is putting the final touches on our digital flagship. Sourcing single-donor raw reserves, Oven Veil™ technology, and bespoke Atelier commissions.",
  openGraph: {
    title: "Build in Progress • HAIR OVEN Digital Flagship",
    description:
      "Our website is almost ready. HAIR OVEN is preparing our digital flagship to present rare reserve hair collections and bespoke Atelier services.",
    url: "https://hairoven.com/coming",
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

export default function ComingSoonPage() {
  return <ComingSoonContent />;
}
