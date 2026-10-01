// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import Image from "next/image";
import { GraduationCap, Zap, Music, Radio, Lightbulb, Target } from "lucide-react";

export function AuraEscolasSlide() {
  return (
    <PdfSlideFrame id="escolas" tag="ATIVIDADE ESCOLAR">
      <div className="flex flex-col">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            05 • PENETRAÇÃO INSTITUCIONAL
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            PRX × Grupo Aura × Escolas: a terceira grande frente.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            A relação consolidada de Rafael Molina com as principais escolas e colégios abre um canal exclusivo e de alto valor agregado: <strong>levar o Grupo Aura diretamente para dentro do ambiente escolar</strong> através de ativações, experiências e projetos especiais.
          </p>
        </div>

        {/* Feature Case Study: PRX BREAK */}
        <div className="mt-10 rounded-md border border-slate-200 bg-white overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Photo */}
            <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[260px] bg-slate-900">
              <Image
                src="/pdf-images/p20_0_X6.png"
                alt="Ativação PRX Break com jovens"
                fill
                className="object-cover filter brightness-95"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-white/90 hidden lg:block" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-sm bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-bold text-[#0BD9FD] border border-slate-700">
                PROJETO PILOTO
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7607FD] uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>CASO PRÁTICO • O FORMATO</span>
              </div>

              <h3 className="mt-2 text-2xl font-black text-slate-950">
                PRX BREAK
              </h3>

              <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                Intervenções rápidas e impactantes realizadas no horário do intervalo ou almoço escolar, combinando:
              </p>

              {/* 4 Pillars of PRX BREAK */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-sm bg-purple-50/70 border border-purple-100 flex items-center gap-2.5">
                  <Music className="w-4 h-4 text-[#7607FD] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Música & DJs Jovens</span>
                </div>

                <div className="p-3 rounded-sm bg-cyan-50/70 border border-cyan-100 flex items-center gap-2.5">
                  <Radio className="w-4 h-4 text-[#0284c7] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Tecnologia & Gamificação</span>
                </div>

                <div className="p-3 rounded-sm bg-amber-50/70 border border-amber-100 flex items-center gap-2.5">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Empreendedorismo & Ideias</span>
                </div>

                <div className="p-3 rounded-sm bg-pink-50/70 border border-pink-100 flex items-center gap-2.5">
                  <Target className="w-4 h-4 text-pink-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Experiências de Marca</span>
                </div>
              </div>

              <p className="mt-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                A partir daí, PRX e Grupo Aura desenvolvem novos formatos proprietários no ambiente escolar — 
                transformando relacionamento orgânico e confiança institucional em <strong>futuras oportunidades para eventos corporativos, formaturas e grandes celebrações</strong>.
              </p>
            </div>

          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
