"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/reveal";

export function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section ref={ref} className="bg-[#FFFCF8] py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div style={{ y }} className="relative aspect-[4/5] overflow-hidden bg-[#F5EFE6]">
              <img src="/founder.jpeg" alt="Hannah Oluwatosin Ogundare" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#2B1B12]/60 to-transparent">
                <div className="text-white font-serif text-xl leading-none">Hannah Oluwatosin Ogundare</div>
                <div className="text-[10px] tracking-[0.16em] uppercase text-white/80 mt-1">Founder, Hair Oven</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">The Story</div>
              <h2 className="font-serif text-[32px] lg:text-[44px] leading-[0.9] tracking-[-0.02em] mt-3">
                A girl who loved hair.
                <br />
                <span className="italic font-normal">A woman who followed GOD.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#57534E] font-light max-w-[58ch]">
                <p>
                  I was a young girl learning the intricate architecture of hair from my mother. I was a teenager traveling miles just to witness the flawless execution of a master artisan. These moments forged an early, deep-seated appreciation for neatness, patience, and uncompromising detail.
                </p>
                <p>
                  My late father understood this standard implicitly. He once mused that I would one day fly in international stylists for my own wedding, knowing I would accept nothing short of the extraordinary.
                </p>
                <p>
                  Bridging an American education in Economics with years of entrepreneurial experience, I asked GOD to reveal the empire I was meant to build. HAIR OVEN is the realization of that prayer - an exclusive sanctuary where passion meets masterful craftsmanship to create rare artifacts of beauty.
                </p>
              </div>
              <div className="mt-8 border-l-2 border-[#C2A47A] pl-6">
                <div className="font-serif italic text-[18px] leading-6 text-[#2B1B12]">“There is always a better texture, a better experience, a better way to serve.”</div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-[#78716C] mt-2">- The Hair Oven belief</div>
              </div>
              <Link href="/story" className="mt-8 inline-flex h-11 px-8 bg-[#2B1B12] text-white text-[11px] tracking-[0.16em] uppercase items-center hover:bg-[#2B1B12] transition-colors">
                Read Our Story →
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
