// Hello World
"use client";

import { useId, type CSSProperties } from "react";
import { LOGO_METADATA } from "@/lib/brand/logoPartsData";

interface PrxAnimatedLogoProps {
  className?: string;
  style?: CSSProperties;
  /**
   * Status of each part: 'hidden' | 'entering' | 'visible'
   */
  partsState?: Record<string, boolean>;
  subtitleVisible?: boolean;
}

export function PrxAnimatedLogo({
  className = "w-full max-w-[840px] h-auto",
  style,
  partsState = {
    symbol: true,
    "letter-p": true,
    "letter-r": true,
    "letter-x": true,
  },
  subtitleVisible = true,
}: PrxAnimatedLogoProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <svg
        viewBox={LOGO_METADATA.viewBox}
        className={className}
        style={style}
        role="img"
        aria-label="PRX - The Next Pays"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`grad-bar-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7607FD" />
            <stop offset="100%" stopColor="#0BD9FD" />
          </linearGradient>
        </defs>

        {/* 100% Photographic / Vector Slices Sliced from Master PNG */}
        {LOGO_METADATA.parts.map((part) => {
          const isVisible = partsState[part.id] ?? false;

          return (
            <g
              key={part.id}
              id={`part-${part.id}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0px)" : "translateY(-140px)",
                transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out",
                willChange: "transform, opacity",
              }}
            >
              <image
                href={part.href}
                x={part.x}
                y={part.y}
                width={part.w}
                height={part.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          );
        })}
      </svg>

      {/* Institutional Subtitle & Accent Line */}
      <div
        className="w-full max-w-[620px] flex flex-col items-center mt-3 sm:mt-5 transition-all duration-700 ease-out"
        style={{
          opacity: subtitleVisible ? 1 : 0,
          transform: subtitleVisible ? "translateY(0)" : "translateY(18px)",
          willChange: "transform, opacity",
        }}
      >
        <div className="w-full flex items-center justify-between text-[11px] sm:text-[14px] md:text-[15px] font-semibold tracking-[0.24em] text-slate-800 uppercase select-none">
          <span>EXPERIÊNCIAS</span>
          <span className="text-[#7607FD]">•</span>
          <span>QUE</span>
          <span className="text-[#0BD9FD]">•</span>
          <span>CONECTAM</span>
          <span className="text-[#7607FD]">•</span>
          <span>GERAÇÕES</span>
        </div>
        <div
          className="h-[3px] w-32 sm:w-44 mt-2 sm:mt-3 rounded-full transition-all duration-700 ease-out"
          style={{
            background: "linear-gradient(90deg, #7607FD 0%, #0BD9FD 100%)",
            transform: subtitleVisible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
          }}
        />
        <p className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-400 mt-1 uppercase">
          the next pays
        </p>
      </div>
    </div>
  );
}
