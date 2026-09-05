"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Send, ArrowRight } from "lucide-react";

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
              THE TRADE EDIT — HAIR OVEN WHOLESALE
            </span>
            <h1 className="font-serif text-[42px] sm:text-[56px] lg:text-[68px] leading-[0.92] tracking-[-0.02em] text-white mt-4 font-light">
              Volume Supply for Salons, Brands & Distributorships.
            </h1>
            <p className="mt-6 text-sm lg:text-base text-[#E8DDC9]/80 leading-7 max-w-[58ch]">
              Clearly separated from our luxury retail collections. Hair Oven Wholesale provides global salons, retailers, and private labels with direct factory supply, consistent donor grading, and dedicated account management.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center text-xs tracking-[0.14em] uppercase">
              <a
                href="#enquiry-form"
                className="h-[48px] px-8 bg-[#D4AF37] text-[#2B1B12] font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors"
              >
                Submit Trade Enquiry <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#categories"
                className="h-[48px] px-8 border border-white/20 text-white inline-flex items-center hover:bg-white/10 transition-colors"
              >
                Explore Trade Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Wholesale Pillars - Clean Editorial Numbering */}
      <section className="py-12 border-b border-[#2B1B12]/10 bg-[#EDE6D6]/40">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          <div className="space-y-1">
            <span className="font-serif text-lg text-[#B8860B] font-semibold">01 /</span>
            <h3 className="font-serif text-xl text-[#2B1B12]">Factory Direct Supply</h3>
            <p className="text-xs text-[#57534E] leading-6 mt-1">
              Bypassing middlemen. Raw single-donor and virgin hair sourced directly with strict quality assurance.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-lg text-[#B8860B] font-semibold">02 /</span>
            <h3 className="font-serif text-xl text-[#2B1B12]">Low MOQs & Scalability</h3>
            <p className="text-xs text-[#57534E] leading-6 mt-1">
              Flexible minimum order quantities tailored for emerging boutiques as well as established global distributors.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-lg text-[#B8860B] font-semibold">03 /</span>
            <h3 className="font-serif text-xl text-[#2B1B12]">Private Label & Branding</h3>
            <p className="text-xs text-[#57534E] leading-6 mt-1">
              End-to-end custom packaging, silk bags, custom hair tags, and bespoke unit manufacturing for your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Wholesale Categories Grid */}
      <section id="categories" className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
            TRADE CATEGORIES
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
            Wholesale Catalog & Supply Lines
          </h2>
          <p className="text-sm text-[#57534E] mt-3">
            Select your primary business line to request specialized wholesale pricing and sample swatch books.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wholesaleCategories.map((cat, i) => (
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
                    {cat.accent}
                  </span>
                  <span className="text-[10px] tracking-[0.14em] uppercase text-[#78716C]">
                    MOQ: {cat.moq}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#2B1B12] group-hover:text-[#B8860B] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#57534E] leading-6 mt-3">{cat.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2B1B12]/05 flex items-center justify-between">
                <a
                  href="#enquiry-form"
                  onClick={() => setFormData({ ...formData, orderCategory: cat.title })}
                  className="text-[11px] tracking-[0.14em] uppercase text-[#2B1B12] font-semibold flex items-center gap-1 group-hover:text-[#B8860B] transition-colors"
                >
                  Request Pricing <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Enquiry & Process Section */}
      <section id="enquiry-form" className="bg-[#E0D5C5]/30 border-t border-b border-[#2B1B12]/10 py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              PARTNERSHIP PROCESS
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              Wholesale Enquiries & Ordering
            </h2>
            <p className="text-sm text-[#57534E] leading-6 mt-4">
              We work closely with verified hair businesses, salon owners, and distributors worldwide. Fill out the trade application below to receive our confidential wholesale price list and MOQ catalog.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="font-serif text-2xl font-light text-[#B8860B] shrink-0">
                  01
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#2B1B12]">Application & Verification</h4>
                  <p className="text-xs text-[#57534E] mt-1">Submit your business details for verification by our account executive.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="font-serif text-2xl font-light text-[#B8860B] shrink-0">
                  02
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#2B1B12]">Catalog & Swatch Dispatch</h4>
                  <p className="text-xs text-[#57534E] mt-1">Receive wholesale tier pricing, physical hair swatch kits, and MOQ options.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="font-serif text-2xl font-light text-[#B8860B] shrink-0">
                  03
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#2B1B12]">Custom Fulfillment & Logistics</h4>
                  <p className="text-xs text-[#57534E] mt-1">Dedicated account manager oversees production, private labeling, and priority worldwide shipping.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white border border-[#2B1B12]/10 rounded-sm">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold mb-2">Direct Contact</div>
              <p className="text-xs text-[#57534E]">For urgent volume orders or custom manufacturing contracts:</p>
              <div className="mt-3 text-sm font-semibold text-[#2B1B12]">wholesale@hairoven.com</div>
              <div className="text-xs text-[#57534E] mt-1">WhatsApp Trade Line: +234 805 738 8171</div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-10 border border-[#2B1B12]/10 shadow-sm rounded-sm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-[#B8860B] mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-[#2B1B12]">Wholesale Application Received</h3>
                <p className="text-xs text-[#57534E] max-w-[42ch] mx-auto mt-3 leading-6">
                  Thank you for contacting Hair Oven Wholesale. A dedicated trade representative will review your request and contact you within 24 hours with our confidential wholesale catalog.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.14em] uppercase hover:bg-[#B8860B] transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl text-[#2B1B12]">Trade Enquiry Form</h3>
                <p className="text-xs text-[#57534E] mb-6">Please complete all fields to help us provide accurate MOQ and tiered pricing.</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Business / Salon Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Luxe Locks Salon"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Contact Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Work Email Address *
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
                      Phone / WhatsApp *
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
                      Country of Operation *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Nigeria, UK, USA, etc."
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Primary Category
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
                      Estimated Volume
                    </label>
                    <select
                      value={formData.estimatedVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    >
                      <option value="Sample Order (10-25 units)">Sample Order (10-25 units)</option>
                      <option value="50-100 units">50-100 units</option>
                      <option value="100-500 units">100-500 units</option>
                      <option value="500+ Bulk / Container">500+ Bulk / Container</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                    Order Details & Specifications
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify lengths, hair textures, custom packaging requirements, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-13 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Submit Wholesale Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
