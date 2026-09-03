import Link from "next/link";

export default function StoryPage() {
  return (
    <div className="bg-[#FFFCF8]">
      <div className="relative h-[72vh] min-h-[520px] overflow-hidden bg-[#0A0A0A]">
        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1920&auto=format&fit=crop" alt="Our Story" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-16">
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#E8DDC9]">Our Story</div>
          <h1 className="font-serif text-[42px] lg:text-[64px] leading-none tracking-[-0.02em] text-white mt-3 font-light">Born from faith.<br /><span className="italic text-[#E8DDC9]">Built without compromise.</span></h1>
          <p className="text-white/70 max-w-[48ch] mt-6 leading-7">HAIR OVEN began with GOD, a childhood fascination with hair, and a prayer to be directed toward what I was meant to build.</p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="prose prose-neutral max-w-none">
          <div className="text-[11px] tracking-[0.18em] uppercase text-[#A68B5B]">Founder - Hannah Oluwatosin Ogundare</div>
          <h2 className="font-serif text-3xl lg:text-4xl tracking-[-0.015em] mt-4 leading-tight">“I can imagine what you’ll be like on your wedding day.”</h2>
          <p className="text-sm text-[#78716C] mt-2">- my late father</p>

          <div className="mt-10 space-y-6 text-[15px] leading-8 text-[#2B1B12] font-light">
            <p>My mother used to plait my hair. As a young girl, I would weave the hair of children around my neighbourhood. I travelled long distances to have my own cornrows done by a woman whose craftsmanship I admired - precision, neatness, patience, attention to detail. That experience taught me that the smallest details matter.</p>
            <p>Years later, after graduating from an American university with a 2:1 in Economics and spending years as an entrepreneur, I asked GOD to direct me toward what I was meant to build. That prayer led to HAIR OVEN.</p>
            <p>Our core beliefs at HAIR OVEN:</p>
            <ul className="list-none space-y-3 mt-6 p-0">
              {[
                { t: "We believe in beauty.", d: "Every woman deserves to feel beautiful, confident and fully herself." },
                { t: "We believe in craftsmanship.", d: "The smallest details matter." },
                { t: "We believe in quality.", d: "Beautiful should never mean careless." },
                { t: "We believe in accessibility.", d: "Premium should never mean exclusion." },
                { t: "We believe in women.", d: "Hair is one of the many ways a woman can express her identity, individuality and beauty." },
                { t: "We believe in continuous improvement.", d: "There is always a better texture, a better experience, a better solution." },
                { t: "We believe in GOD.", d: "HAIR OVEN was birthed through faith, prayer and a desire to follow His direction." },
              ].map((b) => (
                <li key={b.t} className="border-l-2 border-[#E8DDC9] pl-4 py-1">
                  <span className="font-medium text-[#1C120E]">{b.t}</span> <span className="text-[#57534E]">{b.d}</span>
                </li>
              ))}
            </ul>
            <p className="font-serif italic text-xl text-[#1C120E] pt-6 border-t border-[rgba(28,18,14,0.08)] mt-8">Exceptional hair. Extraordinary you. Born from faith. Inspired by women. Defined by craftsmanship. Built without compromise.</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/shop" className="h-11 px-8 bg-[#1C120E] text-white inline-flex items-center text-[11px] tracking-[0.16em] uppercase">Shop the Collection</Link>
            <Link href="/heirloom-guide" className="h-11 px-8 border border-[rgba(28,18,14,0.12)] inline-flex items-center text-[11px] tracking-[0.16em] uppercase">Explore Heirloom Guide</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-16 grid md:grid-cols-3 gap-6">
        <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop" alt="" className="aspect-[4/5] object-cover w-full" />
        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop" alt="" className="aspect-[4/5] object-cover w-full" />
        <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop" alt="" className="aspect-[4/5] object-cover w-full" />
      </div>
    </div>
  );
}
