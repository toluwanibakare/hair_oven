"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const signatureUnits = [
  {
    id: "signature-caramel-wave-24",
    title: "THE SIGNATURE CARAMEL WAVE",
    subtitle: "Signature Collection",
    tagline: "DIMENSIONAL ARTISTRY",
    description:
      "A masterclass in dimensional artistry, THE CARAMEL WAVE introduces warm, hand-painted golden highlights over a deep espresso foundation. Designed to frame the face with radiant warmth, it delivers dynamic movement and unmistakable allure.",
    details: [
      "Espresso Brown with Caramel Dimension",
      "Soft, Sculpted Waves",
      "Defined Centre Part",
      "Silky, Gloss-Luminous & Polished",
      "Full-Length with Cascading Movement",
      "Luxuriously Full with Natural Flow",
      "Sophisticated, Timeless & Effortlessly Glamorous",
    ],
    image: "/products/caramel-wave.jpeg",
    link: "/product/signature-caramel-wave-24",
    whatsappText:
      "Hi HAIR OVEN, I would like to enquire about acquiring The Signature Caramel Wave.",
  },
  {
    id: "signature-velmorea-24",
    title: "THE VELMORÉA",
    subtitle: "Signature Collection",
    tagline: "POLISHED GLAMOUR",
    description:
      "A study in polished glamour, THE VELMORÉA is designed for an unmistakably luxurious presence. Engineered to capture effortless sophistication without appearing overworked, this unit transitions seamlessly from high-profile occasions to modern statement dressing.",
    details: [
      "Sleek body with sculpted waves",
      "Rich espresso-black finish",
      "Refined centre-part styling",
      "Full, luxurious density",
      "Signature Collection",
      "Fluid, Tangle-Free Movement with High Silhouette Retention",
    ],
    image: "/products/velmorea.jpeg",
    link: "/product/signature-velmorea-24",
    whatsappText:
      "Hi HAIR OVEN, I would like to enquire about acquiring The Velmoréa.",
  },
  {
    id: "signature-adunni-26",
    title: "THE ÀDUNNĪ",
    subtitle: "Signature Collection",
    tagline: "REFINED VOLUME",
    description:
      "A dramatic expression of natural texture and refined volume, THE ÀDUNNĪ is designed for those who want presence without compromise.",
    details: [
      "Luxuriously long length",
      "Defined, voluminous curls",
      "Deep natural-black finish",
      "Exceptional fullness and density",
      "Softly framed hairline",
      "Rich, glossy texture",
      "Statement Signature Collection piece",
    ],
    image: "/products/adunni.png",
    link: "/product/signature-adunni-26",
    whatsappText:
      "Hi HAIR OVEN, I would like to enquire about acquiring The Àdunnī.",
  },
  {
    id: "signature-aurelia-barrel-curl-24",
    title: "AURELIA BARREL CURL",
    subtitle: "Signature Collection",
    tagline: "STATEMENT BARREL CURLS",
    description:
      "Elevate your style with this high-end, statement-making lace front wig. Designed for a flawless, natural appearance, it is the ultimate protective style for photoshoots, special events, or everyday glam.",
    details: [
      "Seamlessly blends into any skin tone.",
      "Defined barrel curls that hold shape and movement without weighing down.",
      "Flexible parting versatility.",
      "Precision coloring meets defined volume for an uncompromised luxury look.",
    ],
    image: "/products/aurelia-barrel-curl.jpeg",
    link: "/product/signature-aurelia-barrel-curl-24",
    whatsappText:
      "Hi HAIR OVEN, I would like to enquire about acquiring Aurelia Barrel Curl.",
  },
  {
    id: "signature-honey-ash-bronzed-wave-24",
    title: "THE HONEY-ASH BRONZED WAVE",
    subtitle: "Signature Collection",
    tagline: "DIMENSIONAL SOPHISTICATION",
    description:
      "A seamless blend of warm honey and ash blonde tones, styled in effortless Hollywood waves.",
    details: [
      "Dimensional sophistication",
      "Masterfully toned ash and golden-honey blonde highlights woven over a dark root for maximum depth.",
      "Long, luxurious length",
      "Soft, cascading S-waves engineered to maintain bounce, body, and high-shine fluid movement.",
      "Private Signature Collection",
    ],
    image: "/products/honey-ash-bronzed-wave.jpeg",
    link: "/product/signature-honey-ash-bronzed-wave-24",
    whatsappText:
      "Hi HAIR OVEN, I would like to enquire about acquiring The Honey-Ash Bronzed Wave.",
  },
];

export function SignatureSpotlight() {
  const [activeTab, setActiveTab] = useState(0);
  const current = signatureUnits[activeTab];

  return (
    <section className="bg-[#FFFCF8] text-[#2B1B12] py-20 lg:py-28 border-b border-[#2B1B12]/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        
        {/* Section Header & Tab Selector */}
        <div className="flex flex-wrap items-end justify-between gap-6 pb-10 border-b border-[#2B1B12]/10">
          <div>
            <span className="text-[10px] tracking-[0.26em] uppercase text-[#B8860B] font-semibold block">
              SIGNATURE MASTERWORKS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1B12] leading-tight tracking-tight mt-2 font-light">
              HOUSE ICON SILHOUETTES.
            </h2>
          </div>

          <div className="flex gap-3 bg-[#EDE6D6]/40 p-1.5 rounded-sm border border-[#2B1B12]/10">
            {signatureUnits.map((unit, idx) => (
              <button
                key={unit.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-semibold transition-all ${
                  activeTab === idx
                    ? "bg-[#2B1B12] text-[#FFFCF8] shadow-md"
                    : "text-[#57534E] hover:text-[#2B1B12]"
                }`}
              >
                {unit.title.replace("THE SIGNATURE ", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Content Spotlight Grid */}
        <div className="mt-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase Side */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] sm:aspect-[1.05] relative rounded-sm overflow-hidden border border-[#2B1B12]/10 shadow-2xl group bg-[#2B1B12]">
              <img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#2B1B12]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#D4AF37] font-semibold block">
                    {current.tagline}
                  </span>
                  <span className="font-serif text-lg text-white font-light mt-0.5 block">
                    {current.title}
                  </span>
                </div>
                <Link
                  href={current.link}
                  className="h-10 px-5 bg-[#D4AF37] text-[#2B1B12] text-[10px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-1.5 hover:bg-white transition-colors"
                >
                  VIEW UNIT <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="lg:col-span-6">
            <span className="text-[10px] tracking-[0.26em] uppercase text-[#B8860B] font-semibold block mb-3">
              {current.subtitle}
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1B12] leading-tight tracking-tight font-light">
              {current.title}
            </h3>

            <p className="mt-6 text-sm sm:text-base text-[#57534E] leading-relaxed font-normal">
              {current.description}
            </p>

            {/* Signature Details Section */}
            <div className="mt-8 border-t border-[#2B1B12]/10 pt-6">
              <h4 className="text-[11px] tracking-[0.22em] uppercase text-[#2B1B12] font-semibold mb-4">
                THE SIGNATURE DETAILS
              </h4>

              <div className="grid sm:grid-cols-2 gap-3">
                {current.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0" />
                    <span className="text-xs text-[#57534E] font-medium leading-5">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={current.link}
                className="h-[52px] px-9 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-[#B8860B] transition-colors shadow-md"
              >
                ACQUIRE THIS UNIT <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/2348057388171?text=${encodeURIComponent(current.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[52px] px-8 border border-[#2B1B12]/20 text-[#2B1B12] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center hover:bg-[#2B1B12] hover:text-[#FFFCF8] transition-colors"
              >
                INQUIRE VIA CONCIERGE
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
