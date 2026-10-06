"use client";

import { notFound, useParams } from "next/navigation";
import { collections, products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";
import { WatermarkImage } from "@/components/watermark-image";
import { useLanguage } from "@/context/language-context";

export default function CollectionPage() {
  const { t } = useLanguage();
  const params = useParams<{ slug: string }>();
  const rawSlug = params.slug;
  const slug = rawSlug === "signature" ? "sapphire" : rawSlug === "essentials" ? "essence" : rawSlug;
  const col = collections.find((c) => c.slug === slug);
  if (!col) return notFound();

  const list = products.filter((p) => {
    if (p.collection === slug) return true;
    if (slug === "sapphire" && p.collection === "signature") return true;
    if (slug === "essence" && p.collection === "essentials") return true;
    if (slug === "atelier" && (p.collection === "atelier" || p.category === "Bespoke Hair" || p.id.includes("bespoke") || p.id.includes("bridal"))) return true;
    return false;
  });

  const themes: Record<string, { bg: string; text: string; accent: string }> = {
    private: { bg: "bg-[#2B1B12]", text: "text-[#E8DDC9]", accent: "bg-[#C2A47A]" },
    sapphire: { bg: "bg-[#2B1B12]", text: "text-[#FDF8F0]", accent: "bg-[#E8DDC9]" },
    essence: { bg: "bg-[#F5EFE6]", text: "text-[#2B1B12]", accent: "bg-[#2B1B12]" },
    atelier: { bg: "bg-[#2B1B12]", text: "text-[#E8DDC9]", accent: "bg-[#C2A47A]" },
  };
  const theme = themes[slug] || themes.private;

  return (
    <div className="bg-[#FFFCF8]">
      {/* Collection Hero Header */}
      <div className={`relative overflow-hidden ${theme.bg} ${theme.text} min-h-[460px] sm:min-h-[520px] flex items-end`}>
        <div className="absolute inset-0 opacity-60 sm:opacity-50">
          {"video" in col && col.video ? (
            <video
              src={col.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <WatermarkImage
              src={col.image}
              alt={col.name}
              containerClassName="w-full h-full"
              imageClassName="w-full h-full object-cover object-[center_20%] sm:object-center"
              watermarkSize="lg"
              showWatermark={false}
            />
          )}
        </div>
        {/* Subtle dark gradient backing for flawless text legibility without blocking model imagery */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/60 to-[#2B1B12]/20" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10 pt-28 pb-10 sm:py-20 lg:py-24 w-full">
          <div className="max-w-[720px]">
            <div className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#D4AF37] font-semibold">
              {slug === "private"
                ? "PRIVATE COLLECTION"
                : slug === "signature"
                ? "SIGNATURE COLLECTION"
                : "ESSENTIALS COLLECTION"}
            </div>
            <h1 className="font-serif text-[32px] sm:text-[48px] lg:text-[58px] leading-[1.05] tracking-[-0.02em] mt-2 font-light text-white">
              {slug === "private"
                ? col.tagline
                : slug === "signature"
                ? "Meticulously selected. Expertly finished to HAIR OVEN standards."
                : col.tagline}
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-6 sm:leading-7 text-white/90 font-serif italic max-w-[54ch]">
              {col.description}
            </p>
            {"poeticText" in col &&
              col.poeticText &&
              col.poeticText.length > 0 &&
              col.poeticText.some(
                (p: string) =>
                  p !== (col.description as string) &&
                  !(col.description as string).includes(p)
              ) && (
                <div className="mt-4 sm:mt-5 space-y-1 text-[11px] sm:text-xs tracking-[0.14em] uppercase text-[#D4AF37] font-medium border-l-2 border-[#D4AF37]/50 pl-4">
                  {col.poeticText.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              )}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 items-center">
              <span className="bg-white text-[#2B1B12] px-4 py-2 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-semibold">
                {col.years}
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.14em] uppercase opacity-80 text-white/80">
                {t.collectionPage.from}{" "}
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  maximumFractionDigits: 0,
                }).format(col.priceFrom)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Catalog Grid */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex items-center justify-between border-b border-[#2B1B12]/10 pb-4 mb-8">
          <h2 className="font-serif text-2xl lg:text-3xl text-[#2B1B12] font-light">
            Collection Selection ({list.length} {list.length === 1 ? "Piece" : "Pieces"})
          </h2>
          <Link href="/shop" className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#B8860B] hover:underline">
            View All House Pieces →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} variant="large" />
          ))}
        </div>
        {list.length === 0 && (
          <div className="py-16 text-center text-[#78716C]">{t.collectionPage.empty}</div>
        )}
      </div>

      {/* Collection Comparison Switcher */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-16">
        <div className="border border-[rgba(28,18,14,0.08)] bg-[#FDF8F0] p-6 lg:p-8 grid md:grid-cols-3 gap-6">
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className={`p-6 border transition-colors ${
                c.slug === slug
                  ? "bg-[#2B1B12] text-white border-[#2B1B12]"
                  : "bg-white border-[rgba(28,18,14,0.08)] hover:border-[#2B1B12]"
              }`}
            >
              <div className="text-[10px] tracking-[0.16em] uppercase opacity-60">
                {c.tagline}
              </div>
              <div className="font-serif text-lg mt-2">{c.name}</div>
              <div
                className={`text-xs mt-2 ${
                  c.slug === slug ? "text-white/60" : "text-[#57534E]"
                }`}
              >
                {c.description}
              </div>
              <div className="text-[11px] tracking-[0.14em] uppercase mt-4 underline underline-offset-4">
                {c.slug === slug ? t.collectionPage.viewing : t.collectionPage.explore}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
