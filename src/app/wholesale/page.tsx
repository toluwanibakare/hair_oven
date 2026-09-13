"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Send, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const wholesaleCategories = [
  {
    title: "Trade Fibre Wigs",
    desc: "Premium heat-resistant fibre units designed for high-density, cost-effective retail supply.",
    moq: "50 Units",
    accent: "Volume Supply",
  },
  {
    title: "Human Hair Wigs",
    desc: "Virgin and raw human hair wigs with HD lace frontals and closure options for luxury salons.",
    moq: "15 Units",
    accent: "Salon Grade",
  },
  {
    title: "Bundles & Extensions",
    desc: "Single-donor raw and virgin hair bundles in natural straight, body wave, deep curl & water wave.",
    moq: "20 Sets",
    accent: "High Luster",
  },
  {
    title: "Closures & Frontals",
    desc: "Proprietary Oven Veil™ HD lace and transparent lace closures (4x4, 5x5, 13x4, 13x6).",
    moq: "30 Pieces",
    accent: "Invisible Melt",
  },
  {
    title: "Braiding Hair",
    desc: "Pre-stretched high-grade human and synthetic braiding hair for professional stylists.",
    moq: "100 Packs",
    accent: "Professional Use",
  },
  {
    title: "Ponytails & Hair Pieces",
    desc: "Instant draw-string ponytails, hair buns, and topper pieces crafted for quick installation.",
    moq: "25 Units",
    accent: "Quick Glam",
  },
  {
    title: "Accessories & Tools",
    desc: "Lace melting bands, satin bonnets, storage bags, edge brushes, and installation solvents.",
    moq: "50 Items",
    accent: "Branded Care",
  },
  {
    title: "Volume Supply",
    desc: "Bulk raw hair kilos directly sourced for wig makers, master colorists, and manufacturing houses.",
    moq: "5 Kilos",
    accent: "Direct Source",
  },
  {
    title: "Private Label",
    desc: "Custom packaging, silk bags, tags, and custom wig box branding created exclusively for your brand.",
    moq: "Full Setup",
    accent: "Custom Branding",
  },
];

export default function WholesalePage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    orderCategory: "Human Hair Wigs",
    estimatedVolume: "50-100 units",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop"
            alt="Wholesale Supply"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-transparent to-transparent" />
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-[760px]">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#D4AF37] font-semibold">
              {t.wholesale.heroEyebrow}
            </span>
            <h1 className="font-serif text-[42px] sm:text-[56px] lg:text-[68px] leading-[0.92] tracking-[-0.02em] text-white mt-4 font-light">
              {t.wholesale.heroTitle}
            </h1>
            <p className="mt-6 text-sm lg:text-base text-[#E8DDC9]/80 leading-7 max-w-[58ch]">
              {t.wholesale.heroBody}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center text-xs tracking-[0.14em] uppercase">
              <a
                href="#enquiry-form"
                className="h-[48px] px-8 bg-[#D4AF37] text-[#2B1B12] font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors"
              >
                {t.wholesale.ctaA} <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#categories"
                className="h-[48px] px-8 border border-white/20 text-white inline-flex items-center hover:bg-white/10 transition-colors"
              >
                {t.wholesale.ctaB}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Wholesale Pillars - Clean Editorial Numbering */}
      <section className="py-12 border-b border-[#2B1B12]/10 bg-[#EDE6D6]/40">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          {t.wholesale.pillars.map((p, i) => (
          <div key={p.title} className="space-y-1">
            <span className="font-serif text-lg text-[#B8860B] font-semibold">0{i + 1} /</span>
            <h3 className="font-serif text-xl text-[#2B1B12]">{p.title}</h3>
            <p className="text-xs text-[#57534E] leading-6 mt-1">
              {p.body}
            </p>
          </div>
          ))}
        </div>
      </section>

      {/* Wholesale Categories Grid */}
      <section id="categories" className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
            {t.wholesale.catEyebrow}
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
            {t.wholesale.catTitle}
          </h2>
          <p className="text-sm text-[#57534E] mt-3">
            {t.wholesale.catBody}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wholesaleCategories.map((cat, i) => {
            const tc = t.wholesale.cats[i] ?? { title: cat.title, desc: cat.desc, accent: cat.accent };
            return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-[#2B1B12]/10 bg-white p-8 rounded-sm hover:border-[#B8860B] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#B8860B] font-semibold px-2.5 py-1 bg-[#F5EFE6]">
                    {tc.accent}
                  </span>
                  <span className="text-[10px] tracking-[0.14em] uppercase text-[#78716C]">
                    MOQ: {cat.moq}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#2B1B12] group-hover:text-[#B8860B] transition-colors">
                  {tc.title}
                </h3>
                <p className="text-xs text-[#57534E] leading-6 mt-3">{tc.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2B1B12]/05 flex items-center justify-between">
                <a
                  href="#enquiry-form"
                  onClick={() => setFormData({ ...formData, orderCategory: cat.title })}
                  className="text-[11px] tracking-[0.14em] uppercase text-[#2B1B12] font-semibold flex items-center gap-1 group-hover:text-[#B8860B] transition-colors"
                >
                  {t.wholesale.requestPricing} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* Business Enquiry & Process Section */}
      <section id="enquiry-form" className="bg-[#E0D5C5]/30 border-t border-b border-[#2B1B12]/10 py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              {t.wholesale.procEyebrow}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              {t.wholesale.procTitle}
            </h2>
            <p className="text-sm text-[#57534E] leading-6 mt-4">
              {t.wholesale.procBody}
            </p>

            <div className="mt-8 space-y-6">
              {t.wholesale.steps.map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <div className="font-serif text-2xl font-light text-[#B8860B] shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#2B1B12]">{s.title}</h4>
                  <p className="text-xs text-[#57534E] mt-1">{s.body}</p>
                </div>
              </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-white border border-[#2B1B12]/10 rounded-sm">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold mb-2">{t.wholesale.directTitle}</div>
              <p className="text-xs text-[#57534E]">{t.wholesale.directBody}</p>
              <div className="mt-3 text-sm font-semibold text-[#2B1B12]">wholesale@hairoven.com</div>
              <div className="text-xs text-[#57534E] mt-1">{t.wholesale.tradeLine}</div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-10 border border-[#2B1B12]/10 shadow-sm rounded-sm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-[#B8860B] mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-[#2B1B12]">{t.wholesale.successTitle}</h3>
                <p className="text-xs text-[#57534E] max-w-[42ch] mx-auto mt-3 leading-6">
                  {t.wholesale.successBody}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.14em] uppercase hover:bg-[#B8860B] transition-colors"
                >
                  {t.wholesale.successAgain}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl text-[#2B1B12]">{t.wholesale.formTitle}</h3>
                <p className="text-xs text-[#57534E] mb-6">{t.wholesale.formBody}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.wholesale.bizLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t.wholesale.bizPh}
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.wholesale.contactLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t.wholesale.contactPh}
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.wholesale.emailLabel}
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="sarah@luxelocks.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.wholesale.phoneLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.wholesale.countryLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t.wholesale.countryPh}
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.wholesale.categoryLabel}
                    </label>
                    <select
                      value={formData.orderCategory}
                      onChange={(e) => setFormData({ ...formData, orderCategory: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    >
                      {wholesaleCategories.map((c) => (
                        <option key={c.title} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.wholesale.volumeLabel}
                    </label>
                    <select
                      value={formData.estimatedVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    >
                      {t.wholesale.volumes.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.wholesale.detailsLabel}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t.wholesale.detailsPh}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-13 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> {t.wholesale.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
