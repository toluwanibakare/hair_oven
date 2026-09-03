"use client";

import { Reveal } from "@/components/reveal";
import Link from "next/link";

export function FromAfrica() {
  return (
    <section className="bg-[#FDF8F0] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">Global Vision</div>
              <h2 className="font-serif text-[38px] lg:text-[52px] leading-[0.9] tracking-[-0.02em] mt-3">
                From Africa
                <br />
                <span className="italic font-normal">to the world.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm leading-7 text-[#57534E] mt-6 max-w-[48ch]">Born in Africa, built to serve women globally. Lagos to London, Houston to Johannesburg - same standard, same respect, same Oven Veil™. International shipping. WhatsApp consultation that actually answers.</p>
              <div className="mt-8 flex flex-wrap gap-6 text-[11px] tracking-[0.12em] uppercase">
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#C2A47A]" /> Worldwide shipping</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#2B1B12]" /> Duties calculated at checkout</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#78716C]" /> Studio: Lagos</span>
              </div>
              <Link href="/shop" className="mt-8 inline-flex h-11 px-8 bg-[#2B1B12] text-white text-[11px] tracking-[0.16em] uppercase items-center">Shop Global Collection →</Link>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-[#2B1B12] overflow-hidden p-8 lg:p-10 flex flex-col justify-between">
              {/* subtle map grid */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase text-white/60">
                  <span className="w-2 h-2 rounded-full bg-[#C2A47A] animate-pulse" /> Live dispatch • Lagos
                </div>
              </div>

              <div className="relative grid grid-cols-3 gap-4 text-center">
                <div className="border border-white/10 bg-white/[0.06] backdrop-blur p-4">
                  <div className="text-white font-serif text-xl">Lagos</div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-white/60 mt-1">House</div>
                </div>
                <div className="border border-white/10 bg-white/[0.06] backdrop-blur p-4">
                  <div className="text-white font-serif text-xl">London</div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-white/60 mt-1">Stockist</div>
                </div>
                <div className="border border-white/10 bg-white/[0.06] backdrop-blur p-4">
                  <div className="text-white font-serif text-xl">Houston</div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-white/60 mt-1">Clients</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between text-[11px] tracking-[0.12em] uppercase text-white/50">
                <span>No cheesy globe. Just real movement.</span>
                <span className="hidden sm:inline">Nigeria → World</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop" alt="" className="h-[100px] w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop" alt="" className="h-[100px] w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop" alt="" className="h-[100px] w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
