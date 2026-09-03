"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { collections } from "@/lib/data";

export function Collections() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section ref={ref} className="bg-[#FDF8F0] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">The Collections</div>
            <h2 className="font-serif text-[36px] lg:text-[48px] leading-none tracking-[-0.02em] mt-3 font-light">Three houses. One standard.</h2>
          </div>
          <p className="max-w-[42ch] text-sm leading-6 text-[#57534E]">Different lives, different budgets - same respect. Each collection is crafted around a distinct promise.</p>
        </div>
      </div>

      {/* Horizontal editorial panels */}
      <div className="relative">
        <motion.div style={{ x }} className="flex gap-4 lg:gap-6 px-6 lg:px-10 will-change-transform">
          {collections.map((c) => (
            <div
              key={c.slug}
              className="group relative shrink-0 w-[84vw] sm:w-[48vw] lg:w-[36vw] max-w-[560px] aspect-[3/4.2] overflow-hidden bg-[#EDE6D6]"
            >
              <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/70 via-[#2B1B12]/10 to-transparent" />
              {/* Top label */}
              <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-start">
                <div className="text-[10px] tracking-[0.18em] uppercase text-white/80 border border-white/20 px-3 py-1.5 backdrop-blur">{c.tagline}</div>
                <div className="text-[10px] tracking-[0.16em] uppercase bg-white text-[#2B1B12] px-3 py-1.5">{c.years}</div>
              </div>
              {/* Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
                <div className="font-serif text-white text-[26px] lg:text-[30px] leading-none">{c.name}</div>
                <div className="text-white/70 text-sm leading-6 mt-3 max-w-[32ch]">{c.description}</div>
                <Link
                  href={`/collections/${c.slug}`}
                  className="mt-6 inline-flex h-10 px-6 bg-white text-[#2B1B12] text-[11px] tracking-[0.14em] uppercase items-center hover:bg-[#E8DDC9] transition-colors"
                >
                  Explore {c.subtitle} →
                </Link>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="shrink-0 w-[84vw] sm:w-[48vw] lg:w-[28vw] max-w-[420px] aspect-[3/4.2] bg-[#2B1B12] text-[#E8DDC9] p-8 lg:p-10 flex flex-col justify-between border border-white/5">
            <div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#C2A47A]">Not sure?</div>
              <div className="font-serif text-[28px] leading-none mt-3 text-white">Find your house in 60 seconds.</div>
              <p className="text-sm leading-6 text-white/60 mt-4">Answer a few questions - texture, lifestyle, budget - and we’ll guide you to the right collection.</p>
            </div>
            <div className="space-y-3">
              <Link href="/shop" className="h-11 w-full bg-white text-[#2B1B12] grid place-items-center text-[11px] tracking-[0.16em] uppercase">Take the Quiz</Link>
              <a href="https://wa.me/2340000000000" className="h-11 w-full border border-white/20 grid place-items-center text-[11px] tracking-[0.16em] uppercase text-white hover:bg-white hover:text-[#2B1B12] transition-colors">Consult via WhatsApp</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Progress hint */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 mt-6 flex items-center gap-3 text-[10px] tracking-[0.16em] uppercase text-[#A8A29E]">
        <span>Scroll to explore</span> <span className="h-px w-12 bg-[rgba(28,18,14,0.12)]" /> <span>Drag sideways on mobile</span>
      </div>
    </section>
  );
}
