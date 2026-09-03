import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, variant = "primary", size = "md", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center font-sans tracking-[0.14em] text-[11px] font-medium uppercase transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus-visible:outline-none disabled:opacity-40 disabled:pointer-events-none";
  const variants = {
    primary:
      "bg-[#2B1B12] text-[#FFFCF8] hover:bg-[#2B1B12] border border-[#2B1B12] hover:border-[#2B1B12] hover:tracking-[0.16em]",
    secondary:
      "bg-transparent text-[#2B1B12] border border-[rgba(28,18,14,0.2)] hover:border-[#2B1B12] hover:bg-[#2B1B12] hover:text-[#FFFCF8] backdrop-blur-sm",
    ghost:
      "bg-transparent text-[#2B1B12] hover:text-[#C2A47A] underline-offset-8 hover:underline decoration-[0.5px]",
    outline:
      "bg-[#FFFCF8]/90 text-[#2B1B12] border border-white/20 backdrop-blur hover:bg-white",
  };
  const sizes = {
    sm: "h-[42px] px-6",
    md: "h-[48px] px-8",
    lg: "h-[52px] px-10 text-xs",
  };
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function MagneticButton({ children, className, ...props }: Props) {
  return (
    <Button className={cn("group relative overflow-hidden", className)} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Button>
  );
}
