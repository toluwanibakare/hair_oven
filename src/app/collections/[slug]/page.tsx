import { notFound } from "next/navigation";
import { collections, products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const col = collections.find((c) => c.slug === slug);
  if (!col) return notFound();
  const list = products.filter((p) => p.collection === slug);

  const themes: Record<string, { bg: string; text: string; accent: string }> = {
    private: { bg: "bg-[#1C120E]", text: "text-[#E8DDC9]", accent: "bg-[#C2A47A]" },
    signature: { bg: "bg-[#2B1B12]", text: "text-[#FDF8F0]", accent: "bg-[#E8DDC9]" },
    essentials: { bg: "bg-[#F5EFE6]", text: "text-[#1C120E]", accent: "bg-[#1C120E]" },
  };
  const theme = themes[slug] || themes.private;

  return (
    <div className="bg-[#FFFCF8]">
      {/* Hero */}
      <div className={`relative overflow-hidden ${theme.bg} ${theme.text}`}>
        <div className="absolute inset-0 opacity-20">
          <img src={col.image} alt={col.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-[640px]">
            <div className="text-[10px] tracking-[0.22em] uppercase opacity-70">{col.tagline}</div>
            <h1 className="font-serif text-[44px] lg:text-[64px] leading-[0.9] tracking-[-0.02em] mt-3">
              {col.name}
            </h1>
            <p className="mt-6 text-sm leading-7 opacity-70 max-w-[48ch]">{col.description}</p>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <span className="bg-white text-[#1C120E] px-4 py-2 text-[11px] tracking-[0.16em] uppercase">{col.years}</span>
              <span className="text-[11px] tracking-[0.14em] uppercase opacity-60">From {new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(col.priceFrom)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Statement */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-12 grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-2xl leading-tight">Every strand inspected.<br />Every unit promised.</h2>
          <p className="text-sm leading-6 text-[#57534E] mt-4">
            {slug === "private" && "Raw, unprocessed single-donor hair. Cuticles intact, aligned. The ultimate heirloom - lifetime with care."}
            {slug === "signature" && "High-density virgin hair curated for long-term luxury. Resilient, refined, endlessly wearable."}
            {slug === "essentials" && "Dependable everyday human hair. Beautiful, versatile and crafted for rotation - without compromise on construction."}
          </p>
          <Link href="/shop" className="mt-6 inline-flex h-10 px-6 border border-[rgba(28,18,14,0.12)] text-[11px] tracking-[0.14em] uppercase items-center hover:bg-[#1C120E] hover:text-white transition-colors">
            Shop {col.subtitle} →
          </Link>
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} variant="large" />
            ))}
          </div>
          {list.length === 0 && <div className="py-12 text-center text-[#78716C]">No products yet. Check back soon or chat via WhatsApp.</div>}
        </div>
      </div>

      {/* Comparison */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-16">
        <div className="border border-[rgba(28,18,14,0.08)] bg-[#FDF8F0] p-6 lg:p-8 grid md:grid-cols-3 gap-6">
          {collections.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className={`p-6 border transition-colors ${c.slug === slug ? "bg-[#1C120E] text-white border-[#1C120E]" : "bg-white border-[rgba(28,18,14,0.08)] hover:border-[#1C120E]"}`}>
              <div className="text-[10px] tracking-[0.16em] uppercase opacity-60">{c.tagline}</div>
              <div className="font-serif text-lg mt-2">{c.name}</div>
              <div className={`text-xs mt-2 ${c.slug === slug ? "text-white/60" : "text-[#57534E]"}`}>{c.description}</div>
              <div className="text-[11px] tracking-[0.14em] uppercase mt-4 underline underline-offset-4">{c.slug === slug ? "Currently viewing" : "Explore →"}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
