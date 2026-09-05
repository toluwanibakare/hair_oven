"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#2B1B12] text-[#E8DDC9] overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2000&auto=format&fit=crop"
          alt="Hair Oven Hero"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/40 to-[#2B1B12]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[920px] mx-auto"
        >
          <span className="text-[11px] tracking-[0.28em] uppercase text-[#D4AF37] font-semibold block mb-4">
            FROM AFRICA TO THE WORLD.
          </span>

          <h1 className="font-serif text-[46px] sm:text-[68px] lg:text-[90px] leading-[0.9] tracking-[-0.03em] text-white font-light">
            THE APEX OF EXCEPTIONAL HAIR.
          </h1>

          <p className="mt-8 text-sm sm:text-base lg:text-lg text-[#E8DDC9]/80 leading-8 max-w-[66ch] mx-auto font-normal">
            HAIR OVEN exists for those who do not compromise. We curate, craft, and engineer super luxurious and rare units defined by extraordinary provenance, master craftsmanship, and undeniable international distinction.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-[11px] tracking-[0.18em] uppercase font-semibold">
            <Link
              href="/collections/private"
              className="h-[54px] px-9 bg-[#D4AF37] text-[#2B1B12] inline-flex items-center gap-2 hover:bg-white transition-all shadow-lg"
            >
              DISCOVER THE PRIVATE COLLECTION <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/story"
              className="h-[54px] px-9 border border-white/30 text-white inline-flex items-center backdrop-blur-md hover:bg-white hover:text-[#2B1B12] hover:border-white transition-all"
            >
              STEP INTO THE HOUSE
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[9px] tracking-[0.24em] uppercase text-white/40 font-medium">
        Scroll to Explore
      </div>
    </section>
  );
}
