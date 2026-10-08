"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { products, collections } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { WatermarkImage } from "@/components/watermark-image";
import { useLanguage } from "@/context/language-context";

const categories = ["Wigs", "Bundles", "Closures & Frontals", "Tools & Care"];

const textures: { slug: string; label: string }[] = [
  { slug: "straight", label: "Straight" },
  { slug: "body-wave", label: "Body Wave" },
  { slug: "loose-wave", label: "Loose Wave" },
  { slug: "deep-wave", label: "Deep Wave" },
  { slug: "curly", label: "Curly" },
  { slug: "kinky", label: "Kinky" },
];

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.18em] uppercase text-[#A68B5B] font-semibold mb-1.5">{label}</span>
      <span className="relative block">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-11 appearance-none pl-4 pr-10 border border-[rgba(28,18,14,0.12)] bg-white text-[11px] tracking-[0.12em] uppercase font-medium text-[#2B1B12] outline-none cursor-pointer hover:border-[#B8860B] focus:border-[#2B1B12] transition-colors"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B1B12]/60" strokeWidth={1.5} />
      </span>
    </label>
  );
}

export function ShopCollection() {
  const { t, tr } = useLanguage();
  const [sort, setSort] = useState("featured");
  const [collection, setCollection] = useState("all");
  const [category, setCategory] = useState("all");
  const [subCategory, setSubCategory] = useState("all");
  const [texture, setTexture] = useState("all");

  const subCategories = useMemo(
    () => Array.from(new Set(products.filter((p) => p.category === category && p.subCategory).map((p) => p.subCategory as string))),
    [category]
  );

  const changeCategory = (v: string) => {
    setCategory(v);
    setSubCategory("all");
  };

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (collection === "all" || p.collection === collection) &&
        (category === "all" || p.category === category) &&
        (subCategory === "all" || p.subCategory === subCategory) &&
        (texture === "all" || p.textureType === texture)
    );

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "bestseller") list = [...list].sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));

    return list;
  }, [sort, collection, category, subCategory, texture]);

  const hasFilters = collection !== "all" || category !== "all" || texture !== "all";
  const clearFilters = () => {
    setCollection("all");
    setCategory("all");
    setSubCategory("all");
    setTexture("all");
  };

  const activeChips = [
    collection !== "all" && { key: "collection", label: tr(collections.find((c) => c.slug === collection)?.name ?? collection), clear: () => setCollection("all") },
    category !== "all" && { key: "category", label: tr(category), clear: () => changeCategory("all") },
    subCategory !== "all" && { key: "type", label: tr(subCategory), clear: () => setSubCategory("all") },
    texture !== "all" && { key: "texture", label: tr(textures.find((x) => x.slug === texture)?.label ?? texture), clear: () => setTexture("all") },
  ].filter((c): c is { key: string; label: string; clear: () => void } => Boolean(c));

  return (
    <section id="shop" className="bg-[#FFFCF8] py-16 lg:py-24 border-t border-[#2B1B12]/08 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">{t.shop.eyebrow}</div>
            <h2 className="font-serif text-[36px] lg:text-[48px] leading-none tracking-[-0.02em] mt-3">{t.shop.title}</h2>
            <p className="text-sm text-[#57534E] mt-3 max-w-[54ch]">{t.shop.body}</p>
          </div>
        </div>

        {/* Discovery Filters */}
        <div className="mt-8 border-y border-[#2B1B12]/10 py-5">
          <div className={`grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 ${subCategories.length > 0 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
            <FilterSelect
              label={tr("Collection")}
              value={collection}
              onChange={setCollection}
              options={[{ value: "all", label: tr("All Collections") }, ...collections.map((c) => ({ value: c.slug, label: tr(c.name) }))]}
            />
            <FilterSelect
              label={tr("Category")}
              value={category}
              onChange={changeCategory}
              options={[{ value: "all", label: tr("All Categories") }, ...categories.map((c) => ({ value: c, label: tr(c) }))]}
            />
            {subCategories.length > 0 && (
              <FilterSelect
                label={tr("Type")}
                value={subCategory}
                onChange={setSubCategory}
                options={[{ value: "all", label: tr("All Types") }, ...subCategories.map((c) => ({ value: c, label: tr(c) }))]}
              />
            )}
            <FilterSelect
              label={tr("Texture")}
              value={texture}
              onChange={setTexture}
              options={[{ value: "all", label: tr("All Textures") }, ...textures.map((x) => ({ value: x.slug, label: tr(x.label) }))]}
            />
            <FilterSelect
              label={tr("Sort")}
              value={sort}
              onChange={setSort}
              options={[
                { value: "featured", label: t.shop.sortFeatured },
                { value: "bestseller", label: t.shop.sortBest },
                { value: "price-asc", label: t.shop.sortAsc },
                { value: "price-desc", label: t.shop.sortDesc },
              ]}
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[11px] tracking-[0.14em] uppercase text-[#57534E] font-medium">
              {filtered.length} {tr(filtered.length === 1 ? "Piece" : "Pieces")}
            </span>
            {activeChips.map((chip) => (
              <button
                key={chip.key}
                onClick={chip.clear}
                className="inline-flex items-center gap-1.5 h-7 pl-3 pr-2 bg-[#2B1B12] text-white text-[10px] tracking-[0.12em] uppercase font-medium rounded-xs hover:bg-[#B8860B] transition-colors"
              >
                {chip.label}
                <X className="w-3 h-3" strokeWidth={1.75} />
              </button>
            ))}
            {hasFilters && (
              <button onClick={clearFilters} className="text-[10px] tracking-[0.16em] uppercase text-[#B8860B] font-semibold hover:underline">
                {tr("Clear all")}
              </button>
            )}
          </div>
        </div>

        {/* Complete Catalog Grid displaying ALL filtered products */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {filtered.map((p) => (
            <Reveal key={p.id}>
              <ProductCard product={p} variant="large" />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center font-serif text-lg text-[#78716C]">
            {t.shop.empty}
          </div>
        )}

        {/* Editorial Image & House Guide Block */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative aspect-[16/9] md:aspect-[2.2] overflow-hidden bg-[#F5EFE6] group">
            <WatermarkImage
              src="/products/editorial-blowdry.jpg"
              alt="Editorial hair styling"
              containerClassName="absolute inset-0 w-full h-full"
              imageClassName="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              watermarkSize="lg"
              showWatermark={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/60 via-[#2B1B12]/20 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 p-6 lg:p-8 z-20">
              <div className="text-[10px] tracking-[0.16em] uppercase text-white/80">{t.shopHome.editorialEyebrow}</div>
              <div className="font-serif text-white text-[24px] leading-none mt-2">{t.shopHome.editorialTitle}</div>
              <Link href="/collections/sapphire" className="mt-4 inline-flex h-9 px-5 bg-white text-[#2B1B12] text-[11px] tracking-[0.14em] uppercase items-center font-medium hover:bg-[#E8DDC9] transition-colors">
                {t.shopHome.editorialCta}
              </Link>
            </div>
          </div>
          <div className="bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)] p-8 flex flex-col justify-center">
            <div className="text-[10px] tracking-[0.18em] uppercase text-[#A68B5B]">{t.shopHome.veilEyebrow}</div>
            <div className="font-serif text-[22px] leading-tight mt-3">{t.shopHome.veilTitle}</div>
            <p className="text-sm leading-6 text-[#57534E] mt-3">{t.shopHome.veilBody}</p>
            <Link href="/heirloom-guide" className="mt-6 text-[11px] tracking-[0.14em] uppercase underline underline-offset-4 decoration-[#C2A47A] hover:text-[#A68B5B]">
              {t.shopHome.veilCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
