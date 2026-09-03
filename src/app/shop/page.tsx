"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, collections } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import Link from "next/link";

const categories = ["All", "Wigs", "Bundles", "Closures & Frontals", "Hair Extensions", "Bespoke Hair"];

function ShopContent() {
  const sp = useSearchParams();
  const initialCat = sp.get("cat") || "All";
  const [cat, setCat] = useState(initialCat === "raw" ? "All" : initialCat);
  const [sort, setSort] = useState("featured");
  const [collection, setCollection] = useState<string>("all");

  const filtered = useMemo(() => {
    let list = [...products];
    if (collection !== "all") list = list.filter((p) => p.collection === collection);
    if (cat !== "All") {
      const map: Record<string, string> = { Wigs: "Wigs", Bundles: "Bundles", "Closures & Frontals": "Closures & Frontals" };
      const target = map[cat] || cat;
      list = list.filter((p) => p.category.toLowerCase().includes(target.toLowerCase()) || (cat === "Bespoke Hair" && p.category.includes("Bespoke")));
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "bestseller") list.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    return list;
  }, [cat, sort, collection]);

  return (
    <div className="bg-[#FFFCF8]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-wrap gap-6 justify-between items-end">
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">Discovery</div>
            <h1 className="font-serif text-[36px] lg:text-[48px] leading-none tracking-[-0.02em] mt-3">Shop the Collection</h1>
            <p className="text-sm text-[#57534E] mt-3 max-w-[48ch]">Wigs, bundles, frontals, extensions and care - crafted to the same standard.</p>
          </div>
          <div className="flex items-center gap-3">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-10 px-4 border border-[rgba(28,18,14,0.12)] bg-white text-sm outline-none">
              <option value="featured">Featured</option>
              <option value="bestseller">Bestsellers</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`h-9 px-4 border text-[11px] tracking-[0.12em] uppercase transition-colors ${cat === c ? "bg-[#2B1B12] text-white border-[#2B1B12]" : "bg-[#FDF8F0] border-[rgba(28,18,14,0.12)] hover:border-[#2B1B12]"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button onClick={() => setCollection("all")} className={`px-4 py-2 border text-[11px] tracking-[0.12em] uppercase ${collection === "all" ? "bg-[#2B1B12] text-white border-[#2B1B12]" : "bg-white border-[rgba(28,18,14,0.12)]"}`}>All Collections</button>
          {collections.map((col) => (
            <button key={col.slug} onClick={() => setCollection(col.slug)} className={`px-4 py-2 border text-[11px] tracking-[0.12em] uppercase capitalize ${collection === col.slug ? "bg-[#2B1B12] text-white border-[#2B1B12]" : "bg-white border-[rgba(28,18,14,0.12)]"}`}>{col.slug}</button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {filtered.map((p) => (
            <Reveal key={p.id}>
              <ProductCard product={p} variant="large" />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && <div className="py-16 text-center text-[#78716C]">No products found for this filter.</div>}

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)] p-6">
            <div className="text-[11px] tracking-[0.14em] uppercase text-[#A68B5B]">Need guidance?</div>
            <div className="font-serif text-lg mt-2">Not sure which texture fits your lifestyle?</div>
            <Link href="/heirloom-guide" className="mt-3 inline-flex text-[11px] tracking-[0.14em] uppercase underline decoration-[#C2A47A]">Open Heirloom Guide →</Link>
          </div>
          <div className="bg-[#2B1B12] text-white p-6">
            <div className="text-[11px] tracking-[0.14em] uppercase text-[#C2A47A]">WhatsApp Concierge</div>
            <div className="font-serif text-lg mt-2">Speak to a specialist.</div>
            <a href="https://wa.me/2340000000000" className="mt-3 inline-flex h-9 px-5 bg-white text-[#2B1B12] text-[11px] tracking-[0.14em] uppercase items-center">Chat on WhatsApp</a>
          </div>
          <div className="bg-white border border-[rgba(28,18,14,0.06)] p-6">
            <div className="text-[11px] tracking-[0.14em] uppercase text-[#A68B5B]">Bespoke</div>
            <div className="font-serif text-lg mt-2">Created around you.</div>
            <Link href="/bespoke" className="mt-3 inline-flex text-[11px] tracking-[0.14em] uppercase underline decoration-[#C2A47A]">Begin Bespoke →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-[#78716C]">Loading collection…</div>}>
      <ShopContent />
    </Suspense>
  );
}
