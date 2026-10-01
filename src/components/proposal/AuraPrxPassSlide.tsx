// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import Image from "next/image";
import { Sparkles, Percent, Gift, Crown, ArrowRight } from "lucide-react";

export function AuraPrxPassSlide() {
  return (
    <PdfSlideFrame id="prx-pass" tag="BENEFÍCIO PERMANENTE">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Column: Visual Card representation of the PRX PASS App */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full aspect-4/5 rounded-md overflow-hidden border border-slate-200 shadow-md bg-slate-950">
            <Image
              src="/pdf-images/p5_0_X4.png"
              alt="Membro do ecossistema digital PRX Pass"
              fill
              className="object-cover filter brightness-95"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            
            {/* Overlay simulation of the benefit card */}
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#0BD9FD] font-bold">
                <span>PRX PASS VANTAGEM</span>
                <span className="px-2 py-0.5 rounded-full bg-[#7607FD] text-white">EXCLUSIVO</span>
              </div>
              <p className="mt-2 text-sm font-bold text-slate-100 leading-snug">
                &ldquo;Faça seu evento com o Grupo Aura através da PRX e ganhe 10% de benefício na decoração.&rdquo;
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>Válido para formaturas, aniversários e festas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Explanatory Content */}
        <div className="lg:col-span-7 flex flex-col">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            04 • PRESENÇA DIÁRIA NO BOLSO DO JOVEM
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            Grupo Aura dentro do PRX PASS: presença contínua, não apenas sazonal.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Queremos transformar o <strong>Grupo Aura em um benefício permanente</strong> dentro do aplicativo PRX. 
            A empresa poderá criar vantagens exclusivas, upgrades e condições comerciais sob medida para os membros ativos da comunidade.
          </p>

          {/* Benefit Mechanics */}
          <div className="mt-6 space-y-3">
            <div className="p-4 rounded-sm border border-slate-200 bg-white flex items-start gap-3 shadow-2xs">
              <div className="w-8 h-8 rounded-sm bg-purple-100 text-[#7607FD] flex items-center justify-center shrink-0">
                <Percent className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-950">Descontos &amp; Bônus Diretos</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Exemplo prático: crédito em cenografia, desconto percentual em serviços agregados ou condições facilitadas de pagamento.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-sm border border-slate-200 bg-white flex items-start gap-3 shadow-2xs">
              <div className="w-8 h-8 rounded-sm bg-cyan-100 text-[#0284c7] flex items-center justify-center shrink-0">
                <Gift className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-950">Upgrades &amp; Mimos Exclusivos</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Experiências de camarote, áreas VIP, iluminação cênica diferenciada ou ativações fotográficas especiais.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-sm border border-slate-200 bg-white flex items-start gap-3 shadow-2xs">
              <div className="w-8 h-8 rounded-sm bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-950">Condições Especiais Co-criadas</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Desenvolvimento conjunto de pacotes modulares para festas particulares, celebrações de turmas e formaturas.
                </p>
              </div>
            </div>
          </div>

          {/* Transformation Hook */}
          <div className="mt-6 p-5 rounded-sm bg-slate-950 text-white">
            <p className="text-sm sm:text-base font-medium leading-relaxed">
              &ldquo;Assim, o Grupo Aura <strong>deixa de aparecer para o jovem apenas quando ele procura um evento</strong>. 
              Ela passa a fazer parte do ecossistema e do dia a dia dele.&rdquo;
            </p>
          </div>

        </div>

      </div>
    </PdfSlideFrame>
  );
}
