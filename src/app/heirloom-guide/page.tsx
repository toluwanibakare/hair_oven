"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Sparkles, Truck, Heart, Ruler, ChevronDown } from "lucide-react";
import { useState } from "react";

const heirloomSections = [
  {
    id: "craftsmanship",
    title: "I. THE CRAFTSMANSHIP & RESERVES",
    icon: Shield,
    qa: [
      {
        q: "What defines the HAIR OVEN standard?",
        a: "Excellence is never accidental. Our hair is defined by uncompromising donor selection, natural cuticle alignment, dense weight distribution, and flawless structural integrity. Each piece undergoes rigorous evaluation before receiving the HAIR OVEN stamp of authenticity.",
      },
      {
        q: "How do the collections differ in longevity?",
        a: "Longevity is directly tied to the purity and origin of the hair:\n\n• The Private Collection (RAW Reserve): Entirely unprocessed single-donor hair with fully intact cuticles. With proper care, this specific collection lasts a lifetime. It is preserved as a permanent heirloom investment.\n• The Signature Collection: Exceptional, high-density virgin hair designed for long-term luxury (2 to 3+ years) under daily wear and versatile restyling.\n• The Essentials Collection: High-quality human hair crafted for dependable beauty and effortless rotation.",
      },
      {
        q: "Can the hair undergo custom chemical processing?",
        a: "Indubitably. Both our Private Collection and Signature Collection possess intact cuticles, allowing seamless lifting, custom bleaching, and specific colour transformation by a master colourist without sacrificing structural integrity.",
      },
    ],
  },
  {
    id: "bespoke-fit",
    title: "II. ATELIER COMMISSIONS & PROPRIETARY FIT",
    icon: Sparkles,
    qa: [
      {
        q: "What is Oven Veil™?",
        a: "Oven Veil™ is HAIR OVEN’s proprietary, ultra-sheer lace technology. Designed to mimic natural skin texture and melting seamlessly upon contact, it offers an entirely invisible, weightless hairline that vanishes completely under any lighting or HD lens.",
      },
      {
        q: "How is an undetectable finish guaranteed?",
        a: "Every HAIR OVEN unit is built exclusively with our Oven Veil™ base, hand-tied strands, and expertly pre-plucked natural hairlines. Internal adjustable banding ensures a custom-molded fit tailored exactly to your silhouette.",
      },
    ],
  },
  {
    id: "logistics",
    title: "III. LOGISTICS & FULFILLMENT",
    icon: Truck,
    qa: [
      {
        q: "What is your global delivery reach?",
        a: "We serve an international clientele with white-glove courier delivery within Lagos, prioritized nationwide dispatch across Nigeria, and insured express global shipping worldwide.",
      },
      {
        q: "What are the expected fulfillment timelines?",
        a: "• Ready-to-Wear & Bundles: Dispatched within 24–72 business hours following quality verification.\n• RAW & Atelier Masterpieces: Require 7–14 business days of meticulous crafting, custom hairline tailoring, and QA assessment prior to dispatch.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "IV. PROVENANCE & INVESTMENT MAINTENANCE",
    icon: Heart,
    qa: [
      {
        q: "Where is HAIR OVEN hair ethically sourced?",
        a: "Our hair is ethically collected directly from single donors across Southeast Asia and East Asia. We maintain strict ethical procurement standards, ensuring full compensation for donors while preserving the unrefined purity and natural strength of each strand.",
      },
      {
        q: "How do I properly store and preserve my unit?",
        a: "To ensure multi-year and lifetime longevity, store your unit inside the complimentary HAIR OVEN Silk Preservation Bag or on a satin mannequin head when not in use. Keep the hair hydrated with lightweight, sulfate-free oils and avoid excessive direct heat without thermal protection.",
      },
    ],
  },
  {
    id: "fit-policies",
    title: "V. FIT PRECISION & POLICIES",
    icon: Ruler,
    qa: [
      {
        q: "How do I select the correct cap size for Ready-to-Wear units?",
        a: "We offer standard Small (21.5\"), Medium (22.5\"), and Large (23.5\") cap sizes, all equipped with internal adjustable security bands. If you require assistance, our Client Concierge provides a step-by-step measurement guide.",
      },
      {
        q: "What is your exchange protocol for luxury units?",
        a: "Due to the personal nature of luxury hair craftsmanship, all custom Atelier pieces are final sale. For Ready-to-Wear and Signature collections, we accept exchanges within 7 days of delivery, provided the security seal remains intact and the Oven Veil™ lace has not been cut, coloured, or altered.",
      },
    ],
  },
];

export default function HeirloomGuidePage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "0-0": true });

  const toggleQA = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1600&auto=format&fit=crop"
            alt="Heirloom Guide"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-transparent to-transparent" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 text-center">
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#D4AF37] font-semibold">
            CLIENT CARE & KNOWLEDGE HUB
          </span>
          <h1 className="font-serif text-[42px] sm:text-[60px] lg:text-[76px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light max-w-[900px] mx-auto">
            THE HEIRLOOM GUIDE
          </h1>
          <p className="mt-4 text-xs sm:text-sm tracking-[0.2em] uppercase text-[#E8DDC9]/70 font-medium">
            PRESERVATION, PROVENANCE, AND PROPRIETARY FIT.
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24 space-y-16">
        {heirloomSections.map((section, sIdx) => {
          const Icon = section.icon;
          return (
            <div key={section.id} className="border-b border-[#2B1B12]/10 pb-12 last:border-0">
              <div className="flex items-center gap-3 mb-6">
                <Icon className="w-6 h-6 text-[#B8860B]" />
                <h2 className="font-serif text-2xl lg:text-3xl text-[#2B1B12] font-medium tracking-tight">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4">
                {section.qa.map((item, qIdx) => {
                  const key = `${sIdx}-${qIdx}`;
                  const isOpen = !!openItems[key];
                  return (
                    <div
                      key={item.q}
                      className="border border-[#2B1B12]/10 bg-white rounded-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQA(key)}
                        className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#F5EFE6]/50 transition-colors"
                      >
                        <span className="font-serif text-lg text-[#2B1B12]">{item.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#B8860B] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#57534E] leading-7 whitespace-pre-line border-t border-[#2B1B12]/05">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Concierge Banner */}
      <section className="bg-[#E0D5C5]/30 border-t border-[#2B1B12]/10 py-16 text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
            CLIENT CONCIERGE
          </span>
          <h3 className="font-serif text-2xl lg:text-3xl text-[#2B1B12] mt-2">
            Require Further Guidance?
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] mt-3 leading-6">
            Our Client Concierge is available for virtual consultations, cap measurement support, and custom preservation advice.
          </p>
          <div className="mt-6 flex justify-center gap-4 text-xs tracking-[0.14em] uppercase font-semibold">
            <a
              href="https://wa.me/2348057388171"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#2B1B12] text-[#FFFCF8] hover:bg-[#B8860B] transition-colors"
            >
              WhatsApp Concierge
            </a>
            <Link
              href="/atelier"
              className="px-8 py-3.5 border border-[#2B1B12]/20 text-[#2B1B12] hover:bg-[#2B1B12] hover:text-white transition-colors"
            >
              Atelier Commissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
