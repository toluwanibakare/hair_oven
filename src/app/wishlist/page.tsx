"use client";

import { useCart } from "@/context/cart-context";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist } = useCart();
  const items = products.filter((p) => wishlist.includes(p.id));
  return (
    <div className="bg-[#FFFCF8] min-h-[60vh]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-12">
        <div className="text-[11px] tracking-[0.22em] uppercase text-[#A68B5B]">Your Wishlist</div>
        <h1 className="font-serif text-3xl mt-3">Saved for later</h1>
        {items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-[#78716C]">No saved items yet.</p>
            <Link href="/shop" className="mt-6 inline-flex h-11 px-8 bg-[#1C120E] text-white text-[11px] tracking-[0.16em] uppercase items-center">Discover Hair</Link>
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
