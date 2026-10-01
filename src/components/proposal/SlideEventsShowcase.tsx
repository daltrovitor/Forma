// Hello World
"use client";

import { useState } from "react";
import Image from "next/image";
import { PdfSlideFrame } from "./PdfSlideFrame";
import { Sparkles, SunMedium, Activity, Briefcase } from "lucide-react";

interface EventItem {
  id: string;
  name: string;
  badge: string;
  audience: string;
  location: string;
  img: string;
  desc: string[];
}

const EVENTS: EventItem[] = [
  {
    id: "lancamento",
    name: "Festa de Lançamento do App",
    badge: "EVENTOS PRX",
    audience: "Público estimado: 400 jovens",
    location: "Casa noturna premium (Goiânia)",
    img: "/pdf-images/p20_0_X6.png",
    desc: [
      "O evento que marca oficialmente a chegada da PRX.",
      "Realizado em uma das casas noturnas mais desejadas do público jovem, reunirá influenciadores, alunos de escolas parceiras, empreendedores e jovens que representam a nova geração em Goiânia.",
      "A noite será marcada por música, experiências interativas, ativações da marca e o primeiro contato do público com o aplicativo, criando um lançamento com forte potencial de repercussão nas redes sociais.",
    ],
  },
  {
    id: "prx-up",
    name: "PRX UP (Coffee Party)",
    badge: "EVENTOS PRX",
    audience: "Público estimado: 300 jovens",
    location: "Local: Wake Park ao ar livre",
    img: "/pdf-images/p21_0_X6.png",
    desc: [
      "Inspirado na tendência mundial das Coffee Parties, o PRX UP transforma o amanhecer em um novo momento de encontro da Geração Z.",
      "Em vez da balada tradicional, o evento combina café da manhã, DJs, esportes, bem-estar e convivência em um ambiente ao ar livre.",
      "A proposta é criar uma experiência leve, saudável e altamente compartilhável, conectando música, lifestyle e comunidade.",
    ],
  },
  {
    id: "prx-run",
    name: "PRX RUN – Corrida de Rua",
    badge: "EVENTOS PRX",
    audience: "Público estimado: 500 jovens",
    location: "Circuito urbano contemporâneo",
    img: "/pdf-images/p22_0_X6.png",
    desc: [
      "Mais do que uma corrida de rua, o PRX RUN é uma experiência criada especialmente para a Geração Z.",
      "O evento une esporte, música, desafios e conteúdo, com uma identidade visual contemporânea e forte presença digital.",
      "A corrida reforça um dos pilares da PRX: incentivar hábitos positivos e transformar boas escolhas em experiências e conexões.",
    ],
  },
  {
    id: "founders",
    name: "PRX FOUNDERS",
    badge: "EVENTOS PRX",
    audience: "Público estimado: 50 jovens",
    location: "Ambiente executivo & intimista",
    img: "/pdf-images/p23_0_X6.png",
    desc: [
      "Um encontro exclusivo para jovens investidores, empreendedores e futuros fundadores de startups.",
      "Em um ambiente mais intimista, o PRX FOUNDERS promove conversas sobre negócios, tecnologia, investimentos e construção de carreira, aproximando jovens que desejam criar empresas e participar do futuro da inovação.",
      "O objetivo é formar uma comunidade de pessoas que não querem apenas consumir o futuro, mas ajudar a construí-lo.",
    ],
  },
];

export function SlideEventsShowcase() {
  const [selectedEvent, setSelectedEvent] = useState(0);

  const ev = EVENTS[selectedEvent];

  return (
    <PdfSlideFrame id="eventos">
      <div className="pb-4 border-b border-slate-300/80 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-black uppercase tracking-wider text-[#7607FD]">
            EVENTOS PRX
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mt-1">
            Pontos de encontro presenciais que fortalecem a comunidade.
          </h2>
        </div>

        {/* Event Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {EVENTS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedEvent(idx)}
              className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs cursor-pointer border transition-colors shrink-0 ${
                idx === selectedEvent
                  ? "bg-slate-950 text-white border-slate-950"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }`}
            >
              {item.name.split(" ")[0]} {item.name.split(" ")[1] || ""}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Slide */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Column: Real PDF Event Image */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-3/4 rounded-xs overflow-hidden border border-slate-400 shadow-md">
            <Image
              src={ev.img}
              alt={ev.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>

        {/* Right Column: Event Specifications */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono font-black text-[#7607FD] uppercase tracking-wider">
                {ev.badge}
              </span>
              <span className="text-xs font-mono font-bold px-2.5 py-1 bg-white border border-slate-300 rounded-xs text-slate-900 shadow-2xs">
                {ev.audience}
              </span>
            </div>

            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              {ev.name}
            </h3>

            <p className="mt-1 text-xs font-mono font-semibold text-slate-500">
              {ev.location}
            </p>

            <div className="mt-5 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {ev.desc.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 p-3.5 bg-slate-950 text-white rounded-xs flex items-center justify-between text-xs font-mono">
            <span>Comunidade Viva da Marca</span>
            <strong className="text-[#0BD9FD] font-bold">PRX Ecosystem</strong>
          </div>
        </div>

      </div>
    </PdfSlideFrame>
  );
}
