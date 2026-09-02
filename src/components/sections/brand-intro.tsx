"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

export function BrandIntro() {
  const phrases = ["It is confidence.", "It is self-expression.", "It is identity.", "It is transformation."];

  return (
    <section className="bg-[#FFFCF8] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B] mb-6">Our Philosophy</div>
            </Reveal>
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[64px] leading-[0.9] tracking-[-0.02em] font-light">
              <Reveal delay={0.1}>
                <span className="block">Hair is more</span>
              </Reveal>
              <Reveal delay={0.18}>
                <span className="block">than a product.</span>
              </Reveal>
            </h2>

            <div className="mt-10 space-y-1">
              {phrases.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="font-serif text-[28px] sm:text-[34px] leading-none tracking-[-0.01em] text-[#1C120E] flex items-center gap-4"
                >
                  <span className="h-px w-8 bg-[#C2A47A] hidden sm:block" />
                  {p}
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.5} className="mt-10 max-w-[52ch]">
              <p className="text-[15px] leading-7 text-[#57534E] font-light">
                We believe hair is one of the many ways a woman expresses identity, individuality and beauty. It is not vanity - it is presence. It is the quiet confidence before you speak.
              </p>
              <p className="text-[15px] leading-7 text-[#57534E] font-light mt-4">
                Every strand we select, every lace we ventilate, every unit we construct is guided by a single standard: <em className="font-serif italic text-[#1C120E]">the smallest details matter.</em>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-[#F5EFE6]"
            >
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=900&auto=format&fit=crop"
                alt="Editorial hair detail"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-[10px] tracking-[0.16em] uppercase text-white/80">The Standard</div>
                <div className="font-serif text-white text-[18px] leading-tight mt-1">Precision • Neatness • Patience • Craftsmanship</div>
              </div>
            </motion.div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden bg-[#F5EFE6]">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#1C120E] text-[#E8DDC9] p-6 flex flex-col justify-center">
                <div className="text-[11px] tracking-[0.16em] uppercase text-[#C2A47A]">Birthed through</div>
                <div className="font-serif text-xl leading-tight mt-2">Faith, prayer and a desire to follow His direction.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
