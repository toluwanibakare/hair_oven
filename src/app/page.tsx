import { Hero } from "@/components/sections/hero";
import { ShopCollection } from "@/components/sections/shop-collection";
import { Collections } from "@/components/sections/collections";
import { SapphireSpotlight } from "@/components/sections/sapphire-spotlight";
import { BrandIntro } from "@/components/sections/brand-intro";
import { AtelierVideo } from "@/components/sections/atelier-video";
import { Founder } from "@/components/sections/founder";
import { OvenVeil } from "@/components/sections/oven-veil";
import { FromAfrica } from "@/components/sections/from-africa";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#FFFCF8]">
      <Hero />
      <ShopCollection />
      <Collections />
      <SapphireSpotlight />
      <BrandIntro />
      <AtelierVideo />
      <Founder />
      <OvenVeil />
      <FromAfrica />
      <SocialProof />
      <FinalCta />
    </div>
  );
}
