"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, Mail, Phone, Clock, Send, ShieldCheck, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderNumber: "",
    inquiryType: "General Inquiry",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = "HO-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFCF8] text-[#2B1B12] min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-[#2B1B12] text-[#E8DDC9] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop"
            alt="Client Concierge Support"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-transparent to-transparent" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 text-center">
          <span className="text-[10px] tracking-[0.26em] uppercase text-[#D4AF37] font-semibold">
            {t.contact.heroEyebrow}
          </span>
          <h1 className="font-serif text-[42px] sm:text-[60px] lg:text-[76px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light">
            {t.contact.heroTitle}
          </h1>
          <p className="mt-4 text-xs sm:text-sm tracking-[0.16em] uppercase text-[#E8DDC9]/70 font-medium max-w-[600px] mx-auto">
            {t.contact.heroSub}
          </p>
        </div>
      </section>

      {/* Main Support Options Grid */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { href: "https://wa.me/2348057388171", external: true, lineA: "+234 805 738 8171" },
            { href: "mailto:support@hairoven.com", external: true, lineA: "support@hairoven.com" },
            { href: "/atelier#consultation-form", external: false, lineA: t.contact.studios },
          ].map((c, i) => (
          <div key={t.contact.cards[i].title} className="p-8 bg-white border border-[#2B1B12]/10 rounded-sm flex flex-col justify-between hover:border-[#B8860B] transition-colors">
            <div>
              <span className="font-serif text-lg text-[#B8860B] font-semibold">0{i + 1} /</span>
              <h3 className="font-serif text-2xl text-[#2B1B12] mt-2">{t.contact.cards[i].title}</h3>
              <p className="text-xs text-[#57534E] leading-6 mt-3">
                {t.contact.cards[i].body}
              </p>
              <div className="mt-4 text-sm font-semibold text-[#2B1B12]">
                {c.lineA}
              </div>
              <div className="text-[11px] text-[#57534E] mt-0.5">{t.contact.cards[i].lineB}</div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2B1B12]/08">
              {c.external ? (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#B8860B] hover:text-[#2B1B12] transition-colors"
              >
                {t.contact.cards[i].cta}
              </a>
              ) : (
              <Link
                href={c.href}
                className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#B8860B] hover:text-[#2B1B12] transition-colors"
              >
                {t.contact.cards[i].cta}
              </Link>
              )}
            </div>
          </div>
          ))}

        </div>

        {/* Support Ticket & Contact Form Section */}
        <div id="support-form" className="bg-[#E0D5C5]/25 border border-[#2B1B12]/10 p-8 lg:p-14 rounded-sm">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
                {t.contact.ticketEyebrow}
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2 font-light">
                {t.contact.ticketTitle}
              </h2>
              <p className="text-xs text-[#57534E] leading-6 mt-4">
                {t.contact.ticketBody}
              </p>

              <div className="mt-8 space-y-4">
                <div className="p-4 bg-white border border-[#2B1B12]/08 rounded-sm">
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold">
                    {t.contact.infoAtitle}
                  </div>
                  <p className="text-[11px] text-[#57534E] mt-1">
                    {t.contact.infoAbody}
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#2B1B12]/08 rounded-sm">
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold">
                    {t.contact.infoBtitle}
                  </div>
                  <p className="text-[11px] text-[#57534E] mt-1">
                    {t.contact.infoBbodyA}{" "}
                    <Link href="/heirloom-guide" className="underline text-[#2B1B12]">
                      {t.contact.infoBbodyB}
                    </Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-8 bg-white p-8 lg:p-10 border border-[#2B1B12]/10 shadow-sm rounded-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-14 h-14 text-[#B8860B] mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-[#2B1B12]">{t.contact.successTitle}</h3>
                  <div className="mt-2 text-sm font-semibold text-[#B8860B]">
                    {t.contact.successId} {ticketId}
                  </div>
                  <p className="text-xs text-[#57534E] max-w-[44ch] mx-auto mt-3 leading-6">
                    {t.contact.successBody}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.14em] uppercase hover:bg-[#B8860B] transition-colors"
                  >
                    {t.contact.successAgain}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl text-[#2B1B12]">{t.contact.formTitle}</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={t.contact.namePh}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="email@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="text"
                        placeholder="+234..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                        {t.contact.orderLabel}
                      </label>
                      <input
                        type="text"
                        placeholder={t.contact.orderPh}
                        value={formData.orderNumber}
                        onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                        className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                        {t.contact.catLabel}
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                      >
                        {t.contact.cats.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                        {t.contact.subjectLabel}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={t.contact.subjectPh}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>

                  <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                        {t.contact.messageLabel}
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder={t.contact.messagePh}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-13 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> {t.contact.submit}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
