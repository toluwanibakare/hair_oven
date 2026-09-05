"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X, ChevronDown, ChevronRight, Heart, Sparkles } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "./cart-drawer";
import { SearchOverlay } from "./search-overlay";

const collectionsDropdown = [
  {
    title: "PRIVATE COLLECTION",
    subtitle: "RAW Reserve",
    tagline: "Rare. Untouched. Exclusively Reserved.",
    href: "/collections/private",
    badge: "Lifetime Heirloom",
  },
  {
    title: "SIGNATURE COLLECTION",
    subtitle: "House Signatures",
    tagline: "High-density virgin hair engineered for long-term luxury.",
    href: "/collections/signature",
    badge: "2-3+ Years",
  },
  {
    title: "ESSENTIALS COLLECTION",
    subtitle: "Everyday Luxury",
    tagline: "Dependable beauty, flawlessly executed.",
    href: "/collections/essentials",
    badge: "Effortless Rotation",
  },
  {
    title: "THE ATELIER",
    subtitle: "Private Commission",
    tagline: "Custom cranial mapping, density & Oven Veil™ architecture.",
    href: "/atelier",
    badge: "Custom Commission",
  },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, setDrawerOpen, wishlist } = useCart();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="relative z-[60] bg-[#2B1B12] text-[#E8DDC9] text-center py-2 text-[10px] tracking-[0.2em] uppercase font-medium border-b border-[#E8DDC9]/10">
        <span className="hidden sm:inline">Complimentary express worldwide shipping on orders over ₦500,000 — </span>
        Client Concierge available via WhatsApp 9AM–7PM WAT
      </div>

      <header className="sticky top-0 z-50 bg-[#FFFCF8] border-b border-[#2B1B12]/10 transition-all duration-300">
        
        {/* Main Brand & Action Header */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-[64px] sm:h-[72px] flex items-center justify-between relative border-b border-[#2B1B12]/05">
          
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              className="p-2 -ml-2 text-[#2B1B12] hover:text-[#B8860B] transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Left Side Location & Contact Quick Link (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 text-[10px] tracking-[0.18em] uppercase font-semibold text-[#57534E]">
            <Link
              href="/contact"
              className="hover:text-[#2B1B12] transition-colors flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> LAGOS • LONDON • WORLDWIDE
            </Link>
          </div>

          {/* Center Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Link href="/" className="block relative w-36 h-12 sm:w-48 sm:h-14 hover:opacity-90 transition-opacity">
              <Image
                src="/brand_logo.PNG"
                alt="HAIR OVEN"
                fill
                className="object-contain object-center"
                priority
              />
            </Link>
          </div>

          {/* Right Header Icons */}
          <div className="flex items-center justify-end gap-1 sm:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center hover:bg-[#B8860B]/10 hover:text-[#B8860B] rounded-full transition-colors text-[#2B1B12]"
            >
              <Search className="w-4 h-4" strokeWidth={1.5} />
            </button>

            <Link
              href="/account"
              className="hidden sm:grid w-9 h-9 sm:w-10 sm:h-10 place-items-center hover:bg-[#B8860B]/10 hover:text-[#B8860B] rounded-full transition-colors text-[#2B1B12]"
            >
              <User className="w-4 h-4" strokeWidth={1.5} />
            </Link>

            <Link
              href="/wishlist"
              className="hidden sm:grid w-9 h-9 sm:w-10 sm:h-10 place-items-center hover:bg-[#B8860B]/10 hover:text-[#B8860B] rounded-full transition-colors relative text-[#2B1B12]"
            >
              <Heart className="w-4 h-4" strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-[#B8860B] text-white text-[9px] w-3.5 h-3.5 grid place-items-center rounded-full font-medium">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Shopping Bag"
              className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center hover:bg-[#B8860B]/10 hover:text-[#B8860B] rounded-full transition-colors relative text-[#2B1B12]"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#2B1B12] text-[#E8DDC9] text-[9px] w-4.5 h-4.5 grid place-items-center rounded-full font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Category Navigation Bar */}
        <nav className="hidden lg:flex items-center justify-center gap-7 py-3 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#2B1B12] bg-[#FFFCF8]">
          <Link href="/shop?filter=new" className="hover:text-[#B8860B] transition-colors py-1">
            NEW IN
          </Link>

          {/* COLLECTIONS Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setCollectionsOpen(true)}
            onMouseLeave={() => setCollectionsOpen(false)}
          >
            <button
              className={`py-1 flex items-center gap-1 transition-colors ${
                collectionsOpen ? "text-[#B8860B]" : "hover:text-[#B8860B]"
              }`}
            >
              THE COLLECTIONS{" "}
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${collectionsOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            <AnimatePresence>
              {collectionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[640px] bg-[#FFFCF8] border border-[#2B1B12]/15 shadow-[0_16px_48px_rgba(43,27,18,0.12)] p-6 grid grid-cols-2 gap-4 rounded-sm z-50"
                >
                  {collectionsDropdown.map((col) => (
                    <Link
                      key={col.title}
                      href={col.href}
                      onClick={() => setCollectionsOpen(false)}
                      className="group p-4 border border-[#2B1B12]/08 bg-[#EDE6D6]/20 hover:border-[#B8860B] hover:bg-white transition-all rounded-sm"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] tracking-[0.16em] uppercase text-[#B8860B] font-semibold">
                          {col.badge}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#2B1B12]/40 group-hover:text-[#B8860B] group-hover:translate-x-1 transition-all" />
                      </div>
                      <div className="font-serif text-base text-[#2B1B12] group-hover:text-[#B8860B] transition-colors">
                        {col.title}
                      </div>
                      <div className="text-[11px] text-[#57534E] mt-1 leading-4 normal-case font-normal">
                        {col.tagline}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/shop?cat=wigs" className="hover:text-[#B8860B] transition-colors py-1">
            WIGS
          </Link>

          <Link href="/extensions" className="hover:text-[#B8860B] transition-colors py-1">
            EXTENSIONS
          </Link>

          <Link href="/atelier" className="hover:text-[#B8860B] transition-colors py-1">
            THE ATELIER
          </Link>

          <Link href="/shop?cat=tools" className="hover:text-[#B8860B] transition-colors py-1">
            TOOLS & CARE
          </Link>

          <Link href="/wholesale" className="hover:text-[#B8860B] transition-colors py-1">
            THE TRADE EDIT
          </Link>

          <Link href="/heirloom-guide" className="hover:text-[#B8860B] transition-colors py-1">
            THE HEIRLOOM GUIDE
          </Link>

          <Link href="/story" className="hover:text-[#B8860B] transition-colors py-1">
            THE HOUSE
          </Link>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-[#2B1B12]/50 backdrop-blur-sm z-[100] lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-[88%] max-w-[380px] bg-[#FFFCF8] z-[100] flex flex-col lg:hidden border-r border-[#2B1B12]/10"
            >
              <div className="h-[64px] flex items-center justify-between px-6 border-b border-[#2B1B12]/10">
                <Image src="/brand_logo.PNG" alt="Hair Oven" width={130} height={38} className="object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 grid place-items-center rounded-full hover:bg-[#2B1B12]/5"
                >
                  <X className="w-5 h-5 text-[#2B1B12]" />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-6 space-y-3 font-semibold tracking-[0.12em] text-xs uppercase text-[#2B1B12]">
                <Link
                  href="/shop?filter=new"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-[#2B1B12]/08"
                >
                  <span>NEW IN</span>
                  <ChevronRight className="w-4 h-4 text-[#B8860B]" />
                </Link>

                <div className="py-2 border-b border-[#2B1B12]/08">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-[#B8860B] mb-2 font-bold">
                    THE COLLECTIONS
                  </div>
                  <div className="pl-3 space-y-2.5 font-medium text-xs normal-case text-[#57534E]">
                    <Link
                      href="/collections/private"
                      onClick={() => setMobileOpen(false)}
                      className="block hover:text-[#2B1B12]"
                    >
                      Private Collection (RAW Reserve)
                    </Link>
                    <Link
                      href="/collections/signature"
                      onClick={() => setMobileOpen(false)}
                      className="block hover:text-[#2B1B12]"
                    >
                      Signature Collection
                    </Link>
                    <Link
                      href="/collections/essentials"
                      onClick={() => setMobileOpen(false)}
                      className="block hover:text-[#2B1B12]"
                    >
                      Essentials Collection
                    </Link>
                    <Link
                      href="/atelier"
                      onClick={() => setMobileOpen(false)}
                      className="block hover:text-[#2B1B12]"
                    >
                      The Atelier (Private Commission)
                    </Link>
                  </div>
                </div>

                <Link
                  href="/shop?cat=wigs"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-[#2B1B12]/08"
                >
                  <span>WIGS</span>
                  <ChevronRight className="w-4 h-4 text-[#B8860B]" />
                </Link>

                <Link
                  href="/extensions"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-[#2B1B12]/08"
                >
                  <span>EXTENSIONS</span>
                  <ChevronRight className="w-4 h-4 text-[#B8860B]" />
                </Link>

                <Link
                  href="/atelier"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-[#2B1B12]/08"
                >
                  <span>THE ATELIER</span>
                  <ChevronRight className="w-4 h-4 text-[#B8860B]" />
                </Link>

                <Link
                  href="/shop?cat=tools"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-[#2B1B12]/08"
                >
                  <span>TOOLS & CARE</span>
                  <ChevronRight className="w-4 h-4 text-[#B8860B]" />
                </Link>

                <Link
                  href="/wholesale"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-[#2B1B12]/08"
                >
                  <span>THE TRADE EDIT</span>
                  <ChevronRight className="w-4 h-4 text-[#B8860B]" />
                </Link>

                <Link
                  href="/heirloom-guide"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-[#2B1B12]/08"
                >
                  <span>THE HEIRLOOM GUIDE</span>
                  <ChevronRight className="w-4 h-4 text-[#B8860B]" />
                </Link>

                <Link
                  href="/story"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-[#2B1B12]/08"
                >
                  <span>THE HOUSE</span>
                  <ChevronRight className="w-4 h-4 text-[#B8860B]" />
                </Link>
              </div>

              <div className="p-6 border-t border-[#2B1B12]/10 bg-[#EDE6D6]/40 flex gap-3">
                <Link
                  href="/account"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 h-11 grid place-items-center border border-[#2B1B12]/20 text-[11px] tracking-[0.14em] uppercase font-semibold"
                >
                  Account
                </Link>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setDrawerOpen(true);
                  }}
                  className="flex-1 h-11 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.14em] uppercase font-semibold hover:bg-[#B8860B] transition-colors"
                >
                  Bag ({cartCount})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CartDrawer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
