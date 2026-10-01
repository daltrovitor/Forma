// Hello World
"use client";

import { Calendar, Users, MapPin, Sparkles, SunMedium, Activity, Briefcase } from "lucide-react";

export function PrxEventsSection() {
  const events = [
    {
      id: "lancamento",
      title: "Festa de Lançamento do App",
      audience: "400 Jovens",
      location: "Casa noturna premium (Goiânia)",
      icon: Sparkles,
      tag: "Noturno & Influência",
      desc: "O evento que marca oficialmente a chegada da PRX. Reunirá influenciadores, alunos de escolas parceiras, empreendedores e formadores de opinião da Geração Z. Música, ativações imersivas da marca e primeiro contato com os benefícios do app.",
    },
    {
      id: "prx-up",
      title: "PRX UP • Coffee Party",
      audience: "300 Jovens",
      location: "Wake Park ao ar livre",
      icon: SunMedium,
      tag: "Lifestyle & Esporte",
      desc: "Inspirado na tendência mundial das Coffee Parties, transforma o amanhecer em um novo ponto de encontro saudável: café da manhã especial, DJs, wakeboard, bem-estar e convivência ao ar livre. Leve, esportivo e altamente compartilhável.",
    },
    {
      id: "prx-run",
      title: "PRX RUN • Corrida de Rua Z",
      audience: "500 Jovens",
      location: "Circuito urbano moderno",
      icon: Activity,
      tag: "Saúde & Atitude",
      desc: "Muito mais que uma corrida: uma experiência urbana para a juventude com música, desafios e identidade visual contemporânea. Reforça o pilar de incentivar hábitos positivos e converter boas escolhas em recompensas e status no app.",
    },
    {
      id: "prx-founders",
      title: "PRX Founders",
      audience: "50 Jovens Investidores",
      location: "Ambiente intimista & corporativo",
      icon: Briefcase,
      tag: "Business & Startups",
      desc: "Encontro exclusivo para jovens empreendedores e investidores. Debates sobre negócios, inteligência artificial, mercado financeiro e construção de carreira, aproximando quem deseja construir o futuro e liderar novos negócios.",
    },
  ];

  return (
    <section id="eventos" className="py-16 sm:py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7607FD]">
            03. Experiências Presenciais
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Eventos PRX: Comunidade viva além das telas do smartphone.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A PRX não é apenas um código de software. É um ecossistema que ganha vida através de encontros presenciais, criando rituais que fortalecem a fidelidade e o pertencimento da marca.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((ev) => {
            const Icon = ev.icon;
            return (
              <div
                key={ev.id}
                className="flex flex-col p-6 sm:p-8 bg-[#fafafa] border border-slate-200 rounded-sm hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0BD9FD]" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-[#7607FD] uppercase">
                        {ev.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                        {ev.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-mono font-bold text-slate-900 rounded-xs shadow-2xs">
                    {ev.audience}
                  </span>
                </div>

                <p className="mt-5 text-sm text-slate-600 leading-relaxed">
                  {ev.desc}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-2 text-xs font-mono text-slate-500">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{ev.location}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
