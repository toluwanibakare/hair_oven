"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Send, Crown, Calendar, Heart } from "lucide-react";
import { WatermarkImage } from "@/components/watermark-image";

export default function BridalConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    location: "",
    visionNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-45 lg:opacity-55">
          <WatermarkImage
            src="/products/bridal_consultation.jpeg"
            alt="Bridal Consultation"
            containerClassName="w-full h-full"
            imageClassName="w-full h-full object-cover object-top"
            showWatermark={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/50 to-transparent" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-[800px]">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#D4AF37] font-semibold">
              YOUR DAY. YOUR VISION.
            </span>
            <h1 className="font-serif text-[44px] sm:text-[64px] lg:text-[76px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light">
              BRIDAL CONSULTATION
            </h1>
            <p className="mt-6 text-sm lg:text-base text-[#E8DDC9]/90 leading-7 max-w-[60ch] font-serif italic">
              A private consultation to discover the perfect hair for your bridal look.
            </p>

            <div className="mt-8">
              <a
                href="#bridal-form"
                className="h-[52px] px-10 bg-[#D4AF37] text-[#2B1B12] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors shadow-lg"
              >
                Book Your Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] tracking-[0.22em] uppercase text-[#B8860B] font-semibold">
            THE BRIDAL ATELIER
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B1B12] font-light leading-tight">
            Crafted for your most unforgettable moment.
          </h2>
          <p className="text-sm text-[#57534E] leading-7 font-serif italic border-l-2 border-[#B8860B] pl-4">
            "Every bride deserves a singular creation that harmonizes effortlessly with her gown, veil, and facial architecture."
          </p>
          <p className="text-xs sm:text-sm text-[#57534E] leading-6">
            Our Senior Concierge and Master Stylists work in private consultation to select matching single-donor raw reserves, execute custom multi-dimensional tone blending, and build lightweight, invisible Oven Veil™ architecture designed to stay glass-sleek throughout your entire wedding weekend.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#2B1B12]/10 shadow-lg bg-[#2B1B12]">
            <WatermarkImage
              src="/products/bridal_consultation.jpeg"
              alt="Bridal Hair Masterpiece"
              containerClassName="w-full h-full"
              imageClassName="w-full h-full object-cover object-center"
              showWatermark={false}
            />
          </div>
        </div>
      </section>

      {/* Bridal Consultation Form Section */}
      <section id="bridal-form" className="bg-[#E0D5C5]/25 border-t border-b border-[#2B1B12]/10 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              PRIVATE COMMISSION
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#2B1B12] font-light">
              Book Your Bridal Consultation
            </h2>
            <p className="text-sm text-[#57534E] leading-6">
              Complete the form below to reserve a 1-on-1 private consultation with our Senior Concierge. We recommend booking at least 4 to 8 weeks prior to your ceremony.
            </p>

            <div className="p-6 bg-white border border-[#2B1B12]/10 rounded-sm space-y-2">
              <Crown className="w-6 h-6 text-[#B8860B]" />
              <div className="text-[11px] tracking-[0.16em] uppercase text-[#2B1B12] font-semibold">
                Bridal Concierge Priority
              </div>
              <p className="text-xs text-[#57534E] leading-5">
                Immediate response protocol within 24 hours. Virtual consultations and private fitting appointments available globally.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 lg:p-12 border border-[#2B1B12]/10 shadow-sm rounded-sm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-[#B8860B] mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-[#2B1B12]">Bridal Consultation Requested</h3>
                <p className="text-xs text-[#57534E] max-w-[42ch] mx-auto mt-3 leading-6">
                  Thank you. Our Senior Client Concierge will reach out within 24 hours to schedule your private consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl text-[#2B1B12]">Bridal Details & Preferences</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-4 bg-[#FFFCF8] border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-4 bg-[#FFFCF8] border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
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
                      placeholder="+234 ... or +44 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-4 bg-[#FFFCF8] border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Wedding Date / Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. November 2026"
                      value={formData.weddingDate}
                      onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                      className="w-full h-11 px-4 bg-[#FFFCF8] border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                    City and Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lagos, London, New York"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full h-11 px-4 bg-[#FFFCF8] border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                    Bridal Vision & Custom Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your desired style, length, hair volume, veil integration, or custom color matching..."
                    value={formData.visionNotes}
                    onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                    className="w-full p-4 bg-[#FFFCF8] border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>Book Your Consultation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
