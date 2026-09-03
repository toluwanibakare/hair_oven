"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

export function PrivateAtelier() {
  return (
    <section className="relative bg-[#2B1B12] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1920&auto=format&fit=crop" alt="Atelier" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B1B12] via-[#2B1B12]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/60 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#C2A47A]">The Private Atelier</div>
            <h2 className="font-serif text-[36px] lg:text-[52px] leading-[0.9] tracking-[-0.02em] mt-3">
              Created<br />
              <span className="italic font-normal text-[#E8DDC9]">around you.</span>
            </h2>
            <p className="text-sm leading-7 text-white/70 mt-6 max-w-[48ch]">
              Bespoke units created according to cranial measurements, desired density, texture, styling vision and hairline preference. One woman. One unit. No compromise.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 max-w-[420px]">
            {["Cranial measurements", "Desired density", "Texture & colour", "Styling vision", "Hairline preference", "Cap construction"].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-white/80">
                <span className="w-1 h-1 rounded-full bg-[#C2A47A]" /> {item}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/bespoke" className="h-11 px-8 bg-white text-[#2B1B12] inline-flex items-center text-[11px] tracking-[0.16em] uppercase font-medium hover:bg-[#E8DDC9] transition-colors">
              Begin Your Bespoke Journey →
            </Link>
            <a href="https://wa.me/2340000000000" className="h-11 px-8 border border-white/20 inline-flex items-center text-[11px] tracking-[0.16em] uppercase hover:bg-white hover:text-[#2B1B12] hover:border-white transition-colors">
              Consult via WhatsApp
            </a>
          </div>

          <div className="mt-6 text-[11px] tracking-[0.12em] uppercase text-white/40">By appointment • Lagos • Worldwide shipping</div>
        </div>

        <div className="lg:col-span-6 lg:pl-10">
          <div className="bg-white text-[#2B1B12] p-8 lg:p-10 max-w-[480px] ml-auto">
            <div className="text-[11px] tracking-[0.16em] uppercase text-[#A68B5B]">Atelier Process</div>
            <div className="mt-4 space-y-6">
              {[
                { n: "01", t: "Consultation", d: "WhatsApp or studio. Vision, lifestyle, texture." },
                { n: "02", t: "Measurement", d: "Cranial mapping for a truly personal fit." },
                { n: "03", t: "Creation", d: "Hand-ventilated construction, weeks of craftsmanship." },
                { n: "04", t: "Fitting", d: "Final refinement. Melts like it was always yours." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <span className="font-serif text-xl text-[#C2A47A]">{s.n}</span>
                  <div>
                    <div className="text-[12px] tracking-[0.12em] uppercase font-medium">{s.t}</div>
                    <div className="text-sm text-[#57534E]">{s.d}</div>
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
