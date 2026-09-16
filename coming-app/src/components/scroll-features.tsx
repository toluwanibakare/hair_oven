"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollFeatures() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScrollTop, { passive: true });
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <button 
        onClick={scrollTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-[#D4AF37] text-[#2B1B12] rounded-full flex items-center justify-center hover:bg-[#2B1B12] hover:text-[#D4AF37] hover:border hover:border-[#D4AF37] transition-all duration-300 shadow-2xl z-[90] ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} strokeWidth={1.5} />
      </button>
    </>
  );
}
