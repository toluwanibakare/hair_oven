"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface WatermarkImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  watermarkText?: string;
  containerClassName?: string;
  imageClassName?: string;
  showWatermark?: boolean;
  watermarkSize?: "sm" | "md" | "lg";
}

export function WatermarkImage({
  src,
  alt,
  watermarkText = "HAIR OVEN",
  containerClassName = "",
  imageClassName = "",
  showWatermark = true,
  watermarkSize = "md",
  className,
  ...props
}: WatermarkImageProps) {
  const handlePrevent = (e: React.SyntheticEvent) => {
    e.preventDefault();
    return false;
  };

  const sizeClasses = {
    sm: "text-[9px] tracking-[0.2em] px-2 py-0.5",
    md: "text-[10px] sm:text-xs tracking-[0.26em] px-3 py-1",
    lg: "text-xs sm:text-sm tracking-[0.32em] px-4 py-1.5",
  };

  return (
    <div
      className={cn("relative overflow-hidden select-none group/wm", containerClassName)}
      onContextMenu={handlePrevent}
      onDragStart={handlePrevent}
      style={{
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
      }}
    >
      {/* Underlying Product Image */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        onContextMenu={handlePrevent}
        onDragStart={handlePrevent}
        className={cn(
          "pointer-events-none select-none no-drag no-download",
          imageClassName || className
        )}
        style={{
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
        {...props}
      />

      {/* Luxury Watermark Overlay */}
      {showWatermark && (
        <div
          className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden select-none"
          style={{ WebkitTouchCallout: "none", userSelect: "none" }}
        >
          {/* Subtle Diagonal Watermark Badge */}
          <div className="rotate-[-25deg] opacity-35 group-hover/wm:opacity-45 transition-opacity duration-500 mix-blend-overlay flex items-center justify-center">
            <span
              className={cn(
                "font-serif uppercase text-white font-medium border-y border-white/40 whitespace-nowrap bg-black/10 backdrop-blur-[0.5px]",
                sizeClasses[watermarkSize]
              )}
            >
              {watermarkText} • PROPRIETARY CRAFT
            </span>
          </div>

          {/* Discreet Corner Watermark Stamp */}
          <div className="absolute bottom-2 right-3 opacity-40 mix-blend-overlay">
            <span className="font-serif text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-white/90">
              HAIR OVEN®
            </span>
          </div>
        </div>
      )}

      {/* Transparent Protective Shield blocking mouse save/drag */}
      <div
        className="absolute inset-0 z-10 bg-transparent select-none"
        onContextMenu={handlePrevent}
        onDragStart={handlePrevent}
      />
    </div>
  );
}
