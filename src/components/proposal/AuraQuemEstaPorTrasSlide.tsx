// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";
import Image from "next/image";
import { Award, Briefcase, Network, TrendingUp } from "lucide-react";

export function AuraQuemEstaPorTrasSlide() {
  return (
    <PdfSlideFrame id="quem-esta-por-tras" tag="QUEM ESTÁ POR TRÁS">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Column: Real Photo of Rafael Molina on Stage */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full aspect-4/5 rounded-md overflow-hidden border border-slate-200 shadow-md bg-slate-950">
            <Image
              src="/pdf-images/p6_0_X4.png"
              alt="Rafael Molina palestrando"
              fill
              className="object-cover object-top filter brightness-95"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono tracking-widest text-[#0BD9FD] uppercase font-bold">
                Liderança & Visão
              </span>
              <p className="text-lg font-bold">Rafael Molina</p>
              <p className="text-xs text-slate-300 font-mono">@rafaelmolina.prx</p>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Core Thesis */}
        <div className="lg:col-span-7 flex flex-col">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7607FD]">
            02 • CREDIBILIDADE & ALCANCE
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            Transformando relacionamento e influência em ecossistema real de negócios.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed">
            <strong>Rafael Molina</strong> é jornalista, empresário e criador de conteúdo com forte atuação junto ao público jovem, escolas de alto padrão e grandes marcas nacionais.
          </p>

          <p className="mt-3 text-base text-slate-700 leading-relaxed">
            Essa conexão profunda com a juventude deu origem à PRX: a ambição de transformar relacionamento e autoridade em um ecossistema capaz de gerar <strong>consumo, experiências memoráveis, oportunidades e negócios recorrentes</strong> para a nova geração.
          </p>

          {/* 3 Pillars Box */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-sm border border-slate-200 bg-white p-4 shadow-2xs">
              <Network className="w-5 h-5 text-[#7607FD]" />
              <h3 className="mt-2 text-sm font-bold text-slate-950">Acesso Direto</h3>
              <p className="text-xs text-slate-600 mt-1">
                Conexão diária com líderes estudantis, comissões de formatura e famílias de escolas premium.
              </p>
            </div>

            <div className="rounded-sm border border-slate-200 bg-white p-4 shadow-2xs">
              <Briefcase className="w-5 h-5 text-[#0BD9FD]" />
              <h3 className="mt-2 text-sm font-bold text-slate-950">Ecossistema</h3>
              <p className="text-xs text-slate-600 mt-1">
                Um aplicativo vivo com clube de vantagens, carteira digital e eventos proprietários.
              </p>
            </div>

            <div className="rounded-sm border border-slate-200 bg-white p-4 shadow-2xs">
              <TrendingUp className="w-5 h-5 text-amber-500" />
              <h3 className="mt-2 text-sm font-bold text-slate-950">Geração de Valor</h3>
              <p className="text-xs text-slate-600 mt-1">
                Conversão de atenção em receita real para marcas parceiras e fornecedores selecionados.
              </p>
            </div>
          </div>

          {/* Closing Hook */}
          <div className="mt-6 p-4 rounded-sm bg-purple-50 border-l-4 border-[#7607FD] text-slate-900 text-sm">
            <strong>O momento:</strong> &ldquo;Agora, queremos parceiros estratégicos que cresçam juntos dentro desse ecossistema.&rdquo;
          </div>

        </div>

      </div>
    </PdfSlideFrame>
  );
}
