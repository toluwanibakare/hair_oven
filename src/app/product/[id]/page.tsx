"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { Heart, Minus, Plus, ChevronDown, MessageCircle, ShieldCheck } from "lucide-react";
import { WatermarkImage } from "@/components/watermark-image";
import { useLanguage } from "@/context/language-context";

export default function ProductPage() {
  const { t } = useLanguage();
  const params = useParams<{ id: string }>();
  const product = products.find((p) => p.id === params.id);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [length, setLength] = useState(product?.lengths[0] || "");
  const [color, setColor] = useState(product?.colors[0] || "");
  const [qty, setQty] = useState(1);
  const [openDetail, setOpenDetail] = useState<string | null>("story");

  if (!product) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 text-center">
        <div className="font-serif text-3xl">{t.product.notFound}</div>
        <Link href="/shop" className="mt-6 inline-flex h-11 px-8 bg-[#2B1B12] text-white items-center text-[11px] tracking-[0.16em] uppercase">{t.product.backToShop}</Link>
      </div>
    );
  }

  const wished = isInWishlist(product.id);

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12]">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-10 lg:py-16">
        
        {/* Breadcrumb Navigation */}
        <div className="flex gap-2 text-[10px] tracking-[0.16em] uppercase text-[#78716C] mb-8 font-medium">
          <Link href="/" className="hover:text-[#2B1B12]">{t.product.home}</Link> <span>/</span> 
          <Link href="/shop" className="hover:text-[#2B1B12]">{t.product.shop}</Link> <span>/</span> 
          <span className="text-[#2B1B12]">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Hero Photograph (Point 11: One beautiful hero photograph) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#2B1B12] rounded-sm border border-[#2B1B12]/10 shadow-sm">
              <WatermarkImage
                src={product.images[activeImg]}
                alt={product.name}
                containerClassName="absolute inset-0 w-full h-full"
                imageClassName="w-full h-full object-cover"
                watermarkSize="lg"
              />
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-5 right-5 w-10 h-10 grid place-items-center rounded-full bg-white/90 backdrop-blur z-20 hover:scale-105 transition-transform"
              >
                <Heart className={`w-4 h-4 ${wished ? "fill-[#B8860B] text-[#B8860B]" : "text-[#2B1B12]"}`} />
              </button>
            </div>

            {/* Subtle Thumbnail Selection if multiple images exist */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pt-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-24 overflow-hidden border ${activeImg === i ? "border-[#B8860B]" : "border-[#2B1B12]/10 opacity-70"} transition-all`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Block (Point 11 Luxury Layout) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold">
                {product.collection.toUpperCase()}
              </span>
              <h1 className="font-serif text-[34px] sm:text-[42px] leading-[0.95] text-[#2B1B12] mt-2 font-light">
                {product.name}
              </h1>
              
              {/* Short Poetic Description */}
              <p className="mt-4 text-xs sm:text-sm text-[#57534E] leading-6 font-serif italic border-l-2 border-[#B8860B] pl-4">
                "{product.description}"
              </p>
            </div>

            {/* Price & Commercial Clarity (Point 16) */}
            <div className="pt-4 border-t border-[#2B1B12]/10 flex items-baseline justify-between">
              <div>
                <span className="text-2xl font-serif text-[#2B1B12]">{formatPrice(product.price * qty)}</span>
                <span className="block text-[10px] tracking-[0.14em] uppercase text-[#57534E] mt-0.5">
                  {t.product.deliveryNote}
                </span>
              </div>
              <span className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold bg-[#EDE6D6]/40 px-3 py-1 border border-[#2B1B12]/10">
                {product.inStock ? t.product.ready : t.product.preorder}
              </span>
            </div>

            {/* Clean Information Block (Point 11 requirement) */}
            <div className="bg-[#EDE6D6]/20 border border-[#2B1B12]/10 p-5 rounded-sm space-y-2.5 text-xs text-[#2B1B12]">
              <div className="flex justify-between border-b border-[#2B1B12]/05 pb-2">
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#57534E] font-semibold">{t.product.specHair}</span>
                <span className="font-medium">{t.product.specHairV}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B1B12]/05 pb-2">
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#57534E] font-semibold">{t.product.specOrigin}</span>
                <span className="font-medium">{t.product.specOriginV}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B1B12]/05 pb-2">
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#57534E] font-semibold">{t.product.specTexture}</span>
                <span className="font-medium">{product.texture}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B1B12]/05 pb-2">
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#57534E] font-semibold">{t.product.specLength}</span>
                <span className="font-medium">{length}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B1B12]/05 pb-2">
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#57534E] font-semibold">{t.product.specDensity}</span>
                <span className="font-medium">{product.density}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B1B12]/05 pb-2">
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#57534E] font-semibold">{t.product.specCap}</span>
                <span className="font-medium">{t.product.specCapV}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#57534E] font-semibold">{t.product.specFinish}</span>
                <span className="font-medium text-[#B8860B]">{t.product.specFinishV}</span>
              </div>
            </div>

            {/* Selectors */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-2">
                  {t.product.selectLength}
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.lengths.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLength(l)}
                      className={`h-9 px-4 text-xs tracking-wider uppercase border transition-colors ${
                        length === l
                          ? "bg-[#2B1B12] text-[#FFFCF8] border-[#2B1B12]"
                          : "bg-white text-[#2B1B12] border-[#2B1B12]/15 hover:border-[#B8860B]"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Bag */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center border border-[#2B1B12]/20 bg-white">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-12 grid place-items-center hover:bg-[#2B1B12]/5"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-xs font-semibold">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-12 grid place-items-center hover:bg-[#2B1B12]/5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    for (let i = 0; i < qty; i++) addToCart(product, { length, color });
                  }}
                  className="flex-1 h-12 bg-[#2B1B12] text-[#FFFCF8] text-[10px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors"
                >
                  {t.product.addToBag} - {formatPrice(product.price * qty)}
                </button>
              </div>
            </div>

            {/* THE STORY (2-3 Short Paragraphs) */}
            <div className="pt-6 border-t border-[#2B1B12]/10 space-y-4">
              <h3 className="font-serif text-xl text-[#2B1B12]">{t.product.storyTitle}</h3>
              <div className="text-xs text-[#57534E] leading-6 space-y-3">
                <p>
                  {t.product.storyA.replace("{name}", product.name)}
                </p>
                <p>
                  {t.product.storyB}
                </p>
              </div>
            </div>

            {/* THE DETAILS (Accordion) */}
            <div className="pt-4 border-t border-[#2B1B12]/10">
              <div className="border border-[#2B1B12]/10 bg-white rounded-sm">
                <button
                  onClick={() => setOpenDetail(openDetail === "details" ? null : "details")}
                  className="w-full p-4 flex justify-between items-center text-left text-xs font-serif text-[#2B1B12]"
                >
                  <span>{t.product.detailsTitle}</span>
                  <ChevronDown className={`w-4 h-4 text-[#B8860B] transition-transform ${openDetail === "details" ? "rotate-180" : ""}`} />
                </button>
                {openDetail === "details" && (
                  <div className="p-4 pt-0 text-xs text-[#57534E] leading-6 space-y-2 border-t border-[#2B1B12]/05">
                    {product.details.map((d, i) => (
                      <div key={i} className="flex gap-2">
                        <span className="text-[#B8860B]">•</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* PRIVATE CONCIERGE Block (Point 11 requirement) */}
            <div className="bg-[#E0D5C5]/30 border border-[#2B1B12]/10 p-6 text-center rounded-sm space-y-3">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
                {t.product.conciergeTitle}
              </div>
              <p className="text-xs text-[#57534E]">
                {t.product.conciergeBody}
              </p>
              <a
                href={`https://wa.me/2348057388171?text=Hi%20HAIR%20OVEN%2C%20I%20need%20concierge%20assistance%20with%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 px-6 bg-[#2B1B12] text-[#FFFCF8] text-[10px] tracking-[0.16em] uppercase font-semibold hover:bg-[#B8860B] transition-colors items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" /> {t.product.conciergeCta}
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
