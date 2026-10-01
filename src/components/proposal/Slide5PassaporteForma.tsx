// Hello World
"use client";

import Image from "next/image";
import { PdfSlideFrame } from "./PdfSlideFrame";

export function Slide5PassaporteForma() {
  return (
    <PdfSlideFrame id="passaporte-forma">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="md:col-span-7 flex flex-col order-2 md:order-1">
          
          <div className="relative inline-block self-start pb-1">
            <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-900">
              VÍDEOS
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 rounded-full" />
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            “O PASSAPORTE FORMA”
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            Criaremos um passaporte digital. Cada participante começará com <strong>0 experiências</strong>. Ao longo da temporada, pode conquistar:
          </p>

          <div className="mt-4 p-4 bg-white/80 border border-slate-300 rounded-xs space-y-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-2xs">
            <div className="flex items-center gap-2">
              <span>🎫</span>
              <span>acesso VIP</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎧</span>
              <span>DJ por 1 dia</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎤</span>
              <span>repórter auxiliar de Rafael Molina</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎟</span>
              <span>camarim</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌴</span>
              <span>experiência exclusiva em Floripa</span>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            E os episódios vão desbloqueando essas experiências. Isso transforma a campanha inteira em <strong>game</strong>.
          </p>

          <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            E, principalmente, cria uma razão para o jovem continuar acompanhando <strong>toda semana</strong>, mesmo antes da viagem.
          </p>

        </div>

        {/* Right Column: Real PDF Image p5_0_X4.png */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-3/4 rounded-xs overflow-hidden border border-slate-400 shadow-md">
            <Image
              src="/pdf-images/p5_0_X4.png"
              alt="Passaporte Digital e Experiências"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
