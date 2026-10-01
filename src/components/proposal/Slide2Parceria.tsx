// Hello World
"use client";

import { PdfSlideFrame } from "./PdfSlideFrame";

export function Slide2Parceria() {
  return (
    <PdfSlideFrame id="parceria">
      {/* 3 Main Columns with Underline Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        
        {/* Column 1: Rafael Molina */}
        <div className="flex flex-col">
          <div className="relative inline-block self-start pb-2">
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
              Rafael Molina
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-amber-400 via-purple-500 to-[#7607FD] rounded-full" />
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            Rafael Molina é comunicador, criador de conteúdo e um dos nomes que mais entende a linguagem e o comportamento da nova geração. Com uma trajetória construída próxima aos jovens, Rafael transforma experiências, histórias e tendências em conteúdos que geram identificação, conversa e conexão real.
          </p>
        </div>

        {/* Column 2: FORMA */}
        <div className="flex flex-col">
          <div className="relative inline-block self-start pb-2">
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
              FORMA
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-amber-400 to-orange-500 rounded-full" />
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            A FORMA transforma viagens de formatura em experiências que ficam para a vida. Mais do que viajar, é criar memórias, amizades e histórias que os jovens vão levar para sempre. Com uma experiência voltada para a Geração Z, a FORMA conecta destinos, entretenimento e momentos inesquecíveis.
          </p>
        </div>

        {/* Column 3: PRX */}
        <div className="flex flex-col">
          <div className="relative inline-block self-start pb-2">
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
              PRX
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#7607FD] to-[#0BD9FD] rounded-full" />
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            A PRX nasce para ser o ecossistema da nova geração: um hub que conecta benefícios, experiências, conteúdo, tecnologia e educação financeira. Uma plataforma criada para transformar bons comportamentos em recompensas e aproximar os jovens de um futuro com mais possibilidades.
          </p>
        </div>

      </div>

      {/* Synthesis Row at the Bottom */}
      <div className="mt-10 sm:mt-14 pt-8 border-t border-slate-300/80 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="shrink-0 px-4 py-2 bg-slate-950 text-white rounded-xs">
          <span className="font-mono font-black text-sm tracking-wider uppercase">
            A PARCERIA
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
          Três forças com o mesmo propósito: conectar, inspirar e criar experiências que façam parte da vida da nova geração. Rafael Molina traz comunicação e influência; a FORMA, experiências e viagens; e a PRX, tecnologia, benefícios e um novo jeito de se relacionar com o futuro. Juntos, eles criam uma parceria capaz de transformar conteúdo em experiência — e experiência em histórias que os jovens vão querer viver, compartilhar e lembrar.
        </p>
      </div>
    </PdfSlideFrame>
  );
}
