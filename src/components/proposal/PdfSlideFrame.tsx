// Hello World
"use client";

import type { ReactNode } from "react";

interface PdfSlideFrameProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  tag?: string;
}

export function PdfSlideFrame({
  id,
  children,
  className = "",
  dark = false,
  tag = "PROPOSTA DE PARCERIA",
}: PdfSlideFrameProps) {
  return (
    <article
      id={id}
      className={`relative w-full max-w-6xl mx-auto rounded-sm border transition-shadow duration-300 shadow-sm overflow-hidden mb-12 sm:mb-16 ${
        dark
          ? "bg-[#0B0B10] border-slate-800 text-white"
          : "bg-[#FBF6FB] border-slate-300 text-slate-950"
      } ${className}`}
    >
      {/* Top Header of the Slide */}
      <div className="px-6 sm:px-10 pt-6 sm:pt-8 pb-2 flex items-center justify-between">
        <span
          className={`text-xs sm:text-sm font-mono font-black uppercase tracking-wider ${
            dark ? "text-slate-400" : "text-slate-900"
          }`}
        >
          {tag}
        </span>
      </div>

      {/* Main Slide Body */}
      <div className="px-6 sm:px-10 py-4 sm:py-6">{children}</div>

      {/* Footer Tag of the Slide */}
      <div className="px-6 sm:px-10 pb-6 sm:pb-8 pt-2 flex items-center justify-between">
        <span
          className={`text-xs sm:text-sm font-mono tracking-tight font-medium ${
            dark ? "text-slate-500" : "text-slate-900"
          }`}
        >
          @rafaelmolina.prx
        </span>
        <span className="px-3.5 py-0.5 rounded-full bg-[#E11D74] text-white font-mono font-bold text-xs shadow-2xs">
          2026
        </span>
      </div>
    </article>
  );
}
