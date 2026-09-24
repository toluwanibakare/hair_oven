"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X, ChevronDown, ChevronRight, Heart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useLanguage } from "@/context/language-context";
import { BRAND } from "@/lib/i18n";
import { CartDrawer } from "./cart-drawer";
import { SearchOverlay } from "./search-overlay";
import { LanguageSelector } from "./language-selector";
import { CurrencySelector } from "./currency-selector";
import { WatermarkImage } from "./watermark-image";

function ComingSoonTooltip({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative inline-flex items-center justify-center cursor-not-allowed">
      <div className="opacity-50 group-hover:opacity-80 transition-opacity">
        {children}
      </div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 bg-[#2B1B12] text-[#D4AF37] border border-[#D4AF37]/50 shadow-2xl text-[9px] tracking-[0.18em] font-mono uppercase font-bold rounded-xs opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 whitespace-nowrap">
        COMING SOON
      </div>
    </div>
  );
}

type NavKey = "home" | "collections" | "atelier" | "story" | "heirloom";

const navItems: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "collections", label: "Collections", href: "/shop" },
  { key: "atelier", label: "Atelier", href: "/atelier" },
  { key: "story", label: "The House", href: "/story" },
  { key: "heirloom", label: "Heirloom Guide", href: "/heirloom-guide" },
];

const megaMenuData: Record<
  NavKey,
  {
    col1: { title: string; links: { label: string; href: string }[] };
    col2: { title: string; links: { label: string; href: string }[] };
    cards: { title: string; subtitle: string; href: string; image: string }[];
  }
> = {
  home: {
    col1: {
      title: "Explore Home",
      links: [
        { label: "Hero & Collections", href: "/" },
        { label: "Shop Hair Oven", href: "/#shop-collection" },
        { label: "Signature Spotlight", href: "/#signature-spotlight" },
        { label: "Brand Philosophy", href: "/#philosophy" },
        { label: "The Atelier Video", href: "/#atelier-video" },
      ],
    },
    col2: {
      title: "Discover More",
      links: [
        { label: "Founder's Story", href: "/#founder" },
        { label: "Oven Veil Technology", href: "/#oven-veil" },
        { label: "African Provenance", href: "/#from-africa" },
        { label: "Client Testimonials", href: "/#social-proof" },
      ],
    },
    cards: [
      {
        title: "SHOP THE COLLECTION",
        subtitle: "Signature & RAW Units",
        href: "/shop",
        image: "/products/caramel-wave.jpeg",
      },
      {
        title: "OVEN VEIL ATELIER",
        subtitle: "Invisible Melt Technology",
        href: "/oven-veil",
        image: "/products/editorial-model-2.jpg",
      },
    ],
  },
  collections: {
    col1: {
      title: "Discover Collections",
      links: [
        { label: "Private Collection (RAW Reserve)", href: "/collections/private" },
        { label: "Signature Collection", href: "/collections/signature" },
        { label: "Essentials Collection", href: "/collections/essentials" },
        { label: "All Collections", href: "/shop" },
      ],
    },
    col2: {
      title: "By Category",
      links: [
        { label: "Full Lace & HD Wigs", href: "/shop?cat=Wigs" },
        { label: "Raw Hair Bundles", href: "/shop?cat=Bundles" },
        { label: "Closures & Frontals", href: "/shop?cat=Closures%20%26%20Frontals" },
        { label: "Hair Extensions & Care", href: "/extensions" },
      ],
    },
    cards: [
      {
        title: "THE SIGNATURE SUITE",
        subtitle: "Long-Term Luxury Units",
        href: "/collections/signature",
        image: "/products/signature_collection.jpg",
      },
      {
        title: "RAW RESERVE",
        subtitle: "Single Donor Unprocessed Hair",
        href: "/collections/private",
        image: "/products/aurelia-barrel-curl.jpeg",
      },
    ],
  },
  atelier: {
    col1: {
      title: "Atelier Services",
      links: [
        { label: "Bespoke Commissions", href: "/bespoke" },
        { label: "Hand-Ventilated Lace", href: "/atelier#ventilated-lace" },
        { label: "Custom Color Toning", href: "/atelier#color-toning" },
        { label: "Fitting & Consultation", href: "/contact" },
      ],
    },
    col2: {
      title: "Provenance & Craft",
      links: [
        { label: "Single Donor Sourcing", href: "/atelier#sourcing" },
        { label: "Cuticle Alignment", href: "/atelier#cuticle" },
        { label: "Oven Veil Technology", href: "/oven-veil" },
        { label: "Care & Longevity", href: "/heirloom-guide" },
      ],
    },
    cards: [
      {
        title: "BESPOKE COMMISSIONS",
        subtitle: "Tailored to Your Specifications",
        href: "/bespoke",
        image: "/products/editorial-blowdry.jpg",
      },
      {
        title: "THE CRAFTSMANSHIP",
        subtitle: "Uncompromising Precision",
        href: "/atelier",
        image: "/products/ADEWUNMI.jpeg",
      },
    ],
  },
  story: {
    col1: {
      title: "Our Story",
      links: [
        { label: "The Heritage", href: "/story#heritage" },
        { label: "Founder's Vision", href: "/story#founder" },
        { label: "African Provenance", href: "/story#provenance" },
        { label: "Craftsmanship Ethos", href: "/story#ethos" },
      ],
    },
    col2: {
      title: "The Experience",
      links: [
        { label: "The Hair Oven Standard", href: "/story#standard" },
        { label: "Client Testimonials", href: "/story#testimonials" },
        { label: "Trade & Wholesale", href: "/wholesale" },
        { label: "Contact & Concierge", href: "/contact" },
      ],
    },
    cards: [
      {
        title: "READ OUR STORY",
        subtitle: "Begun with a Calling",
        href: "/story",
        image: "/products/adunni.png",
      },
      {
        title: "VISIT THE HOUSE",
        subtitle: "Concierge & Appointments",
        href: "/contact",
        image: "/products/honey-ash-bronzed-wave.jpeg",
      },
    ],
  },
  heirloom: {
    col1: {
      title: "Heirloom Care",
      links: [
        { label: "Preservation Guide", href: "/heirloom-guide#preservation" },
        { label: "Washing & Conditioning", href: "/heirloom-guide#washing" },
        { label: "Lace Maintenance", href: "/heirloom-guide#lace" },
        { label: "Storage & Travel", href: "/heirloom-guide#storage" },
      ],
    },
    col2: {
      title: "Specifications",
      links: [
        { label: "Density & Texture Guide", href: "/heirloom-guide#density" },
        { label: "Cap Sizing Chart", href: "/heirloom-guide#sizing" },
        { label: "Oven Veil Care", href: "/heirloom-guide#veil-care" },
        { label: "Lifetime Reserve", href: "/collections/private" },
      ],
    },
    cards: [
      {
        title: "CARE & MAINTENANCE",
        subtitle: "Protect Your Investment",
        href: "/heirloom-guide",
        image: "/products/velmorea.jpeg",
      },
      {
        title: "LENGTH & SIZE GUIDE",
        subtitle: "Find Your Perfect Fit",
        href: "/heirloom-guide#sizing",
        image: "/products/THE_ARGENTINE_BOB.PNG",
      },
    ],
  },
};

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<NavKey | null>(null);
  const [openMobileNavKey, setOpenMobileNavKey] = useState<NavKey | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, setDrawerOpen, wishlist } = useCart();
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const isComingPage = pathname === "/coming";

  const isActive = (href: string) => {
    const clean = href.split("?")[0];
    if (clean === "/") return pathname === "/";
    return pathname === clean || pathname.startsWith(clean + "/");
  };

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
      <div className="relative z-[60] bg-[#2B1B12] text-[#E8DDC9] text-center py-2 sm:py-2.5 px-3 sm:px-4 text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase font-medium border-b border-[#E8DDC9]/10 overflow-hidden">
        <span className="sm:hidden block truncate whitespace-nowrap">
          <span className="font-semibold text-[#D4AF37]">{BRAND.house}</span> • {t.nav.announcement.toUpperCase()}
        </span>
        <span className="hidden sm:block">
          <span className="font-semibold text-[#D4AF37]">{BRAND.house}</span> • {t.nav.announcement}
        </span>
      </div>

      <header className="sticky top-0 z-50 bg-[#FFFCF8] border-b border-[#2B1B12]/10 transition-all duration-300">
        
        {/* Main Brand & Action Header */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-[64px] sm:h-[72px] flex items-center justify-between relative border-b border-[#2B1B12]/05">
          
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            {!isComingPage && (
              <button
                className="p-2 -ml-2 text-[#2B1B12] hover:text-[#B8860B] transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label={t.nav.openMenu}
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            )}
          </div>

          {/* Left Side Location & Contact Quick Link (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 text-[10px] tracking-[0.18em] uppercase font-semibold text-[#57534E]">
            {isComingPage ? (
              <ComingSoonTooltip>
                <span className="flex items-center gap-2 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> LAGOS • LONDON • WORLDWIDE
                </span>
              </ComingSoonTooltip>
            ) : (
              <Link
                href="/contact"
                className="hover:text-[#2B1B12] transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> LAGOS • LONDON • WORLDWIDE
              </Link>
            )}
          </div>

          {/* Center Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Link href={isComingPage ? "/coming" : "/"} className="block relative w-36 h-12 sm:w-48 sm:h-14 hover:opacity-90 transition-opacity">
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
          <div className="flex items-center justify-end gap-1.5 sm:gap-2">
            <div className="hidden md:flex items-center gap-2 mr-1">
              <CurrencySelector variant="desktop" />
              <LanguageSelector variant="desktop" />
            </div>

            {isComingPage ? (
              <div className="hidden sm:flex items-center justify-end gap-1 sm:gap-2">
                <ComingSoonTooltip>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center text-[#2B1B12]">
                    <Search className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </ComingSoonTooltip>
                <ComingSoonTooltip>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center text-[#2B1B12]">
                    <User className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </ComingSoonTooltip>
                <ComingSoonTooltip>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center text-[#2B1B12]">
                    <Heart className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </ComingSoonTooltip>
                <ComingSoonTooltip>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center text-[#2B1B12]">
                    <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </ComingSoonTooltip>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label={t.nav.search}
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
                  aria-label={t.nav.bag}
                  className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center hover:bg-[#B8860B]/10 hover:text-[#B8860B] rounded-full transition-colors relative text-[#2B1B12]"
                >
                  <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                  {cartCount > 0 && (
                    <span className="absolute top-0.5 right-0.5 bg-[#2B1B12] text-[#E8DDC9] text-[9px] w-4.5 h-4.5 grid place-items-center rounded-full font-semibold">
                      {cartCount}
                    </span>
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Desktop Category Navigation Bar with Odd Muse style Mega Dropdowns */}
        {isComingPage ? (
          <div className="hidden lg:flex items-center justify-center gap-8 py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#2B1B12] bg-[#FFFCF8]">
            <ComingSoonTooltip><span className="py-1">{t.nav.home}</span></ComingSoonTooltip>
            <ComingSoonTooltip>
              <span className="py-1 flex items-center gap-1">{t.nav.collections} <ChevronDown className="w-3 h-3" /></span>
            </ComingSoonTooltip>
            <ComingSoonTooltip><span className="py-1">{t.nav.atelier}</span></ComingSoonTooltip>
            <ComingSoonTooltip><span className="py-1">{t.nav.house}</span></ComingSoonTooltip>
            <ComingSoonTooltip><span className="py-1">{t.nav.heirloomGuide}</span></ComingSoonTooltip>
          </div>
        ) : (
          <div className="relative" onMouseLeave={() => setActiveNav(null)}>
            <nav className="hidden lg:flex items-center justify-center gap-10 py-4 text-[13px] tracking-[0.16em] uppercase font-semibold text-[#2B1B12] bg-[#FFFCF8]">
              {navItems.map((item) => {
                const isCurrentActive =
                  activeNav === item.key ||
                  (item.key === "home"
                    ? pathname === "/"
                    : item.key === "collections"
                    ? ["/collections", "/shop", "/extensions", "/product"].some((p) => pathname === p || pathname.startsWith(p + "/"))
                    : isActive(item.href));
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onMouseEnter={() => setActiveNav(item.key)}
                    className={`group relative py-1.5 transition-colors ${
                      isCurrentActive ? "text-[#B8860B]" : "hover:text-[#B8860B]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#2B1B12] transition-transform duration-300 ease-out origin-left ${
                        isCurrentActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Odd Muse Full-Width Luxury Mega Dropdown */}
            <AnimatePresence>
              {activeNav && megaMenuData[activeNav] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute left-0 right-0 top-full w-full bg-[#FFFCF8] border-b border-[#2B1B12]/15 shadow-[0_24px_60px_rgba(43,27,18,0.12)] py-14 px-8 lg:px-16 z-50 min-h-[340px]"
                >
                  <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Section Links (Col 1 & Col 2) */}
                    <div className="col-span-6 grid grid-cols-2 gap-8 lg:gap-12">
                      <div>
                        <h4 className="font-serif text-[18px] sm:text-[20px] text-[#2B1B12] pb-1.5 border-b border-[#2B1B12]/20 font-normal mb-5 inline-block">
                          {megaMenuData[activeNav].col1.title}
                        </h4>
                        <div className="space-y-3">
                          {megaMenuData[activeNav].col1.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setActiveNav(null)}
                              className="text-[11px] tracking-[0.14em] uppercase text-[#57534E] hover:text-[#B8860B] hover:translate-x-1 transition-all duration-200 block font-medium"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-serif text-[18px] sm:text-[20px] text-[#2B1B12] pb-1.5 border-b border-[#2B1B12]/20 font-normal mb-5 inline-block">
                          {megaMenuData[activeNav].col2.title}
                        </h4>
                        <div className="space-y-3">
                          {megaMenuData[activeNav].col2.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setActiveNav(null)}
                              className="text-[11px] tracking-[0.14em] uppercase text-[#57534E] hover:text-[#B8860B] hover:translate-x-1 transition-all duration-200 block font-medium"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Middle Vertical Separator Line */}
                    <div className="col-span-1 flex justify-center self-stretch">
                      <div className="w-px h-full bg-[#2B1B12]/10" />
                    </div>

                    {/* Right Feature Preview Cards */}
                    <div className="col-span-5 grid grid-cols-2 gap-4">
                      {megaMenuData[activeNav].cards.map((card) => (
                        <Link
                          key={card.title}
                          href={card.href}
                          onClick={() => setActiveNav(null)}
                          className="group relative aspect-[4/3] overflow-hidden rounded-xs bg-[#F5EFE6] block shadow-xs border border-[#2B1B12]/08"
                        >
                          <WatermarkImage
                            src={card.image}
                            alt={card.title}
                            containerClassName="absolute inset-0 w-full h-full"
                            imageClassName="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            watermarkSize="sm"
                            showWatermark={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/80 via-[#2B1B12]/20 to-transparent z-10" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                            <div className="text-[9px] tracking-[0.18em] uppercase text-[#D4AF37] font-semibold mb-0.5">
                              {card.subtitle}
                            </div>
                            <div className="font-serif text-white text-xs sm:text-sm tracking-[0.04em] flex items-center justify-between">
                              <span>{card.title}</span>
                              <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </header>

      {/* Mobile Accordion Navigation Drawer (Odd Muse Design) */}
      {!isComingPage && (
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

                {/* Mobile Serif Accordion Menu Items */}
                <div className="flex-1 overflow-auto divide-y divide-[#2B1B12]/10">
                  {navItems.map((item) => {
                    const isOpen = openMobileNavKey === item.key;
                    const data = megaMenuData[item.key];
                    return (
                      <div key={item.key} className="bg-[#FFFCF8]">
                        <button
                          onClick={() => setOpenMobileNavKey(isOpen ? null : item.key)}
                          className={`w-full py-4 px-6 flex items-center justify-between text-left transition-colors ${
                            isOpen ? "bg-[#f9f6f1]" : "hover:bg-[#f9f6f1]"
                          }`}
                        >
                          <span className="font-serif text-[19px] text-[#2B1B12] font-normal tracking-wide">
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#2B1B12]/70 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-[#B8860B]" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && data && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden bg-[#f9f6f1]"
                            >
                              <div className="px-6 py-5 space-y-6 border-t border-[#2B1B12]/08">
                                {/* Section 1 Links */}
                                <div>
                                  <div className="text-[10px] tracking-[0.2em] text-[#B8860B] uppercase font-semibold mb-3">
                                    {data.col1.title}
                                  </div>
                                  <div className="space-y-2.5">
                                    {data.col1.links.map((link) => (
                                      <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-xs text-[#2B1B12] hover:text-[#B8860B] font-medium tracking-wide"
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Section 2 Links */}
                                <div>
                                  <div className="text-[10px] tracking-[0.2em] text-[#B8860B] uppercase font-semibold mb-3">
                                    {data.col2.title}
                                  </div>
                                  <div className="space-y-2.5">
                                    {data.col2.links.map((link) => (
                                      <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-xs text-[#2B1B12] hover:text-[#B8860B] font-medium tracking-wide"
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Feature Image Card inside Mobile Accordion */}
                                {data.cards[0] && (
                                  <Link
                                    href={data.cards[0].href}
                                    onClick={() => setMobileOpen(false)}
                                    className="group relative aspect-[16/9] overflow-hidden rounded-xs bg-[#F5EFE6] block shadow-xs border border-[#2B1B12]/10 mt-2"
                                  >
                                    <WatermarkImage
                                      src={data.cards[0].image}
                                      alt={data.cards[0].title}
                                      containerClassName="absolute inset-0 w-full h-full"
                                      imageClassName="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                      watermarkSize="sm"
                                      showWatermark={false}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/80 via-[#2B1B12]/20 to-transparent z-10" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3.5 z-20">
                                      <div className="text-[9px] tracking-[0.18em] uppercase text-[#D4AF37] font-semibold mb-0.5">
                                        {data.cards[0].subtitle}
                                      </div>
                                      <div className="font-serif text-white text-xs sm:text-sm tracking-[0.04em] flex items-center justify-between">
                                        <span>{data.cards[0].title}</span>
                                        <span className="text-xs">→</span>
                                      </div>
                                    </div>
                                  </Link>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

                  {/* Preferences & Quick Concierge Links */}
                  <div className="p-6 space-y-4 bg-[#FFFCF8]">
                    <div className="space-y-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#57534E]">
                      <Link
                        href="/bespoke"
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 hover:text-[#2B1B12]"
                      >
                        Bespoke Commissions
                      </Link>
                      <Link
                        href="/wholesale"
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 hover:text-[#2B1B12]"
                      >
                        Trade & Wholesale Edit
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 hover:text-[#2B1B12]"
                      >
                        Contact Concierge
                      </Link>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[#2B1B12]/10">
                      <CurrencySelector variant="mobile" />
                      <LanguageSelector variant="mobile" />
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-[#2B1B12]/10 bg-[#f9f6f1] flex gap-3">
                  <Link
                    href="/account"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 h-11 grid place-items-center border border-[#2B1B12]/20 text-[11px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12]"
                  >
                    {t.nav.account}
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
      )}

      <CartDrawer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

