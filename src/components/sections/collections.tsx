"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WatermarkImage } from "@/components/watermark-image";
import { useLanguage } from "@/context/language-context";

const baseCards = [
  {
    title: "PRIVATE COLLECTION",
    link: "/collections/private",
    video: "/private.MP4",
    image: "/products/private_collection.PNG",
    objectPos: "object-top",
    objectFit: "object-cover",
  },
  {
    title: "SAPPHIRE COLLECTION",
    link: "/collections/sapphire",
    image: "/products/signature_collection.jpg",
    objectPos: "object-top",
    objectFit: "object-cover",
  },
  {
    title: "ESSENCE COLLECTION",
    link: "/collections/essence",
    image: "/products/essential_collection.jpeg",
    objectPos: "object-top",
    objectFit: "object-cover",
  },
  {
    title: "ATELIER COLLECTION",
    link: "/collections/atelier",
    image: "/products/ATELIER.PNG",
    objectPos: "object-top",
    objectFit: "object-cover",
  },
];

export function Collections() {
  const { t } = useLanguage();
  const cards = baseCards.map((c, i) => ({ ...c, ...t.collections.cards[i] }));

  return (
    <section className="bg-[#FFFCF8] text-[#2B1B12] py-20 lg:py-28 border-b border-[#2B1B12]/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[900px] mx-auto mb-16"
        >
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold">
            {t.collections.eyebrow}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-4xl text-[#2B1B12] mt-3 font-light lg:whitespace-nowrap">
            {t.collections.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#57534E] leading-7">
            {t.collections.body}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="border border-[#2B1B12]/10 bg-[#EDE6D6]/20 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#B8860B] transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
            >
              <Link href={card.link} className="flex-1 flex flex-col justify-between h-full">
                <div className="aspect-[4/3] sm:aspect-[14/10] relative overflow-hidden bg-[#2B1B12]">
                  {card.video ? (
                    <video
                      src={card.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <WatermarkImage
                      src={card.image}
                      alt={card.title}
                      containerClassName="w-full h-full"
                      imageClassName={`w-full h-full object-cover ${card.objectPos || "object-top"} group-hover:scale-105 transition-transform duration-700 ease-out`}
                      watermarkSize="md"
                      showWatermark={false}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/80 via-transparent to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-4 left-6 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold z-20">
                    {card.tagline}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-[#2B1B12] font-light group-hover:text-[#B8860B] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-6 mt-3">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#2B1B12]/10">
                    <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#2B1B12] group-hover:text-[#B8860B] inline-flex items-center gap-2 transition-colors">
                      {card.btn} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
