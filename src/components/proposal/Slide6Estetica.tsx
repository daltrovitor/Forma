// Hello World
"use client";

import Image from "next/image";
import { PdfSlideFrame } from "./PdfSlideFrame";

export function Slide6Estetica() {
  return (
    <PdfSlideFrame id="estetica">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Column: Real PDF Image p6_0_X4.png */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-3/4 rounded-xs overflow-hidden border border-slate-400 shadow-md">
            <Image
              src="/pdf-images/p6_0_X4.png"
              alt="Rafael Molina no Palco - A Estética"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="md:col-span-7 flex flex-col">
          
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            A Forma deixa de ser apenas a empresa que leva o jovem para Floripa. A Forma passa a ser o universo onde coisas incríveis começam a acontecer antes mesmo de ele embarcar. E esse território — <em>status, acesso, experiências que não se compram, personagens reais e expectativa</em> — combina demais com o público de escolas premium.
          </p>

          <div className="mt-5 p-3.5 bg-slate-900 text-white rounded-xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0BD9FD]">
              A ESTÉTICA:
            </h3>
            <p className="text-sm sm:text-base font-black tracking-tight mt-0.5">
              luxo jovem + backstage + reality + street + nightlife.
            </p>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            Câmera muito próxima. Cortes rápidos. Textos na tela. Cronômetros. Placar. Sons de game. Música forte. Microfone entrando no quadro. Zooms propositalmente absurdos. Silêncios antes da resposta. Reações.
          </p>

          <p className="mt-3 text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
            Eu entrarei no centro como: <em>o cara que sabe onde está o caos</em>. Não como apresentador de excursão.
          </p>

          {/* Golden Goal Box */}
          <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-xs">
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              O objetivo não é mostrar para os jovens que a Forma existe. <strong>É fazer o jovem que ainda não está na Forma sentir que está perdendo alguma coisa.</strong>
            </p>
          </div>

        </div>

      </div>
    </PdfSlideFrame>
  );
}
