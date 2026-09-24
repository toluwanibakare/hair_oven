"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency, CURRENCIES, type CurrencyCode } from "@/context/currency-context";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function CurrencySelector({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentInfo = CURRENCIES[currency] || CURRENCIES.USD;
  const currencyList = Object.keys(CURRENCIES) as CurrencyCode[];

  if (variant === "mobile") {
    return (
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="h-10 px-4 text-[11px] tracking-[0.16em] uppercase font-semibold border border-[#2B1B12]/20 bg-[#FFFCF8] text-[#2B1B12] hover:border-[#B8860B] transition-colors flex items-center justify-between gap-3 min-w-[130px]"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="flex items-center gap-1.5 font-bold">
            <span className="text-[#B8860B]">{currentInfo.symbol}</span> {currentInfo.code}
          </span>
          <ChevronDown className={cn("w-3.5 h-3.5 text-[#2B1B12]/70 transition-transform duration-200", isOpen && "rotate-180")} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 bottom-full mb-2 w-48 bg-[#FFFCF8] border border-[#2B1B12]/15 shadow-xl py-1 z-[120] rounded-xs"
            >
            <div className="px-3 py-1.5 text-[9px] font-sans tracking-[0.18em] uppercase text-[#B8860B] font-bold border-b border-[#2B1B12]/08">
                Select Currency
              </div>
              {currencyList.map((c) => {
                const info = CURRENCIES[c];
                const selected = currency === c;
                return (
                  <button
                    key={c}
                    onClick={() => {
                      setCurrency(c);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors",
                      selected ? "bg-[#2B1B12] text-[#FFFCF8] font-semibold" : "text-[#2B1B12] hover:bg-[#EDE6D6]/40"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <span className={cn("font-bold", selected ? "text-[#D4AF37]" : "text-[#B8860B]")}>{info.symbol}</span>
                      <span>{info.code}</span>
                    </span>
                    {selected && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-8 px-3 rounded-full border border-[#2B1B12]/15 bg-[#FFFCF8] hover:border-[#B8860B] text-[#2B1B12] text-[10px] tracking-[0.14em] uppercase font-semibold transition-all flex items-center gap-1.5 shadow-2xs"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="flex items-center gap-1">
          <span className="text-[#B8860B] font-bold">{currentInfo.symbol}</span>
          <span>{currentInfo.code}</span>
        </span>
        <ChevronDown className={cn("w-3 h-3 text-[#2B1B12]/70 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-48 bg-[#FFFCF8] border border-[#2B1B12]/15 shadow-xl py-1 z-[120] rounded-xs"
          >
            <div className="px-3 py-1.5 text-[9px] font-sans tracking-[0.18em] uppercase text-[#B8860B] font-bold border-b border-[#2B1B12]/08">
              Select Currency
            </div>
            {currencyList.map((c) => {
              const info = CURRENCIES[c];
              const selected = currency === c;
              return (
                <button
                  key={c}
                  onClick={() => {
                    setCurrency(c);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors",
                    selected ? "bg-[#2B1B12] text-[#FFFCF8] font-semibold" : "text-[#2B1B12] hover:bg-[#EDE6D6]/40"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span className={cn("font-bold", selected ? "text-[#D4AF37]" : "text-[#B8860B]")}>{info.symbol}</span>
                    <span>{info.name}</span>
                  </span>
                  {selected && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

