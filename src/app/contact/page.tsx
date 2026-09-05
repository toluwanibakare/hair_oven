"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, Mail, Phone, Clock, Send, ShieldCheck, HelpCircle } from "lucide-react";

export default function ContactPage() {
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
            CLIENT CARE & SUPPORT
          </span>
          <h1 className="font-serif text-[42px] sm:text-[60px] lg:text-[76px] leading-[0.9] tracking-[-0.02em] text-white mt-4 font-light">
            Contact The House
          </h1>
          <p className="mt-4 text-xs sm:text-sm tracking-[0.16em] uppercase text-[#E8DDC9]/70 font-medium max-w-[600px] mx-auto">
            Dedicated assistance for orders, Atelier commissions, and client care.
          </p>
        </div>
      </section>

      {/* Main Support Options Grid */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          <div className="p-8 bg-white border border-[#2B1B12]/10 rounded-sm flex flex-col justify-between hover:border-[#B8860B] transition-colors">
            <div>
              <span className="font-serif text-lg text-[#B8860B] font-semibold">01 /</span>
              <h3 className="font-serif text-2xl text-[#2B1B12] mt-2">WhatsApp Concierge</h3>
              <p className="text-xs text-[#57534E] leading-6 mt-3">
                Immediate assistance for order updates, cap sizing guidance, and urgent inquiries.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#2B1B12]">
                +234 805 738 8171
              </div>
              <div className="text-[11px] text-[#57534E] mt-0.5">Available 9:00 AM – 7:00 PM WAT</div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2B1B12]/08">
              <a
                href="https://wa.me/2348057388171"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#B8860B] hover:text-[#2B1B12] transition-colors"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>

          <div className="p-8 bg-white border border-[#2B1B12]/10 rounded-sm flex flex-col justify-between hover:border-[#B8860B] transition-colors">
            <div>
              <span className="font-serif text-lg text-[#B8860B] font-semibold">02 /</span>
              <h3 className="font-serif text-2xl text-[#2B1B12] mt-2">Email Support</h3>
              <p className="text-xs text-[#57534E] leading-6 mt-3">
                For detailed client inquiries, order changes, and formal documentation.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#2B1B12]">
                support@hairoven.com
              </div>
              <div className="text-[11px] text-[#57534E] mt-0.5">24-hour response protocol</div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2B1B12]/08">
              <a
                href="mailto:support@hairoven.com"
                className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#B8860B] hover:text-[#2B1B12] transition-colors"
              >
                Send Email →
              </a>
            </div>
          </div>

          <div className="p-8 bg-white border border-[#2B1B12]/10 rounded-sm flex flex-col justify-between hover:border-[#B8860B] transition-colors">
            <div>
              <span className="font-serif text-lg text-[#B8860B] font-semibold">03 /</span>
              <h3 className="font-serif text-2xl text-[#2B1B12] mt-2">Atelier Appointments</h3>
              <p className="text-xs text-[#57534E] leading-6 mt-3">
                Private consultations for custom commissions, bridal units, and cranial mapping.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#2B1B12]">
                Lagos & London Studios
              </div>
              <div className="text-[11px] text-[#57534E] mt-0.5">Strictly by appointment</div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2B1B12]/08">
              <Link
                href="/atelier#consultation-form"
                className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#B8860B] hover:text-[#2B1B12] transition-colors"
              >
                Book Appointment →
              </Link>
            </div>
          </div>

        </div>

        {/* Support Ticket & Contact Form Section */}
        <div id="support-form" className="bg-[#E0D5C5]/25 border border-[#2B1B12]/10 p-8 lg:p-14 rounded-sm">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8860B] font-semibold">
                SUPPORT TICKET
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-[#2B1B12] mt-2 font-light">
                Submit a Support Request
              </h2>
              <p className="text-xs text-[#57534E] leading-6 mt-4">
                Please complete the form to log a tracked support ticket with our Client Concierge team. Every ticket receives priority attention and an assigned tracking code.
              </p>

              <div className="mt-8 space-y-4">
                <div className="p-4 bg-white border border-[#2B1B12]/08 rounded-sm">
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold">
                    Order Assistance
                  </div>
                  <p className="text-[11px] text-[#57534E] mt-1">
                    Have your order number ready for faster dispatch and status tracking.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#2B1B12]/08 rounded-sm">
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#B8860B] font-semibold">
                    The Heirloom Guide
                  </div>
                  <p className="text-[11px] text-[#57534E] mt-1">
                    For cap sizing, hair maintenance, or exchange policies, explore{" "}
                    <Link href="/heirloom-guide" className="underline text-[#2B1B12]">
                      The Heirloom Guide
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
                  <h3 className="font-serif text-2xl text-[#2B1B12]">Support Ticket Received</h3>
                  <div className="mt-2 text-sm font-semibold text-[#B8860B]">
                    Ticket ID: {ticketId}
                  </div>
                  <p className="text-xs text-[#57534E] max-w-[44ch] mx-auto mt-3 leading-6">
                    Thank you. Your support ticket has been logged with Client Care. A dedicated representative will follow up via email within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.14em] uppercase hover:bg-[#B8860B] transition-colors"
                  >
                    Submit Another Ticket
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl text-[#2B1B12]">Client Support Ticket</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                        Email Address *
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
                        Phone / WhatsApp
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
                        Order Number (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. HO-84920"
                        value={formData.orderNumber}
                        onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                        className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Order Tracking & Delivery">Order Tracking & Delivery</option>
                        <option value="Atelier Commission">Atelier Commission</option>
                        <option value="Cap Sizing & Fit">Cap Sizing & Fit</option>
                        <option value="Wholesale & Trade">Wholesale & Trade</option>
                        <option value="Exchanges & Returns">Exchanges & Returns</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Subject *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Brief summary of your request"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-11 px-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase font-semibold text-[#2B1B12] mb-1.5">
                      Message & Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please detail your request or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-[#FFFCF8] border border-[#2B1B12]/15 text-sm text-[#2B1B12] focus:border-[#B8860B] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-13 bg-[#2B1B12] text-[#FFFCF8] text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-[#B8860B] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Submit Support Ticket
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
