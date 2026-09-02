"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X, ChevronRight, Heart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { CartDrawer } from "./cart-drawer";
import { SearchOverlay } from "./search-overlay";

const shopMenu = [
  { label: "Wigs", href: "/shop?cat=wigs", desc: "Ready-to-wear luxury" },
  { label: "Raw Hair", href: "/shop?cat=raw", desc: "Single-donor unprocessed" },
  { label: "Bundles", href: "/shop?cat=bundles", desc: "Matched donor sets" },
  { label: "Closures & Frontals", href: "/shop?cat=frontals", desc: "Oven Veil™ lace" },
  { label: "Extensions", href: "/shop?cat=extensions", desc: "Clip-ins & tapes" },
  { label: "Haircare", href: "/shop?cat=haircare", desc: "Maintain the heirloom" },
  { label: "Tools & Accessories", href: "/shop?cat=tools", desc: "Essentials" },
  { label: "Bespoke Hair", href: "/bespoke", desc: "Created around you" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, setDrawerOpen, wishlist } = useCart();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top announce */}
      <div className="relative z-[60] bg-[#1C120E] text-[#E8DDC9] text-center py-2 text-[10px] tracking-[0.18em] uppercase font-medium">
        <span className="hidden sm:inline">Complimentary worldwide shipping on orders over ₦500,000 - </span>WhatsApp consultation available 9AM–7PM WAT
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled ? "bg-[#FFFCF8]/90 backdrop-blur-xl border-[rgba(28,18,14,0.08)] shadow-[0_1px_20px_rgba(28,18,14,0.05)] py-2" : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 h-[72px] flex items-center justify-between gap-8 relative">
          
          {/* Left: Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button
                className={`text-[11px] tracking-[0.16em] uppercase font-medium py-6 flex items-center gap-1 transition-colors ${shopOpen ? "text-[#D4AF37]" : "text-[#57534E] hover:text-[#D4AF37]"}`}
              >
                Shop <ChevronRight className={`w-3 h-3 transition-transform ${shopOpen ? "rotate-90" : "rotate-0"}`} />
              </button>
              <AnimatePresence>
                {shopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute left-0 top-full -mt-1 w-[720px] bg-[#FFFCF8] border border-[#D4AF37]/20 shadow-[0_20px_60px_rgba(212,175,55,0.08)] p-8 grid grid-cols-12 gap-8 rounded-sm"
                  >
                    <div className="col-span-7 grid grid-cols-2 gap-6">
                      {shopMenu.map((item, i) => (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          key={item.label}
                        >
                          <Link href={item.href} className="group block">
                            <div className="text-[11px] tracking-[0.12em] uppercase font-medium text-[#1C120E] group-hover:text-[#D4AF37] transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-[#78716C] mt-1">{item.desc}</div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <div className="col-span-5 border-l border-[#D4AF37]/20 pl-8">
                      <div className="text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] mb-4">Featured</div>
                      <Link href="/collections/private" className="block group">
                        <div className="aspect-[4/3] overflow-hidden bg-[#F5EFE6] mb-3 relative">
                          <img
                            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop"
                            alt="Private Collection"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                          />
                          <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-colors duration-500"/>
                        </div>
                        <div className="font-serif text-[18px] leading-none text-[#1C120E]">Private Collection</div>
                        <div className="text-[10px] tracking-[0.16em] uppercase text-[#57534E] mt-1">Raw • Unprocessed • Lifetime</div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/collections/private" className="text-[11px] tracking-[0.16em] uppercase font-medium text-[#57534E] hover:text-[#D4AF37] transition-colors">
              Collections
            </Link>
            <Link href="/bespoke" className="text-[11px] tracking-[0.16em] uppercase font-medium text-[#57534E] hover:text-[#D4AF37] transition-colors">
              Bespoke
            </Link>
          </nav>

          {/* Center: Logo */}
          <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 flex justify-center items-center">
            <Link href="/" className="block relative w-56 h-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image 
                  src="/brand_logo.PNG" 
                  alt="Hair Oven Logo" 
                  fill
                  className="object-contain object-center"
                />
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex-1 flex justify-start">
            <button className="p-2 -ml-2" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-1 sm:gap-2 flex-1">
            <div className="hidden lg:flex items-center gap-7 mr-6">
              <Link href="/story" className="text-[11px] tracking-[0.16em] uppercase font-medium text-[#57534E] hover:text-[#D4AF37] transition-colors">
                Our Story
              </Link>
              <Link href="/heirloom-guide" className="text-[11px] tracking-[0.16em] uppercase font-medium text-[#57534E] hover:text-[#D4AF37] transition-colors">
                Guide
              </Link>
            </div>

            <motion.button whileHover={{ scale: 1.05 }} onClick={() => setSearchOpen(true)} aria-label="Search" className="w-10 h-10 grid place-items-center hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] rounded-full transition-colors text-[#1C120E]">
              <Search className="w-4 h-4" strokeWidth={1.5} />
            </motion.button>
            <Link href="/account" className="hidden sm:grid w-10 h-10 place-items-center hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] rounded-full transition-colors text-[#1C120E]">
              <motion.div whileHover={{ scale: 1.05 }}><User className="w-4 h-4" strokeWidth={1.5} /></motion.div>
            </Link>
            <Link href="/wishlist" className="hidden sm:grid w-10 h-10 place-items-center hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] rounded-full transition-colors relative text-[#1C120E]">
              <motion.div whileHover={{ scale: 1.05 }}><Heart className="w-4 h-4" strokeWidth={1.5} /></motion.div>
              {wishlist.length > 0 && <span className="absolute -top-0.5 -right-0.5 bg-[#D4AF37] text-white text-[9px] w-4 h-4 grid place-items-center rounded-full font-medium">{wishlist.length}</span>}
            </Link>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => setDrawerOpen(true)} aria-label="Cart" className="w-10 h-10 grid place-items-center hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] rounded-full transition-colors relative text-[#1C120E]">
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              {cartCount > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#FFFCF8] text-[9px] w-5 h-5 grid place-items-center rounded-full font-medium shadow-sm">
                  {cartCount}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-[#1C120E]/40 backdrop-blur-sm z-50 lg:hidden" />
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed inset-y-0 left-0 w-[88%] max-w-[380px] bg-[#FFFCF8] z-50 flex flex-col lg:hidden">
              <div className="h-[72px] flex items-center justify-between px-6 border-b border-[rgba(28,18,14,0.06)]">
                <Image src="/brand_logo.PNG" alt="Hair Oven" width={140} height={42} className="object-contain" />
                <button onClick={() => setMobileOpen(false)} className="w-10 h-10 grid place-items-center rounded-full hover:bg-black/5">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-auto p-6 space-y-7">
                <div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] mb-4">Shop</div>
                  <div className="space-y-1">
                    {shopMenu.map((i) => (
                      <Link key={i.label} href={i.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between py-3 border-b border-[rgba(28,18,14,0.06)] last:border-0">
                        <span className="text-[13px] tracking-[0.08em] uppercase font-medium">{i.label}</span>
                        <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <Link href="/collections/private" onClick={() => setMobileOpen(false)} className="block text-[13px] tracking-[0.08em] uppercase font-medium">
                    Private Collection
                  </Link>
                  <Link href="/collections/signature" onClick={() => setMobileOpen(false)} className="block text-[13px] tracking-[0.08em] uppercase font-medium">
                    Signature Collection
                  </Link>
                  <Link href="/collections/essentials" onClick={() => setMobileOpen(false)} className="block text-[13px] tracking-[0.08em] uppercase font-medium">
                    Essentials
                  </Link>
                  <Link href="/story" onClick={() => setMobileOpen(false)} className="block text-[13px] tracking-[0.08em] uppercase font-medium">
                    Our Story
                  </Link>
                  <Link href="/heirloom-guide" onClick={() => setMobileOpen(false)} className="block text-[13px] tracking-[0.08em] uppercase font-medium">
                    Heirloom Guide
                  </Link>
                  <Link href="/bespoke" onClick={() => setMobileOpen(false)} className="block text-[13px] tracking-[0.08em] uppercase font-medium">
                    Private Atelier
                  </Link>
                </div>
                <div className="pt-6 flex gap-3">
                  <Link href="/account" className="flex-1 h-12 grid place-items-center border border-[#D4AF37]/30 text-[11px] tracking-[0.16em] uppercase hover:bg-[#D4AF37]/5 transition-colors">
                    Account
                  </Link>
                  <button onClick={() => { setMobileOpen(false); setDrawerOpen(true); }} className="flex-1 h-12 bg-[#D4AF37] text-[#0A0A0A] text-[11px] tracking-[0.16em] uppercase hover:bg-white transition-colors">
                    Bag ({cartCount})
                  </button>
                </div>
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
