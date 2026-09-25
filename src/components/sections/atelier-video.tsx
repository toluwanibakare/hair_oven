"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";

export function AtelierVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

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
    <section className="bg-[#f9f6f1] text-[#2B1B12] py-16 lg:py-20 relative overflow-hidden border-t border-[#2B1B12]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Compact Portrait Editorial Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative h-[440px] sm:h-[480px] lg:h-[500px] aspect-[9/16] rounded-xl overflow-hidden border border-[#2B1B12]/10 shadow-[0_20px_50px_rgba(43,27,18,0.08)] bg-[#F5EFE6] group">
              <video
                ref={videoRef}
                src="/hair_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source src="/hair_video.mp4" type="video/mp4" />
              </video>

              {/* Subtle Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/60 via-transparent to-transparent pointer-events-none" />

              {/* Video Controls at Bottom Right */}
              <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="w-8 h-8 grid place-items-center rounded-full bg-black/60 backdrop-blur text-white hover:bg-[#B8860B] transition-colors border border-white/20"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
                </button>
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 grid place-items-center rounded-full bg-black/60 backdrop-blur text-white hover:bg-[#B8860B] transition-colors border border-white/20"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Play className="w-3.5 h-3.5 text-[#D4AF37] ml-0.5" />}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Grounded Brand Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            <div className="inline-block text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold border-b border-[#B8860B]/30 pb-1">
              ATELIER PROVENANCE
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1B12] leading-[1.1] tracking-tight font-light">
              The Art of the Uncut Reserve.
            </h2>

            <p className="text-sm sm:text-base text-[#57534E] font-serif leading-relaxed max-w-[58ch] mx-auto lg:mx-0">
              <span className="italic font-normal">"HAIR OVEN began with a calling."</span> Every raw hair bundle is selected at single-origin provenance, preserved with absolute cuticle alignment, and arranged by hand in our atelier.
            </p>

            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed max-w-[58ch] mx-auto lg:mx-0 font-normal">
              From individual strand sorting to cranial measurement balancing, nothing is rushed and nothing is compromised. Crafted to deliver natural swing, weightless volume, and an unshakeable presence.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="/atelier"
                className="h-[48px] px-8 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 hover:bg-[#B8860B] transition-colors shadow-md"
              >
                <span>Explore The Atelier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/heirloom-guide"
                className="h-[48px] px-8 border border-[#2B1B12]/20 text-[#2B1B12] hover:border-[#B8860B] hover:text-[#B8860B] text-[11px] tracking-[0.18em] uppercase font-semibold inline-flex items-center gap-2 transition-colors"
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
