"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { WatermarkImage } from "@/components/watermark-image";
import { useLanguage } from "@/context/language-context";

export default function OvenVeilPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Image: shown clean, with no text over it */}
      <section className="relative w-full overflow-hidden bg-[#2B1B12] h-[48svh] sm:h-[58vh] lg:h-[70vh] max-h-[820px]">
        <img
          src="/products/essential_collection.jpeg"
          alt="Oven Veil™ Philosophy"
          className="w-full h-full object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/30 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* Editorial Hero Header */}
      <section className="bg-[#FFFCF8] px-6 lg:px-10 pt-12 sm:pt-16 text-center">
        <span className="text-[10px] tracking-[0.26em] uppercase text-[#B8860B] font-semibold">
          {t.ovenVeilPage.heroEyebrow}
        </span>
        <h1 className="font-serif text-[40px] sm:text-[60px] lg:text-[76px] leading-[0.95] tracking-[-0.02em] text-[#2B1B12] mt-4 font-light">
          OVEN VEIL™
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#57534E] leading-8 max-w-[65ch] mx-auto">
          {t.ovenVeilPage.heroBody}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/atelier#consultation-form"
            className="h-[50px] px-8 text-[11px] tracking-[0.18em] uppercase bg-[#2B1B12] text-[#FFFCF8] font-semibold inline-flex items-center gap-2 hover:bg-[#B8860B] transition-colors"
          >
            {t.ovenVeilPage.ctaA}
          </Link>
          <Link
            href="/heirloom-guide"
            className="h-[50px] px-8 text-[11px] tracking-[0.18em] uppercase font-semibold border border-[#2B1B12]/25 text-[#2B1B12] inline-flex items-center hover:bg-[#2B1B12] hover:text-[#FFFCF8] transition-colors"
          >
            {t.ovenVeilPage.ctaB}
          </Link>
        </div>
      </section>


      {/* Editorial Content Breakdown */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              {t.ovenVeilPage.philEyebrow}
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#2B1B12] mt-3 font-light">
              {t.ovenVeilPage.philTitle}
            </h2>
            <div className="mt-6 space-y-5 text-sm text-[#57534E] leading-7">
              <p>
                {t.ovenVeilPage.p1}
              </p>
              <p>
                {t.ovenVeilPage.p2}
              </p>
              <p>
                {t.ovenVeilPage.p3}
              </p>
            </div>

            <div className="mt-10 border-t border-[#2B1B12]/10 pt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="font-serif text-2xl text-[#B8860B]">01</div>
                <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mt-1">
                  {t.ovenVeilPage.feat1title}
                </div>
                <p className="text-xs text-[#57534E] mt-1 leading-5">
                  {t.ovenVeilPage.feat1body}
                </p>
              </div>

              <div>
                <div className="font-serif text-2xl text-[#B8860B]">02</div>
                <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mt-1">
                  {t.ovenVeilPage.feat2title}
                </div>
                <p className="text-xs text-[#57534E] mt-1 leading-5">
                  {t.ovenVeilPage.feat2body}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#2B1B12]/10 p-4 bg-[#EDE6D6]/20">
              <WatermarkImage
                src="/products/editorial-model.jpg"
                alt="Oven Veil™ Finishing Detail"
                containerClassName="w-full aspect-[4/5]"
                imageClassName="w-full h-full object-cover"
                watermarkSize="lg"
                showWatermark={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
