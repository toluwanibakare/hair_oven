"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Send, Crown, Calendar, Heart, ShieldAlert, CreditCard } from "lucide-react";
import { WatermarkImage } from "@/components/watermark-image";
import { useCurrency } from "@/context/currency-context";

export default function BridalConsultationPage() {
  const { formatPrice } = useCurrency();
  const [consultationType, setConsultationType] = useState<"team" | "hannah">("team");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "transfer">("card");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    location: "",
    visionNotes: "",
  });

  const activeFeeNGN = consultationType === "hannah" ? 200000 : 50000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Image: shown clean, with no text over it */}
      <section className="relative w-full overflow-hidden bg-[#2B1B12] h-[52svh] sm:h-[64vh] lg:h-[78vh] max-h-[900px]">
        <img
          src="/products/bridal_consultation.jpeg"
          alt="Bridal Consultation"
          className="w-full h-full object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/30 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* Hero Header */}
      <section className="bg-[#FFFCF8] px-6 lg:px-10 pt-12 sm:pt-16 text-center">
        <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold">
          YOUR DAY. YOUR VISION.
        </span>
        <h1 className="font-serif text-[40px] sm:text-[60px] lg:text-[76px] leading-[0.95] tracking-[-0.02em] text-[#2B1B12] mt-4 font-light">
          BRIDAL CONSULTATION
        </h1>
        <p className="mt-4 text-sm lg:text-base text-[#57534E] leading-7 max-w-[60ch] mx-auto font-serif italic">
          A private consultation to discover the perfect hair for your bridal look.
        </p>
        <div className="mt-8">
          <a
            href="#bridal-form"
            className="h-[52px] px-10 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-[#B8860B] transition-colors shadow-lg"
          >
            Book Your Consultation
          </a>
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
            Choose between a private consultation with our Senior Atelier Styling Team or an exclusive 1-on-1 session directly with Founder Hannah. Consultation deposits are non-refundable and fully applied toward your final HAIR OVEN creation.
          </p>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-[#2B1B12]/10 shadow-md bg-[#2B1B12]">
            <WatermarkImage
              src="/products/bridal_image1.jpeg"
              alt="Bridal Look 1"
              containerClassName="w-full h-full"
              imageClassName="w-full h-full object-cover object-center"
              showWatermark={false}
            />
          </div>
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-[#2B1B12]/10 shadow-md bg-[#2B1B12] mt-6">
            <WatermarkImage
              src="/products/bridal_image2.jpeg"
              alt="Bridal Look 2"
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
              Book Your Consultation
            </h2>
            <p className="text-sm text-[#57534E] leading-6">
              Select your consultation tier below. All consultation fees are non-refundable and applied 100% toward the total value of your final custom unit.
            </p>

            <div className="p-6 bg-white border border-[#2B1B12]/10 rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-[#B8860B]">
                <Crown className="w-5 h-5" />
                <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#2B1B12]">
                  Non-Refundable Policy
                </span>
              </div>
              <p className="text-xs text-[#57534E] leading-5">
                Consultation payments secure your dedicated atelier time slot and master stylist allocation. Deposits are strictly non-refundable but remain fully creditable toward your commission order.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 lg:p-12 border border-[#2B1B12]/10 shadow-sm rounded-sm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-[#B8860B] mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-[#2B1B12]">Consultation Booking Confirmed</h3>
                <p className="text-xs text-[#57534E] max-w-[42ch] mx-auto mt-3 leading-6">
                  Thank you, {formData.name}. Your payment of <strong className="text-[#2B1B12]">{formatPrice(activeFeeNGN)}</strong> for a {consultationType === "hannah" ? "Founder Hannah Private Consultation" : "Senior Atelier Team Consultation"} has been recorded. Our concierge will contact you within 24 hours to finalize your date.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl text-[#2B1B12]">1. Select Consultation Tier</h3>

                {/* Consultation Tier Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Option A: Atelier Team */}
                  <div
                    onClick={() => setConsultationType("team")}
                    className={`p-5 border cursor-pointer transition-all rounded-sm flex flex-col justify-between ${
                      consultationType === "team"
                        ? "bg-[#2B1B12] text-white border-[#2B1B12] shadow-md ring-2 ring-[#B8860B]/30"
                        : "bg-white text-[#2B1B12] border-[#2B1B12]/15 hover:border-[#B8860B]"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className={`text-[9px] tracking-[0.18em] uppercase font-bold px-2 py-0.5 border ${
                          consultationType === "team" ? "text-[#D4AF37] border-[#D4AF37]/30 bg-white/10" : "text-[#B8860B] border-[#B8860B]/30 bg-[#EDE6D6]/30"
                        }`}>
                          Senior Atelier Team
                        </span>
                        <span className="text-xs font-bold font-serif text-[#D4AF37]">
                          {formatPrice(50000)}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg mt-3">Atelier Team Consultation</h4>
                      <p className={`text-xs mt-1.5 leading-relaxed ${consultationType === "team" ? "text-white/80" : "text-[#57534E]"}`}>
                        Session with senior stylists for cranial measurement review, donor selection, and styling plan mapping.
                      </p>
                    </div>
                    <div className={`mt-4 pt-3 border-t text-[10px] tracking-[0.14em] uppercase font-semibold ${
                      consultationType === "team" ? "border-white/15 text-[#D4AF37]" : "border-[#2B1B12]/10 text-[#B8860B]"
                    }`}>
                      Non-Refundable Deposit
                    </div>
                  </div>

                  {/* Option B: Founder Hannah */}
                  <div
                    onClick={() => setConsultationType("hannah")}
                    className={`p-5 border cursor-pointer transition-all rounded-sm flex flex-col justify-between ${
                      consultationType === "hannah"
                        ? "bg-[#2B1B12] text-white border-[#2B1B12] shadow-md ring-2 ring-[#B8860B]/30"
                        : "bg-white text-[#2B1B12] border-[#2B1B12]/15 hover:border-[#B8860B]"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className={`text-[9px] tracking-[0.18em] uppercase font-bold px-2 py-0.5 border ${
                          consultationType === "hannah" ? "text-[#D4AF37] border-[#D4AF37]/30 bg-white/10" : "text-[#B8860B] border-[#B8860B]/30 bg-[#EDE6D6]/30"
                        }`}>
                          Founder Exclusive
                        </span>
                        <span className="text-xs font-bold font-serif text-[#D4AF37]">
                          {formatPrice(200000)}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg mt-3">Private Founder Consultation</h4>
                      <p className={`text-xs mt-1.5 leading-relaxed ${consultationType === "hannah" ? "text-white/80" : "text-[#57534E]"}`}>
                        Exclusive 1-on-1 private session directly with Hannah for atelier heirloom curation and custom color guidance.
                      </p>
                    </div>
                    <div className={`mt-4 pt-3 border-t text-[10px] tracking-[0.14em] uppercase font-semibold ${
                      consultationType === "hannah" ? "border-white/15 text-[#D4AF37]" : "border-[#2B1B12]/10 text-[#B8860B]"
                    }`}>
                      Non-Refundable Deposit
                    </div>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#2B1B12] pt-4 border-t border-[#2B1B12]/10">
                  2. Client & Appointment Details
                </h3>

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
                      Preferred Date / Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Next week or November 2026"
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
                    Vision & Custom Specifications
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your desired style, length, hair volume, veil integration, or custom color matching..."
                    value={formData.visionNotes}
                    onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                    className="w-full p-4 bg-[#FFFCF8] border border-[#2B1B12]/20 text-xs focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                <div className="p-4 bg-[#F9F6F0] border border-[#2B1B12]/10 rounded-sm text-xs space-y-2">
                  <div className="flex justify-between items-center font-semibold text-[#2B1B12]">
                    <span>Total Non-Refundable Fee:</span>
                    <span className="text-base text-[#B8860B]">{formatPrice(activeFeeNGN)}</span>
                  </div>
                  <p className="text-[11px] text-[#57534E]">
                    By proceeding, you acknowledge that consultation fees are non-refundable and will be credited toward your creation order.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                  <span>Pay {formatPrice(activeFeeNGN)} & Confirm Consultation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
