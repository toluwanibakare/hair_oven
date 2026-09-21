"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type CurrencyCode = "USD" | "NGN";

export type CurrencyContextType = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  exchangeRate: number;
  setExchangeRate: (rate: number) => void;
  formatPrice: (amountInNGN: number, opts?: { decimals?: boolean }) => string;
  convertFromNGN: (amountInNGN: number) => number;
};

const DEFAULT_EXCHANGE_RATE = 1358.01;
const STORAGE_CURRENCY_KEY = "hair_oven_currency";
const STORAGE_RATE_KEY = "hair_oven_exchange_rate";

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");
  const [exchangeRate, setExchangeRateState] = useState<number>(DEFAULT_EXCHANGE_RATE);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCurr = window.localStorage.getItem(STORAGE_CURRENCY_KEY) as CurrencyCode;
      if (storedCurr === "USD" || storedCurr === "NGN") {
        setCurrencyState(storedCurr);
      }
      const storedRate = window.localStorage.getItem(STORAGE_RATE_KEY);
      if (storedRate) {
        const parsed = parseFloat(storedRate);
        if (!isNaN(parsed) && parsed > 0) {
          setExchangeRateState(parsed);
        }
      }
    }
  }, []);

  const setCurrency = useCallback((c: CurrencyCode) => {
    setCurrencyState(c);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_CURRENCY_KEY, c);
    }
  }, []);

  const setExchangeRate = useCallback((rate: number) => {
    setExchangeRateState(rate);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_RATE_KEY, rate.toString());
    }
  }, []);

  const convertFromNGN = useCallback(
    (amountInNGN: number): number => {
      if (currency === "USD") {
        return amountInNGN / exchangeRate;
      }
      return amountInNGN;
    },
    [currency, exchangeRate]
  );

  const formatPrice = useCallback(
    (amountInNGN: number, opts?: { decimals?: boolean }): string => {
      if (currency === "USD") {
        const usdVal = amountInNGN / exchangeRate;
        const decimals = opts?.decimals ?? false;
        return `$${usdVal.toLocaleString("en-US", {
          minimumFractionDigits: decimals ? 2 : 0,
          maximumFractionDigits: decimals ? 2 : 0,
        })}`;
      } else {
        const decimals = opts?.decimals ?? false;
        return `₦${amountInNGN.toLocaleString("en-NG", {
          minimumFractionDigits: decimals ? 2 : 0,
          maximumFractionDigits: decimals ? 2 : 0,
        })}`;
      }
    },
    [currency, exchangeRate]
  );

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        exchangeRate,
        setExchangeRate,
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
    // Fallback if rendered outside CurrencyProvider
    return {
      currency: "USD" as CurrencyCode,
      setCurrency: () => {},
      exchangeRate: DEFAULT_EXCHANGE_RATE,
      setExchangeRate: () => {},
      formatPrice: (price: number) => `$${Math.round(price / DEFAULT_EXCHANGE_RATE).toLocaleString("en-US")}`,
      convertFromNGN: (price: number) => price / DEFAULT_EXCHANGE_RATE,
    };
  }
  return ctx;
}
