"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function BrandIntro() {
  return (
    <section className="bg-[#FFFCF8] text-[#2B1B12] py-20 lg:py-28 border-b border-[#2B1B12]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[840px] mx-auto"
        >
          <span className="text-[10px] tracking-[0.26em] uppercase text-[#B8860B] font-semibold block mb-3">
            THE HOUSE FOUNDATION
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2B1B12] font-light leading-snug tracking-tight">
            WHERE BEAUTY MEETS THE ART OF HAIR.
          </h2>

          <p className="mt-8 text-base sm:text-lg lg:text-xl text-[#2B1B12] font-serif leading-snug tracking-tight px-2 sm:px-0">
            Some houses begin with a business plan.
            <span className="block mt-1.5 italic font-normal">HAIR OVEN began with a calling.</span>
          </p>

          <p className="mt-5 text-sm sm:text-base text-[#57534E] leading-relaxed font-normal max-w-[65ch] mx-auto px-4 sm:px-0 text-center">
            Founded on faith, shaped by preparation, and refined through an obsession with craftsmanship. We believe true luxury is not defined by appearance alone. It is found in the rarity of the materials, the structural integrity of the construction, and the absolute reverence we hold for the woman who wears it.
          </p>

          <div className="mt-10">
            <Link
              href="/story"
              className="h-[50px] px-9 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-[#B8860B] transition-colors"
            >
              READ THE FOUNDER'S STORY <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
