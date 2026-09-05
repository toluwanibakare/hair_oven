"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function PrivateAtelier() {
  return (
    <section className="relative bg-[#2B1B12] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1920&auto=format&fit=crop"
          alt="Atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B1B12] via-[#2B1B12]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/60 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="text-[10px] tracking-[0.22em] uppercase text-[#D4AF37] font-semibold">
            THE ATELIER — A PRIVATE COMMISSION
          </div>
          <h2 className="font-serif text-[36px] lg:text-[52px] leading-[0.9] tracking-[-0.02em] mt-3 font-light">
            Created<br />
            <span className="italic font-normal text-[#E8DDC9]">strictly for your silhouette.</span>
          </h2>
          <p className="text-sm leading-7 text-white/70 mt-6 max-w-[48ch]">
            An exclusive invitation to bring your ultimate vision to life. A private creation experience where architecture, density, texture, and our proprietary Oven Veil™ technology are tailored strictly to your silhouette.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 max-w-[420px]">
            {[
              "Architecture & length",
              "Tone & dimension",
              "Density & crown",
              "Oven Veil™ fit",
              "Cranial mapping",
              "Pre-plucked hairline",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-white/80"
              >
                <span className="w-1 h-1 rounded-full bg-[#D4AF37]" /> {item}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/atelier"
              className="h-11 px-8 bg-[#D4AF37] text-[#2B1B12] inline-flex items-center text-[11px] tracking-[0.16em] uppercase font-semibold hover:bg-white transition-colors"
            >
              Enter The Atelier →
            </Link>
            <a
              href="https://wa.me/2348057388171"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-8 border border-white/20 inline-flex items-center text-[11px] tracking-[0.16em] uppercase hover:bg-white hover:text-[#2B1B12] hover:border-white transition-colors"
            >
              Request WhatsApp Concierge
            </a>
          </div>

          <div className="mt-6 text-[11px] tracking-[0.12em] uppercase text-white/40">
            By appointment • Lagos • London • Global insured courier
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-10">
          <div className="bg-[#FFFCF8] text-[#2B1B12] p-8 lg:p-10 max-w-[480px] ml-auto border border-[#2B1B12]/10 rounded-sm">
            <div className="text-[11px] tracking-[0.16em] uppercase text-[#B8860B] font-semibold">
              The Atelier Process
            </div>
            <div className="mt-4 space-y-6">
              {[
                { n: "01", t: "Architecture & Length", d: "Engineered to complement your facial structure." },
                { n: "02", t: "Tone & Dimension", d: "Hand-blended multi-dimensional colour transformation." },
                { n: "03", t: "Density & Crown", d: "Customized hair density mapped to root growth." },
                { n: "04", t: "The Oven Veil™ Fit", d: "Built exclusively with our ultra-sheer base." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <span className="font-serif text-xl text-[#B8860B] font-light">{s.n}</span>
                  <div>
                    <div className="text-[12px] tracking-[0.12em] uppercase font-semibold">{s.t}</div>
                    <div className="text-xs text-[#57534E] mt-0.5">{s.d}</div>
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
