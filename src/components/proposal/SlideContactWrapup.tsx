// Hello World
"use client";

import Image from "next/image";
import { PdfSlideFrame } from "./PdfSlideFrame";
import { Phone, Mail, ExternalLink } from "lucide-react";

export function SlideContactWrapup() {
  return (
    <PdfSlideFrame id="contato">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Column: Official Contact Photo of Rafael Molina (p42_0_X4.png) */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square rounded-xs overflow-hidden border border-slate-400 shadow-md">
            <Image
              src="/pdf-images/p42_0_X4.png"
              alt="Rafael Molina - Contato Oficial"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>

        {/* Right Column: Synthesis & Direct Contacts */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="relative inline-block self-start pb-1">
              <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-900">
                CONCLUSÃO & CONTATO
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E11D74] rounded-full" />
            </div>

            <h3 className="mt-2 text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              FORMA × PRX: A Empresa da Juventude
            </h3>

            <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              A proposta nasce de uma ideia simples: <strong>A maior empresa jovem do Brasil não será apenas aquela que cria experiências. Será aquela que fizer parte da vida dessa geração.</strong>
            </p>

            <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              A FORMA já domina o território das viagens, experiências e memórias. A PRX amplia essa jornada com benefícios, finanças, investimentos, eventos, empreendedorismo, saúde e novas oportunidades.
            </p>

            {/* Core Quote Box */}
            <div className="mt-5 p-4 bg-slate-950 text-white rounded-xs border border-slate-900">
              <p className="text-xs sm:text-sm font-semibold italic text-slate-200">
                &quot;Porque uma viagem termina. A relação com uma geração, não.&quot;
              </p>
            </div>
          </div>

          {/* Contact Direct Links */}
          <div className="mt-6 pt-5 border-t border-slate-300/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <a
              href="https://wa.me/5511989609797"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 bg-white border border-slate-300 rounded-xs hover:border-slate-500 transition-colors shadow-2xs group"
            >
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] font-mono text-slate-500 block">WhatsApp:</span>
                <strong className="text-slate-900 font-bold">(11) 98960-9797</strong>
              </div>
            </a>

            <a
              href="mailto:contato@rafaelmolina.com.br"
              className="flex items-center gap-2 p-2.5 bg-white border border-slate-300 rounded-xs hover:border-slate-500 transition-colors shadow-2xs group"
            >
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] font-mono text-slate-500 block">E-mail:</span>
                <strong className="text-slate-900 font-bold truncate block">contato@rafaelmolina.com.br</strong>
              </div>
            </a>

            <a
              href="https://instagram.com/rafaelmolina.prx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 bg-white border border-slate-300 rounded-xs hover:border-slate-500 transition-colors shadow-2xs group"
            >
              <div className="w-4 h-4 text-[#7607FD] shrink-0 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="truncate">
                <span className="text-[10px] font-mono text-slate-500 block">Instagram:</span>
                <strong className="text-slate-900 font-bold">@rafaelmolina.prx</strong>
              </div>
            </a>

            <a
              href="https://youtube.com/@rafaelmolinasa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 bg-white border border-slate-300 rounded-xs hover:border-slate-500 transition-colors shadow-2xs group"
            >
              <div className="w-4 h-4 text-red-600 shrink-0 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="truncate">
                <span className="text-[10px] font-mono text-slate-500 block">YouTube:</span>
                <strong className="text-slate-900 font-bold">@rafaelmolinasa</strong>
              </div>
            </a>
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
