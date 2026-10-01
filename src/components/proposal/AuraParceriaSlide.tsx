// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Flame, Award, Coffee, Footprints, Users2, Ticket, Sparkles } from "lucide-react";
import { PrxStaticLogo } from "@/components/brand/PrxAnimatedLogo";
import { AuraLogo } from "@/components/brand/AuraLogo";

export function AuraParceriaSlide() {
  return (
    <PdfSlideFrame id="parceria" tag="A PARCERIA">
      <div className="flex flex-col">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            03 • GERAÇÃO RECORRENTE DE NEGÓCIOS
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            Uma via de mão dupla para dominar o mercado jovem.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Propomos que o <strong>Grupo Aura se torne parceira estratégica da PRX para eventos e experiências</strong>, construindo uma relação duradoura de geração contínua de novas receitas.
          </p>
        </div>

        {/* The Two Main Tracks Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: PRX -> Grupo Aura */}
          <div className="rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-[#7607FD] text-xs font-mono font-bold rounded-sm uppercase tracking-wider mb-4">
                FRENTE 01
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl font-black text-slate-950">PRX</span>
                <ArrowRight className="w-5 h-5 text-[#7607FD]" />
                <span className="text-xl sm:text-2xl font-black text-slate-950">Grupo Aura</span>
              </div>

              <p className="text-sm font-semibold text-slate-800 mb-5">
                A PRX atua como novo canal comercial, institucional e de relacionamento qualificado para o Grupo Aura:
              </p>

              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7607FD] shrink-0 mt-0.5" />
                  <span><strong>Divulgação de eventos:</strong> presença de marca e chamadas nas redes sociais de Rafael Molina;</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7607FD] shrink-0 mt-0.5" />
                  <span><strong>Preferência operacional:</strong> realização prioritária dos eventos PRX junto ao Grupo Aura;</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7607FD] shrink-0 mt-0.5" />
                  <span><strong>Indicação a marcas:</strong> recomendação ativa do Grupo Aura a patrocinadores e parceiros comerciais;</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7607FD] shrink-0 mt-0.5" />
                  <span><strong>Aproximação escolar:</strong> ponte direta com colégios particulares e instituições do relacionamento de Rafael;</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7607FD] shrink-0 mt-0.5" />
                  <span><strong>Geração de leads:</strong> oportunidades para formaturas, festas, encontros corporativos e celebrações estudantis;</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#7607FD] shrink-0 mt-0.5" />
                  <span><strong>Projetos customizados:</strong> criação e desenvolvimento de novos produtos do Grupo Aura para a Geração Z.</span>
                </li>
              </ul>
            </div>

            {/* Bottom Statement Box */}
            <div className="mt-8 p-4 rounded-sm bg-slate-950 text-white text-xs sm:text-sm font-medium border-l-4 border-[#0BD9FD]">
              &ldquo;Não queremos apenas divulgar o Grupo Aura. <strong>Queremos gerar negócios reais para o Grupo Aura.</strong>&rdquo;
            </div>
          </div>

          {/* Column 2: Grupo Aura -> PRX */}
          <div className="rounded-md border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-100 text-[#0284c7] text-xs font-mono font-bold rounded-sm uppercase tracking-wider mb-4">
                FRENTE 02
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl font-black text-slate-950">Grupo Aura</span>
                <ArrowRight className="w-5 h-5 text-[#0BD9FD]" />
                <span className="text-xl sm:text-2xl font-black text-slate-950">PRX</span>
              </div>

              <p className="text-sm font-semibold text-slate-800 mb-5">
                Entrada do Grupo Aura como parceira construtora e operadora dos eventos proprietários PRX:
              </p>

              {/* Event Cards */}
              <div className="space-y-3">
                <div className="p-3 rounded-sm border border-slate-100 bg-slate-50 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black font-mono text-slate-900 uppercase">PRX UP</h4>
                    <p className="text-xs text-slate-600">Coffee party, música eletrônica, esporte e lifestyle jovem.</p>
                  </div>
                </div>

                <div className="p-3 rounded-sm border border-slate-100 bg-slate-50 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Footprints className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black font-mono text-slate-900 uppercase">PRX RUN</h4>
                    <p className="text-xs text-slate-600">Corrida urbana e experiência de bem-estar para a nova geração.</p>
                  </div>
                </div>

                <div className="p-3 rounded-sm border border-slate-100 bg-slate-50 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-purple-500/10 text-[#7607FD] flex items-center justify-center shrink-0">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black font-mono text-slate-900 uppercase">PRX FOUNDERS</h4>
                    <p className="text-xs text-slate-600">Jovens empreendedores, founders, investidores e novos negócios.</p>
                  </div>
                </div>

                <div className="p-3 rounded-sm border border-slate-100 bg-slate-50 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-cyan-500/10 text-[#0284c7] flex items-center justify-center shrink-0">
                    <Ticket className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black font-mono text-slate-900 uppercase">PRX PASS EXPERIENCES</h4>
                    <p className="text-xs text-slate-600">Experiências exclusivas e acessos VIP para membros do clube de benefícios.</p>
                  </div>
                </div>

                <div className="p-3 rounded-sm border border-slate-100 bg-slate-50 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-pink-500/10 text-pink-600 flex items-center justify-center shrink-0">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black font-mono text-slate-900 uppercase">RESENHA</h4>
                    <p className="text-xs text-slate-600">
                      Festa mensal da PRX em que, a cada edição, um jovem diferente assume o papel de host, trazendo sua identidade, seus convidados e sua rede para criar uma experiência única.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Statement Box */}
            <div className="mt-6 p-4 rounded-sm bg-slate-100 text-slate-800 text-xs font-medium border-l-4 border-[#7607FD]">
              Cada projeto poderá ter seu <strong>modelo específico de sociedade, divisão de receitas e responsabilidades</strong>, previamente alinhado entre PRX e Grupo Aura.
            </div>
          </div>

        </div>

      </div>
    </PdfSlideFrame>
  );
}
