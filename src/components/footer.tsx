"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#E8DDC9] relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="py-14 lg:py-20 border-b border-white/[0.08] grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="block relative w-48 h-20 -ml-2 mb-2">
              <Image 
                src="/brand_logo.PNG" 
                alt="Hair Oven Logo" 
                fill
                className="object-contain object-left"
              />
            </Link>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#D4AF37] mt-4">Exceptional hair. Extraordinary you.</div>
            <p className="text-sm leading-7 text-white/60 mt-6 max-w-[42ch]">Born in Africa. Crafted without compromise. For every version of her - across ages, races, lifestyles and budgets.</p>
            <div className="mt-8 flex flex-wrap gap-2 items-center">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-white hover:text-[#D4AF37] transition-all" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-white hover:text-[#D4AF37] transition-all" aria-label="TikTok">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
              </a>
              <a href="https://wa.me/2340000000000" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-white hover:text-[#D4AF37] transition-all" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 16.22c-.3-.15-1.77-.87-2.04-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-1.72-.85-2.95-1.92-4-3.62-.2-.32 0-.32.15-.62.15-.3.3-.45.45-.67.15-.22.07-.37-.07-.67-.15-.3-1.07-2.6-1.47-3.55-.37-.92-.77-.8-1.07-.8h-.6c-.27 0-.72.1-1.1.5-.4.4-1.5 1.47-1.5 3.57s1.55 4.15 1.75 4.42c.22.27 3.02 4.62 7.32 6.47 1.02.45 1.82.72 2.45.92 1.05.32 2 .27 2.75.17.85-.12 2.6-.1 2.97-.2.37-.1.65-.5.77-1.02.12-.5.12-.95.07-1.02-.05-.1-.2-.15-.5-.3zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18C7.589 4 4 7.589 4 12c0 1.742.56 3.355 1.5 4.675L4 21l4.475-1.425C9.722 20.472 10.82 20 12 20c4.411 0 8-3.589 8-8s-3.589-8-8-8z"/></svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] mb-4">Shop</div>
              <div className="space-y-3 text-sm text-white/70">
                <Link href="/shop" className="block hover:text-white transition-colors">All Hair</Link>
                <Link href="/collections/private" className="block hover:text-white transition-colors">Private</Link>
                <Link href="/collections/signature" className="block hover:text-white transition-colors">Signature</Link>
                <Link href="/collections/essentials" className="block hover:text-white transition-colors">Essentials</Link>
                <Link href="/bespoke" className="block hover:text-white transition-colors">Bespoke</Link>
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] mb-4">Guidance</div>
              <div className="space-y-3 text-sm text-white/70">
                <Link href="/heirloom-guide" className="block hover:text-white transition-colors">Heirloom Guide</Link>
                <Link href="#" className="block hover:text-white transition-colors">Cap Sizing</Link>
                <Link href="#" className="block hover:text-white transition-colors">Care & Storage</Link>
                <Link href="#" className="block hover:text-white transition-colors">Shipping</Link>
                <Link href="#" className="block hover:text-white transition-colors">Exchanges</Link>
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] mb-4">House</div>
              <div className="space-y-3 text-sm text-white/70">
                <Link href="/story" className="block hover:text-white transition-colors">Our Story</Link>
                <Link href="#" className="block hover:text-white transition-colors">Craftsmanship</Link>
                <Link href="#" className="block hover:text-white transition-colors">Oven Veil™</Link>
                <Link href="#" className="block hover:text-white transition-colors">The Atelier</Link>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] mb-4">Stay Close</div>
              <p className="text-xs leading-5 text-white/50 mb-4">Private previews, restock alerts, editorial stories.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex border border-white/10 focus-within:border-[#D4AF37] transition-colors w-full">
                <input placeholder="Email address" className="flex-1 min-w-0 bg-transparent px-3 py-3 text-sm placeholder:text-white/30 outline-none" />
                <button className="px-4 shrink-0 text-[11px] tracking-[0.16em] uppercase bg-[#D4AF37] text-black hover:bg-white transition-colors">Join</button>
              </form>
              <div className="text-[10px] text-white/30 mt-3">By joining, you agree to our Privacy Policy.</div>
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[11px] tracking-[0.08em] text-white/40">
          <div className="flex items-center gap-1">
            © {new Date().getFullYear()} HAIR OVEN. All rights reserved. 
            <Link href="https://www.tmb.it.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1 ml-1 group">
              Built by TMB
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
