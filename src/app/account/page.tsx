import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="bg-[#FFFCF8] min-h-[60vh]">
      <div className="max-w-[600px] mx-auto px-6 lg:px-10 py-16">
        <div className="text-center">
          <div className="font-serif text-3xl">Welcome back</div>
          <p className="text-sm text-[#78716C] mt-2">Sign in to view orders, tracking and wishlist. Demo - connect auth provider.</p>
        </div>
        <div className="mt-8 bg-white border border-[rgba(28,18,14,0.08)] p-8 space-y-4">
          <input placeholder="Email" className="w-full h-11 px-4 border border-[rgba(28,18,14,0.12)] outline-none focus:border-[#1C120E]" />
          <input placeholder="Password" type="password" className="w-full h-11 px-4 border border-[rgba(28,18,14,0.12)] outline-none focus:border-[#1C120E]" />
          <button className="w-full h-11 bg-[#1C120E] text-white text-[11px] tracking-[0.16em] uppercase">Sign In - Demo</button>
          <div className="text-center text-xs text-[#78716C]">No account? <a href="#" className="underline">Create account</a> • <a href="#" className="underline">Forgot password</a></div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/shop" className="text-[11px] tracking-[0.14em] uppercase underline decoration-[#C2A47A]">Continue as guest →</Link>
        </div>
      </div>
    </div>
  );
}
