"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { WatermarkImage } from "@/components/watermark-image";

export default function OvenVeilPage() {
  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Editorial Hero Header */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1600&auto=format&fit=crop"
            alt="Oven Veil Philosophy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/60 to-transparent" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-[800px]">
            <span className="text-[10px] tracking-[0.26em] uppercase text-[#D4AF37] font-semibold">
              OUR SIGNATURE FINISHING PHILOSOPHY
            </span>
            <h1 className="font-serif text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light">
              OVEN VEIL™
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#E8DDC9]/90 leading-8 max-w-[62ch]">
              A considered approach to the transition between hair and wearer - designed to create an exceptionally natural appearance while preserving the movement and character of the hair.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/atelier#consultation-form"
                className="h-[50px] px-8 bg-[#D4AF37] text-[#2B1B12] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors"
              >
                REQUEST AN ATELIER COMMISSION
              </Link>
              <Link
                href="/heirloom-guide"
                className="h-[50px] px-8 border border-white/20 text-white text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-white hover:text-[#2B1B12] transition-colors"
              >
                READ THE HEIRLOOM GUIDE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content Breakdown */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              THE PHILOSOPHY OF TRANSITION
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#2B1B12] mt-3 font-light">
              How is a natural-looking finish achieved?
            </h2>
            <div className="mt-6 space-y-5 text-sm text-[#57534E] leading-7">
              <p>
                At HAIR OVEN, we reject stiff, aggressive edges in favor of seamless, effortless realism. Oven Veil™ is defined not by harsh chemical glues or temporary illusions, but by precise hand-craftsmanship and anatomical harmony.
              </p>
              <p>
                Each strand is individually single-knotted onto our proprietary, ultra-sheer base material. The hairline undergoes a multi-stage micro-bleaching process, creating the optical foundation of natural growth directly from the scalp.
              </p>
              <p>
                The resulting transition moves naturally with your facial expressions, holding weight and fluid direction without tension or artificial shine.
              </p>
            </div>

            <div className="mt-10 border-t border-[#2B1B12]/10 pt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="font-serif text-2xl text-[#B8860B]">01</div>
                <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mt-1">
                  Single-Knotted Realism
                </div>
                <p className="text-xs text-[#57534E] mt-1 leading-5">
                  Hand-tied along the immediate front perimeter to replicate organic hair density.
                </p>
              </div>

              <div>
                <div className="font-serif text-2xl text-[#B8860B]">02</div>
                <div className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mt-1">
                  Fluid Dynamics
                </div>
                <p className="text-xs text-[#57534E] mt-1 leading-5">
                  Preserves the natural drop, bounce, and movement of every single strand.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#2B1B12]/10 p-4 bg-[#EDE6D6]/20">
              <WatermarkImage
                src="/products/editorial-model.jpg"
                alt="Oven Veil Finishing Detail"
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
