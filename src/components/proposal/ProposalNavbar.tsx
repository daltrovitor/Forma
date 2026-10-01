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

          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-tight text-slate-950">
            <span>PRX</span>
            <span className="text-[#7607FD] font-mono text-base font-bold">×</span>
            <span>GRUPO AURA</span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 ml-1 text-[10px] uppercase font-mono tracking-widest text-[#7607FD] bg-purple-50 border border-purple-100 rounded-sm font-bold">
              2026
            </span>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600"
          aria-label="Navegação da proposta"
        >
          <a
            href="#oportunidade"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            A Oportunidade
          </a>
          <a
            href="#quem-esta-por-tras"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            Quem Está por Trás
          </a>
          <a
            href="#parceria"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            A Parceria
          </a>
          <a
            href="#prx-pass"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            PRX Pass
          </a>
          <a
            href="#escolas"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            Escolas
          </a>
          <a
            href="#visao"
            className="hover:text-slate-950 transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            A Visão
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReplaySplash}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-sm transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
            aria-label="Rever a animação de abertura da marca"
          >
            <Play className="w-3.5 h-3.5 text-[#7607FD] fill-[#7607FD]" />
            <span>Rever animação</span>
          </button>

          <a
            href="https://wa.me/5511989609797"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-slate-950 hover:bg-slate-800 rounded-sm shadow-xs transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7607FD]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0BD9FD]" />
            <span>Falar com Rafael</span>
          </a>
        </div>
      </div>
    </header>
  );
}
