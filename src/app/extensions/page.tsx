"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const extensionSubcategories = [
  { id: "all" },
  { id: "raw" },
  { id: "virgin" },
  { id: "bundles" },
  { id: "clip-ins" },
  { id: "tape-ins" },
  { id: "tips" },
  { id: "closures" },
  { id: "frontals" },
  { id: "ponytails" },
];

export default function ExtensionsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const extensionProducts = products.filter(
    (p) =>
      p.category.toLowerCase().includes("bundle") ||
      p.category.toLowerCase().includes("closure") ||
      p.category.toLowerCase().includes("frontal") ||
      p.category.toLowerCase().includes("extension") ||
      p.id.includes("raw") ||
      p.id.includes("bundle")
  );

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1600&auto=format&fit=crop"
            alt="Hair Extensions"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-transparent to-transparent" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-[700px]">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#D4AF37] font-semibold">
              {t.extensions.eyebrow}
            </span>
            <h1 className="font-serif text-[44px] sm:text-[60px] lg:text-[72px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light">
              {t.extensions.title}
            </h1>
            <p className="mt-6 text-sm lg:text-base text-[#E8DDC9]/80 leading-7 max-w-[54ch]">
              {t.extensions.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center text-xs tracking-[0.14em] uppercase">
              <a
                href="#catalog"
                className="h-[48px] px-8 bg-[#D4AF37] text-[#2B1B12] font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors"
              >
                {t.extensions.shopCta} <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/atelier"
                className="h-[48px] px-8 border border-white/20 text-white inline-flex items-center hover:bg-white/10 transition-colors"
              >
                {t.extensions.atelierCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategory Pills Navigation */}
      <section className="sticky top-[108px] z-30 bg-[#F5EFE6] border-b border-[#2B1B12]/10 py-3.5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 overflow-x-auto no-scrollbar flex items-center gap-3">
          {extensionSubcategories.map((sub, i) => (
            <button
              key={sub.id}
              onClick={() => setActiveTab(sub.id)}
              className={`px-5 py-2 rounded-full text-[11px] tracking-[0.12em] uppercase font-semibold whitespace-nowrap transition-all ${
                activeTab === sub.id
                  ? "bg-[#2B1B12] text-[#FFFCF8] shadow-sm"
                  : "bg-white/80 text-[#2B1B12]/70 hover:bg-white hover:text-[#2B1B12] border border-[#2B1B12]/10"
              }`}
            >
              {t.extensions.subs[i] ?? sub.id}
            </button>
          ))}
        </div>
      </section>

      {/* Main Catalog */}
      <section id="catalog" className="max-w-[1600px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-4 border-b border-[#2B1B12]/10">
          <div>
            <span className="text-[10px] tracking-[0.18em] uppercase text-[#B8860B] font-semibold">
              {t.extensions.curated}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-1 font-light">
              {t.extensions.catTitle}
            </h2>
          </div>
          <div className="text-xs text-[#57534E] mt-2 md:mt-0 font-medium">
            {t.extensions.showingA} {extensionProducts.length} {t.extensions.showingB}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {extensionProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="large" />
          ))}
        </div>
      </section>

      {/* Quality Standard Callout without generic icons */}
      <section className="bg-[#EDE6D6]/50 border-t border-[#2B1B12]/10 py-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          {t.extensions.quality.map((q, i) => (
          <div key={q.title} className="p-8 bg-white border border-[#2B1B12]/08 rounded-sm">
            <span className="font-serif text-xl text-[#B8860B] font-semibold">0{i + 1} /</span>
            <h3 className="font-serif text-xl text-[#2B1B12] mt-2">{q.title}</h3>
            <p className="text-xs text-[#57534E] leading-6 mt-2">
              {q.body}
            </p>
          </div>
          ))}
        </div>
      </section>
    </div>
  );
}
