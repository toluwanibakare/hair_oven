"use client";

import { Reveal } from "@/components/reveal";

export function BeautyWithoutElitism() {
  return (
    <section className="bg-[#FFFCF8] py-16 lg:py-24 border-y border-[rgba(28,18,14,0.06)]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#A68B5B]">Our Belief</div>
              <h2 className="font-serif text-[32px] lg:text-[44px] leading-[0.9] tracking-[-0.02em] mt-4">
                Your budget does
                <br />
                not define
                <br />
                <span className="italic font-normal">your worth.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:border-l lg:border-[rgba(28,18,14,0.08)] lg:pl-10">
            <Reveal delay={0.14}>
              <p className="text-[16px] leading-7 text-[#2B1B12] font-light max-w-[52ch]">
                We created three collections not to rank women, but to respect them. The same lace. The same construction care. The same respect - whether Private, Signature or Essentials.
              </p>
              <p className="text-sm leading-6 text-[#57534E] mt-4 max-w-[52ch]">
                Premium should never mean exclusion. If she saves, if she splurges, if she rotates - she should still feel she bought from a house that sees her.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)]">
                  <div className="font-serif text-lg">Private</div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#78716C] mt-1">Lifetime • Raw</div>
                  <div className="text-xs mt-2">For the heirloom mindset.</div>
                </div>
                <div className="p-4 bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)]">
                  <div className="font-serif text-lg">Signature</div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#78716C] mt-1">2–3+ Years</div>
                  <div className="text-xs mt-2">For long-term luxury.</div>
                </div>
                <div className="p-4 bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)]">
                  <div className="font-serif text-lg">Essentials</div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#78716C] mt-1">Effortless</div>
                  <div className="text-xs mt-2">For everyday beauty.</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
