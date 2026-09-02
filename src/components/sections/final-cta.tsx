"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["4%", "0%"]);

  return (
    <section ref={ref} className="relative h-[72vh] min-h-[520px] overflow-hidden bg-[#0A0A0A]">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1920&auto=format&fit=crop" alt="Final CTA" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </motion.div>

      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 lg:px-10 flex flex-col justify-center items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#E8DDC9]">Your hair story starts here</div>
          <h2 className="font-serif text-[42px] sm:text-[56px] lg:text-[72px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light">
            Exceptional hair.
            <br />
            <span className="italic font-normal text-[#E8DDC9]">Extraordinary you.</span>
          </h2>
          <p className="text-white/70 text-sm lg:text-base max-w-[48ch] mx-auto mt-6 leading-6">Discover exceptional hair, crafted with intention. The Private, Signature and Essentials collections await.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="h-[52px] px-10 bg-white text-[#1C120E] inline-flex items-center text-[11px] tracking-[0.16em] uppercase font-medium hover:bg-[#E8DDC9] transition-colors">
              Shop Hair Oven →
            </Link>
            <Link href="/collections/private" className="h-[52px] px-10 border border-white/30 text-white inline-flex items-center text-[11px] tracking-[0.16em] uppercase backdrop-blur hover:bg-white hover:text-black hover:border-white transition-colors">
              Explore the Collections
            </Link>
          </div>
          <div className="mt-8 text-[10px] tracking-[0.16em] uppercase text-white/50">Born from faith • Inspired by women • Defined by craftsmanship • Built without compromise</div>
        </motion.div>
      </div>
    </section>
  );
}
