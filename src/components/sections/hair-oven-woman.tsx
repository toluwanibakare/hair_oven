"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const personas = [
  { label: "The Bride", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop" },
  { label: "The Professional", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop" },
  { label: "The Mother", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop" },
  { label: "The Entrepreneur", img: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=600&auto=format&fit=crop" },
  { label: "The Student", img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=600&auto=format&fit=crop" },
  { label: "The Stylist", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop" },
];

export function HairOvenWoman() {
  return (
    <section className="bg-[#FDF8F0] py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">For Every Version of Her</div>
            </Reveal>
            <h2 className="font-serif text-[36px] lg:text-[48px] leading-[0.9] tracking-[-0.02em] mt-3">
              For every<br />
              <span className="italic font-normal">version of her.</span>
            </h2>
            <Reveal delay={0.14}>
              <p className="text-sm leading-7 text-[#57534E] mt-6 max-w-[42ch]">
                Different ages. Different races. Different colours. Different lifestyles. Different budgets.
              </p>
              <p className="font-serif text-xl leading-tight mt-4 text-[#1C120E]">One thing remains the same: she deserves to feel beautiful.</p>
              <div className="mt-6 flex flex-wrap gap-2 text-[11px] tracking-[0.12em] uppercase">
                {["Bride", "Professional", "Mother", "Student", "Stylist", "Entrepreneur"].map((t) => (
                  <span key={t} className="px-3 py-1.5 border border-[rgba(28,18,14,0.12)] bg-white">{t}</span>
                ))}
              </div>
              <Link href="/shop" className="mt-8 inline-flex h-11 px-8 bg-[#1C120E] text-white text-[11px] tracking-[0.16em] uppercase items-center hover:bg-[#2B1B12] transition-colors">
                Shop for Her →
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {personas.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group relative aspect-[3/4] overflow-hidden bg-[#EDE6D6]"
                >
                  <img src={p.img} alt={p.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <div className="text-white font-serif text-sm">{p.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-3 hidden sm:grid grid-cols-3 gap-4">
              <div className="bg-white border border-[rgba(28,18,14,0.06)] p-4">
                <div className="text-[11px] tracking-[0.14em] uppercase text-[#A68B5B]">Hair enthusiast</div>
                <div className="text-sm text-[#57534E] mt-1">For the woman who simply loves hair.</div>
              </div>
              <div className="col-span-2 bg-[#1C120E] text-white p-4 flex items-center justify-between">
                <span className="text-sm">Authentic • Editorial • Not AI-generated.</span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-[#C2A47A]">Real women</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
