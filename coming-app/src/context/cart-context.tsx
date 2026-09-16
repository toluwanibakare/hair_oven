"use client";

import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import type { Product } from "@/lib/data";

type CartItem = {
  product: Product;
  qty: number;
  length: string;
  color: string;
};

type CartContextType = {
  items: CartItem[];
  wishlist: string[];
  addToCart: (p: Product, opts?: { length?: string; color?: string }) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  cartCount: number;
  cartTotal: number;
  isInWishlist: (id: string) => boolean;
  drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addToCart = (product: Product, opts?: { length?: string; color?: string }) => {
    const key = product.id;
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === key);
      if (existing) return prev.map((i) => (i.product.id === key ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { product, qty: 1, length: opts?.length ?? product.lengths[0], color: opts?.color ?? product.colors[0] }];
    });
    setDrawerOpen(true);
  };
  const removeFromCart = (id: string) => setItems((p) => p.filter((i) => i.product.id !== id));
  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) return removeFromCart(id);
    setItems((p) => p.map((i) => (i.product.id === id ? { ...i, qty } : i)));
  };
  const toggleWishlist = (id: string) => setWishlist((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const cartCount = useMemo(() => items.reduce((a, b) => a + b.qty, 0), [items]);
  const cartTotal = useMemo(() => items.reduce((a, b) => a + b.product.price * b.qty, 0), [items]);
  const isInWishlist = (id: string) => wishlist.includes(id);

  return (
    <CartContext.Provider
      value={{ items, wishlist, addToCart, removeFromCart, updateQty, toggleWishlist, cartCount, cartTotal, isInWishlist, drawerOpen, setDrawerOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
