"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Crown, Send } from "lucide-react";
import { WatermarkImage } from "@/components/watermark-image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const constructionMilestones = [
    {
      phase: "01",
      title: "Rare Hair Sourcing & Provenance Verification",
      status: "COMPLETED",
      detail: "Single-donor raw reserve bundles and virgin selections authenticated.",
      percent: 100,
    },
    {
      phase: "02",
      title: "Oven Veil™ Finishing Philosophy & HD Lace Calibration",
      status: "COMPLETED",
      detail: "Proprietary single-knotted micro-bleached transition zones perfected.",
      percent: 100,
    },
    {
      phase: "03",
      title: "Digital Flagship Architecture & Atelier Booking System",
      status: "IN PROGRESS",
      detail: "Refining 3D cranial measurement tools and private commission workflows.",
      percent: 88,
    },
    {
      phase: "04",
      title: "The Heirloom Knowledge Hub & Global Concierge Gateway",
      status: "FINALIZING",
      detail: "Curating international white-glove logistics and care protocols.",
      percent: 92,
    },
  ];

  const whatToExpect = [
    {
      title: "THE PRIVATE COLLECTION",
      tagline: "Reserved for the rarest hair.",
      description: "Entirely unprocessed, single-donor hair selected for exceptional provenance, natural integrity, and enduring beauty. Preserved as a permanent heirloom investment.",
      image: "/products/editorial-model-2.jpg",
    },
    {
      title: "THE SIGNATURE COLLECTION",
      tagline: "The HAIR OVEN standard, made personal.",
      description: "Exceptional human hair selected for its natural movement, density, and character, then finished through the House with meticulous attention to wear.",
      image: "/products/caramel-wave.jpeg",
    },
    {
      title: "THE ATELIER",
      tagline: "Made for one.",
      description: "Private commissions created around the individual. From hair selection and cap architecture to density and finish, tailored strictly to your silhouette.",
      image: "/products/editorial-model.jpg",
    },
  ];

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen overflow-x-hidden selection:bg-[#B8860B]/20">
      
      {/* Top Ambient Announcement Ribbon */}
      <div className="bg-[#2B1B12] text-[#E8DDC9] text-[10px] sm:text-[11px] tracking-[0.22em] uppercase py-3 px-4 text-center border-b border-[#D4AF37]/20 font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          DIGITAL FLAGSHIP IN PROGRESS • LAUNCHING SOON
        </span>
      </div>

      {/* Hero Section: Building Progress & Brand Identity */}
      <section className="relative py-20 sm:py-28 lg:py-36 border-b border-[#2B1B12]/10 overflow-hidden">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B8860B]/08 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 text-center">
          
          {/* Brand Logo Display */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-6"
          >
            <div className="relative w-56 sm:w-72 h-20 sm:h-24">
              <Image
                src="/brand_logo.PNG"
                alt="HAIR OVEN"
                fill
                priority
                className="object-contain filter drop-shadow-[0_4px_20px_rgba(184,134,11,0.15)]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[900px] mx-auto space-y-4"
          >
            <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#B8860B] font-semibold block">
              THE HOUSE OF EXCEPTIONAL HAIR
            </span>

            <h1 className="font-serif text-[38px] sm:text-[58px] lg:text-[76px] leading-[0.92] tracking-[-0.02em] font-light text-[#2B1B12]">
              THE DIGITAL FLAGSHIP <br className="hidden sm:block" />
              <span className="italic font-normal text-[#B8860B]">IS UNDER CONSTRUCTION.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#57534E] leading-8 max-w-[64ch] mx-auto font-serif">
              We are carefully assembling the digital home of <span className="italic font-normal text-[#2B1B12]">HAIR OVEN</span>. An exclusive universe built around restraint, verified provenance, and uncompromising craftsmanship.
            </p>
          </motion.div>

          {/* Construction Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 max-w-[700px] mx-auto bg-[#EDE6D6]/40 border border-[#2B1B12]/12 p-6 sm:p-8 rounded-sm shadow-sm"
          >
            <div className="flex justify-between items-end mb-3">
              <div className="text-left">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold block">
                  BUILD STATUS
                </span>
                <span className="font-serif text-lg text-[#2B1B12] font-medium">
                  Flagship Development Progress
                </span>
              </div>
              <span className="font-serif text-2xl text-[#B8860B] font-light">92%</span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full h-2.5 bg-[#E0D5C5]/60 rounded-full overflow-hidden p-0.5 border border-[#2B1B12]/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "92%" }}
                transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] rounded-full shadow-sm"
              />
            </div>

            <div className="mt-4 flex flex-wrap justify-between items-center text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#57534E]">
              <span>Stage 04 of 04: Final Integration</span>
              <span className="text-[#2B1B12] font-semibold">Opening Very Soon</span>
            </div>
          </motion.div>

          {/* Quick Concierge CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap justify-center gap-4 text-xs tracking-[0.16em] uppercase font-semibold"
          >
            <a
              href="#waitlist"
              className="h-12 px-8 bg-[#2B1B12] text-[#FFFCF8] hover:bg-[#B8860B] transition-colors inline-flex items-center gap-2"
            >
              JOIN PRIVATE WAITLIST <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/2348057388171"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-8 border border-[#2B1B12]/20 text-[#2B1B12] hover:bg-[#2B1B12] hover:text-[#FFFCF8] transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#B8860B]" /> WHATSAPP CONCIERGE
            </a>
          </motion.div>

        </div>
      </section>

      {/* Building Milestones Roadmap */}
      <section className="py-20 lg:py-28 max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-[10px] tracking-[0.22em] uppercase text-[#B8860B] font-semibold">
            THE ARCHITECTURE OF LAUNCH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1B12] mt-2 font-light">
            Construction Milestones
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#57534E] leading-6 font-serif">
            A transparent view into the foundational work currently being completed behind closed doors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {constructionMilestones.map((m, idx) => (
            <motion.div
              key={m.phase}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border border-[#2B1B12]/10 bg-[#EDE6D6]/20 p-6 sm:p-8 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-serif text-2xl text-[#B8860B] font-light">{m.phase}</span>
                  <span
                    className={`text-[9px] tracking-[0.18em] uppercase font-bold px-3 py-1 border ${
                      m.status === "COMPLETED"
                        ? "bg-[#2B1B12] text-[#E0D5C5] border-[#2B1B12]"
                        : "bg-[#B8860B]/10 text-[#B8860B] border-[#B8860B]/30 animate-pulse"
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2B1B12] font-medium leading-tight">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] mt-3 leading-6">
                  {m.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2B1B12]/10 flex justify-between items-center text-[11px] tracking-[0.12em] text-[#78716C]">
                <span>Progress</span>
                <span className="font-semibold text-[#2B1B12]">{m.percent}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What To Expect Section */}
      <section className="bg-[#E0D5C5]/25 border-t border-b border-[#2B1B12]/10 py-20 lg:py-28">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[10px] tracking-[0.22em] uppercase text-[#B8860B] font-semibold">
              PREVIEW THE EXPERIENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1B12] mt-2 font-light">
              What You Should Expect
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#57534E] leading-6 font-serif">
              When our doors officially open, visitors will discover a refined digital sanctuary for luxury hair.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatToExpect.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="border border-[#2B1B12]/10 bg-white rounded-sm overflow-hidden flex flex-col justify-between shadow-sm"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-[#2B1B12]">
                  <WatermarkImage
                    src={item.image}
                    alt={item.title}
                    containerClassName="w-full h-full"
                    imageClassName="w-full h-full object-cover object-top"
                    watermarkSize="md"
                    showWatermark={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-6 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">
                    {item.tagline}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-[#2B1B12] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-6 mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private VIP Waitlist & Notification Form */}
      <section id="waitlist" className="py-20 lg:py-28 max-w-[1000px] mx-auto px-6 text-center">
        <div className="bg-[#FFFCF8] border border-[#2B1B12]/15 p-8 sm:p-14 shadow-lg rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Crown className="w-32 h-32 text-[#B8860B]" />
          </div>

          <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold block mb-2">
            BE THE FIRST TO ENTER
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1B12] font-light">
            Private Notes From The House
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-[#57534E] leading-7 max-w-[56ch] mx-auto font-serif">
            Receive first access to private releases, new collection unveilings, and Atelier commission slots when our construction completes.
          </p>

          <div className="mt-8 max-w-[500px] mx-auto">
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-[#EDE6D6]/40 border border-[#B8860B] text-center"
              >
                <CheckCircle2 className="w-10 h-10 text-[#B8860B] mx-auto mb-2" />
                <h3 className="font-serif text-xl text-[#2B1B12]">You Are On The Private List</h3>
                <p className="text-xs text-[#57534E] mt-1">
                  Thank you. We look forward to welcoming you upon final unveiling.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-13 px-4 bg-white border border-[#2B1B12]/20 text-xs text-[#2B1B12] placeholder:text-[#2B1B12]/40 outline-none focus:border-[#B8860B] transition-colors uppercase tracking-wider"
                />
                <button
                  type="submit"
                  className="h-13 px-8 bg-[#2B1B12] text-[#FFFCF8] text-[10px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors shrink-0 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" /> JOIN WAITLIST
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 text-[11px] tracking-[0.14em] uppercase text-[#78716C] flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#B8860B]" /> Privacy Protected</span>
            <span>•</span>
            <span>No Unsolicited Emails</span>
            <span>•</span>
            <span>Direct Concierge Updates</span>
          </div>

        </div>
      </section>

    </div>
  );
}
