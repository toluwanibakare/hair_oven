"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

export default function HousePage() {
  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop"
            alt="The House of Exceptional Hair"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-transparent to-transparent" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 text-center">
          <span className="text-[10px] tracking-[0.26em] uppercase text-[#D4AF37] font-semibold">
            THE HOUSE MANIFESTO
          </span>
          <h1 className="font-serif text-[42px] sm:text-[64px] lg:text-[84px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light max-w-[1000px] mx-auto">
            THE HOUSE OF EXCEPTIONAL HAIR
          </h1>
          <p className="mt-6 text-sm sm:text-base tracking-[0.16em] uppercase text-[#E8DDC9]/80 font-medium max-w-[800px] mx-auto">
            Birthed by God. Inspired by women. Defined by craftsmanship.
          </p>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28 space-y-24">
        {/* 01. THE CALLING */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              CHAPTER 01
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              THE CALLING
            </h2>
          </div>
          <div className="lg:col-span-7 text-sm lg:text-base text-[#57534E] leading-8">
            <p>
              Some houses begin with a business plan. HAIR OVEN began with a calling.
            </p>
            <p className="mt-4">
              Long before there was a name, a logo, or a global vision, there was a little girl who loved beautiful hair. From watching my mother’s hands plait my hair to weaving the hair of neighborhood children, an unspoken obsession with precision was born. I didn’t know it then, but God was preparing my hands long before He revealed the assignment.
            </p>
          </div>
        </div>

        {/* 02. THE CRAFTSMANSHIP */}
        <div className="grid lg:grid-cols-12 gap-10 items-center border-t border-[#2B1B12]/10 pt-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              CHAPTER 02
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              THE CRAFTSMANSHIP
            </h2>
          </div>
          <div className="lg:col-span-7 text-sm lg:text-base text-[#57534E] leading-8">
            <p>
              The most important lessons I learned about hair were not taught in a classroom. As a young girl, I would travel miles simply to have my hair braided by a woman whose work was immaculate. She taught me that the difference between the ordinary and the exceptional lives entirely in the details.
            </p>
            <p className="mt-4">
              The precision of the line. The patience behind the work. The pride in the finish. That deep reverence for craftsmanship became the absolute standard that HAIR OVEN represents today.
            </p>
          </div>
        </div>

        {/* 03. THE PROPHECY */}
        <div className="grid lg:grid-cols-12 gap-10 items-center border-t border-[#2B1B12]/10 pt-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              CHAPTER 03
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              THE PROPHECY
            </h2>
          </div>
          <div className="lg:col-span-7 text-sm lg:text-base text-[#57534E] leading-8">
            <blockquote className="font-serif text-xl lg:text-2xl text-[#2B1B12] italic mb-4">
              “I can imagine what you’ll be like on your wedding day.”
            </blockquote>
            <p>
              Decades ago, my late father would smile and joke that he could see me hiring a hairstylist and makeup artist from another country for my wedding. It was his loving way of describing my uncompromising standards.
            </p>
            <p className="mt-4">
              Today, those words carry the weight of prophecy. God allows memories from our past to make perfect sense only when we finally step into the future He was preparing us for.
            </p>
          </div>
        </div>

        {/* 04. THE ASSIGNMENT */}
        <div className="grid lg:grid-cols-12 gap-10 items-center border-t border-[#2B1B12]/10 pt-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              CHAPTER 04
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              THE ASSIGNMENT
            </h2>
          </div>
          <div className="lg:col-span-7 text-sm lg:text-base text-[#57534E] leading-8">
            <p>
              My journey was never only about hair. Armed with an Economics degree and years of entrepreneurial experience, I knew how to build a business. But I wanted purpose.
            </p>
            <p className="mt-4">
              I prayed and asked God to direct my steps. He did not simply lead me to a business; He gave me HAIR OVEN. The name. The vision. The exact assignment: to help women experience absolute beauty without compromising on quality, dignity, or value.
            </p>
          </div>
        </div>

        {/* 05. THE PHILOSOPHY */}
        <div className="grid lg:grid-cols-12 gap-10 items-center border-t border-[#2B1B12]/10 pt-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              CHAPTER 05
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              UNCOMPROMISING RESPECT
            </h2>
          </div>
          <div className="lg:col-span-7 text-sm lg:text-base text-[#57534E] leading-8">
            <h3 className="font-serif text-xl text-[#2B1B12] mb-3">Your budget does not define your worth.</h3>
            <p>
              At HAIR OVEN, we believe every woman deserves to experience excellence. Whether she is purchasing an accessible Everyday Essential or investing in a hyper-rare, lifetime Private Reserve heirloom, she commands the exact same respect within our House.
            </p>
            <p className="mt-4">
              The collection she selects dictates the price; it will never dictate her value.
            </p>
          </div>
        </div>

        {/* 06. THE GLOBAL VISION */}
        <div className="grid lg:grid-cols-12 gap-10 items-center border-t border-[#2B1B12]/10 pt-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
              CHAPTER 06
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2">
              THE GLOBAL VISION
            </h2>
          </div>
          <div className="lg:col-span-7 text-sm lg:text-base text-[#57534E] leading-8">
            <h3 className="font-serif text-xl text-[#2B1B12] mb-3">From Africa to the World.</h3>
            <p>
              Our ambition is global. We are building HAIR OVEN to be one of the world's most trusted names in ultra-premium hair. A brand born in Africa, built to stand proudly on a global stage, while never forgetting where it began.
            </p>
            <p className="mt-4">
              As we expand, our promise remains absolute: we will continuously raise the standard. Because when a woman chooses HAIR OVEN, she is trusting us with more than her finances. She is trusting us with her identity.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="bg-[#E0D5C5]/30 border-t border-[#2B1B12]/10 py-20 lg:py-28">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          <span className="text-[10px] tracking-[0.24em] uppercase text-[#B8860B] font-semibold">
            A NOTE FROM THE FOUNDER
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2B1B12] mt-3 font-light">
            TO EVERY WOMAN WHO HAS BECOME PART OF OUR STORY
          </h2>

          <div className="mt-8 text-sm lg:text-base text-[#57534E] leading-8 space-y-6 text-left max-w-[760px] mx-auto">
            <p>
              When I look at HAIR OVEN, I don't simply see a luxury house.
            </p>
            <p>
              I see the children whose hair I wove. I see my mother's hands. I hear my late father's words. I see the years of global travel, researching factories, testing qualities, and constantly asking one question: <em>"How do we give women the absolute best?"</em>
            </p>
            <p>
              My greatest hope is that the woman who encounters this brand never feels like a transaction. I want her to feel seen. I want her to feel revered. Whether she is investing in exceptional raw hair, preparing for her wedding day, serving clients as a stylist, or simply looking in the mirror to feel extraordinary—she belongs here.
            </p>
            <p className="font-serif text-lg text-[#2B1B12] italic">
              God was preparing the hands before revealing the assignment. HAIR OVEN is my response.
            </p>
            <p>
              Thank you for trusting us. Thank you for believing in the standard. And thank you for becoming part of a story that began long before this House had a name.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#2B1B12]/10 inline-block text-center">
            <div className="font-serif text-2xl text-[#2B1B12] tracking-wide">
              Hannah OLUWATOSIN Ogundare
            </div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold mt-1">
              Founder, HAIR OVEN
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
