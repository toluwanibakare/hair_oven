"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Send, ShieldCheck, Crown } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useCurrency } from "@/context/currency-context";

import { AtelierVideo } from "@/components/sections/atelier-video";

export default function AtelierPage() {
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const [consultationType, setConsultationType] = useState<"team" | "hannah">("team");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    desiredLength: '20"',
    desiredTexture: "Raw Bone Straight",
    cranialMeasurements: "Standard Medium (22.5\")",
    colorDetails: "",
    visionNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] pt-10 lg:pt-14 pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-45 lg:opacity-55">
          <img
            src="/atlier_hero.jpg"
            alt="The Atelier"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/30 to-transparent" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-[800px]">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#D4AF37] font-semibold">
              {t.atelier.heroEyebrow}
            </span>
            <h1 className="font-serif text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light">
              {t.atelier.heroTitle}
            </h1>
            <p className="mt-6 text-sm lg:text-base text-[#E8DDC9]/80 leading-7 max-w-[60ch]">
              {t.atelier.heroA}
            </p>
            <p className="mt-4 text-xs lg:text-sm text-[#E8DDC9]/60 leading-6 max-w-[58ch]">
              {t.atelier.heroB}
            </p>

            <div className="mt-8">
              <a
                href="#consultation-form"
                className="h-[52px] px-10 bg-[#D4AF37] text-[#2B1B12] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors"
              >
                {t.atelier.heroCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Atelier Process */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
            {t.atelier.procEyebrow}
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl text-[#2B1B12] mt-2 font-light">
            {t.atelier.procTitle}
          </h2>
          <p className="text-sm text-[#57534E] mt-3">
            {t.atelier.procSub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.atelier.steps.map((s, i) => (
          <div key={s.title} className="bg-[#EDE6D6]/30 border border-[#2B1B12]/10 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl text-[#B8860B] font-light">0{i + 1}</span>
              <h3 className="font-serif text-xl text-[#2B1B12] mt-4">{s.title}</h3>
              <p className="text-xs text-[#57534E] leading-6 mt-3">
                {s.body}
              </p>
            </div>
          </div>
          ))}
        </div>
      </section>

      {/* Atelier Video Section */}
      <AtelierVideo />

      {/* Consultation Form */}
      <section id="consultation-form" className="bg-[#E0D5C5]/25 border-t border-b border-[#2B1B12]/10 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              {t.atelier.formEyebrow}
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#2B1B12] mt-2 font-light">
              {t.atelier.formTitle}
            </h2>
            <p className="text-sm text-[#57534E] leading-6 mt-4">
              {t.atelier.formBody}
            </p>

            <div className="mt-8 p-6 bg-white border border-[#2B1B12]/10 rounded-sm">
              <Crown className="w-6 h-6 text-[#B8860B] mb-2" />
              <div className="text-[11px] tracking-[0.16em] uppercase text-[#2B1B12] font-semibold">
                {t.atelier.apptTitle}
              </div>
              <p className="text-xs text-[#57534E] mt-1 leading-5">
                {t.atelier.apptBody}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 lg:p-12 border border-[#2B1B12]/10 shadow-sm rounded-sm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-[#B8860B] mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-[#2B1B12]">{t.atelier.successTitle}</h3>
                <p className="text-xs text-[#57534E] max-w-[42ch] mx-auto mt-3 leading-6">
                  {t.atelier.successBody}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-[10px] tracking-[0.16em] uppercase font-semibold text-[#2B1B12]">
                    Select Consultation Tier * (Non-Refundable Fee)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Option A: Atelier Team */}
                    <div
                      onClick={() => setConsultationType("team")}
                      className={`p-4 border cursor-pointer transition-all rounded-sm flex flex-col justify-between ${
                        consultationType === "team"
                          ? "bg-[#2B1B12] text-white border-[#2B1B12] shadow-md ring-2 ring-[#B8860B]/30"
                          : "bg-white text-[#2B1B12] border-[#2B1B12]/15 hover:border-[#B8860B]"
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className={`text-[8px] tracking-[0.16em] uppercase font-bold px-2 py-0.5 border ${
                            consultationType === "team" ? "text-[#D4AF37] border-[#D4AF37]/30 bg-white/10" : "text-[#B8860B] border-[#B8860B]/30 bg-[#EDE6D6]/30"
                          }`}>
                            Senior Styling Team
                          </span>
                          <span className="text-xs font-bold font-serif text-[#D4AF37]">
                            {formatPrice(50000)}
                          </span>
                        </div>
                        <h4 className="font-serif text-base mt-2">Atelier Team Consultation</h4>
                        <p className={`text-[11px] mt-1 leading-relaxed ${consultationType === "team" ? "text-white/80" : "text-[#57534E]"}`}>
                          Session with senior stylists for cranial measurement review, donor selection, and styling plan.
                        </p>
                      </div>
                      <div className={`mt-3 pt-2 border-t text-[9px] tracking-[0.14em] uppercase font-semibold ${
                        consultationType === "team" ? "border-white/15 text-[#D4AF37]" : "border-[#2B1B12]/10 text-[#B8860B]"
                      }`}>
                        Non-Refundable Deposit
                      </div>
                    </div>

                    {/* Option B: Founder Hannah */}
                    <div
                      onClick={() => setConsultationType("hannah")}
                      className={`p-4 border cursor-pointer transition-all rounded-sm flex flex-col justify-between ${
                        consultationType === "hannah"
                          ? "bg-[#2B1B12] text-white border-[#2B1B12] shadow-md ring-2 ring-[#B8860B]/30"
                          : "bg-white text-[#2B1B12] border-[#2B1B12]/15 hover:border-[#B8860B]"
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <span className={`text-[8px] tracking-[0.16em] uppercase font-bold px-2 py-0.5 border ${
                            consultationType === "hannah" ? "text-[#D4AF37] border-[#D4AF37]/30 bg-white/10" : "text-[#B8860B] border-[#B8860B]/30 bg-[#EDE6D6]/30"
                          }`}>
                            Founder Exclusive
                          </span>
                          <span className="text-xs font-bold font-serif text-[#D4AF37]">
                            {formatPrice(200000)}
                          </span>
                        </div>
                        <h4 className="font-serif text-base mt-2">Private Founder Consultation</h4>
                        <p className={`text-[11px] mt-1 leading-relaxed ${consultationType === "hannah" ? "text-white/80" : "text-[#57534E]"}`}>
                          Exclusive 1-on-1 private session directly with Hannah for atelier heirloom curation.
                        </p>
                      </div>
                      <div className={`mt-3 pt-2 border-t text-[9px] tracking-[0.14em] uppercase font-semibold ${
                        consultationType === "hannah" ? "border-white/15 text-[#D4AF37]" : "border-[#2B1B12]/10 text-[#B8860B]"
                      }`}>
                        Non-Refundable Deposit
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#2B1B12] pt-3 border-t border-[#2B1B12]/10">{t.atelier.detailsTitle}</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.atelier.nameLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t.atelier.namePh}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.atelier.emailLabel}
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.atelier.phoneLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.atelier.cityLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t.atelier.cityPh}
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.atelier.lengthLabel}
                    </label>
                    <select
                      value={formData.desiredLength}
                      onChange={(e) => setFormData({ ...formData, desiredLength: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    >
                      {["16″", "20″", "24″", "28″+"].map((v, i) => (
                        <option key={v} value={v}>{t.atelier.lengths[i]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      {t.atelier.tierLabel}
                    </label>
                    <select
                      value={formData.desiredTexture}
                      onChange={(e) => setFormData({ ...formData, desiredTexture: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    >
                      <option value="Private Collection (RAW Reserve)">Private Collection (RAW Reserve)</option>
                      <option value="Sapphire Collection (Virgin)">Sapphire Collection (Virgin)</option>
                      <option value="Essence Collection">Essence Collection</option>
                      <option value="Atelier Collection">Atelier Collection</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                    {t.atelier.visionLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t.atelier.visionPh}
                    value={formData.visionNotes}
                    onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                    className="w-full p-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                  />
                </div>

                <div className="p-3 bg-[#F9F6F0] border border-[#2B1B12]/10 rounded-sm text-xs space-y-1">
                  <div className="flex justify-between items-center font-semibold text-[#2B1B12]">
                    <span>Non-Refundable Consultation Fee:</span>
                    <span className="text-sm text-[#B8860B]">{formatPrice(consultationType === "hannah" ? 200000 : 50000)}</span>
                  </div>
                  <p className="text-[10px] text-[#57534E]">
                    Fee is non-refundable and credited 100% toward your final creation order.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" /> Pay {formatPrice(consultationType === "hannah" ? 200000 : 50000)} & Request Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
