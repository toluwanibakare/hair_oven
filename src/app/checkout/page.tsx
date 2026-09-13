"use client";

import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { WatermarkImage } from "@/components/watermark-image";
import { useLanguage } from "@/context/language-context";

export default function CheckoutPage() {
  const { t } = useLanguage();
  const { items, cartTotal } = useCart();
  return (
    <div className="bg-[#FFFCF8] min-h-[60vh]">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 py-12">
        <h1 className="font-serif text-3xl">{t.checkout.title}</h1>
        <p className="text-sm text-[#78716C] mt-2">{t.checkout.note}</p>

        {items.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-[rgba(28,18,14,0.12)] mt-8">
            <p className="text-[#78716C]">{t.checkout.empty}</p>
            <Link href="/shop" className="mt-4 inline-flex h-10 px-6 bg-[#2B1B12] text-white text-[11px] tracking-[0.16em] uppercase items-center">{t.checkout.continue}</Link>
          </div>
        ) : (
          <div className="mt-8 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white border border-[rgba(28,18,14,0.08)] p-6 space-y-4">
              <h2 className="text-[11px] tracking-[0.16em] uppercase">{t.checkout.contact}</h2>
              <input placeholder={t.checkout.email} className="w-full h-11 px-4 border border-[rgba(28,18,14,0.12)] outline-none focus:border-[#2B1B12]" />
              <h2 className="text-[11px] tracking-[0.16em] uppercase pt-4">{t.checkout.shipping}</h2>
              <div className="grid grid-cols-2 gap-3">
                <input placeholder={t.checkout.firstName} className="h-11 px-4 border border-[rgba(28,18,14,0.12)] outline-none focus:border-[#2B1B12]" />
                <input placeholder={t.checkout.lastName} className="h-11 px-4 border border-[rgba(28,18,14,0.12)] outline-none focus:border-[#2B1B12]" />
              </div>
              <input placeholder={t.checkout.address} className="w-full h-11 px-4 border border-[rgba(28,18,14,0.12)] outline-none focus:border-[#2B1B12]" />
              <div className="grid grid-cols-2 gap-3">
                <input placeholder={t.checkout.city} className="h-11 px-4 border border-[rgba(28,18,14,0.12)] outline-none focus:border-[#2B1B12]" />
                <input placeholder={t.checkout.phone} className="h-11 px-4 border border-[rgba(28,18,14,0.12)] outline-none focus:border-[#2B1B12]" />
              </div>
              <button className="w-full h-12 bg-[#2B1B12] text-white text-[11px] tracking-[0.16em] uppercase">{t.checkout.payPrefix} {formatPrice(cartTotal)} - {t.checkout.paySuffix}</button>
              <p className="text-xs text-[#78716C] text-center">{t.checkout.demoNote}</p>
            </div>
            <div className="lg:col-span-5 bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)] p-6 h-fit">
              <h2 className="text-[11px] tracking-[0.16em] uppercase">{t.checkout.summary}</h2>
              <div className="mt-4 space-y-3">
                {items.map((i) => (
                  <div key={i.product.id} className="flex gap-3 text-sm">
                    <WatermarkImage src={i.product.image} alt={i.product.name} containerClassName="w-16 h-20 bg-white shrink-0" imageClassName="w-full h-full object-cover" watermarkSize="sm" />
                    <div className="flex-1">
                      <div className="font-medium leading-tight">{i.product.name}</div>
                      <div className="text-xs text-[#78716C]">{i.length} • {i.color} • {t.checkout.qty} {i.qty}</div>
                      <div className="text-sm font-medium mt-1">{formatPrice(i.product.price * i.qty)}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-px bg-[rgba(28,18,14,0.08)]" />
              <div className="mt-4 flex justify-between text-sm"><span>{t.checkout.subtotal}</span><span className="font-medium">{formatPrice(cartTotal)}</span></div>
              <div className="flex justify-between text-sm text-[#78716C]"><span>{t.checkout.shippingLabel}</span><span>{t.checkout.shippingValue}</span></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
