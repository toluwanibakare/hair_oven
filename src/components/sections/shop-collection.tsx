"use client";

import Link from "next/link";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

const categories = [
  "Raw & Premium Human Hair",
  "Wigs",
  "Bundles",
  "Closures & Frontals",
  "Hair Extensions",
  "Haircare",
  "Tools & Accessories",
  "Bespoke Hair",
];

export function ShopCollection() {
  const featured = products.filter((p) => p.featured);
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="bg-[#FFFCF8] py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">Discovery</div>
            <h2 className="font-serif text-[36px] lg:text-[48px] leading-none tracking-[-0.02em] mt-3">Shop the Hair Oven Collection</h2>
          </div>
          <Link href="/shop" className="hidden sm:inline-flex h-11 px-6 border border-[rgba(28,18,14,0.12)] items-center text-[11px] tracking-[0.16em] uppercase hover:bg-[#2B1B12] hover:text-white hover:border-[#2B1B12] transition-colors">
            View All Hair →
          </Link>
        </div>

        {/* Category pills - editorial */}
        <div className="mt-8 flex gap-2 overflow-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <Link key={cat} href={`/shop?cat=${encodeURIComponent(cat)}`} className="shrink-0 h-9 px-4 border border-[rgba(28,18,14,0.12)] bg-[#FDF8F0] hover:bg-[#2B1B12] hover:text-white hover:border-[#2B1B12] transition-colors text-[11px] tracking-[0.08em] uppercase whitespace-nowrap inline-flex items-center">
              {cat}
            </Link>
          ))}
        </div>

        {/* Editorial layout: large feature + grid + horizontal */}
        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          {/* Large feature */}
          <div className="lg:col-span-7">
            <Reveal>
              <ProductCard product={products[0]} variant="large" />
            </Reveal>
          </div>

          {/* Side stack */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {products.slice(1, 5).map((p) => (
              <Reveal key={p.id}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          {/* Horizontal row - full width */}
          <div className="lg:col-span-12">
            <div className="flex items-center justify-between mt-4 mb-4">
              <div className="text-[11px] tracking-[0.16em] uppercase text-[#78716C]">Bestsellers • Most loved</div>
              <Link href="/shop?sort=bestseller" className="text-[11px] tracking-[0.14em] uppercase underline underline-offset-4 decoration-[#C2A47A] hover:text-[#A68B5B]">View bestsellers</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...bestsellers, ...products.slice(0, 2)].slice(0, 4).map((p) => (
                <ProductCard key={`bs-${p.id}`} product={p} />
              ))}
            </div>
          </div>

          {/* Editorial image block */}
          <div className="lg:col-span-12 mt-4 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative aspect-[16/9] md:aspect-[2.2] overflow-hidden bg-[#F5EFE6] group">
              <img src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1400&auto=format&fit=crop" alt="Editorial lifestyle" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6 lg:p-8">
                <div className="text-[10px] tracking-[0.16em] uppercase text-white/80">Editorial</div>
                <div className="font-serif text-white text-[24px] leading-none mt-2">Movement that feels alive.</div>
                <Link href="/collections/signature" className="mt-4 inline-flex h-9 px-5 bg-white text-[#2B1B12] text-[11px] tracking-[0.14em] uppercase items-center">Shop Signature →</Link>
              </div>
            </div>
            <div className="bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)] p-8 flex flex-col justify-center">
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#A68B5B]">Oven Veil™</div>
              <div className="font-serif text-[22px] leading-tight mt-3">Sheer lace that melts.</div>
              <p className="text-sm leading-6 text-[#57534E] mt-3">Part of every wig. Part of every promise.</p>
              <Link href="/heirloom-guide" className="mt-6 text-[11px] tracking-[0.14em] uppercase underline underline-offset-4 decoration-[#C2A47A]">Learn about lace →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
