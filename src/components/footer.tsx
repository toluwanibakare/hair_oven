"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Send, PhoneCall, Mail, Package, Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#E0D5C5] text-[#2B1B12] relative border-t border-[#2B1B12]/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        
        {/* Upper Footer Grid */}
        <div className="py-16 lg:py-20 border-b border-[#2B1B12]/15 grid lg:grid-cols-12 gap-12">
          
          {/* Brand Identity & Concierge Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="block relative w-48 h-18 -ml-1">
              <Image 
                src="/brand_logo.PNG" 
                alt="Hair Oven Logo" 
                fill
                className="object-contain object-left"
              />
            </Link>

            <div>
              <div className="font-serif text-lg text-[#2B1B12] font-medium">
                THE HOUSE OF EXCEPTIONAL HAIR
              </div>
              <p className="text-xs text-[#57534E] leading-6 mt-1 max-w-[38ch]">
                Exceptional hair. Uncompromising craftsmanship. Distinctly HAIR OVEN.
              </p>
            </div>

            <div className="pt-2 space-y-2 text-xs text-[#2B1B12] font-medium">
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#B8860B] font-bold">
                CLIENT CONCIERGE & CONTACT
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#57534E]">WhatsApp:</span>
                <a href="https://wa.me/2348057388171" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors">
                  +234 805 738 8171
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#57534E]">Client Care:</span>
                <a href="mailto:support@hairoven.com" className="hover:text-[#B8860B] transition-colors">
                  support@hairoven.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#B8860B] font-bold mb-3">
                FOLLOW THE HOUSE
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/hairoven"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/70 border border-[#2B1B12]/10 grid place-items-center hover:bg-[#2B1B12] hover:text-[#FFFCF8] hover:border-[#2B1B12] transition-colors text-[#2B1B12]"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href="https://tiktok.com/@hairoven"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-full bg-white/70 border border-[#2B1B12]/10 grid place-items-center hover:bg-[#2B1B12] hover:text-[#FFFCF8] hover:border-[#2B1B12] transition-colors text-[#2B1B12]"
                >
                  {/* Official TikTok SVG Icon */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525 2.055a.556.556 0 0 0-.55.551v12.227a3.284 3.284 0 0 1-3.285 3.28 3.28 3.28 0 0 1-3.28-3.28 3.28 3.28 0 0 1 3.28-3.281c.21 0 .416.02.615.057a.556.556 0 0 0 .647-.547V8.583a.557.557 0 0 0-.46-.547 6.44 6.44 0 0 0-.802-.05 6.386 6.386 0 0 0-6.386 6.385A6.386 6.386 0 0 0 8.69 20.757a6.386 6.386 0 0 0 6.385-6.386V7.974A8.52 8.52 0 0 0 19.5 9.406a.556.556 0 0 0 .556-.556V5.882a.556.556 0 0 0-.319-.502 5.42 5.42 0 0 1-3.033-2.823.556.556 0 0 0-.504-.319h-3.675z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@hairoven"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/70 border border-[#2B1B12]/10 grid place-items-center hover:bg-[#2B1B12] hover:text-[#FFFCF8] hover:border-[#2B1B12] transition-colors text-[#2B1B12]"
                >
                  <Youtube className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href="https://facebook.com/hairoven"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/70 border border-[#2B1B12]/10 grid place-items-center hover:bg-[#2B1B12] hover:text-[#FFFCF8] hover:border-[#2B1B12] transition-colors text-[#2B1B12]"
                >
                  <Facebook className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Column 1: Shop */}
            <div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#B8860B] font-bold mb-4">
                Shop Collections
              </div>
              <div className="space-y-3 text-xs text-[#2B1B12]/80 font-medium">
                <Link href="/collections/private" className="block hover:text-[#2B1B12] transition-colors">
                  Private Collection (RAW)
                </Link>
                <Link href="/collections/signature" className="block hover:text-[#2B1B12] transition-colors">
                  Signature Collection
                </Link>
                <Link href="/collections/essentials" className="block hover:text-[#2B1B12] transition-colors">
                  Essentials Collection
                </Link>
                <Link href="/shop?cat=wigs" className="block hover:text-[#2B1B12] transition-colors">
                  Luxury Wigs
                </Link>
                <Link href="/extensions" className="block hover:text-[#2B1B12] transition-colors">
                  Hair Extensions
                </Link>
                <Link href="/shop?cat=tools" className="block hover:text-[#2B1B12] transition-colors">
                  Tools & Care
                </Link>
              </div>
            </div>

            {/* Column 2: Atelier & Guidance */}
            <div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#B8860B] font-bold mb-4">
                Atelier & Guidance
              </div>
              <div className="space-y-3 text-xs text-[#2B1B12]/80 font-medium">
                <Link href="/atelier" className="block hover:text-[#2B1B12] transition-colors">
                  Atelier Commissions
                </Link>
                <Link href="/atelier#consultation-form" className="block hover:text-[#2B1B12] transition-colors">
                  Private Appointments
                </Link>
                <Link href="/heirloom-guide" className="block hover:text-[#2B1B12] transition-colors">
                  The Heirloom Guide
                </Link>
                <Link href="/heirloom-guide#bespoke-fit" className="block hover:text-[#2B1B12] transition-colors">
                  Oven Veil™ Technology
                </Link>
                <Link href="/heirloom-guide#fit-policies" className="block hover:text-[#2B1B12] transition-colors">
                  Cap Sizing Protocol
                </Link>
              </div>
            </div>

            {/* Column 3: The House */}
            <div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#B8860B] font-bold mb-4">
                The House
              </div>
              <div className="space-y-3 text-xs text-[#2B1B12]/80 font-medium">
                <Link href="/story" className="block hover:text-[#2B1B12] transition-colors">
                  Our Story & Calling
                </Link>
                <Link href="/story#craftsmanship" className="block hover:text-[#2B1B12] transition-colors">
                  Our Standard
                </Link>
                <Link href="/wholesale" className="block hover:text-[#2B1B12] transition-colors">
                  The Trade Edit
                </Link>
                <Link href="/wholesale#enquiry-form" className="block hover:text-[#2B1B12] transition-colors">
                  Volume Supply & MOQs
                </Link>
                <Link href="/contact" className="block hover:text-[#2B1B12] transition-colors">
                  Client Support & Contact
                </Link>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="col-span-2 md:col-span-1">
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#B8860B] font-bold mb-4">
                Stay Connected
              </div>
              <div className="font-serif text-base text-[#2B1B12] mb-1">
                THE HOUSE, IN YOUR INBOX.
              </div>
              <p className="text-[11px] leading-5 text-[#57534E] mb-4">
                Receive exclusive new collection announcements, private rare unit releases, and elegant updates from the Founder.
              </p>

              {subscribed ? (
                <div className="text-xs text-[#B8860B] font-semibold bg-white p-3 border border-[#2B1B12]/15">
                  Welcome to The House. Thank you for subscribing.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex border border-[#2B1B12]/20 bg-white focus-within:border-[#B8860B] transition-colors w-full">
                  <input 
                    type="email" 
                    required
                    placeholder="Email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent px-3 py-2.5 text-xs text-[#2B1B12] placeholder:text-[#2B1B12]/40 outline-none" 
                  />
                  <button type="submit" className="px-4 shrink-0 text-[10px] tracking-[0.16em] uppercase bg-[#2B1B12] text-[#E0D5C5] hover:bg-[#B8860B] transition-colors font-semibold">
                    Join
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Lower Footer Bottom Bar */}
        <div className="pt-6 pb-4 flex flex-col md:flex-row gap-4 justify-between items-center text-[11px] tracking-[0.08em] text-[#57534E] z-10 relative font-medium">
          <div className="md:flex-1 flex justify-center md:justify-start order-1">
            © {new Date().getFullYear()} HAIR OVEN. All rights reserved.
          </div>

          <div className="flex gap-6 order-2">
            <Link href="/heirloom-guide#fit-policies" className="hover:text-[#2B1B12] transition-colors">Privacy</Link>
            <Link href="/heirloom-guide#fit-policies" className="hover:text-[#2B1B12] transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-[#2B1B12] transition-colors">Contact</Link>
          </div>

          <div className="md:flex-1 flex justify-center md:justify-end order-3 mt-2 md:mt-0">
            <Link href="https://www.tmb.it.com" target="_blank" rel="noopener noreferrer" className="text-[#B8860B] hover:text-[#2B1B12] transition-colors flex items-center gap-1 group">
              Built by TMB
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </Link>
          </div>
        </div>

        {/* Massive Faded Background Watermark Logo */}
        <div className="w-full flex justify-center overflow-hidden pointer-events-none select-none pb-0 -mb-2">
          <div className="font-serif text-[18vw] lg:text-[14vw] leading-[0.7] tracking-[-0.04em] text-[#2B1B12] opacity-[0.04] whitespace-nowrap">
            HAIR OVEN
          </div>
        </div>

      </div>
    </footer>
  );
}
