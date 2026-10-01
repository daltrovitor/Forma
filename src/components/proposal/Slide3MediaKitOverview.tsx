// Hello World
"use client";

import Image from "next/image";
import { PdfSlideFrame } from "./PdfSlideFrame";

export function Slide3MediaKitOverview() {
  return (
    <PdfSlideFrame id="visao-geral">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        
        {/* Column 1: Rafael Molina */}
        <div className="flex flex-col">
          {/* Black Logo Container */}
          <div className="w-full h-24 sm:h-28 bg-[#0B0B10] rounded-sm flex items-center justify-center p-4 border border-slate-900 shadow-xs">
            <Image
              src="/brand/rafa-molina-white.png"
              alt="Rafa Molina Logo"
              width={160}
              height={70}
              className="max-h-full w-auto object-contain filter drop-shadow-sm"
            />
          </div>

          {/* Heading with Underline */}
          <div className="mt-5 relative inline-block self-start pb-2">
            <h2 className="text-xl font-black text-slate-950 tracking-tight">
              Rafael Molina
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-amber-400 to-[#7607FD] rounded-full" />
          </div>

          <div className="mt-4 text-xs sm:text-sm text-slate-800">
            <strong className="block font-black text-slate-950 uppercase tracking-wider mb-2 font-mono text-xs">
              VÍDEOS
            </strong>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-[#7607FD] font-bold">•</span>
                <span>
                  <strong>14 vídeos pré-viagem</strong> (de setembro a dezembro, 1 por semana)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7607FD] font-bold">•</span>
                <span>
                  <strong>14 vídeos da viagem</strong> gravados em tempo real em Porto Seguro
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2: PRX - APP */}
        <div className="flex flex-col">
          {/* Black Logo Container */}
          <div className="w-full h-24 sm:h-28 bg-[#0B0B10] rounded-sm flex items-center justify-center p-4 border border-slate-900 shadow-xs">
            <Image
              src="/brand/prx-compact-on-light.svg"
              alt="PRX Logo"
              width={180}
              height={70}
              className="max-h-full w-auto object-contain filter invert drop-shadow-sm"
            />
          </div>

          {/* Heading with Underline */}
          <div className="mt-5 relative inline-block self-start pb-2">
            <h2 className="text-xl font-black text-slate-950 tracking-tight">
              PRX - APP
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-amber-400 to-orange-500 rounded-full" />
          </div>

          <div className="mt-4 text-xs sm:text-sm text-slate-800">
            <strong className="block font-black text-slate-950 uppercase tracking-wider mb-2 font-mono text-xs">
              APLICATIVO
            </strong>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-[#0BD9FD] font-bold">•</span>
                <span>
                  Benefícios exclusivos para quem comprar o pacote de viagens através do app.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0BD9FD] font-bold">•</span>
                <span>
                  Venda de benefícios exclusivos para a viagem diretamente pelo aplicativo.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: PRX - EVENTOS */}
        <div className="flex flex-col">
          {/* Black Logo Container */}
          <div className="w-full h-24 sm:h-28 bg-[#0B0B10] rounded-sm flex items-center justify-center p-4 border border-slate-900 shadow-xs">
            <Image
              src="/brand/prx-compact-on-light.svg"
              alt="PRX Logo Eventos"
              width={180}
              height={70}
              className="max-h-full w-auto object-contain filter invert drop-shadow-sm"
            />
          </div>

          {/* Heading with Underline */}
          <div className="mt-5 relative inline-block self-start pb-2">
            <h2 className="text-xl font-black text-slate-950 tracking-tight">
              PRX - EVENTOS
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#7607FD] to-[#0BD9FD] rounded-full" />
          </div>

          <div className="mt-4 text-xs sm:text-sm text-slate-800">
            <strong className="block font-black text-slate-950 uppercase tracking-wider mb-2 font-mono text-xs">
              EVENTOS
            </strong>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-[#7607FD] font-bold">•</span>
                <span>
                  <strong>Festa de Lançamento do app.</strong> Público estimado: 400 jovens
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7607FD] font-bold">•</span>
                <span>
                  <strong>PRX UP (Coffee Party).</strong> Wake Park. Público: 300 jovens
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7607FD] font-bold">•</span>
                <span>
                  <strong>PRX RUN – Corrida de rua.</strong> Público estimado: 500 jovens
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7607FD] font-bold">•</span>
                <span>
                  <strong>PRX Founders –</strong> Jovens investidores. Público: 50 jovens
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
