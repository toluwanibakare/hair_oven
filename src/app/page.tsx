import { Hero } from "@/components/sections/hero";
import { BrandIntro } from "@/components/sections/brand-intro";
import { Collections } from "@/components/sections/collections";
import { OvenVeil } from "@/components/sections/oven-veil";
import { Craftsmanship } from "@/components/sections/craftsmanship";
import { ShopCollection } from "@/components/sections/shop-collection";
import { HairOvenWoman } from "@/components/sections/hair-oven-woman";
import { BeautyWithoutElitism } from "@/components/sections/beauty-without-elitism";
import { PrivateAtelier } from "@/components/sections/private-atelier";
import { HeirloomGuide } from "@/components/sections/heirloom-guide";
import { FromAfrica } from "@/components/sections/from-africa";
import { Founder } from "@/components/sections/founder";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <BrandIntro />
      <Collections />
      <OvenVeil />
      <ShopCollection />
      <FromAfrica />
      <SocialProof />
      <FinalCta />
    </div>
  );
}
