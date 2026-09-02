"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Hair Quality & Collections",
    items: [
      { q: "What makes Private Collection ‘raw’?", a: "Single-donor, fully unprocessed with intact, aligned cuticles. Never dyed, permed or chemically coated. The hair is as it grew." },
      { q: "Signature vs Private?", a: "Private is raw, lifetime heirloom. Signature is high-density virgin, 2–3+ years, slightly processed for curl definition but still exceptional." },
      { q: "Essentials - is it still human hair?", a: "Yes. High-quality human hair crafted for everyday rotation, dependable beauty and accessible investment." },
    ],
  },
  {
    title: "Oven Veil™ & Construction",
    items: [
      { q: "What is Oven Veil™?", a: "Our proprietary ultra-sheer HD lace - single-knot ventilated, pre-plucked, micro-bleached to mimic skin pores and disappear." },
      { q: "13×6 vs 5×5 vs closure?", a: "13×6 is ear-to-ear lace for versatile parting. 5×5 is crown area. Closures are smaller, closures are natural for middle part. Bespoke can customize size." },
      { q: "Density - how to choose?", a: "Private up to 250% (full heirloom), Signature 220–230%, Essentials 180–200% for lightweight everyday." },
    ],
  },
  {
    title: "Care, Longevity & Storage",
    items: [
      { q: "How do I wash?", a: "Cool water, sulfate-free shampoo, condition mid to ends, air-dry on stand. Detangle gently from tips upward." },
      { q: "How long will it last?", a: "Private: lifetime with care. Signature: 2–3+ years. Essentials: 12–18 months depending on rotation and heat." },
      { q: "Storage?", a: "On a stand or in silk bag, away from sun and dust. Your Heirloom Guide card ships with every unit." },
    ],
  },
  {
    title: "Cap Sizing",
    items: [
      { q: "How to measure?", a: "Circumference around hairline: S 54cm, M 56cm (most common), L 58cm. Bespoke uses full cranial mapping." },
      { q: "What if between sizes?", a: "Choose the larger and use adjustable elastics. Or go bespoke for exact mapping." },
    ],
  },
  {
    title: "Shipping, Exchange & Support",
    items: [
      { q: "Do you ship worldwide?", a: "Yes. Lagos dispatch, 3–7 days express internationally. Duties/taxes calculated at checkout where applicable." },
      { q: "Exchange policy?", a: "Unworn, unaltered, hygiene seal intact within 7 days. Bespoke is made for you and is final." },
      { q: "WhatsApp support?", a: "9AM–7PM WAT, real humans who know hair. We would rather guide you to the right texture than rush a sale." },
    ],
  },
];

export default function HeirloomGuidePage() {
  const [open, setOpen] = useState<string>("Hair Quality & Collections-0");

  return (
    <div className="bg-[#FFFCF8]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="max-w-[720px]">
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#A68B5B]">Education</div>
          <h1 className="font-serif text-[42px] lg:text-[52px] leading-none tracking-[-0.02em] mt-3">The Heirloom Guide</h1>
          <p className="text-sm leading-7 text-[#57534E] mt-4">An editorial, honest guide to choosing, wearing, caring for and storing your hair - so your heirloom lasts.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 p-6 bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)]">
              <div className="text-[11px] tracking-[0.16em] uppercase text-[#A68B5B]">Chapters</div>
              <ul className="mt-4 space-y-2 text-sm">
                {sections.map((s) => (
                  <li key={s.title} className="text-[#1C120E]">{s.title}</li>
                ))}
              </ul>
              <Link href="/shop" className="mt-6 inline-flex h-9 px-5 bg-[#1C120E] text-white text-[11px] tracking-[0.14em] uppercase items-center">Shop Now →</Link>
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-10">
            {sections.map((sec) => (
              <div key={sec.title}>
                <h2 className="text-[11px] tracking-[0.18em] uppercase text-[#A68B5B] border-b border-[rgba(28,18,14,0.08)] pb-3">{sec.title}</h2>
                <div className="mt-4 space-y-3">
                  {sec.items.map((it, idx) => {
                    const key = `${sec.title}-${idx}`;
                    const isOpen = open === key;
                    return (
                      <div key={key} className="border border-[rgba(28,18,14,0.08)] bg-white">
                        <button onClick={() => setOpen(isOpen ? "" : key)} className="w-full flex items-center justify-between p-5 text-left">
                          <span className="font-medium text-sm pr-6">{it.q}</span>
                          <span className="w-8 h-8 shrink-0 grid place-items-center border border-[rgba(28,18,14,0.12)] rounded-full">{isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                              <div className="px-5 pb-5 text-sm leading-6 text-[#57534E]">{it.a}</div>
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
  );
}
