"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { products, type Product } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { useLanguage } from "@/context/language-context";

type TextureKey = NonNullable<Product["textureType"]>;

const textures: Record<TextureKey, { name: string; note: string }> = {
  straight: { name: "Straight", note: "Clean, glass-smooth lines." },
  "body-wave": { name: "Body Wave", note: "Soft, sculpted movement from root to tip." },
  "loose-wave": { name: "Loose Wave", note: "Easy, open waves with natural swing." },
  "deep-wave": { name: "Deep Wave", note: "Defined, full-bodied waves." },
  curly: { name: "Curly", note: "Defined curls with lasting bounce." },
  kinky: { name: "Kinky", note: "Dense, natural coil." },
};

export default function TexturePage() {
  const { tr } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  if (!(slug in textures)) return notFound();
  const tex = textures[slug as TextureKey];
  const list = products.filter((p) => p.textureType === slug);

  return (
    <div className="bg-[#FFFCF8]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-16 pb-8 lg:pt-24">
        <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">{tr("By Texture")}</div>
        <h1 className="font-serif text-[36px] lg:text-[56px] leading-none tracking-[-0.02em] mt-3 text-[#2B1B12]">{tr(tex.name)}</h1>
        <p className="text-sm text-[#57534E] mt-3 max-w-[54ch]">{tr(tex.note)}</p>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-20">
        <div className="border-t border-[#2B1B12]/10 pt-8">
          {list.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} variant="large" />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center font-serif text-lg text-[#78716C]">
              {tr("Arriving soon.")}
              <div className="mt-6">
                <Link href="/#shop" className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#B8860B] hover:underline">
                  {tr("View All House Pieces →")}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
