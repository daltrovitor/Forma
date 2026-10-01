// Hello World
"use client";

import Image from "next/image";
import { Play, Sparkles } from "lucide-react";

interface ProposalNavbarProps {
  onReplaySplash: () => void;
}

export function ProposalNavbar({ onReplaySplash }: ProposalNavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <a
          href="#topo"
          className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          aria-label="Voltar ao início da proposta"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-sm overflow-hidden bg-slate-900 flex items-center justify-center p-1 shadow-xs">
            <Image
              src="/brand/prx-app-icon.svg"
              alt="Ícone do App PRX"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-tight text-slate-900">
            <span>FORMA</span>
            <span className="text-[#7607FD] font-mono text-base">×</span>
            <span>PRX</span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 ml-1 text-[10px] uppercase font-mono tracking-widest text-[#7607FD] bg-purple-50 border border-purple-100 rounded-sm">
              Media Kit 2026
            </span>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600"
          aria-label="Navegação da proposta"
        >
          <a
            href="#parceria"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            A Parceria
          </a>
          <a
            href="#forma-sem-filtro"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            Forma Sem Filtro
          </a>
          <a
            href="#eventos"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            Eventos PRX
          </a>
          <a
            href="#tese-ltv"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            Tese & LTV
          </a>
          <a
            href="#modelos"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            Modelos
          </a>
          <a
            href="#contato"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            Contato
          </a>
        </nav>

        {/* Replay Brand Animation Button & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onReplaySplash}
            aria-label="Rever animação da marca PRX"
            className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 text-xs font-medium text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            <Play className="w-3.5 h-3.5 text-[#7607FD] fill-[#7607FD]" />
            <span className="hidden sm:inline">Rever animação</span>
            <span className="sm:hidden">Animação</span>
          </button>

          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md shadow-xs transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0BD9FD]" />
            <span>Falar com Rafael</span>
          </a>
        </div>
      </div>
    </header>
  );
}
