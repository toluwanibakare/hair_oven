"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 2.2 seconds on initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#2B1B12] text-[#E8DDC9] flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

          {/* Golden Ring Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: [0, 0.4, 0.2] }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-[#D4AF37]/30 blur-[1px]"
          />

          {/* Logo Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-64 h-24 sm:w-80 sm:h-32 z-10 flex items-center justify-center"
          >
            <Image
              src="/brand_logo.PNG"
              alt="Hair Oven"
              fill
              priority
              className="object-contain filter drop-shadow-[0_4px_24px_rgba(212,175,55,0.25)]"
            />
          </motion.div>

          {/* Shimmering Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "140px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-6 z-10"
          />

          {/* Elevated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#E8DDC9] font-medium z-10 text-center px-4"
          >
            THE APEX OF EXCEPTIONAL HAIR
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
