"use client";

import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function SocialProof() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#FDF8F0] py-16 lg:py-24 border-y border-[rgba(28,18,14,0.06)]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">{t.socialProof.eyebrow}</div>
            <h2 className="font-serif text-[32px] lg:text-[40px] leading-none tracking-[-0.02em] mt-3">{t.socialProof.title}</h2>
          </div>
          <div className="text-[11px] tracking-[0.14em] uppercase text-[#78716C]">{t.socialProof.badge}</div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="bg-white border border-[rgba(28,18,14,0.06)] p-8 flex flex-col">
              <div className="flex gap-1 text-sm" aria-label={`${r.rating ?? 5} / 5`}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className={s <= (r.rating ?? 5) ? "text-[#D4AF37]" : "text-[#E0D5C5]"}>★</span>
                ))}
              </div>
              <p className="font-serif text-[18px] leading-6 mt-4 text-[#2B1B12]">“{r.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F5EFE6] grid place-items-center text-xs font-medium text-[#78716C]">{r.name[0]}</div>
                <div>
                  <div className="text-sm font-medium leading-none">{r.name}</div>
                  <div className="text-xs text-[#78716C]">{r.location} • {r.product}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#A8A29E]">{t.socialProof.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
