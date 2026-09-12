"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, EyeOff } from "lucide-react";

export function OvenVeil() {
  return (
    <section className="bg-[#2B1B12] text-[#E8DDC9] py-20 lg:py-28 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Macro Visual Shot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="aspect-[4/3] sm:aspect-[14/10] relative rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
                alt="Oven Veil Lace Technology"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#2B1B12]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold">
                    UNDETECTABLE MELT
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#D4AF37] font-semibold">
                  OVEN VEIL™ HD LACE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Copy Side */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <span className="text-[10px] tracking-[0.26em] uppercase text-[#D4AF37] font-semibold block mb-2">
              OUR SIGNATURE FINISHING PHILOSOPHY
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-4xl xl:text-5xl text-white leading-[0.95] tracking-[-0.02em] font-light">
              OVEN VEIL™
            </h2>

            <p className="mt-6 text-sm lg:text-base text-[#E8DDC9]/80 leading-8">
              A considered approach to the transition between hair and wearer - designed to create an exceptionally natural appearance while preserving the movement and character of the hair.
            </p>

            {/* Editorial Spec List */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6 border-t border-white/10 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-1.5"
              >
                <div className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#F3E5AB] font-bold font-mono">
                  01
                </div>
                <h4 className="text-xs sm:text-sm tracking-[0.14em] uppercase font-semibold text-white">
                  How is a natural-looking finish achieved?
                </h4>
                <p className="text-[11px] sm:text-xs text-[#E8DDC9]/75 leading-5">
                  Single-knotted hairline pre-plucked for true realism and seamless scalp integration.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="space-y-1.5"
              >
                <div className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#F3E5AB] font-bold font-mono">
                  02
                </div>
                <h4 className="text-xs sm:text-sm tracking-[0.14em] uppercase font-semibold text-white">
                  Universal Complexion Blend
                </h4>
                <p className="text-[11px] sm:text-xs text-[#E8DDC9]/75 leading-5">
                  Ultra-sheer base designed to adapt harmoniously across warm, deep, and fair complexions.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10"
            >
              <Link
                href="/oven-veil"
                className="h-[50px] px-8 bg-[#D4AF37] text-[#2B1B12] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors"
              >
                DISCOVER OVEN VEIL™ <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
