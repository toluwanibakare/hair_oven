"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#2B1B12]">
      {/* Media */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1920&auto=format&fit=crop"
          alt="HAIR OVEN - luxury hair editorial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Warm luxury overlay - not purple, warm brown/charcoal */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/70 via-[#2B1B12]/10 to-[#2B1B12]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B1B12]/40 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.12] mix-blend-soft-light" style={{ background: `radial-gradient(800px circle at 70% 30%, #C2A47A 0%, transparent 60%)` }} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full mx-auto max-w-[1600px] px-6 lg:px-10 flex flex-col justify-end pb-16 lg:pb-20 pt-[88px]">
        <div className="max-w-[760px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-white/80 mb-6"
          >
            <span className="h-px w-8 bg-[#C2A47A]" />
            Born in Africa • Worn around the world
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="font-serif text-[42px] sm:text-[56px] lg:text-[78px] leading-[0.9] tracking-[-0.03em] text-white font-light"
          >
            <span className="block font-light tracking-[0.16em] text-[12px] sm:text-[13px] mb-4 text-[#E8DDC9]">HAIR OVEN</span>
            <span className="block">Exceptional hair.</span>
            <span className="block italic font-normal text-[#E8DDC9]">Extraordinary you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-[15px] sm:text-[16px] leading-7 text-white/70 max-w-[48ch] font-light"
          >
            Where beauty meets the art of hair. A luxury house built on faith, craftsmanship and the belief that every woman deserves to feel beautiful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/shop" className="h-[48px] px-8 bg-white text-[#2B1B12] inline-flex items-center text-[11px] tracking-[0.16em] uppercase font-medium hover:bg-[#E8DDC9] transition-colors">
              Shop the Collection <span className="ml-2">→</span>
            </Link>
            <Link href="/story" className="h-[48px] px-8 border border-white/30 text-white inline-flex items-center text-[11px] tracking-[0.16em] uppercase font-medium backdrop-blur hover:bg-white hover:text-[#2B1B12] hover:border-white transition-colors">
              Discover Our Story
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }} className="mt-10 flex items-center gap-6 text-[10px] tracking-[0.16em] uppercase text-white/60">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C2A47A]" /> Oven Veil™ - The invisible hairline</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Bespoke atelier available</span>
          </motion.div>
        </div>

        <div className="absolute right-6 lg:right-10 bottom-16 lg:bottom-20 hidden md:flex flex-col items-end gap-3 text-right">
          <div className="text-[10px] tracking-[0.18em] uppercase text-white/50">Scroll to enter</div>
          <div className="h-[60px] w-px bg-gradient-to-b from-white/40 to-transparent mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}
