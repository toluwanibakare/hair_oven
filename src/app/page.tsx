import { Hero } from "@/components/sections/hero";
import { BrandIntro } from "@/components/sections/brand-intro";
import { Collections } from "@/components/sections/collections";
import { SignatureSpotlight } from "@/components/sections/signature-spotlight";
import { OvenVeil } from "@/components/sections/oven-veil";
import { ShopCollection } from "@/components/sections/shop-collection";
import { FromAfrica } from "@/components/sections/from-africa";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#FFFCF8]">
      <Hero />
      <BrandIntro />
      <Collections />
      <SignatureSpotlight />
      <OvenVeil />
      <ShopCollection />
      <FromAfrica />
      <SocialProof />
      <FinalCta />
    </div>
  );
}
