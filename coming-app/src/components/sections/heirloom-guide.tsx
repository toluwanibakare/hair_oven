"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/reveal";

const categories = [
  {
    title: "Hair Quality",
    items: [
      { q: "What is Raw Reserve?", a: "Single-donor, unprocessed hair with fully intact cuticles. Never chemically altered. The closest to hair in its natural state." },
      { q: "Difference between Signature and Essentials?", a: "Signature is high-density virgin hair for 2–3+ years. Essentials is everyday human hair optimized for effortless rotation and value." },
    ],
  },
  {
    title: "Care & Longevity",
    items: [
      { q: "How do I make it last?", a: "Gentle wash, condition, air-dry, store on a stand or silk bag. Avoid heavy heat. Your Heirloom Guide card ships with every unit." },
      { q: "Can I colour it?", a: "Private & Signature are virgin and can be coloured by a professional. Essentials is best kept at its crafted colour." },
    ],
  },
  {
    title: "Fit & Bespoke",
    items: [
      { q: "How do I find my cap size?", a: "Measure circumference around hairline. S (54cm), M (56cm), L (58cm). Bespoke uses full cranial mapping." },
      { q: "What is Oven Veil™?", a: "Our ultra-sheer HD lace that mimics skin texture - pre-plucked, single-knots, bleached where needed for an invisible hairline." },
    ],
  },
  {
    title: "Shipping & Exchange",
    items: [
      { q: "Do you ship worldwide?", a: "Yes. Lagos dispatch, global delivery. Duties/taxes calculated at checkout where applicable." },
      { q: "Exchange policy?", a: "Unworn, unaltered units with intact hygiene seal within 7 days. Bespoke is made for you and not exchangeable." },
    ],
  },
];

export function HeirloomGuide() {
  const [open, setOpen] = useState<string | null>("Hair Quality-0");

  return (
    <section className="bg-[#FFFCF8] py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap justify-between gap-6 items-end">
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">Education</div>
            <h2 className="font-serif text-[36px] lg:text-[44px] leading-none tracking-[-0.02em] mt-3">The Heirloom Guide</h2>
          </div>
          <p className="max-w-[44ch] text-sm leading-6 text-[#57534E]">Everything you need to choose, wear, care for and store your hair - presented as editorial, not FAQ factory.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)] p-6 sticky top-24">
                <div className="text-[11px] tracking-[0.16em] uppercase text-[#A68B5B]">Inside</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {categories.map((c) => (
                    <li key={c.title} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#C2A47A] rounded-full" /> {c.title}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 h-px bg-[rgba(28,18,14,0.08)]" />
                <a href="/heirloom-guide" className="mt-6 inline-flex h-10 px-6 border border-[rgba(28,18,14,0.12)] items-center text-[11px] tracking-[0.14em] uppercase hover:bg-[#2B1B12] hover:text-white transition-colors">
                  Open Full Guide →
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-[rgba(28,18,14,0.08)] border-y border-[rgba(28,18,14,0.08)]">
              {categories.map((cat) => (
                <div key={cat.title} className="py-6">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-[#A68B5B] mb-4">{cat.title}</div>
                  <div className="space-y-3">
                    {cat.items.map((it, idx) => {
                      const key = `${cat.title}-${idx}`;
                      const isOpen = open === key;
                      return (
                        <div key={key} className="border border-[rgba(28,18,14,0.08)] bg-white">
                          <button onClick={() => setOpen(isOpen ? null : key)} className="w-full flex items-center justify-between p-4 lg:p-5 text-left">
                            <span className="text-sm font-medium pr-6">{it.q}</span>
                            <span className="w-8 h-8 shrink-0 grid place-items-center border border-[rgba(28,18,14,0.12)] rounded-full">
                              {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                            </span>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                <div className="px-4 lg:px-5 pb-5 text-sm leading-6 text-[#57534E]">{it.a}</div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
