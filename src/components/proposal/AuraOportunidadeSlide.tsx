// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import Image from "next/image";
import { Sparkles, Smartphone, Users, Zap, Compass } from "lucide-react";
import { PrxStaticLogo } from "@/components/brand/PrxAnimatedLogo";
import { AuraLogo } from "@/components/brand/AuraLogo";

export function AuraOportunidadeSlide() {
  return (
    <PdfSlideFrame id="oportunidade" tag="A OPORTUNIDADE">
      <div className="flex flex-col">
        {/* Slide Title */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            01 • O ECOSSISTEMA DA NOVA GERAÇÃO
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            A próxima geração precisa de um lugar para acontecer.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            A PRX nasce com uma proposta simples: <strong>ser o ecossistema da nova geração</strong>. 
            Um app que conecta, em um único ambiente, clube de benefícios, banco digital, investimentos e experiências, acompanhando o jovem em diferentes momentos da sua vida.
          </p>
        </div>

        {/* 2-World Bridge Visual */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Card Left: PRX */}
          <div className="lg:col-span-5 rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between h-full">
            <div>
              <div className="w-36 h-12 flex items-center">
                <PrxStaticLogo className="w-full h-full object-contain filter invert drop-shadow-xs" />
              </div>
              <h3 className="mt-5 text-lg font-black text-slate-950">
                A PRX leva a comunidade.
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Relacionamento digital diário, engajamento contínuo, aplicativo proprietário, banco digital, clube de benefícios e presença massiva na rotina do público jovem.
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-bold text-[#7607FD]">
              <Smartphone className="w-4 h-4" />
              <span>DIGITAL &bull; COMUNIDADE &bull; LIFESTYLE</span>
            </div>
          </div>

          {/* Connector Badge */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-4 lg:py-0">
            <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#7607FD] to-[#0BD9FD] text-white flex items-center justify-center shadow-md font-mono font-black text-lg">
              ×
            </div>
            <span className="text-[11px] font-mono tracking-widest text-slate-500 font-bold uppercase mt-2">
              Conexão
            </span>
          </div>

          {/* Card Right: Grupo Aura */}
          <div className="lg:col-span-5 rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between h-full">
            <div>
              <div className="w-36 h-12 flex items-center">
                <AuraLogo theme="light" className="w-full h-full object-contain" />
              </div>
              <h3 className="mt-5 text-lg font-black text-slate-950">
                O Grupo Aura transforma comunidade em experiência.
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                O Grupo Aura já domina um território essencial dessa jornada: eventos e experiências presenciais de alto impacto, estrutura impecável, cenografia e execução de excelência.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono font-bold text-slate-900">
              <Sparkles className="w-4 h-4 text-[#7607FD]" />
              <span>PRESENCIAL &bull; ESTRUTURA &bull; EXPERIÊNCIA</span>
            </div>
          </div>

        </div>

        {/* Highlight Callout */}
        <div className="mt-8 rounded-sm bg-linear-to-r from-slate-900 to-[#120826] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0BD9FD] font-bold">
              A PROPOSTA CENTRAL
            </span>
            <p className="mt-1 text-lg sm:text-xl font-bold text-slate-100">
              Conectar esses dois mundos: quem tem a atenção digital contínua da juventude com quem tem a maestria da experiência física presencial.
            </p>
          </div>
          <div className="shrink-0 px-5 py-2.5 rounded-sm bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest uppercase text-white font-semibold">
            Sinergia Absoluta
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
