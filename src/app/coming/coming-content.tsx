"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

function WhatsAppIcon({ className = "w-4 h-4 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

export function ComingSoonContent() {
  const { t } = useLanguage();
  const c = t.coming;

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header Section */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-65">
          <img
            src="/products/editorial-model-2.jpg"
            alt="HAIR OVEN Digital Flagship Preparation"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/40 to-[#2B1B12]/50" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#D4AF37] font-semibold">
              {c.heroEyebrow}
            </span>
            <h1 className="font-serif text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light max-w-[1000px] mx-auto">
              {c.heroTitle}
            </h1>
            <p className="mt-4 font-serif text-2xl sm:text-3xl text-[#E8DDC9] font-light">
              <span className="italic font-normal text-[#F3E5AB]">{c.heroSubtitle}</span>
            </p>
            <p className="mt-6 text-sm sm:text-base text-[#E8DDC9]/80 leading-7 max-w-[64ch] mx-auto font-sans">
              {c.heroBody}
            </p>
          </motion.div>

          {/* Quick Contact & Status CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap justify-center gap-4 text-xs tracking-[0.16em] uppercase font-semibold"
          >
            <a
              href="https://wa.me/2348057388171"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-8 bg-[#D4AF37] text-[#2B1B12] inline-flex items-center gap-2 hover:bg-white transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#2B1B12]" /> {c.whatsappCta}
            </a>
            <Link
              href="/atelier"
              className="h-12 px-8 border border-white/20 text-white inline-flex items-center gap-2 hover:bg-white hover:text-[#2B1B12] transition-colors"
            >
              {c.atelierCta}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Luxury Striped "BUILD IN PROGRESS" Marquee Tape framed with Hazard Border */}
      <div className="relative z-20 shadow-inner select-none">
        {/* Top Hazard Stripe Border */}
        <div className="h-3 w-full bg-hazard-tape border-b border-[#D4AF37]/30" />

        <div className="bg-[#B8860B] text-[#2B1B12] py-3.5 overflow-hidden border-y border-[#2B1B12]/20">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 text-[11px] tracking-[0.24em] uppercase font-mono font-bold shrink-0 pr-8">
                <span>★ {c.marqueeProgress}</span>
                <span>•</span>
                <span className="italic font-serif font-normal text-white">{c.marqueeReady}</span>
                <span>•</span>
                <span>★ {c.marqueeHouse}</span>
                <span>•</span>
                <span className="italic font-serif font-normal text-white">{c.marqueeCraft}</span>
                <span>•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Hazard Stripe Border */}
        <div className="h-3 w-full bg-hazard-tape border-t border-[#D4AF37]/30" />
      </div>

      {/* Featured "WEBSITE IS ALMOST READY" Construction Banner Card */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-2 sm:p-3 bg-hazard-tape rounded-sm shadow-2xl"
        >
          <div className="bg-[#2B1B12] text-[#E8DDC9] p-8 sm:p-12 lg:p-16 border border-[#D4AF37]/40 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-[900px] mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#B8860B]/20 border border-[#D4AF37]/50 rounded-full text-[10px] sm:text-xs tracking-[0.24em] uppercase text-[#F3E5AB] font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                {c.badgeText}
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight">
                {c.bannerTitle}
              </h2>

              <p className="mt-4 font-serif text-xl sm:text-2xl text-[#E8DDC9]/90 font-light">
                <span className="italic font-normal text-[#F3E5AB]">
                  {c.bannerSubtitle}
                </span>
              </p>

              <p className="mt-6 text-xs sm:text-sm text-[#E8DDC9]/75 leading-7 max-w-[62ch] mx-auto">
                {c.bannerBody}
              </p>

              {/* Progress Gauge with Luxury Hazard Stripe Bar */}
              <div className="mt-10 max-w-[500px] mx-auto bg-black/40 border border-[#D4AF37]/30 p-4 sm:p-5 rounded-sm">
                <div className="flex justify-between items-center text-xs tracking-[0.2em] font-mono text-[#D4AF37] mb-2.5 font-bold">
                  <span>{c.readinessLabel}</span>
                  <span>{c.readinessPct}</span>
                </div>
                <div className="w-full h-4 bg-white/10 rounded-full p-0.5 border border-[#D4AF37]/20 overflow-hidden">
                  <div
                    className="h-full bg-hazard-tape rounded-full transition-all duration-1000 shadow-lg"
                    style={{ width: "65%" }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] tracking-[0.16em] uppercase text-[#E8DDC9]/60 mt-3 font-sans">
                  <span>{c.statusReserve}</span>
                  <span>{c.statusPolish}</span>
                </div>
              </div>

              {/* Concierge Action */}
              <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs tracking-[0.16em] uppercase font-semibold">
                <a
                  href="https://wa.me/2348057388171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-8 bg-[#D4AF37] text-[#2B1B12] inline-flex items-center gap-2 hover:bg-white transition-colors shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#2B1B12]" /> {c.connectConcierge}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
