"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Sparkles, ShieldCheck } from "lucide-react";

interface GuideTopic {
  title: string;
  content: string;
}

interface GuideSection {
  numeral: string;
  title: string;
  topics: GuideTopic[];
}

const heirloomKnowledge: GuideSection[] = [
  {
    numeral: "I",
    title: "THE HAIR",
    topics: [
      {
        title: "Provenance",
        content: "Every strand within our Private and Signature collections is ethically sourced directly from single donors across Southeast Asia and East Asia. We maintain rigorous procurement protocols ensuring donors are compensated fairly, while preserving the raw, unrefined strength of virgin hair.",
      },
      {
        title: "Donor Selection",
        content: "Only 1 in 100 hair bundles evaluated meets the stringent criteria required for HAIR OVEN. Strands are hand-inspected for natural elasticity, uniform strand strength, and rich, natural pigments without prior chemical processing.",
      },
      {
        title: "Cuticle Integrity",
        content: "Absolute cuticle alignment from root to tip is the cornerstone of structural longevity. By keeping cuticles intact and running in one direction, HAIR OVEN creations resist matting and tangling across years of wear.",
      },
      {
        title: "Density & Weight",
        content: "We map density with meticulous weight distribution. Rather than overloading the crown, hair is woven to achieve realistic volume, natural bounce, and effortless movement that mimics natural scalp growth.",
      },
      {
        title: "Collection Standards",
        content: "Our House operates across three distinct collections: The Private Collection (unprocessed single-donor raw reserve for lifetime investment), The Signature Collection (exceptional high-density virgin hair), and Essentials (the everyday expression of the House).",
      },
    ],
  },
  {
    numeral: "II",
    title: "THE CRAFT",
    topics: [
      {
        title: "Construction",
        content: "Each unit is hand-constructed by master wigmakers. Internal stitch lines are flat-tacked to eliminate bulk, maintaining a sleek profile against your scalp while ensuring superior durability.",
      },
      {
        title: "Oven Veil™",
        content: "Oven Veil™ is HAIR OVEN's proprietary finishing philosophy and sheer base material. Designed to harmonize seamlessly across warm, deep, and fair complexions, it creates a subtle, weightless transition between hair and skin.",
      },
      {
        title: "Finishing",
        content: "Hairlines are hand-trimmed and pre-plucked with delicate single knots along the perimeter. This multi-step process eliminates harsh edges, allowing versatile styling in high ponytails or swept-back looks.",
      },
      {
        title: "Customisation",
        content: "From custom color lifting executed without compromising structural integrity to bespoke density mapping, our Atelier craftsmen tailor every detail strictly to your specification.",
      },
      {
        title: "Atelier Standards",
        content: "Private Atelier commissions undergo a 7 to 14 business day creation window. Every creation undergoes a rigorous 12-point quality assessment before dispatch.",
      },
    ],
  },
  {
    numeral: "III",
    title: "THE FIT",
    topics: [
      {
        title: "Cap Architecture",
        content: "Engineered with breathable luxury mesh, internal silicone non-slip grips, and custom-molded elastic tension bands that conform softly to your cranial outline.",
      },
      {
        title: "Measurements",
        content: "Achieving flawless fit requires measuring 6 key cranial points: Circumference, Front to Nape, Ear to Ear across forehead, Ear to Ear over top, Temple to Temple round back, and Nape width.",
      },
      {
        title: "Sizing",
        content: "Ready-to-Wear pieces are available in Small (21.5\"), Medium (22.5\"), and Large (23.5\"). Custom Atelier commissions are built around your exact 3D measurement profile.",
      },
      {
        title: "Private Fittings",
        content: "Clients may request in-person fitting consultations at our Lagos studio, London appointments, or virtual video guidance led by our Senior Client Concierge.",
      },
    ],
  },
  {
    numeral: "IV",
    title: "THE JOURNEY",
    topics: [
      {
        title: "Order Preparation",
        content: "Following placement, every unit is prepared, cleansed with botanical formulations, air-dried, and hand-inspected under high-definition lighting prior to luxury packaging.",
      },
      {
        title: "Fulfilment",
        content: "Ready-to-Wear orders are dispatched within 24–72 business hours. Custom Atelier pieces require a 7 to 14 business day craftsmanship window.",
      },
      {
        title: "International Delivery",
        content: "We partner with premium insured global couriers (DHL Express & FedEx International Priority) to ensure secure, tracked delivery to over 140 countries.",
      },
      {
        title: "Private Concierge",
        content: "Your dedicated Concierge is accessible via WhatsApp and email to provide live shipping updates, delivery scheduling, and personalized unboxing guidance.",
      },
    ],
  },
  {
    numeral: "V",
    title: "THE PRESERVATION",
    topics: [
      {
        title: "Washing & Care",
        content: "Cleanse every 15–20 wears using sulfate-free, moisture-rich shampoos. Lather gently downward from crown to ends without scrubbing or bunching the hair.",
      },
      {
        title: "Storage",
        content: "When not in wear, store your piece inside the complimentary HAIR OVEN Silk Preservation Bag or on a padded mannequin head away from direct sunlight and humidity.",
      },
      {
        title: "Maintenance",
        content: "Apply light botanical oils or silk serums to preserve moisture. Always apply heat protectant before using hot styling tools above 180°C (350°F).",
      },
      {
        title: "Restoration",
        content: "The House offers specialized restoration services for long-time clients, including lace repair, re-plucking, deep hydration treatments, and tone refresh.",
      },
      {
        title: "Long-Term Preservation",
        content: "With proper adherence to House care protocols, pieces from our Private Collection endure for years, retaining their natural luster, soft texture, and movement.",
      },
    ],
  },
  {
    numeral: "VI",
    title: "THE HOUSE STANDARD",
    topics: [
      {
        title: "Authenticity",
        content: "Every HAIR OVEN creation includes a embossed Certificate of Authenticity featuring a unique serial number verifying donor provenance and quality clearance.",
      },
      {
        title: "Exchange Policy",
        content: "Ready-to-Wear pieces may be exchanged within 7 days of receipt provided the hygiene seal remains intact and the lace is uncut and unaltered. Bespoke Atelier creations are final sale.",
      },
      {
        title: "Client Care",
        content: "Our commitment extends far beyond purchase. We offer lifetime client advisory on maintenance, restyling, and seasonal care routines.",
      },
      {
        title: "Aftercare",
        content: "Every purchase includes our physical Heirloom Guide booklet detailing step-by-step care guidelines tailored specifically to your chosen collection.",
      },
    ],
  },
];

export default function HeirloomGuidePage() {
  const [openTopic, setOpenTopic] = useState<string | null>("I-0");

  const toggleTopic = (key: string) => {
    setOpenTopic((prev) => (prev === key ? null : key));
  };

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1600&auto=format&fit=crop"
            alt="The Heirloom Guide Header"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-transparent to-transparent" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 text-center">
          <span className="text-[10px] tracking-[0.26em] uppercase text-[#D4AF37] font-semibold">
            THE KNOWLEDGE BEHIND THE HOUSE.
          </span>
          <h1 className="font-serif text-[42px] sm:text-[60px] lg:text-[76px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light max-w-[900px] mx-auto">
            THE HEIRLOOM GUIDE
          </h1>
          <p className="mt-4 text-xs sm:text-sm tracking-[0.18em] uppercase text-[#E8DDC9]/80 font-medium">
            From provenance to preservation, every detail matters.
          </p>
        </div>
      </section>

      {/* Guide Content Architecture */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="space-y-16">
          {heirloomKnowledge.map((sec, sIdx) => (
            <div key={sec.numeral} className="border-b border-[#2B1B12]/10 pb-12 last:border-0">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-2xl lg:text-3xl text-[#B8860B] font-light">
                  {sec.numeral}
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl text-[#2B1B12] font-medium tracking-tight">
                  {sec.title}
                </h2>
              </div>

              <div className="space-y-3">
                {sec.topics.map((topic, tIdx) => {
                  const key = `${sec.numeral}-${tIdx}`;
                  const isOpen = openTopic === key;
                  return (
                    <div
                      key={topic.title}
                      className="border border-[#2B1B12]/10 bg-white rounded-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleTopic(key)}
                        className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 hover:bg-[#EDE6D6]/30 transition-colors"
                      >
                        <span className="font-serif text-base sm:text-lg text-[#2B1B12] font-medium">
                          {topic.title}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#B8860B] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#57534E] leading-7 border-t border-[#2B1B12]/05">
                          {topic.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Concierge Banner */}
      <section className="bg-[#E0D5C5]/30 border-t border-[#2B1B12]/10 py-16 text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
            PRIVATE CONCIERGE
          </span>
          <h3 className="font-serif text-2xl lg:text-3xl text-[#2B1B12] mt-2">
            Require Assistance Selecting Your Piece?
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] mt-3 leading-6">
            Our Senior Concierge is available for virtual consultations, cap sizing guidance, and custom preservation advice.
          </p>
          <div className="mt-6 flex justify-center gap-4 text-xs tracking-[0.14em] uppercase font-semibold">
            <a
              href="https://wa.me/2348057388171"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#2B1B12] text-[#FFFCF8] hover:bg-[#B8860B] transition-colors"
            >
              SPEAK WITH A CONCIERGE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
