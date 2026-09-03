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
    <footer className="bg-[#2B1B12] text-[#E8DDC9] relative">
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
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a href="https://www.instagram.com/hairoven" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-white hover:text-[#D4AF37] transition-all" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://x.com/hairoven" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-white hover:text-[#D4AF37] transition-all" aria-label="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://www.tiktok.com/@hairoven" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-white hover:text-[#D4AF37] transition-all" aria-label="TikTok">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
              </a>
              <a href="https://wa.me/2348057388171" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-white hover:text-[#D4AF37] transition-all" aria-label="WhatsApp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
                <button className="px-4 shrink-0 text-[11px] tracking-[0.16em] uppercase bg-[#D4AF37] text-[#2B1B12] hover:bg-white transition-colors">Join</button>
              </form>
              <div className="text-[10px] text-white/30 mt-3">By joining, you agree to our Privacy Policy.</div>
            </div>
          </div>
        </div>
        <div className="pt-8 pb-28 flex flex-col md:flex-row gap-5 justify-between items-center text-[11px] tracking-[0.08em] text-white/40">
          <div className="md:flex-1 flex justify-center md:justify-start order-1">
            © {new Date().getFullYear()} HAIR OVEN. All rights reserved.
          </div>
          <div className="flex gap-6 order-2">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <a href="mailto:support@hairoven.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="md:flex-1 flex justify-center md:justify-end order-3 mt-2 md:mt-0">
            <Link href="https://www.tmb.it.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1 group">
              Built by TMB
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
