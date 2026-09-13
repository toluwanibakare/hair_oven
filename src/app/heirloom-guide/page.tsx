"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Sparkles, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface GuideTopic {
  title: string;
  content: string;
}

interface GuideSection {
  numeral: string;
  title: string;
  topics: GuideTopic[];
}

export default function HeirloomGuidePage() {
  const { t } = useLanguage();
  const [openTopic, setOpenTopic] = useState<string | null>("I-0");
  const heirloomKnowledge: GuideSection[] = t.heirloom.sections;

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
            {t.heirloom.heroEyebrow}
          </span>
          <h1 className="font-serif text-[42px] sm:text-[60px] lg:text-[76px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light max-w-[900px] mx-auto">
            {t.heirloom.heroTitle}
          </h1>
          <p className="mt-4 text-xs sm:text-sm tracking-[0.18em] uppercase text-[#E8DDC9]/80 font-medium">
            {t.heirloom.heroSub}
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
            {t.heirloom.conciergeEyebrow}
          </span>
          <h3 className="font-serif text-2xl lg:text-3xl text-[#2B1B12] mt-2">
            {t.heirloom.conciergeTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] mt-3 leading-6">
            {t.heirloom.conciergeBody}
          </p>
          <div className="mt-6 flex justify-center gap-4 text-xs tracking-[0.14em] uppercase font-semibold">
            <a
              href="https://wa.me/2348057388171"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#2B1B12] text-[#FFFCF8] hover:bg-[#B8860B] transition-colors"
            >
              {t.heirloom.conciergeCta}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
