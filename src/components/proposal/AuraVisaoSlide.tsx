// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import { PrxStaticLogo } from "@/components/brand/PrxAnimatedLogo";
import { AuraLogo } from "@/components/brand/AuraLogo";
import { ArrowUpRight, MessageCircle, Mail, Sparkles } from "lucide-react";

export function AuraVisaoSlide() {
  return (
    <PdfSlideFrame id="visao" tag="A VISÃO ESTRATÉGICA">
      <div className="flex flex-col">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            06 • O MANIFESTO DE FUTURO
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Esta não é uma proposta para fazer um evento juntos.
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            É uma proposta para construir um <span className="bg-purple-100 text-[#7607FD] px-2 py-0.5 rounded-sm">fluxo permanente de negócios</span> entre PRX, Grupo Aura, escolas, marcas e uma nova geração de consumidores.
          </p>
        </div>

        {/* 2-Column Synthesis Box */}
        <div className="mt-8 rounded-sm bg-[#0B0B10] text-white p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            <div className="flex flex-col gap-4 border-b md:border-b-0 md:border-r border-slate-800 pb-8 md:pb-0 md:pr-8">
              <div className="w-36 h-12 flex items-center">
                <AuraLogo theme="dark" className="w-full h-full object-contain" />
              </div>
              <p className="text-lg sm:text-2xl font-black text-slate-100 leading-snug">
                &ldquo;Grupo Aura tem estrutura e experiência para fazer acontecer.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                A excelência de execução física e cenográfica.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-36 h-12 flex items-center">
                <PrxStaticLogo className="w-full h-full object-contain" />
              </div>
              <p className="text-lg sm:text-2xl font-black text-slate-100 leading-snug">
                &ldquo;A PRX está construindo a comunidade, os produtos e o relacionamento com quem vem depois.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-[#0BD9FD] font-mono">
                A atenção, fidelidade e lealdade da nova geração.
              </p>
            </div>

          </div>

          {/* Central Synthesis Climax */}
          <div className="mt-10 pt-8 border-t border-slate-800 text-center flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-lg font-mono font-bold text-slate-300">
              <span>Grupo Aura faz eventos.</span>
              <span className="text-slate-600">•</span>
              <span>PRX conecta uma geração.</span>
            </div>

            <h3 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-black bg-linear-to-r from-white via-slate-100 to-[#0BD9FD] bg-clip-text text-transparent">
              Juntas, podemos criar onde essa geração vai acontecer.
            </h3>

            <div className="mt-6 flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-[#7607FD] text-white font-mono font-bold text-xs uppercase tracking-widest shadow-xs">
                PRX × GRUPO AURA
              </span>
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#0BD9FD] font-semibold">
                THE NXT PLACE IS PRX.
              </span>
            </div>
          </div>
        </div>

        {/* Contact Direct Action */}
        <div className="mt-8 rounded-md border border-slate-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              PRÓXIMO PASSO
            </span>
            <h4 className="text-lg font-bold text-slate-950 mt-1">
              Vamos estruturar esse modelo juntos?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Alinhamento direto com Rafael Molina e liderança executiva da PRX.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/5511989609797"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direto</span>
            </a>

            <a
              href="mailto:contato@rafaelmolina.com.br"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>E-mail Executivo</span>
            </a>
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
