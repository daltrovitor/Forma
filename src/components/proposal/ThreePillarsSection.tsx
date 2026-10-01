// Hello World
"use client";

import Image from "next/image";
import { MessageSquare, Compass, ShieldAlert, Sparkles, User, Globe, CheckCircle2 } from "lucide-react";

export function ThreePillarsSection() {
  return (
    <section id="parceria" className="py-16 sm:py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7607FD]">
            01. A Parceria Estratégica
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Três forças com o mesmo propósito: conectar, inspirar e criar experiências.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Juntos, criamos uma parceria capaz de transformar conteúdo em experiência — e experiência em histórias que os jovens vão querer viver, compartilhar e lembrar para sempre.
          </p>
        </div>

        {/* The 3 Columns Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Rafael Molina */}
          <div className="flex flex-col p-6 sm:p-8 bg-[#fafafa] border border-slate-200 rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm">
              01
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                Rafael Molina
              </h3>
              <p className="text-xs font-mono text-[#7607FD] font-semibold mt-1">
                Comunicação & Influência Geração Z
              </p>
            </div>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Comunicador, apresentador e um dos nomes que mais entende a linguagem e o comportamento da nova geração. Com uma trajetória construída próxima aos jovens, transforma experiências, histórias e tendências em conteúdos que geram identificação, conversa e conexão real.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7607FD] shrink-0" />
                <span>Apresentador oficial de &quot;Forma Sem Filtro&quot;</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7607FD] shrink-0" />
                <span>Autoridade e diálogo com famílias e estudantes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7607FD] shrink-0" />
                <span>Criação de desejo orgânico (FOMO sem forçar venda)</span>
              </li>
            </ul>

            <div className="mt-auto pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Instagram:</span>
              <strong className="text-slate-900 font-semibold">@rafaelmolina.prx</strong>
            </div>
          </div>

          {/* Pillar 2: FORMA */}
          <div className="flex flex-col p-6 sm:p-8 bg-[#fafafa] border border-slate-200 rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-amber-500 text-white flex items-center justify-center font-mono font-bold text-sm">
              02
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                FORMA
              </h3>
              <p className="text-xs font-mono text-amber-600 font-semibold mt-1">
                Viagens, Tradição & Escolas Premium
              </p>
            </div>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              A FORMA transforma viagens de formatura em experiências que ficam para a vida. Mais do que viajar, é criar memórias, amizades e histórias que os jovens vão levar para sempre. Conecta os maiores destinos, entretenimento, coordenações de colégios e momentos de altíssimo pico emocional.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Liderança incontestável em viagens de formatura</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Distribuição profunda em colégios particulares de elite</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Pico de afeto: &quot;A viagem da minha vida&quot;</span>
              </li>
            </ul>

            <div className="mt-auto pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Território:</span>
              <strong className="text-slate-900 font-semibold">Porto Seguro • Floripa</strong>
            </div>
          </div>

          {/* Pillar 3: PRX */}
          <div className="flex flex-col p-6 sm:p-8 bg-[#fafafa] border border-slate-200 rounded-sm">
            <div className="w-12 h-12 rounded-sm bg-[#7607FD] text-white flex items-center justify-center font-mono font-bold text-sm">
              03
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                PRX
              </h3>
              <p className="text-xs font-mono text-[#7607FD] font-semibold mt-1">
                Tecnologia, Fintech & Ecossistema Digital
              </p>
            </div>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              O ecossistema digital da nova geração: um hub moderno que conecta benefícios, experiências, tecnologia, banking e educação financeira. Uma plataforma criada para transformar bons comportamentos em recompensas e estender o relacionamento do jovem durante 10 anos da sua vida.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0BD9FD] shrink-0" />
                <span>App móvel nativo com Passaporte Digital e Badges</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0BD9FD] shrink-0" />
                <span>Forma PRX Card com cashback, status e acesso VIP</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0BD9FD] shrink-0" />
                <span>Educação financeira, investimentos e networking</span>
              </li>
            </ul>

            <div className="mt-auto pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Slogan:</span>
              <strong className="text-slate-900 font-semibold">The Next Place is PRX</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
