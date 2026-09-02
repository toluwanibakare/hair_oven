"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { Heart, Minus, Plus, Shield, Truck, RefreshCw, MessageCircle } from "lucide-react";

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const product = products.find((p) => p.id === params.id);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [length, setLength] = useState(product?.lengths[0] || "");
  const [color, setColor] = useState(product?.colors[0] || "");
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("details");

  if (!product) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 text-center">
        <div className="font-serif text-3xl">Product not found</div>
        <Link href="/shop" className="mt-6 inline-flex h-11 px-8 bg-[#1C120E] text-white items-center text-[11px] tracking-[0.16em] uppercase">Back to Shop</Link>
      </div>
    );
  }

  const wished = isInWishlist(product.id);

  return (
    <div className="bg-[#FFFCF8]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-8 lg:py-12">
        <div className="flex gap-2 text-[11px] tracking-[0.12em] uppercase text-[#78716C]">
          <Link href="/" className="hover:text-[#1C120E]">Home</Link> <span>/</span> <Link href="/shop" className="hover:text-[#1C120E]">Shop</Link> <span>/</span> <span className="text-[#1C120E]">{product.name}</span>
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Gallery */}
          <div className="lg:col-span-7 flex gap-4">
            <div className="hidden sm:flex flex-col gap-3 shrink-0">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-[84px] h-[108px] overflow-hidden border-2 ${activeImg === i ? "border-[#1C120E]" : "border-transparent"} bg-[#F5EFE6]`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
              <div className="w-[84px] h-[108px] bg-[#1C120E] text-white p-3 flex flex-col justify-center text-[10px] tracking-[0.12em] uppercase leading-tight">Oven Veil™ • Invisible hairline included</div>
            </div>
            <div className="flex-1 relative aspect-[4/5] lg:aspect-[1.05] overflow-hidden bg-[#F5EFE6]">
              <img src={product.images[activeImg]} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
              {product.bestseller && <span className="absolute top-4 left-4 bg-[#1C120E] text-white text-[10px] tracking-[0.14em] uppercase px-3 py-1.5">Bestseller</span>}
              <button onClick={() => toggleWishlist(product.id)} className="absolute top-4 right-4 w-10 h-10 grid place-items-center rounded-full bg-white/90 backdrop-blur">
                <Heart className={`w-4 h-4 ${wished ? "fill-[#C2A47A] text-[#C2A47A]" : "text-[#1C120E]"}`} />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <div className="text-[11px] tracking-[0.16em] uppercase text-[#A68B5B]">{product.collection} • {product.category}</div>
            <h1 className="font-serif text-[30px] lg:text-[36px] leading-[0.95] tracking-[-0.015em] mt-2">{product.name}</h1>
            <p className="text-sm text-[#57534E] mt-3">{product.description}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-2xl font-medium tracking-[-0.01em]">{formatPrice(product.price)}</span>
              {product.originalPrice && <span className="text-sm line-through text-[#A8A29E]">{formatPrice(product.originalPrice)}</span>}
              <span className="text-xs bg-[#F5EFE6] px-2 py-1 border border-[rgba(28,18,14,0.06)]">{product.inStock ? "In Stock" : "Pre-Order"}</span>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] tracking-[0.16em] uppercase">Length</span>
                  <span className="text-[11px] text-[#78716C]">Selected: {length}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.lengths.map((l) => (
                    <button key={l} onClick={() => setLength(l)} className={`h-9 px-4 border text-sm ${length === l ? "bg-[#1C120E] text-white border-[#1C120E]" : "bg-white border-[rgba(28,18,14,0.12)] hover:border-[#1C120E]"}`}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] tracking-[0.16em] uppercase">Colour</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button key={c} onClick={() => setColor(c)} className={`h-9 px-4 border text-sm ${color === c ? "bg-[#1C120E] text-white border-[#1C120E]" : "bg-white border-[rgba(28,18,14,0.12)] hover:border-[#1C120E]"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="border border-[rgba(28,18,14,0.08)] bg-white p-3">
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#78716C]">Density</div>
                  <div className="font-medium">{product.density}</div>
                </div>
                <div className="border border-[rgba(28,18,14,0.08)] bg-white p-3">
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#78716C]">Texture</div>
                  <div className="font-medium">{product.texture}</div>
                </div>
                <div className="border border-[rgba(28,18,14,0.08)] bg-white p-3">
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#78716C]">Cap Size</div>
                  <div className="font-medium">{product.capSize.join(" / ")}</div>
                </div>
                <div className="border border-[rgba(28,18,14,0.08)] bg-white p-3">
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#78716C]">Lace</div>
                  <div className="font-medium">Oven Veil™ 13×6</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[rgba(28,18,14,0.12)]">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-11 h-[48px] grid place-items-center hover:bg-black/5"><Minus className="w-4 h-4" /></button>
                  <span className="w-12 text-center font-medium">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-11 h-[48px] grid place-items-center hover:bg-black/5"><Plus className="w-4 h-4" /></button>
                </div>
                <button
                  onClick={() => {
                    for (let i = 0; i < qty; i++) addToCart(product, { length, color });
                  }}
                  className="flex-1 h-[48px] bg-[#1C120E] text-white text-[11px] tracking-[0.16em] uppercase font-medium hover:bg-[#2B1B12] transition-colors"
                >
                  Add to Bag - {formatPrice(product.price * qty)}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="h-11 border border-[#1C120E] text-[11px] tracking-[0.16em] uppercase hover:bg-[#1C120E] hover:text-white transition-colors">Buy Now</button>
                <a href={`https://wa.me/2340000000000?text=Hi%20HAIR%20OVEN%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}`} target="_blank" className="h-11 bg-[#25D366] text-white grid place-items-center text-[11px] tracking-[0.14em] uppercase gap-2 hover:bg-[#1ebe5a] transition-colors">
                  <span className="inline-flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="border border-[rgba(28,18,14,0.06)] bg-[#FDF8F0] p-3">
                  <Truck className="w-4 h-4 mx-auto text-[#A68B5B]" />
                  <div className="mt-1 font-medium">Worldwide Shipping</div>
                </div>
                <div className="border border-[rgba(28,18,14,0.06)] bg-[#FDF8F0] p-3">
                  <Shield className="w-4 h-4 mx-auto text-[#A68B5B]" />
                  <div className="mt-1 font-medium">Secure Checkout</div>
                </div>
                <div className="border border-[rgba(28,18,14,0.06)] bg-[#FDF8F0] p-3">
                  <RefreshCw className="w-4 h-4 mx-auto text-[#A68B5B]" />
                  <div className="mt-1 font-medium">7-Day Exchange</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 lg:mt-20 border-t border-[rgba(28,18,14,0.08)]">
          <div className="flex gap-6 overflow-auto no-scrollbar border-b border-[rgba(28,18,14,0.08)]">
            {[
              { id: "details", label: "Hair Details" },
              { id: "craft", label: "Craftsmanship" },
              { id: "care", label: "Care" },
              { id: "shipping", label: "Shipping & Returns" },
              { id: "faq", label: "FAQs" },
            ].map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} className={`py-4 text-[11px] tracking-[0.16em] uppercase whitespace-nowrap border-b-2 ${tab === t.id ? "border-[#1C120E] text-[#1C120E]" : "border-transparent text-[#78716C] hover:text-[#1C120E]"}`}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="py-8 max-w-[72ch]">
            {tab === "details" && (
              <div className="space-y-4 text-sm leading-7 text-[#57534E]">
                <p>{product.longDescription}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {product.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
            {tab === "craft" && (
              <div className="text-sm leading-7 text-[#57534E]">
                <p>Cuticle-aligned, hand-tied and ventilated. Density is balanced by hand to achieve fullness without bulk. Each unit is inspected strand by strand before dispatch.</p>
              </div>
            )}
            {tab === "care" && (
              <div className="text-sm leading-7 text-[#57534E] space-y-3">
                <p>Wash gently in cool water with sulfate-free shampoo. Condition, air-dry on a stand. Store in silk bag. Avoid excessive heat - your Heirloom Guide card details everything.</p>
                <p>With care: Private - lifetime, Signature - 2–3+ years, Essentials - 12–18 months.</p>
              </div>
            )}
            {tab === "shipping" && (
              <div className="text-sm leading-7 text-[#57534E]">
                <p>Lagos dispatch. Worldwide delivery 3–7 business days (express). Duties/taxes calculated at checkout where applicable. Exchanges: unworn, unaltered with hygiene seal intact within 7 days. Bespoke is non-exchangeable.</p>
              </div>
            )}
            {tab === "faq" && (
              <div className="space-y-4 text-sm leading-6 text-[#57534E]">
                <div>
                  <div className="font-medium text-[#1C120E]">Can I colour this hair?</div>
                  <div>Private & Signature are virgin and can be coloured by a professional. We recommend a strand test.</div>
                </div>
                <div>
                  <div className="font-medium text-[#1C120E]">Is Oven Veil™ included?</div>
                  <div>Yes. Every wig features Oven Veil™ ultra-sheer lace. Frontals/closures use the same lace.</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/shop" className="h-10 px-6 border border-[rgba(28,18,14,0.12)] inline-flex items-center text-[11px] tracking-[0.14em] uppercase">Continue Shopping</Link>
          <Link href={`/collections/${product.collection}`} className="h-10 px-6 bg-[#1C120E] text-white inline-flex items-center text-[11px] tracking-[0.14em] uppercase">Explore {product.collection}</Link>
        </div>
      </div>
    </div>
  );
}
