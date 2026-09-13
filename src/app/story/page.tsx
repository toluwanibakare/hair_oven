"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function HousePage() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header with Autoplay Loop Video */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-45">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          >
            <source src="/story_video.mp4" type="video/mp4" />
            <source src="/story_video" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/50 to-[#2B1B12]/70" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 text-center z-10">
          <span className="text-[10px] tracking-[0.26em] uppercase text-[#D4AF37] font-semibold">
            {t.story.manifesto}
          </span>
          <h1 className="font-serif text-[42px] sm:text-[64px] lg:text-[84px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light max-w-[1000px] mx-auto">
            {t.story.title}
          </h1>
          <p className="mt-6 text-sm sm:text-base tracking-[0.16em] uppercase text-[#E8DDC9]/80 font-medium max-w-[800px] mx-auto">
            {t.story.tagline}
          </p>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28 space-y-24 font-serif overflow-hidden">
        {/* 01. THE CALLING */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold font-sans">
              {t.story.ch1label}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              {t.story.ch1title}
            </h2>
          </div>
          <div className="lg:col-span-7 text-base lg:text-lg text-[#57534E] leading-8 font-serif">
            <p>
              {t.story.ch1a} <em className="italic text-[#2B1B12] font-normal">{t.story.ch1calling}</em>
            </p>
            <p className="mt-4">
              {t.story.ch1b}
            </p>
          </div>
        </motion.div>

        {/* 02. THE CRAFTSMANSHIP */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-10 items-center border-t border-[#2B1B12]/10 pt-16"
        >
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold font-sans">
              {t.story.ch2label}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              {t.story.ch2title}
            </h2>
          </div>
          <div className="lg:col-span-7 text-base lg:text-lg text-[#57534E] leading-8 font-serif">
            <p>
              {t.story.ch2}
            </p>
          </div>
        </motion.div>

        {/* 03. THE PROPHECY */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-10 items-center border-t border-[#2B1B12]/10 pt-16"
        >
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold font-sans">
              {t.story.ch3label}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              {t.story.ch3title}
            </h2>
          </div>
          <div className="lg:col-span-7 text-base lg:text-lg text-[#57534E] leading-8 font-serif">
            <blockquote className="font-serif text-xl lg:text-2xl text-[#2B1B12] italic mb-4">
              “{t.story.ch3quote}”
            </blockquote>
            <p>
              {t.story.ch3}
            </p>
          </div>
        </motion.div>

        {/* 04. THE ASSIGNMENT */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-10 items-center border-t border-[#2B1B12]/10 pt-16"
        >
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold font-sans">
              {t.story.ch4label}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              {t.story.ch4title}
            </h2>
          </div>
          <div className="lg:col-span-7 text-base lg:text-lg text-[#57534E] leading-8 font-serif">
            <p>
              {t.story.ch4}
            </p>
          </div>
        </motion.div>

        {/* 05. THE PHILOSOPHY */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-10 items-center border-t border-[#2B1B12]/10 pt-16"
        >
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold font-sans">
              {t.story.ch5label}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              {t.story.ch5title}
            </h2>
          </div>
          <div className="lg:col-span-7 text-base lg:text-lg text-[#57534E] leading-8 font-serif">
            <h3 className="font-serif text-xl text-[#2B1B12] mb-3">{t.story.ch5head}</h3>
            <p>
              {t.story.ch5}
            </p>
          </div>
        </motion.div>

        {/* 06. THE GLOBAL VISION */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-10 items-center border-t border-[#2B1B12]/10 pt-16"
        >
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold font-sans">
              {t.story.ch6label}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              {t.story.ch6title}
            </h2>
          </div>
          <div className="lg:col-span-7 text-base lg:text-lg text-[#57534E] leading-8 font-serif">
            <h3 className="font-serif text-xl text-[#2B1B12] mb-3">{t.story.ch6head}</h3>
            <p>
              {t.story.ch6}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Founder's Note Section */}
      <section className="bg-[#E0D5C5]/30 border-t border-[#2B1B12]/10 py-20 lg:py-28 font-serif overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative aspect-[4/5] rounded-sm overflow-hidden bg-[#F5EFE6] border border-[#2B1B12]/10 shadow-xl"
            >
              <img
                src="/founder.jpeg"
                alt="Hannah Oluwatosin Ogundare"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#2B1B12]/70 to-transparent text-white font-serif">
                <div className="text-xl">Hannah Oluwatosin Ogundare</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-sans mt-1">Founder, HAIR OVEN</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold font-sans block">
                {t.story.noteEyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2B1B12] mt-3 font-light">
                {t.story.noteTitle}
              </h2>

              <div className="mt-6 text-base lg:text-lg text-[#57534E] leading-8 space-y-5 font-serif">
                <p>
                  {t.story.noteP1}
                </p>
                <p>
                  {t.story.noteP2}
                </p>
                <p>
                  {t.story.noteP3}
                </p>
                <p className="font-serif text-xl text-[#2B1B12] italic">
                  {t.story.noteP4}
                </p>
                <p>
                  {t.story.noteP5}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#2B1B12]/10 font-serif">
                <div className="text-sm text-[#78716C] italic font-serif mb-1">{t.story.gratitude}</div>
                <div className="font-serif text-2xl text-[#2B1B12] tracking-wide">
                  {t.story.founderName}
                </div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold mt-1 font-sans">
                  {t.story.founderRole}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
