"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { WatermarkImage } from "@/components/watermark-image";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const progressSteps = [
    { n: "01", title: "Provenance & Donor Curation", status: "Completed", pct: 100, desc: "Sourcing single-donor raw reserves with absolute cuticle integrity." },
    { n: "02", title: "Oven Veil™ Base Architecture", status: "Completed", pct: 100, desc: "Engineering ultra-sheer HD lace for universal skin integration." },
    { n: "03", title: "Atelier Commission Engine", status: "Finalizing", pct: 90, desc: "Refining 3D cranial measurement and private appointment scheduling." },
    { n: "04", title: "Digital Flagship Unveiling", status: "In Preparation", pct: 85, desc: "Preparing private access protocols for global clientele." },
  ];

  const previewCards = [
    {
      numeral: "I",
      title: "THE PRIVATE COLLECTION",
      subtitle: "Reserved for the rarest hair.",
      desc: "Entirely unprocessed, single-donor hair selected for exceptional provenance, natural integrity and enduring beauty. Every piece is considered individually, with the attention ordinarily reserved for an heirloom.",
    },
    {
      numeral: "II",
      title: "OVEN VEIL™ TECHNOLOGY",
      subtitle: "Our signature finishing philosophy.",
      desc: "A considered approach to the transition between hair and wearer - designed to create an exceptionally natural appearance while preserving the movement and character of the hair.",
    },
    {
      numeral: "III",
      title: "THE ATELIER",
      subtitle: "Made for one.",
      desc: "A private commission is created around the individual - not selected from a shelf. From hair selection and cap architecture to length, density, colour and finish, each element is considered in consultation with the client.",
    },
    {
      numeral: "IV",
      title: "THE HEIRLOOM GUIDE",
      subtitle: "The knowledge behind the House.",
      desc: "Comprehensive standards from provenance to long-term preservation, ensuring multi-year brilliance and authentic luxury aftercare.",
    },
  ];

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header Section */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/products/editorial-model-2.jpg"
            alt="HAIR OVEN Digital Flagship Preparation"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/70 to-[#2B1B12]/80" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#D4AF37] font-semibold">
              THE DIGITAL FLAGSHIP IN PREPARATION
            </span>
            <h1 className="font-serif text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light max-w-[1000px] mx-auto">
              HAIR OVEN
            </h1>
            <p className="mt-4 font-serif text-2xl sm:text-3xl text-[#E8DDC9] font-light">
              <span className="italic font-normal text-[#F3E5AB]">The House is being refined.</span>
            </p>
            <p className="mt-6 text-sm sm:text-base text-[#E8DDC9]/80 leading-7 max-w-[64ch] mx-auto font-sans">
              Exceptional hair. Considered craftsmanship. A private standard. We are preparing our digital flagship to present rare reserve collections and bespoke Atelier services.
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
              href="#notify-form"
              className="h-12 px-8 bg-[#D4AF37] text-[#2B1B12] inline-flex items-center gap-2 hover:bg-white transition-colors"
            >
              REQUEST PRIVATE ACCESS
            </a>
            <a
              href="https://wa.me/2348057388171"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-8 border border-white/20 text-white inline-flex items-center gap-2 hover:bg-white hover:text-[#2B1B12] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" /> WHATSAPP CONCIERGE
            </a>
          </motion.div>
        </div>
      </section>

      {/* Building Progress Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold">
            HOUSE PREPARATION & CRAFTSMANSHIP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1B12] mt-3 font-light">
            Building Progress
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#57534E] leading-6">
            Every element of the HAIR OVEN digital experience is held to the same uncompromised standards as our hair reserves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {progressSteps.map((step, idx) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-[#EDE6D6]/20 border border-[#2B1B12]/10 p-6 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-serif text-2xl text-[#B8860B] font-light">{step.n}</span>
                  <span className="text-[9px] tracking-[0.16em] uppercase font-semibold px-2.5 py-1 bg-white border border-[#2B1B12]/10 text-[#2B1B12]">
                    {step.status}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-[#2B1B12] font-medium">{step.title}</h3>
                <p className="text-xs text-[#57534E] mt-2 leading-5">{step.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2B1B12]/08">
                <div className="flex justify-between text-[10px] tracking-[0.12em] text-[#78716C] mb-1 font-semibold">
                  <span>PROGRESS</span>
                  <span>{step.pct}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#2B1B12]/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#B8860B] transition-all duration-1000"
                    style={{ width: `${step.pct}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What to Expect Preview Section */}
      <section className="bg-[#E0D5C5]/20 border-t border-b border-[#2B1B12]/10 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold">
              WHAT TO EXPECT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1B12] mt-3 font-light">
              The HAIR OVEN Universe
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#57534E] leading-6">
              When the doors open, visitors will discover a complete digital flagship built around restraint, authority, and quiet exclusivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {previewCards.map((card, i) => (
              <motion.div
                key={card.numeral}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-white border border-[#2B1B12]/10 p-8 rounded-sm shadow-sm hover:border-[#B8860B] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-serif text-2xl text-[#B8860B] font-light">{card.numeral}</span>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#78716C] font-semibold">
                    {card.subtitle}
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-[#2B1B12] font-light">{card.title}</h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-6 mt-3">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Access Notification Form Section */}
      <section id="notify-form" className="max-w-[1000px] mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">
        <div className="bg-[#2B1B12] text-[#E8DDC9] p-8 sm:p-14 rounded-sm border border-[#2B1B12]/10 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B8860B]/15 via-transparent to-transparent pointer-events-none" />

          <span className="text-[10px] tracking-[0.26em] uppercase text-[#D4AF37] font-semibold block mb-2">
            PRIVATE NOTES FROM THE HOUSE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
            Receive First Access
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#E8DDC9]/80 leading-6 max-w-[54ch] mx-auto">
            Be the first to receive a private invitation upon digital launch, along with priority release access to rare raw unit reserves.
          </p>

          <div className="mt-8 max-w-[480px] mx-auto">
            {submitted ? (
              <div className="bg-white/10 border border-[#D4AF37]/30 p-6 text-center text-white rounded-sm">
                <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto mb-2" />
                <div className="font-serif text-xl">Your Private Note Has Been Recorded</div>
                <p className="text-xs text-[#E8DDC9]/80 mt-1">
                  Thank you. You will receive first notification as soon as the House opens.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row border border-white/20 bg-white focus-within:border-[#D4AF37] transition-colors rounded-sm overflow-hidden">
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 bg-transparent px-4 py-3.5 text-xs text-[#2B1B12] placeholder:text-[#2B1B12]/50 outline-none uppercase font-medium"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 text-[10px] tracking-[0.18em] uppercase bg-[#D4AF37] text-[#2B1B12] hover:bg-white transition-colors font-semibold shrink-0"
                >
                  REQUEST ACCESS
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-4 text-[11px] tracking-[0.12em] uppercase text-[#E8DDC9]/60">
            <span>By appointment in Lagos & London</span>
            <span className="hidden sm:inline">•</span>
            <span>Worldwide Insured Delivery</span>
          </div>
        </div>
      </section>
    </div>
  );
}
