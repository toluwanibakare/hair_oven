"use client";

import { useCart } from "@/context/cart-context";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function WishlistPage() {
  const { t } = useLanguage();
  const { wishlist } = useCart();
  const items = products.filter((p) => wishlist.includes(p.id));
  return (
    <div className="bg-[#FFFCF8] min-h-[60vh]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-12">
        <div className="text-[11px] tracking-[0.22em] uppercase text-[#A68B5B]">{t.wishlist.eyebrow}</div>
        <h1 className="font-serif text-3xl mt-3">{t.wishlist.title}</h1>
        {items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-[#78716C]">{t.wishlist.empty}</p>
            <Link href="/shop" className="mt-6 inline-flex h-11 px-8 bg-[#2B1B12] text-white text-[11px] tracking-[0.16em] uppercase items-center">{t.wishlist.cta}</Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} variant="large" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
