"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function AccountPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#FFFCF8] min-h-[60vh]">
      <div className="max-w-[600px] mx-auto px-6 lg:px-10 py-16">
        <div className="text-center">
          <div className="font-serif text-3xl">{t.account.title}</div>
          <p className="text-sm text-[#78716C] mt-2">{t.account.body}</p>
        </div>
        <div className="mt-8 bg-white border border-[rgba(28,18,14,0.08)] p-8 space-y-4">
          <input placeholder={t.account.email} className="w-full h-11 px-4 border border-[rgba(28,18,14,0.12)] outline-none focus:border-[#2B1B12]" />
          <input placeholder={t.account.password} type="password" className="w-full h-11 px-4 border border-[rgba(28,18,14,0.12)] outline-none focus:border-[#2B1B12]" />
          <button className="w-full h-11 bg-[#2B1B12] text-white text-[11px] tracking-[0.16em] uppercase">{t.account.signIn}</button>
          <div className="text-center text-xs text-[#78716C]">{t.account.noAccount} <a href="#" className="underline">{t.account.create}</a> • <a href="#" className="underline">{t.account.forgot}</a></div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/shop" className="text-[11px] tracking-[0.14em] uppercase underline decoration-[#C2A47A]">{t.account.guest}</Link>
        </div>
      </div>
    </div>
  );
}
