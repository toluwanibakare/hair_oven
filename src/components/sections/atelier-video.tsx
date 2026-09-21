"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles } from "lucide-react";

export function AtelierVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="bg-[#2B1B12] text-[#FFFCF8] py-20 lg:py-28 relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Background Decorative Gradient Light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#B8860B]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Editorial Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-[#1A100B] group">
              <video
                ref={videoRef}
                src="/video.MOV"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Video Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/80 via-transparent to-[#2B1B12]/30 pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#2B1B12]/80 backdrop-blur border border-[#D4AF37]/40 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-[9px] tracking-[0.2em] uppercase font-mono text-[#F3E5AB] font-bold">
                  ATELIER CRAFTSMANSHIP
                </span>
              </div>

              {/* Bottom Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                <div className="text-[10px] tracking-[0.16em] uppercase text-[#E8DDC9]/90 font-mono">
                  Hand-Arranged Raw Hair Strand Protocol
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="w-9 h-9 grid place-items-center rounded-full bg-black/50 backdrop-blur text-white hover:bg-[#B8860B] transition-colors border border-white/20"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-[#D4AF37]" /> : <Volume2 className="w-4 h-4 text-[#D4AF37]" />}
                  </button>
                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 grid place-items-center rounded-full bg-black/50 backdrop-blur text-white hover:bg-[#B8860B] transition-colors border border-white/20"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-[#D4AF37]" /> : <Play className="w-4 h-4 text-[#D4AF37] ml-0.5" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.26em] uppercase text-[#D4AF37] font-semibold border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              PROVENANCE & PRECISION
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#FFFCF8] leading-[1.08] tracking-tight">
              Mastery in Every Strand. Handcrafted to Perfection.
            </h2>

            <p className="text-sm sm:text-base text-[#E0D5C5] font-serif italic leading-relaxed max-w-[60ch] mx-auto lg:mx-0">
              <span className="italic font-normal">"HAIR OVEN began with a calling."</span> Every raw hair bundle undergoes rigorous manual sorting, cuticle alignment inspection, and strand-by-strand arrangement before construction.
            </p>

            <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed max-w-[60ch] mx-auto lg:mx-0">
              Our master artisans inspect every gram of raw human hair to preserve natural luster, fluid motion, and zero tangling. Watch our hair selection process in real time as each bundle is aligned for unmatched structural integrity.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/atelier"
                className="h-[52px] px-8 bg-[#D4AF37] text-[#2B1B12] text-[11px] tracking-[0.18em] uppercase font-bold inline-flex items-center gap-2.5 hover:bg-white transition-colors shadow-lg"
              >
                <span>Explore Atelier Commissions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/heirloom-guide"
                className="h-[52px] px-8 border border-[#D4AF37]/40 text-[#E0D5C5] hover:text-white hover:border-[#D4AF37] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 transition-colors"
              >
                The Heirloom Standard →
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
