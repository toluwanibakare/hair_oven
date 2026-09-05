"use client";

import Link from "next/link";
import { ArrowRight, EyeOff } from "lucide-react";

export function OvenVeil() {
  return (
    <section className="bg-[#2B1B12] text-[#E8DDC9] py-20 lg:py-28 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Macro Visual Shot */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] sm:aspect-[14/10] relative rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
                alt="Oven Veil Lace Technology"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#2B1B12]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold">
                    UNDETECTABLE MELT
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#D4AF37] font-semibold">
                  OVEN VEIL™ HD LACE
                </span>
              </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="lg:col-span-6">
            <span className="text-[10px] tracking-[0.26em] uppercase text-[#D4AF37] font-semibold block mb-2">
              PROPRIETARY PRECISION
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-[-0.02em] font-light">
              INTRODUCING OVEN VEIL™
            </h2>

            <p className="mt-6 text-sm lg:text-base text-[#E8DDC9]/80 leading-8">
              The foundation of an undetectable finish. Oven Veil™ is HAIR OVEN’s proprietary, ultra-sheer lace technology. Engineered to mimic natural skin texture, it melts seamlessly upon contact with the scalp, offering an entirely invisible, weightless hairline that vanishes completely under any lighting or high-definition lens.
            </p>

            {/* Editorial Spec List without generic icons */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6 border-t border-white/10 pt-6">
              <div className="space-y-1">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold font-serif">
                  — 01
                </div>
                <h4 className="text-xs tracking-[0.14em] uppercase font-semibold text-white">
                  Micro-Bleached Knots
                </h4>
                <p className="text-[11px] text-[#E8DDC9]/65 leading-5">
                  Single-knotted hairline pre-plucked for true realism.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold font-serif">
                  — 02
                </div>
                <h4 className="text-xs tracking-[0.14em] uppercase font-semibold text-white">
                  Universal Skin Melt
                </h4>
                <p className="text-[11px] text-[#E8DDC9]/65 leading-5">
                  Adapts seamlessly to warm, deep, and fair complexions.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/heirloom-guide"
                className="h-[50px] px-8 bg-[#D4AF37] text-[#2B1B12] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors"
              >
                EXPLORE THE CRAFTSMANSHIP <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
