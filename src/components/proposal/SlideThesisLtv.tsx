// Hello World
"use client";

import { useState } from "react";
import Image from "next/image";
import { PdfSlideFrame } from "./PdfSlideFrame";
import { Check, ChevronRight } from "lucide-react";

export function SlideThesisLtv() {
  const [activeTab, setActiveTab] = useState<"tese" | "ciclo" | "cartao" | "fest">("tese");

  return (
    <PdfSlideFrame id="tese-ltv">
      {/* Header and Switcher */}
      <div className="pb-4 border-b border-slate-300/80 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-black uppercase tracking-wider text-[#7607FD]">
            FORMA × PRX • A TESE DO ECOSSISTEMA
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mt-1">
            De uma empresa de viagens para o maior ecossistema jovem do Brasil.
          </h2>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setActiveTab("tese")}
            className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs cursor-pointer border transition-colors ${
              activeTab === "tese"
                ? "bg-slate-950 text-white border-slate-950"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
            }`}
          >
            1. A Tese
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ciclo")}
            className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs cursor-pointer border transition-colors ${
              activeTab === "ciclo"
                ? "bg-slate-950 text-white border-slate-950"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
            }`}
          >
            2. Ciclo de 10 Anos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("cartao")}
            className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs cursor-pointer border transition-colors ${
              activeTab === "cartao"
                ? "bg-slate-950 text-white border-slate-950"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
            }`}
          >
            3. Cartão & Passaporte
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("fest")}
            className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs cursor-pointer border transition-colors ${
              activeTab === "fest"
                ? "bg-slate-950 text-white border-slate-950"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
            }`}
          >
            4. PRX Fest
          </button>
        </div>
      </div>

      {/* Tab 1: A Tese & Ativos */}
      {activeTab === "tese" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-3/4 rounded-xs overflow-hidden border border-slate-400 shadow-md">
              <Image
                src="/pdf-images/p25_0_X5.png"
                alt="A Tese da Fusão Forma e PRX"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-black text-slate-900 uppercase tracking-wider">
                1. A TESE CORPORATIVA
              </span>
              <h3 className="mt-2 text-2xl font-black text-slate-950 tracking-tight">
                O que acontece com o jovem depois que ele volta para casa?
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                Hoje, a Forma entra na vida do jovem em um momento muito específico: a viagem de formatura. É um momento de altíssimo envolvimento emocional. O jovem quer viajar, estar com amigos, viver status, pertencimento e histórias para contar.
              </p>

              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                A Forma já possui esse ativo inestimável. A PRX entra para responder à grande pergunta do mercado: <em>o que acontece depois?</em>
              </p>

              <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-xs">
                <p className="text-xs font-mono font-bold text-[#7607FD] uppercase">
                  A Transformação Estratégica:
                </p>
                <p className="text-sm font-black text-slate-950 mt-1">
                  Forma → viagem
                </p>
                <p className="text-sm font-black text-[#7607FD] mt-0.5">
                  Forma + PRX → relacionamento contínuo com a Geração Z
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-300/80 flex items-center justify-between text-xs font-mono text-slate-600">
              <span>Distribuição Histórica + Plataforma Digital</span>
              <strong className="text-slate-950 font-bold">100% Sinergia</strong>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Ciclo de Vida de 10 Anos */}
      {activeTab === "ciclo" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-3/4 rounded-xs overflow-hidden border border-slate-400 shadow-md">
              <Image
                src="/pdf-images/p28_0_X5.png"
                alt="Novo Ciclo de Vida do Cliente"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-black text-slate-900 uppercase tracking-wider">
                4. O NOVO CICLO DE VIDA DO CLIENTE
              </span>
              <h3 className="mt-2 text-2xl font-black text-slate-950 tracking-tight">
                Um LTV que acompanha o jovem dos 14 aos 24+ anos.
              </h3>

              <div className="mt-4 space-y-2 text-xs sm:text-sm text-slate-800 font-medium">
                <div className="p-2.5 bg-white border border-slate-300 rounded-xs flex items-center justify-between">
                  <span><strong>14 ANOS (PRX):</strong> Clube de vantagens, conteúdo e eventos</span>
                  <span className="text-[10px] font-mono text-[#7607FD]">DESCOBERTA</span>
                </div>
                <div className="p-2.5 bg-white border border-slate-300 rounded-xs flex items-center justify-between">
                  <span><strong>15–16 ANOS (PRX + FORMA):</strong> Promoter, gamificação e viagens</span>
                  <span className="text-[10px] font-mono text-amber-600">PREPARAÇÃO</span>
                </div>
                <div className="p-2.5 bg-white border border-slate-300 rounded-xs flex items-center justify-between">
                  <span><strong>17–18 ANOS (FORMA EXPERIENCE):</strong> Viagem de formatura e shows</span>
                  <span className="text-[10px] font-mono text-emerald-600">CLÍMAX</span>
                </div>
                <div className="p-2.5 bg-white border border-slate-300 rounded-xs flex items-center justify-between">
                  <span><strong>18–20 ANOS (PRX BANK):</strong> Conta, cartão black e cashback</span>
                  <span className="text-[10px] font-mono text-[#0BD9FD]">FINTECH</span>
                </div>
                <div className="p-2.5 bg-white border border-slate-300 rounded-xs flex items-center justify-between">
                  <span><strong>20–24 ANOS (PRX FOUNDERS):</strong> Startups, networking e carreira</span>
                  <span className="text-[10px] font-mono text-slate-900">CARREIRA</span>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs sm:text-sm text-slate-700 italic">
              &quot;E o cliente continua permanentemente dentro do ecossistema.&quot;
            </p>
          </div>
        </div>
      )}

      {/* Tab 3: Cartão e Passaporte */}
      {activeTab === "cartao" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-3/4 rounded-xs overflow-hidden border border-slate-400 shadow-md">
              <Image
                src="/pdf-images/p33_0_X5.png"
                alt="Forma PRX Card"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-black text-slate-900 uppercase tracking-wider">
                9. O CARTÃO MAIS DESEJADO PELO JOVEM
              </span>
              <h3 className="mt-2 text-2xl font-black text-slate-950 tracking-tight">
                FORMA PRX CARD: Status + Acesso
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                O cartão não é vendido como um produto bancário frio. É vendido como a chave mestra para o universo jovem:
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-slate-900">
                <span className="p-2 bg-white border border-slate-300 rounded-xs">⭐ VIP em eventos</span>
                <span className="p-2 bg-white border border-slate-300 rounded-xs">💸 Cashback em festas</span>
                <span className="p-2 bg-white border border-slate-300 rounded-xs">✈ Benefícios em viagens</span>
                <span className="p-2 bg-white border border-slate-300 rounded-xs">🎤 Acesso a artistas</span>
              </div>

              <div className="mt-6 p-4 bg-slate-950 text-white rounded-xs">
                <p className="text-xs font-mono text-[#0BD9FD] uppercase font-bold">
                  Definição do Produto:
                </p>
                <p className="text-sm sm:text-base font-black mt-1">
                  A parte financeira é o motor. A experiência é o desejo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: PRX Fest */}
      {activeTab === "fest" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-3/4 rounded-xs overflow-hidden border border-slate-400 shadow-md">
              <Image
                src="/pdf-images/p35_0_X5.png"
                alt="PRX Fest - O Maior Festival da Geração Z"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-black text-slate-900 uppercase tracking-wider">
                11. FORMA PRX FESTIVAL
              </span>
              <h3 className="mt-2 text-2xl font-black text-slate-950 tracking-tight">
                PRX FEST: O Maior Festival Anual da Geração Z no Brasil.
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                Música. Esporte. Tecnologia. Gaming. Startups. Investimentos. Moda. Conteúdo. Saúde. Experiências. Artistas. Criadores e Marcas Globais.
              </p>

              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                A Forma já possui anos de excelência na produção e segurança de megaeventos para a juventude. O PRX Fest consagra a parceria em um megaencontro cultural anual.
              </p>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xs text-xs sm:text-sm text-amber-950 font-bold">
                Conexão estratégica entre Grandes Marcas e a Geração Z com autoridade e consentimento LGPD.
              </div>
            </div>
          </div>
        </div>
      )}
    </PdfSlideFrame>
  );
}
