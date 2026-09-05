"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Send, ShieldCheck, Crown } from "lucide-react";

export default function AtelierPage() {
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
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop"
            alt="The Atelier"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-transparent to-transparent" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-[800px]">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#D4AF37] font-semibold">
              THE ATELIER | A PRIVATE COMMISSION
            </span>
            <h1 className="font-serif text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light">
              Your Vision. Our Master Craftsmanship.
            </h1>
            <p className="mt-6 text-sm lg:text-base text-[#E8DDC9]/80 leading-7 max-w-[60ch]">
              An invitation to bring your ultimate vision to life. The HAIR OVEN Atelier operates as a private commission house for discerning clients who require an absolute match to their personal aesthetic.
            </p>
            <p className="mt-4 text-xs lg:text-sm text-[#E8DDC9]/60 leading-6 max-w-[58ch]">
              From custom multi-dimensional colour work to precise weight distribution and our invisible lace architecture, every creation is developed as a singular masterpiece built strictly around your cranial measurements and styling vision.
            </p>

            <div className="mt-8">
              <a
                href="#consultation-form"
                className="h-[52px] px-10 bg-[#D4AF37] text-[#2B1B12] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors"
              >
                Request an Atelier Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Atelier Process */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
            THE ARCHITECTURE OF LUXURY
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl text-[#2B1B12] mt-2 font-light">
            The Atelier Commission Process
          </h2>
          <p className="text-sm text-[#57534E] mt-3">
            Four steps of uncompromising precision, engineered specifically for your crown.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#EDE6D6]/30 border border-[#2B1B12]/10 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl text-[#B8860B] font-light">01</span>
              <h3 className="font-serif text-xl text-[#2B1B12] mt-4">Architecture & Length</h3>
              <p className="text-xs text-[#57534E] leading-6 mt-3">
                Engineered to complement your facial structure, shoulder line, and posture for natural movement.
              </p>
            </div>
          </div>

          <div className="bg-[#EDE6D6]/30 border border-[#2B1B12]/10 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl text-[#B8860B] font-light">02</span>
              <h3 className="font-serif text-xl text-[#2B1B12] mt-4">Tone & Dimension</h3>
              <p className="text-xs text-[#57534E] leading-6 mt-3">
                Hand-blended, custom colour transformation by master colourists, executed without sacrificing the hair's structural integrity.
              </p>
            </div>
          </div>

          <div className="bg-[#EDE6D6]/30 border border-[#2B1B12]/10 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl text-[#B8860B] font-light">03</span>
              <h3 className="font-serif text-xl text-[#2B1B12] mt-4">Density & Crown</h3>
              <p className="text-xs text-[#57534E] leading-6 mt-3">
                Customized hair density mapped strand-by-strand to replicate natural root growth and effortless, fluid movement.
              </p>
            </div>
          </div>

          <div className="bg-[#EDE6D6]/30 border border-[#2B1B12]/10 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl text-[#B8860B] font-light">04</span>
              <h3 className="font-serif text-xl text-[#2B1B12] mt-4">The Oven Veil™ Fit</h3>
              <p className="text-xs text-[#57534E] leading-6 mt-3">
                Built exclusively with our proprietary Oven Veil™ base, hand-tied strands, and pre-plucked hairlines with custom-molded internal banding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="bg-[#E0D5C5]/25 border-t border-b border-[#2B1B12]/10 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              PRIVATE COMMISSION
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#2B1B12] mt-2 font-light">
              Request an Atelier Consultation
            </h2>
            <p className="text-sm text-[#57534E] leading-6 mt-4">
              Atelier commissions require a 7–14 business day craftsmanship window. Complete the private consultation form below, and our Client Concierge will connect with you to review your specifications.
            </p>

            <div className="mt-8 p-6 bg-white border border-[#2B1B12]/10 rounded-sm">
              <Crown className="w-6 h-6 text-[#B8860B] mb-2" />
              <div className="text-[11px] tracking-[0.16em] uppercase text-[#2B1B12] font-semibold">
                Private Appointments
              </div>
              <p className="text-xs text-[#57534E] mt-1 leading-5">
                For in-person cranial measurement sessions, high-value bridal commissions, or custom color matching in Lagos or London, please specify in your notes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 lg:p-12 border border-[#2B1B12]/10 shadow-sm rounded-sm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-[#B8860B] mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-[#2B1B12]">Atelier Consultation Requested</h3>
                <p className="text-xs text-[#57534E] max-w-[42ch] mx-auto mt-3 leading-6">
                  Thank you for submitting your Atelier commission request. Our Senior Concierge will reach out within 24 hours to schedule your private consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl text-[#2B1B12]">Atelier Client Details</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Email Address *
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
                      Phone / WhatsApp *
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
                      City & Country *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Lagos, London, New York, etc."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Desired Length
                    </label>
                    <select
                      value={formData.desiredLength}
                      onChange={(e) => setFormData({ ...formData, desiredLength: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    >
                      <option value="16″">16″ (Medium Length)</option>
                      <option value="20″">20″ (Signature Flow)</option>
                      <option value="24″">24″ (Extended Length)</option>
                      <option value="28″+">28″+ (Rare Reserve Length)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Hair Base Tier
                    </label>
                    <select
                      value={formData.desiredTexture}
                      onChange={(e) => setFormData({ ...formData, desiredTexture: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    >
                      <option value="Private Collection (RAW Reserve)">Private Collection (RAW Reserve)</option>
                      <option value="Signature Collection (Virgin)">Signature Collection (Virgin)</option>
                      <option value="Essentials Collection">Essentials Collection</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                    Commission Vision & Custom Specifications
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your desired color, custom cap measurements, high-density distribution, or event timeline..."
                    value={formData.visionNotes}
                    onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                    className="w-full p-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-13 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Request Atelier Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
