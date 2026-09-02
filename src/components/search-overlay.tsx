"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Search } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    if (!q) return [];
    const s = q.toLowerCase();
    return products.filter((p) => p.name.toLowerCase().includes(s) || p.category.toLowerCase().includes(s) || p.collection.toLowerCase().includes(s)).slice(0, 5);
  }, [q]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#FFFCF8]/80 backdrop-blur-xl z-[80]" onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="fixed inset-x-0 top-0 z-[80] bg-[#FFFCF8] border-b border-[rgba(28,18,14,0.08)] shadow-[0_20px_60px_rgba(28,18,14,0.08)]">
            <div className="max-w-[800px] mx-auto px-6 py-8">
              <div className="flex items-center gap-4 border-b border-[#1C120E] pb-4">
                <Search className="w-5 h-5 text-[#A68B5B]" />
                <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search wigs, bundles, frontals..." className="flex-1 bg-transparent outline-none placeholder:text-[#A8A29E] text-[15px]" />
                <button onClick={onClose} className="w-8 h-8 grid place-items-center rounded-full hover:bg-black/5">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8">
                {!q ? (
                  <div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-[#A68B5B] mb-4">Popular searches</div>
                    <div className="flex flex-wrap gap-2">
                      {["Bone Straight", "Oven Veil", "Deep Curly", "Bespoke", "Blunt Bob"].map((t) => (
                        <button key={t} onClick={() => setQ(t)} className="px-4 py-2 border border-[rgba(28,18,14,0.12)] text-[12px] tracking-[0.08em] uppercase hover:bg-[#1C120E] hover:text-white transition-colors">
                          {t}
                        </button>
                      ))}
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-2 text-[11px] tracking-[0.12em] uppercase">
                      <Link href="/collections/private" onClick={onClose} className="p-4 bg-[#F5EFE6] hover:bg-[#EDE6D6] transition-colors">
                        Private
                      </Link>
                      <Link href="/collections/signature" onClick={onClose} className="p-4 bg-[#F5EFE6] hover:bg-[#EDE6D6] transition-colors">
                        Signature
                      </Link>
                      <Link href="/collections/essentials" onClick={onClose} className="p-4 bg-[#F5EFE6] hover:bg-[#EDE6D6] transition-colors">
                        Essentials
                      </Link>
                    </div>
                  </div>
                ) : results.length ? (
                  <div className="space-y-3">
                    {results.map((p) => (
                      <Link key={p.id} href={`/product/${p.id}`} onClick={onClose} className="flex gap-4 p-3 hover:bg-[#F5EFE6] transition-colors border border-transparent hover:border-[rgba(28,18,14,0.06)]">
                        <img src={p.image} alt="" className="w-16 h-20 object-cover bg-[#F5EFE6]" />
                        <div>
                          <div className="text-[10px] tracking-[0.14em] uppercase text-[#A68B5B]">{p.collection}</div>
                          <div className="font-serif text-[15px]">{p.name}</div>
                          <div className="text-xs text-[#78716C]">{p.category} • {p.texture}</div>
                          <div className="text-sm font-medium mt-1">{formatPrice(p.price)}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-[#78716C]">No results for “{q}”</div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
