"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function SplashScreen() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Fast initial load on homepage (800ms) and quick splash on switching pages (600ms)
    const duration = isFirstRender.current ? 800 : 600;

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      isFirstRender.current = false;
    }, duration);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key={`splash-${pathname}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[9999] bg-[#FFFCF8] text-[#2B1B12] flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B8860B]/12 via-transparent to-transparent pointer-events-none" />

          {/* Golden Ring Reveal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: [0.85, 1.05, 1], opacity: [0, 0.4, 0.2] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-[#B8860B]/25 blur-[1px]"
          />

          {/* Logo Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-56 h-20 sm:w-72 sm:h-28 z-10 flex items-center justify-center"
          >
            <Image
              src="/brand_logo.PNG"
              alt="Hair Oven"
              fill
              priority
              className="object-contain filter drop-shadow-[0_4px_20px_rgba(184,134,11,0.2)]"
            />
          </motion.div>

          {/* Shimmering Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "120px", opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.35, ease: "easeOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent my-4 z-10"
          />

          {/* Elevated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#2B1B12] font-semibold z-10 text-center px-4"
          >
            THE APEX OF EXCEPTIONAL HAIR
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
