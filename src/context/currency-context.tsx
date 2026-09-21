"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type CurrencyCode = "USD" | "GBP" | "EUR" | "NGN";

export type CurrencyInfo = {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateVsNGN: number;
};

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: "USD", symbol: "$", name: "US Dollar ($)", rateVsNGN: 1358.01 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound (£)", rateVsNGN: 1812.50 },
  EUR: { code: "EUR", symbol: "€", name: "Euro (€)", rateVsNGN: 1515.20 },
  NGN: { code: "NGN", symbol: "₦", name: "Nigerian Naira (₦)", rateVsNGN: 1.0 },
};

export type CurrencyContextType = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  currencyInfo: CurrencyInfo;
  formatPrice: (amountInNGN: number, opts?: { decimals?: boolean }) => string;
  convertFromNGN: (amountInNGN: number) => number;
};

const STORAGE_CURRENCY_KEY = "hair_oven_currency";

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCurr = window.localStorage.getItem(STORAGE_CURRENCY_KEY) as CurrencyCode;
      if (storedCurr && CURRENCIES[storedCurr]) {
        setCurrencyState(storedCurr);
      }
    }
  }, []);

  const setCurrency = useCallback((c: CurrencyCode) => {
    if (CURRENCIES[c]) {
      setCurrencyState(c);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_CURRENCY_KEY, c);
      }
    }
  }, []);

  const currencyInfo = CURRENCIES[currency] || CURRENCIES.USD;

  const convertFromNGN = useCallback(
    (amountInNGN: number): number => {
      const rate = currencyInfo.rateVsNGN;
      return amountInNGN / rate;
    },
    [currencyInfo]
  );

  const formatPrice = useCallback(
    (amountInNGN: number, opts?: { decimals?: boolean }): string => {
      const showDecimals = opts?.decimals ?? true;
      const rate = currencyInfo.rateVsNGN;
      const convertedVal = amountInNGN / rate;
      const symbol = currencyInfo.symbol;

      const formattedNum = convertedVal.toLocaleString("en-US", {
        minimumFractionDigits: showDecimals ? 2 : 0,
        maximumFractionDigits: showDecimals ? 2 : 0,
      });

      return `${symbol}${formattedNum}`;
    },
    [currencyInfo]
  );

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencyInfo,
        formatPrice,
        convertFromNGN,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    const fallbackRate = CURRENCIES.USD.rateVsNGN;
    return {
      currency: "USD" as CurrencyCode,
      setCurrency: () => {},
      currencyInfo: CURRENCIES.USD,
      formatPrice: (price: number) => `$${(price / fallbackRate).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      convertFromNGN: (price: number) => price / fallbackRate,
    };
  }
  return ctx;
}
