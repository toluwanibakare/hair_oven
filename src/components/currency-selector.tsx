"use client";

import { useState } from "react";
import { useCurrency, type CurrencyCode } from "@/context/currency-context";
import { cn } from "@/lib/utils";
import { Settings, Check, X } from "lucide-react";

export function CurrencySelector({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { currency, setCurrency, exchangeRate, setExchangeRate } = useCurrency();
  const [rateModalOpen, setRateModalOpen] = useState(false);
  const [newRateInput, setNewRateInput] = useState(exchangeRate.toString());
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSaveRate = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(newRateInput);
    if (!isNaN(val) && val > 0) {
      setExchangeRate(val);
      setSavedNotice(true);
      setTimeout(() => {
        setSavedNotice(false);
        setRateModalOpen(false);
      }, 1200);
    }
  };

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2">
        {(["USD", "NGN"] as CurrencyCode[]).map((c) => (
          <button
            key={c}
            onClick={() => setCurrency(c)}
            aria-pressed={currency === c}
            className={cn(
              "h-9 px-3.5 text-[11px] tracking-[0.16em] uppercase font-semibold border transition-colors flex items-center gap-1",
              currency === c
                ? "bg-[#2B1B12] text-[#FFFCF8] border-[#2B1B12]"
                : "bg-transparent text-[#2B1B12] border-[#2B1B12]/20 hover:border-[#B8860B]"
            )}
          >
            <span>{c === "USD" ? "$ USD" : "₦ NGN"}</span>
          </button>
        ))}
        <button
          onClick={() => {
            setNewRateInput(exchangeRate.toString());
            setRateModalOpen(true);
          }}
          title="Admin Exchange Rate Setting"
          className="p-2 text-[#78716C] hover:text-[#2B1B12] transition-colors"
        >
          <Settings className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center rounded-full border border-[#2B1B12]/15 p-0.5 text-[10px] tracking-[0.14em] uppercase font-semibold bg-[#FFFCF8]">
        {(["USD", "NGN"] as CurrencyCode[]).map((c) => (
          <button
            key={c}
            onClick={() => setCurrency(c)}
            aria-pressed={currency === c}
            className={cn(
              "h-7 px-2.5 rounded-full transition-colors flex items-center gap-1",
              currency === c ? "bg-[#2B1B12] text-[#FFFCF8]" : "text-[#2B1B12] hover:text-[#B8860B]"
            )}
          >
            <span>{c === "USD" ? "$ USD" : "₦ NGN"}</span>
          </button>
        ))}
        <button
          onClick={() => {
            setNewRateInput(exchangeRate.toString());
            setRateModalOpen(true);
          }}
          title="Admin Exchange Rate Config"
          className="px-1.5 text-[#A8A29E] hover:text-[#2B1B12] transition-colors"
        >
          <Settings className="w-3 h-3" />
        </button>
      </div>

      {/* Admin Exchange Rate Configuration Modal */}
      {rateModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFCF8] text-[#2B1B12] border border-[#2B1B12]/20 max-w-sm w-full p-6 shadow-2xl relative rounded-sm">
            <button
              onClick={() => setRateModalOpen(false)}
              className="absolute top-4 right-4 text-[#78716C] hover:text-[#2B1B12]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              Admin Configuration
            </div>
            <h3 className="font-serif text-xl mt-1 text-[#2B1B12] font-light">
              Exchange Rate Setting
            </h3>
            <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
              Set the current USD to NGN conversion rate. All product prices will automatically update across the store.
            </p>

            <form onSubmit={handleSaveRate} className="mt-5 space-y-4">
              <div>
                <label className="block text-[10px] tracking-[0.16em] uppercase text-[#78716C] mb-1.5">
                  1 USD ($) = NGN (₦)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={newRateInput}
                  onChange={(e) => setNewRateInput(e.target.value)}
                  className="w-full h-11 px-4 bg-white border border-[#2B1B12]/20 text-sm focus:outline-none focus:border-[#B8860B] font-mono"
                  placeholder="e.g. 1358.01"
                />
              </div>

              {savedNotice ? (
                <div className="p-3 bg-[#B8860B]/15 border border-[#B8860B]/40 text-[#2B1B12] text-xs flex items-center justify-center gap-2 font-semibold">
                  <Check className="w-4 h-4 text-[#B8860B]" /> Rate Updated Successfully
                </div>
              ) : (
                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 h-11 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.16em] uppercase font-semibold hover:bg-[#B8860B] transition-colors"
                  >
                    Save Exchange Rate
                  </button>
                  <button
                    type="button"
                    onClick={() => setRateModalOpen(false)}
                    className="px-4 h-11 border border-[#2B1B12]/20 text-[11px] tracking-[0.16em] uppercase hover:bg-black/5"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
