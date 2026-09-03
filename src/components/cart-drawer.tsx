"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export function CartDrawer() {
  const { items, removeFromCart, updateQty, cartTotal, drawerOpen, setDrawerOpen, cartCount } = useCart();

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-[#2B1B12]/30 backdrop-blur-sm z-[70]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 400 }}
            className="fixed inset-y-0 right-0 w-full max-w-[440px] bg-[#FFFCF8] z-[70] flex flex-col shadow-[-20px_0_60px_rgba(28,18,14,0.12)]"
          >
            <div className="h-[72px] px-6 flex items-center justify-between border-b border-[rgba(28,18,14,0.06)]">
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-[#A68B5B]">Your Bag</div>
                <div className="font-serif text-[18px] tracking-[-0.01em]">{cartCount === 0 ? "Empty" : `${cartCount} ${cartCount === 1 ? "item" : "items"}`}</div>
              </div>
              <button onClick={() => setDrawerOpen(false)} className="w-10 h-10 grid place-items-center rounded-full hover:bg-[#2B1B12]/5 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 grid place-items-center p-10 text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5EFE6] grid place-items-center mx-auto mb-4">
                    <ShoppingBag className="w-6 h-6 text-[#A68B5B]" strokeWidth={1.5} />
                  </div>
                  <div className="font-serif text-2xl">Your bag is empty</div>
                  <p className="text-sm text-[#78716C] mt-2 max-w-[28ch] mx-auto">Discover exceptional hair, crafted with intention.</p>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="mt-6 h-11 px-8 bg-[#2B1B12] text-white text-[11px] tracking-[0.16em] uppercase"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-auto divide-y divide-[rgba(28,18,14,0.06)]">
                  {items.map((item) => (
                    <div key={item.product.id} className="p-6 flex gap-4">
                      <div className="w-[96px] h-[120px] bg-[#F5EFE6] overflow-hidden shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] tracking-[0.16em] uppercase text-[#A68B5B]">{item.product.collection} • {item.product.category}</div>
                        <div className="font-serif text-[16px] leading-tight mt-1">{item.product.name}</div>
                        <div className="text-xs text-[#78716C] mt-1">
                          {item.length} • {item.color} • {item.product.density}
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-[rgba(28,18,14,0.12)]">
                            <button onClick={() => updateQty(item.product.id, item.qty - 1)} className="w-8 h-8 grid place-items-center hover:bg-[#2B1B12]/5">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
                            <button onClick={() => updateQty(item.product.id, item.qty + 1)} className="w-8 h-8 grid place-items-center hover:bg-[#2B1B12]/5">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{formatPrice(item.product.price * item.qty)}</div>
                            <button onClick={() => removeFromCart(item.product.id)} className="text-[10px] tracking-[0.12em] uppercase text-[#78716C] hover:text-[#2B1B12] underline underline-offset-4">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[rgba(28,18,14,0.08)] p-6 bg-[#FDF8F0] space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#78716C]">Subtotal</span>
                    <span className="font-medium">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#78716C]">Shipping</span>
                    <span className="text-[#A68B5B]">Calculated at checkout</span>
                  </div>
                  <div className="h-px bg-[rgba(28,18,14,0.08)]" />
                  <Link
                    href="/checkout"
                    onClick={() => setDrawerOpen(false)}
                    className="h-[52px] bg-[#2B1B12] text-white grid place-items-center text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-[#2B1B12] transition-colors"
                  >
                    Proceed to Checkout
                  </Link>
                  <div className="text-center text-[11px] text-[#78716C]">Secure checkout • WhatsApp support available</div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
