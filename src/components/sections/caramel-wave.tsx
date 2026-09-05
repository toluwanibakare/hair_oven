"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CaramelWave() {
  const detailsList = [
    "Espresso Brown with Caramel Dimension",
    "Soft, Sculpted Waves",
    "Defined Centre Part",
    "Silky, Gloss-Luminous & Polished",
    "Full-Length with Cascading Movement",
    "Luxuriously Full with Natural Flow",
    "Sophisticated, Timeless & Effortlessly Glamorous",
  ];

  return (
    <section className="bg-[#FFFCF8] text-[#2B1B12] py-20 lg:py-28 border-b border-[#2B1B12]/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase Side */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] sm:aspect-[1.05] relative rounded-sm overflow-hidden border border-[#2B1B12]/10 shadow-2xl group bg-[#2B1B12]">
              <img
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop"
                alt="The Signature Caramel Wave"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#2B1B12]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#D4AF37] font-semibold block">
                    FEATURED SIGNATURE UNIT
                  </span>
                  <span className="font-serif text-lg text-white font-light mt-0.5 block">
                    The Caramel Wave
                  </span>
                </div>
                <Link
                  href="/product/signature-caramel-wave-24"
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
              SIGNATURE COLLECTION
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1B12] leading-tight tracking-tight font-light">
              THE SIGNATURE CARAMEL WAVE
            </h2>

            <p className="mt-6 text-sm sm:text-base text-[#57534E] leading-relaxed font-normal">
              A masterclass in dimensional artistry, THE CARAMEL WAVE introduces warm, hand-painted golden highlights over a deep espresso foundation. Designed to frame the face with radiant warmth, it delivers dynamic movement and unmistakable allure.
            </p>

            {/* Signature Details Section */}
            <div className="mt-8 border-t border-[#2B1B12]/10 pt-6">
              <h3 className="text-[11px] tracking-[0.22em] uppercase text-[#2B1B12] font-semibold mb-4">
                THE SIGNATURE DETAILS
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {detailsList.map((detail) => (
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
                href="/product/signature-caramel-wave-24"
                className="h-[52px] px-9 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-[#B8860B] transition-colors shadow-md"
              >
                ACQUIRE THIS UNIT <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/2348057388171?text=Hi%20HAIR%20OVEN%2C%20I%20would%20like%20to%20enquire%20about%20The%20Signature%20Caramel%20Wave."
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
