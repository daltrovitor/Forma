// Hello World
"use client";

import { ArrowDown, Play, Sparkles } from "lucide-react";
import { PrxStaticLogo } from "@/components/brand/PrxAnimatedLogo";
import { AuraLogo } from "@/components/brand/AuraLogo";

interface CoverSlideProps {
  onReplaySplash: () => void;
}

export function CoverSlide({ onReplaySplash }: CoverSlideProps) {
  return (
    <div
      id="topo"
      className="relative w-full max-w-6xl mx-auto rounded-sm border border-slate-900 bg-[#0B0B10] text-white overflow-hidden shadow-xl mb-12 sm:mb-16"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-[#1e1035] via-[#0B0B10] to-[#050508] opacity-90 pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-20 flex flex-col items-center justify-center text-center">
        
        {/* Cover Main Title */}
        <p className="text-xs sm:text-sm font-mono font-semibold tracking-[0.35em] text-slate-400 uppercase">
          PROPOSTA DE PARCERIA ESTRATÉGICA
        </p>

        <h1 className="mt-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-linear-to-r from-white via-slate-100 to-[#0BD9FD] bg-clip-text text-transparent">
          PRX × GRUPO AURA
        </h1>

        <p className="mt-4 text-base sm:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
          &ldquo;A próxima geração precisa de um lugar para acontecer.&rdquo;
        </p>

        {/* The Two Logos Side-by-Side (PRX × GRUPO AURA) */}
        <div className="mt-10 sm:mt-16 w-full flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-14 md:gap-20 pb-8 border-b border-slate-800">
          
          {/* Logo 1: PRX */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-44 sm:w-56 h-16 sm:h-20 flex items-center justify-center">
              <PrxStaticLogo
                className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(118,7,253,0.4)]"
              />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#0BD9FD] uppercase mt-2">
              Comunidade & Ecossistema
            </span>
          </div>

          {/* Center Connector */}
          <div className="flex items-center justify-center">
            <span className="text-3xl sm:text-5xl font-light text-slate-600 font-mono">
              ×
            </span>
          </div>

          {/* Logo 2: GRUPO AURA */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-44 sm:w-56 h-16 sm:h-20 flex items-center justify-center">
              <AuraLogo
                theme="dark"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(255,255,255,0.18)]"
              />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mt-2">
              Eventos & Experiências
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
            <span>Rever Animação da Parceria</span>
          </button>

          <a
            href="#oportunidade"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
          >
            <span>Iniciar Proposta</span>
            <ArrowDown className="w-4 h-4 text-[#7607FD]" />
          </a>
        </div>

      </div>
    </div>
  );
}
