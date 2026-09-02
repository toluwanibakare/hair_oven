"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

export function ProductCard({ product, variant = "default" }: { product: Product; variant?: "default" | "large" | "minimal" }) {
  const { toggleWishlist, isInWishlist } = useCart();
  const wished = isInWishlist(product.id);

  if (variant === "large") {
    return (
      <Link href={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#F5EFE6]">
          <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
          <div className="absolute top-3 left-3 flex gap-2">
            {product.featured && <span className="bg-[#1C120E] text-white text-[10px] tracking-[0.14em] uppercase px-3 py-1.5">Featured</span>}
            {product.bestseller && <span className="bg-[#C2A47A] text-white text-[10px] tracking-[0.14em] uppercase px-3 py-1.5">Bestseller</span>}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
            className="absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-white/90 backdrop-blur hover:bg-white transition-colors"
          >
            <Heart className={cn("w-4 h-4", wished ? "fill-[#C2A47A] text-[#C2A47A]" : "text-[#1C120E]")} strokeWidth={1.5} />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="inline-flex h-9 px-5 bg-white text-[#1C120E] text-[11px] tracking-[0.14em] uppercase items-center">Quick View</span>
          </div>
        </div>
        <div className="pt-4">
          <div className="text-[10px] tracking-[0.16em] uppercase text-[#A68B5B]">{product.collection} • {product.category}</div>
          <div className="font-serif text-[18px] leading-tight mt-1 group-hover:text-[#A68B5B] transition-colors">{product.name}</div>
          <div className="text-xs text-[#78716C] mt-1">{product.texture} • {product.density}</div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-sm font-medium">{formatPrice(product.price)}</span>
            {product.originalPrice && <span className="text-xs text-[#A8A29E] line-through">{formatPrice(product.originalPrice)}</span>}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5EFE6]">
        <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
          className="absolute top-2.5 right-2.5 w-8 h-8 grid place-items-center rounded-full bg-white/90 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className={cn("w-3.5 h-3.5", wished ? "fill-[#C2A47A] text-[#C2A47A]" : "text-[#1C120E]")} strokeWidth={1.5} />
        </button>
        {product.bestseller && <span className="absolute top-2.5 left-2.5 bg-[#1C120E] text-white text-[9px] tracking-[0.14em] uppercase px-2 py-1">Bestseller</span>}
      </div>
      <div className="pt-3">
        <div className="text-[10px] tracking-[0.14em] uppercase text-[#A68B5B] truncate">{product.collection}</div>
        <div className="text-[14px] leading-tight font-medium mt-1 line-clamp-1 group-hover:text-[#A68B5B] transition-colors">{product.name}</div>
        <div className="text-sm mt-1 font-medium">{formatPrice(product.price)}</div>
      </div>
    </Link>
  );
}
