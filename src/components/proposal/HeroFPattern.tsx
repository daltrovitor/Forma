// Hello World
"use client";

import Image from "next/image";
import { ArrowDown, Flame, ShieldCheck, Zap } from "lucide-react";

export function HeroFPattern() {
  return (
    <section id="topo" className="relative w-full pt-10 pb-16 sm:pt-14 sm:pb-24 overflow-hidden border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Horizontal Bar of the F Pattern: Brand & Proposition Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-slate-900 flex items-center justify-center p-1.5 shadow-sm">
                <Image
                  src="/brand/prx-app-icon.svg"
                  alt="Ícone Oficial do App PRX"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7607FD]">
                  Media Kit 2026 • Apresentação Executiva
                </p>
                <p className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                  Rafael Molina • Apresentador e Criador de Conteúdo
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Proposta Oficial de Parceria Estratégica</span>
          </div>
        </div>

        {/* F-Pattern Horizontal Bar 1: Monumental Main Headline (direct, zero pretext) */}
        <div className="mt-10 sm:mt-14 max-w-5xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
            De uma empresa de viagens para o maior ecossistema jovem do Brasil.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl">
            Três forças com o mesmo propósito: conectar, inspirar e criar experiências que façam parte da vida da nova geração. <strong className="text-slate-900 font-semibold">Rafael Molina</strong> traz comunicação e influência; a <strong className="text-slate-900 font-semibold">FORMA</strong>, experiências, viagens e tradição com escolas premium; e a <strong className="text-slate-900 font-semibold">PRX</strong>, tecnologia, benefícios exclusivos, banco digital e um novo jeito de se relacionar com o futuro.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#parceria"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md shadow-xs transition-colors cursor-pointer"
            >
              <span>Explorar a Proposta Completa</span>
              <ArrowDown className="w-4 h-4 text-[#0BD9FD]" />
            </a>

            <a
              href="#tese-ltv"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors cursor-pointer"
            >
              <span>Ver Ciclo de Vida & LTV</span>
            </a>
          </div>
        </div>

        {/* F-Pattern Horizontal Bar 2: High-Density Executive Metrics (Scannable) */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="flex flex-col pl-4 border-l-2 border-[#7607FD]">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-mono">
              10 ANOS
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              Extensão do LTV
            </span>
            <span className="text-xs text-slate-500 mt-0.5 leading-snug">
              Relacionamento contínuo dos 14 aos 24+ anos, não apenas uma viagem pontual.
            </span>
          </div>

          <div className="flex flex-col pl-4 border-l-2 border-[#0BD9FD]">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-mono">
              14 EPISÓDIOS
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              Forma Sem Filtro
            </span>
            <span className="text-xs text-slate-500 mt-0.5 leading-snug">
              Temporada reality jovem pré-viagem gerando desejo e engajamento semanal.
            </span>
          </div>

          <div className="flex flex-col pl-4 border-l-2 border-slate-900">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-mono">
              1.250+
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              Jovens nos Eventos
            </span>
            <span className="text-xs text-slate-500 mt-0.5 leading-snug">
              4 ativações presenciais: Lançamento, Wake Park, Run e Founders.
            </span>
          </div>

          <div className="flex flex-col pl-4 border-l-2 border-slate-300">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-mono">
              3 MODELOS
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              Estruturas Societárias
            </span>
            <span className="text-xs text-slate-500 mt-0.5 leading-snug">
              Joint Venture, Fusão Estratégica ou Participação no Capital da PRX.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
