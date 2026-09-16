"use client";

import { LOCALES } from "@/lib/i18n";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export function LanguageSelector({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { locale, setLocale } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2">
        {LOCALES.map((l) => (
          <button
            key={l.code}
            onClick={() => setLocale(l.code)}
            aria-pressed={locale === l.code}
            className={cn(
              "h-9 px-4 text-[11px] tracking-[0.16em] uppercase font-semibold border transition-colors",
              locale === l.code
                ? "bg-[#2B1B12] text-[#FFFCF8] border-[#2B1B12]"
                : "bg-transparent text-[#2B1B12] border-[#2B1B12]/20 hover:border-[#B8860B]"
            )}
          >
            {l.short}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center rounded-full border border-[#2B1B12]/15 p-0.5 text-[10px] tracking-[0.14em] uppercase font-semibold">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          aria-pressed={locale === l.code}
          className={cn(
            "h-7 px-2.5 rounded-full transition-colors",
            locale === l.code ? "bg-[#2B1B12] text-[#FFFCF8]" : "text-[#2B1B12] hover:text-[#B8860B]"
          )}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
