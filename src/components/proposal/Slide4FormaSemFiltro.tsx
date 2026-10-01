// Hello World
"use client";

import Image from "next/image";
import { PdfSlideFrame } from "./PdfSlideFrame";

export function Slide4FormaSemFiltro() {
  return (
    <PdfSlideFrame id="forma-sem-filtro">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Column: Real PDF Image p4_0_X4.png */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-3/4 rounded-xs overflow-hidden border border-slate-400 shadow-md">
            <Image
              src="/pdf-images/p4_0_X4.png"
              alt="Forma Sem Filtro - Preparação dos Jovens"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>

        {/* Right Column: Slide Text */}
        <div className="md:col-span-7 flex flex-col">
          
          <div className="relative inline-block self-start pb-1">
            <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-900">
              VÍDEOS
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 rounded-full" />
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            FORMA SEM FILTRO
          </h2>

          <p className="mt-2 text-sm sm:text-base font-semibold text-slate-800">
            O que acontece antes, durante e depois da viagem.
          </p>

          <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong>Episódios pré-viagem:</strong> A ideia é criar uma temporada semanal de vídeos que transforme a preparação da viagem em uma espécie de <em>reality show + game + documentário jovem</em>.
          </p>

          <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            Eu serei o apresentador. Mas os verdadeiros protagonistas serão os jovens.
          </p>

          <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            Cada episódio revela uma nova história, um novo personagem, um novo desafio ou uma nova oportunidade de conquistar algo que não está à venda.
          </p>

          {/* Key Principle Box */}
          <div className="mt-6 p-4 bg-slate-950 text-white rounded-xs border border-slate-900">
            <p className="text-xs font-mono tracking-wider text-[#0BD9FD] uppercase font-bold">
              E isso é importante:
            </p>
            <p className="text-base sm:text-lg font-black mt-1">
              Não vender a viagem.
            </p>
            <p className="text-base sm:text-lg font-black text-[#E11D74]">
              Criar desejo pela viagem.
            </p>
          </div>

        </div>

      </div>
    </PdfSlideFrame>
  );
}
