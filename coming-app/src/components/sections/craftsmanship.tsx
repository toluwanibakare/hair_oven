"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { craftsmanship } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Craftsmanship() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  return (
    <section ref={ref} className="bg-[#2B1B12] text-[#E8DDC9] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="max-w-[720px]">
          <Reveal>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#C2A47A]">The Hair Oven Standard</div>
          </Reveal>
          <h2 className="font-serif text-[36px] lg:text-[54px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light">
            The difference is<br />
            <span className="italic text-[#E8DDC9] font-normal">in the details.</span>
          </h2>
          <p className="text-sm leading-7 text-white/60 mt-6 max-w-[52ch]">We obsess over what most overlook. That is the luxury - not excess, but intention.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div style={{ y, scale }} className="relative aspect-[4/3] lg:aspect-[1.4] overflow-hidden bg-[#2B1B12]">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop" alt="Craftsmanship detail" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                <div className="text-[11px] tracking-[0.16em] uppercase text-white/80">Cuticle intact • 40× magnification</div>
                <div className="hidden sm:block text-[11px] tracking-[0.16em] uppercase bg-white text-[#2B1B12] px-3 py-1.5">Inspected strand by strand</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {craftsmanship.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="py-5 flex gap-6 group hover:bg-white/[0.04] px-2 -mx-2 transition-colors"
                >
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#C2A47A] mt-1 shrink-0">0{i + 1}</span>
                  <div>
                    <div className="text-[13px] tracking-[0.12em] uppercase font-medium text-white group-hover:text-[#E8DDC9]">{c.title}</div>
                    <div className="text-sm leading-6 text-white/60 mt-1">{c.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/[0.06] border border-white/10 p-4">
                <div className="font-serif text-2xl text-white">250%</div>
                <div className="text-[10px] tracking-[0.14em] uppercase text-white/60 mt-1">Density</div>
              </div>
              <div className="bg-white/[0.06] border border-white/10 p-4">
                <div className="font-serif text-2xl text-white">LIFETIME</div>
                <div className="text-[10px] tracking-[0.14em] uppercase text-white/60 mt-1">Private</div>
              </div>
              <div className="bg-white/[0.06] border border-white/10 p-4">
                <div className="font-serif text-2xl text-white">HD 13×6</div>
                <div className="text-[10px] tracking-[0.14em] uppercase text-white/60 mt-1">Oven Veil™</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
