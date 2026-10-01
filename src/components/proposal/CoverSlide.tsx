// Hello World
"use client";

import Image from "next/image";
import { ArrowDown, Play, Sparkles } from "lucide-react";

interface CoverSlideProps {
  onReplaySplash: () => void;
}

export function CoverSlide({ onReplaySplash }: CoverSlideProps) {
  return (
    <div
      id="topo"
      className="relative w-full max-w-6xl mx-auto rounded-sm border border-slate-900 bg-[#0B0B10] text-white overflow-hidden shadow-lg mb-12 sm:mb-16"
    >
      {/* Background ambient lighting matching page 1 */}
      <div className="absolute inset-0 bg-radial from-[#1e1035] via-[#0B0B10] to-[#050508] opacity-90 pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-20 flex flex-col items-center justify-center text-center">
        
        {/* Cover Main Title */}
        <p className="text-sm sm:text-lg font-mono font-semibold tracking-[0.35em] text-slate-300 uppercase">
          PROPOSTA DE
        </p>

        <h1 className="mt-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-linear-to-r from-white via-slate-100 to-[#0BD9FD] bg-clip-text text-transparent">
          PARCERIA
        </h1>

        {/* 3 Logos in a Row (FORMA | PRX | RAFA MOLINA) */}
        <div className="mt-10 sm:mt-16 w-full flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 pb-8 border-b border-slate-800">
          
          {/* Logo 1: FORMA */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-36 sm:w-44 h-16 sm:h-20 flex items-center justify-center">
              <Image
                src="/brand/forma-logo-white.png"
                alt="Logo FORMA"
                width={220}
                height={130}
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)]"
                priority
              />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mt-1">
              Turismo & Viagens
            </span>
          </div>

          <div className="hidden md:block w-px h-16 bg-slate-800" />

          {/* Logo 2: PRX */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-40 sm:w-52 h-16 sm:h-20 flex items-center justify-center">
              <Image
                src="/brand/prx-compact-on-light.svg"
                alt="Logo PRX"
                width={240}
                height={130}
                className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(118,7,253,0.4)] invert"
                priority
              />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#0BD9FD] uppercase mt-1">
              The Next Pays
            </span>
          </div>

          <div className="hidden md:block w-px h-16 bg-slate-800" />

          {/* Logo 3: RAFA MOLINA */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-40 sm:w-48 h-16 sm:h-20 flex items-center justify-center">
              <Image
                src="/brand/rafa-molina-white.png"
                alt="Logo Rafa Molina"
                width={230}
                height={130}
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)]"
                priority
              />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mt-1">
              Comunicação & Influência
            </span>
          </div>

        </div>

        {/* Action Controls & Replay Trigger */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onReplaySplash}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-md transition-colors cursor-pointer"
          >
            <Play className="w-4 h-4 text-[#0BD9FD] fill-[#0BD9FD]" />
            <span>Rever Animação das 3 Logos</span>
          </button>

          <a
            href="#parceria"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
          >
            <span>Iniciar Proposta (Media Kit)</span>
            <ArrowDown className="w-4 h-4 text-[#7607FD]" />
          </a>
        </div>

      </div>
    </div>
  );
}
