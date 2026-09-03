"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ovenVeilSteps } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function OvenVeil() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative bg-[#FFFCF8]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-wrap gap-6 items-end justify-between mb-10">
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">Proprietary Technology</div>
            <h2 className="font-serif text-[42px] lg:text-[56px] leading-[0.9] tracking-[-0.02em] mt-3">
              OVEN VEIL<span className="align-super text-[14px] tracking-[0.08em] ml-1">™</span>
            </h2>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#78716C] mt-2">The invisible hairline.</div>
          </div>
          <p className="max-w-[52ch] text-sm leading-6 text-[#57534E]">Ultra-sheer lace technology designed to mimic natural skin texture and melt seamlessly against the scalp. No harsh lines. No detectable edge.</p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Sticky visual */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <div className="relative aspect-[4/3.4] lg:aspect-[1.15] overflow-hidden bg-[#F5EFE6]">
              <motion.img style={{ scale }} src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop" alt="Oven Veil lace macro" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-black/5" />
              {/* Hotspot indicators */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between">
                  <span className="bg-white/90 backdrop-blur text-[10px] tracking-[0.14em] uppercase px-3 py-1.5">Macro • 40× lace texture</span>
                  <span className="bg-[#2B1B12] text-white text-[10px] tracking-[0.14em] uppercase px-3 py-1.5">HD • Single-knot</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {ovenVeilSteps.map((s, i) => (
                    <div key={s.k} className={`h-1 rounded-full transition-colors ${i <= active ? "bg-white" : "bg-white/30"}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 hidden lg:flex gap-2">
              <div className="flex-1 h-[96px] overflow-hidden bg-[#F5EFE6]">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 h-[96px] overflow-hidden bg-[#F5EFE6]">
                <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=400&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 h-[96px] bg-[#2B1B12] text-white p-4 flex flex-col justify-center">
                <div className="text-[10px] tracking-[0.16em] uppercase text-[#C2A47A]">Melt test</div>
                <div className="text-sm leading-5 mt-1">Disappears against skin in daylight.</div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-0 border-t border-[rgba(28,18,14,0.08)]">
              {ovenVeilSteps.map((step, idx) => (
                <button
                  key={step.k}
                  onClick={() => setActive(idx)}
                  className={`w-full text-left py-7 border-b border-[rgba(28,18,14,0.08)] flex gap-6 items-start transition-colors ${active === idx ? "bg-[#FDF8F0]" : "hover:bg-[#FFFCF8]" } px-2 -mx-2`}
                >
                  <span className={`font-serif text-[28px] leading-none mt-1 ${active === idx ? "text-[#C2A47A]" : "text-[#A8A29E]"}`}>{step.k}</span>
                  <span className="flex-1">
                    <span className={`block text-[12px] tracking-[0.16em] uppercase font-medium ${active === idx ? "text-[#2B1B12]" : "text-[#57534E]"}`}>{step.t}</span>
                    <span className={`block text-sm leading-6 mt-2 ${active === idx ? "text-[#2B1B12]" : "text-[#78716C]"}`}>{step.d}</span>
                    {active === idx && <span className="inline-flex mt-3 h-px w-12 bg-[#C2A47A]" />}
                  </span>
                </button>
              ))}
            </div>

            <Reveal className="mt-8 p-6 bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)]">
              <div className="text-[11px] tracking-[0.16em] uppercase text-[#A68B5B]">The result</div>
              <div className="font-serif text-[18px] leading-tight mt-2">A hairline that belongs to her - not to the wig.</div>
              <p className="text-sm leading-6 text-[#57534E] mt-3">Pre-plucked. Micro-bleached. Hand-finished. Seen only when she wants it to be seen.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
