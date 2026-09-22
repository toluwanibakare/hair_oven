"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/data";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { cn } from "@/lib/utils";
import { WatermarkImage } from "@/components/watermark-image";

export function ProductCard({ product, variant = "default" }: { product: Product; variant?: "default" | "large" | "minimal" }) {
  const { toggleWishlist, isInWishlist } = useCart();
  const { formatPrice } = useCurrency();
  const wished = isInWishlist(product.id);

  if (variant === "large") {
    return (
      <Link href={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#F5EFE6] rounded-sm">
          <WatermarkImage
            src={product.image}
            alt={product.name}
            containerClassName="absolute inset-0 w-full h-full"
            imageClassName="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            watermarkSize="sm"
          />
          <button
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
            className="absolute bottom-2.5 right-2.5 w-8 h-8 grid place-items-center rounded-full bg-white/90 backdrop-blur hover:bg-white transition-colors z-20 shadow-sm"
          >
            <Heart className={cn("w-3.5 h-3.5", wished ? "fill-[#C2A47A] text-[#C2A47A]" : "text-[#2B1B12]")} strokeWidth={1.5} />
          </button>
        </div>
        <div className="pt-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] tracking-[0.14em] uppercase text-[#A68B5B] font-semibold truncate">
              {product.collection} • {product.category}
            </span>
            {product.bestseller && (
              <span className="text-[8px] tracking-[0.12em] uppercase text-[#B8860B] font-semibold bg-[#B8860B]/10 px-2 py-0.5 rounded-xs shrink-0">
                Bestseller
              </span>
            )}
          </div>
          <div className="font-serif text-[17px] leading-tight mt-1 group-hover:text-[#A68B5B] transition-colors">{product.name}</div>
          <div className="text-xs text-[#78716C] mt-0.5 truncate">{product.texture} • {product.density}</div>
          <div className="flex items-baseline gap-2.5 mt-2">
            <span className="text-base font-bold text-[#2B1B12] tracking-tight">{formatPrice(product.price)}</span>
            {product.originalPrice && <span className="text-xs text-[#A8A29E] line-through font-normal">{formatPrice(product.originalPrice)}</span>}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5EFE6] rounded-sm">
        <WatermarkImage
          src={product.image}
          alt={product.name}
          containerClassName="absolute inset-0 w-full h-full"
          imageClassName="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          watermarkSize="sm"
        />
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
          className="absolute bottom-2.5 right-2.5 w-8 h-8 grid place-items-center rounded-full bg-white/90 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-sm"
        >
          <Heart className={cn("w-3.5 h-3.5", wished ? "fill-[#C2A47A] text-[#C2A47A]" : "text-[#2B1B12]")} strokeWidth={1.5} />
        </button>
      </div>
      <div className="pt-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] tracking-[0.14em] uppercase text-[#A68B5B] truncate font-semibold">{product.collection}</span>
          {product.bestseller && (
            <span className="text-[8px] tracking-[0.12em] uppercase text-[#B8860B] font-semibold bg-[#B8860B]/10 px-1.5 py-0.5 rounded-xs shrink-0">
              Bestseller
            </span>
          )}
        </div>
        <div className="font-serif text-[16px] leading-tight mt-1 line-clamp-1 group-hover:text-[#A68B5B] transition-colors">{product.name}</div>
        <div className="flex items-baseline gap-2 mt-1.5">
          <span className="text-sm sm:text-base font-bold text-[#2B1B12] tracking-tight">{formatPrice(product.price)}</span>
          {product.originalPrice && <span className="text-xs text-[#A8A29E] line-through font-normal">{formatPrice(product.originalPrice)}</span>}
        </div>
      </div>
    </Link>
  );
}
