import Link from "next/link";

export default function BespokePage() {
  return (
    <div className="bg-[#FFFCF8]">
      <div className="bg-[#0A0A0A] text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="text-[11px] tracking-[0.22em] uppercase text-[#C2A47A]">Private Atelier</div>
            <h1 className="font-serif text-[44px] lg:text-[56px] leading-none tracking-[-0.02em] mt-3 font-light">Created<br /><span className="italic text-[#E8DDC9]">around you.</span></h1>
            <p className="text-sm leading-7 text-white/60 mt-6 max-w-[48ch]">Bespoke units are created according to cranial measurements, desired density, texture, styling vision and hairline preference. One woman. One unit.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/2340000000000?text=Hi%20HAIR%20OVEN%2C%20I%27d%20like%20to%20begin%20my%20bespoke%20journey" className="h-11 px-8 bg-white text-black inline-flex items-center text-[11px] tracking-[0.16em] uppercase">Begin Your Bespoke Journey →</a>
              <Link href="/shop" className="h-11 px-8 border border-white/20 inline-flex items-center text-[11px] tracking-[0.16em] uppercase hover:bg-white hover:text-black transition-colors">View Ready-to-Wear</Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=900&auto=format&fit=crop" alt="Bespoke atelier" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-3 gap-8">
        {[
          { step: "01", title: "Consultation", desc: "WhatsApp or studio appointment. We listen to your vision, lifestyle, texture and colour inspiration." },
          { step: "02", title: "Measurement", desc: "Full cranial mapping for a truly personal fit - circumference, front to nape, ear to ear." },
          { step: "03", title: "Creation", desc: "Hand-ventilated construction with Oven Veil™ lace. Weeks of patient craftsmanship." },
          { step: "04", title: "Fitting & Refinement", desc: "A hairline that melts, a cap that balances - final adjustments until it feels like you." },
          { step: "05", title: "Heirloom Care Kit", desc: "Silk bag, stand, Heirloom Guide and care essentials included." },
          { step: "06", title: "Lifetime Support", desc: "WhatsApp aftercare, refresh services and honest guidance on longevity." },
        ].map((s) => (
          <div key={s.step} className="border border-[rgba(28,18,14,0.08)] bg-white p-8">
            <div className="font-serif text-3xl text-[#C2A47A]">{s.step}</div>
            <div className="text-[11px] tracking-[0.16em] uppercase font-medium mt-3">{s.title}</div>
            <div className="text-sm text-[#57534E] mt-2 leading-6">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="max-w-[900px] mx-auto px-6 lg:px-10 pb-16">
        <div className="bg-[#FDF8F0] border border-[rgba(28,18,14,0.06)] p-8 lg:p-10">
          <h3 className="font-serif text-2xl">Investment & Timeline</h3>
          <p className="text-sm leading-6 text-[#57534E] mt-3">Bespoke begins from ₦650,000 depending on length, density and complexity. Timeline 4–6 weeks from measurement. 50% deposit to begin, balance before dispatch/fitting. Lagos studio or virtual consultation - worldwide shipping available.</p>
          <div className="mt-6 h-px bg-[rgba(28,18,14,0.08)]" />
          <div className="mt-6 flex flex-wrap gap-4 text-[11px] tracking-[0.12em] uppercase text-[#78716C]">
            <span>By appointment</span><span>•</span><span>Lagos</span><span>•</span><span>Worldwide shipping</span><span>•</span><span>Duties calculated at checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
