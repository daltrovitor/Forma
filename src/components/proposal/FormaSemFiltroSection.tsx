// Hello World
"use client";

import { useState } from "react";
import { Video, Award, Radio, Users, CheckCircle, ChevronRight, PlayCircle } from "lucide-react";

interface Episode {
  ep: string;
  title: string;
  theme: string;
  summary: string;
  mission: string;
}

const EPISODES: Episode[] = [
  {
    ep: "EP. 01",
    title: "Você está pronto pra Porto?",
    theme: "Teste de Prontidão & Personagens",
    summary: "Chegada surpresa na escola colocando os alunos diante de um interrogatório rápido: 'Quantas horas vai dormir?', 'Quem vai perder o celular?', 'Quem volta namorando?'.",
    mission: "Missão Final: 30 segundos para vender sua viagem e escolher qual experiência VIP disputar.",
  },
  {
    ep: "EP. 02",
    title: "Pai, deixa eu ir",
    theme: "Choque Geracional & Confiança",
    summary: "Pais e filhos frente a frente: 'Meu pai confia em mim... Então por que ele está olhando assim?'. Situações reais e divertidas sobre horários e mesada extra.",
    mission: "Final: Aposta entre pai e filho valendo vantagem direta na conquista de experiências.",
  },
  {
    ep: "EP. 03",
    title: "Meu namorado não vai",
    theme: "Relacionamentos & Teste da Placa",
    summary: "Um episódio inteiro sobre os casais que não viajarão juntos. Placas levantadas em simultâneo: 'TRANQUILO' ou 'TEMOS UM PROBLEMA'.",
    mission: "Missão: 5 perguntas profundas sobre o outro. Quem acertar mais pontua no ranking.",
  },
  {
    ep: "EP. 04",
    title: "A Mala",
    theme: "Interrogatório Estético",
    summary: "'Você vai para Porto ou para uma mudança definitiva?'. O aluno abre a mala e o grupo vota: ESSENCIAL ou DESNECESSÁRIO.",
    mission: "Desafio da Mala: 60 segundos para selecionar os itens certos com julgamento da galera.",
  },
  {
    ep: "EP. 05",
    title: "Você conhece o artista?",
    theme: "Game Musical & Atração",
    summary: "Tocar 3 segundos de músicas das atrações confirmadas da Forma. Depois 5 segundos, depois apenas o beat introdutório.",
    mission: "Final Boss: 30 segundos para provar que merece a pulseira de acesso ao camarim.",
  },
  {
    ep: "EP. 06",
    title: "Quem é o mais provável?",
    theme: "Julgamento entre Amigos",
    summary: "Roda de amigos apontando para quem é o mais provável de: perder o voo, dormir na festa, beijar primeiro ou virar meme.",
    mission: "Missão: O mais votado precisa defender sua honra e provar que todos estão errados.",
  },
  {
    ep: "EP. 07",
    title: "Promoter: você é bom mesmo?",
    theme: "Desafio de Vendas sem Preconceito",
    summary: "Transformando o promoter em entretenimento puro. 'Convença um aluno sem falar a palavra viagem', 'Venda Porto para quem odeia praia'.",
    mission: "Ranking de Carisma, Criatividade e Caos valendo pontuação bônus.",
  },
  {
    ep: "EP. 08",
    title: "O que você não contaria pra sua mãe",
    theme: "Formato Envelopes & Segredos",
    summary: "Cartas secretas: RESPONDE ou PASSA pagando prenda divertida em frente aos amigos da escola, mantendo o bom humor sem humilhações.",
    mission: "Recompensa: Coragem desbloqueia segunda chance de disputar a experiência VIP.",
  },
  {
    ep: "EP. 09",
    title: "Quem vai sobreviver à viagem?",
    theme: "Videogame Reality",
    summary: "Narrações no estilo Level 1, Level 2 e Boss Fight diante de emergências cômicas: 'Celular morreu', 'Amigo sumiu', 'Ex na mesma pista'.",
    mission: "Cálculo do Índice de Sobrevivência Forma com destaque para os melhores raciocínios.",
  },
  {
    ep: "EP. 10",
    title: "Você sabe o que está te esperando?",
    theme: "Forma Fact ou Forma Fake",
    summary: "Apresentação de segredos e mitos de Porto Seguro. Os estudantes precisam identificar o que é tradição real e o que é lenda.",
    mission: "Escolha definitiva: a experiência que cada um faria qualquer coisa para viver.",
  },
  {
    ep: "EP. 11",
    title: "O Último Teste",
    theme: "O Selo Misterioso",
    summary: "Abordagem com papel lacrado entregando o veredito das disputas. A reação é captada pela câmera, mas o conteúdo é mantido em sigilo.",
    mission: "Revelação de que todos foram qualificados para a rodada de celebração coletiva.",
  },
  {
    ep: "EP. 12",
    title: "Unlocked: A Conexão Nacional",
    theme: "Season Finale Pré-Viagem",
    summary: "Cada participante recebe o Selo Forma + 2 selos extras obrigatoriamente destinados a estudantes de outras cidades do Brasil.",
    mission: "Conexão cultural: transformar os vencedores em anfitriões de outros jovens em Porto.",
  },
];

export function FormaSemFiltroSection() {
  const [selectedEp, setSelectedEp] = useState<number>(0);

  const activeEp = EPISODES[selectedEp];

  return (
    <section id="forma-sem-filtro" className="py-16 sm:py-24 border-b border-slate-100 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7607FD]">
            02. Estratégia de Conteúdo & Vídeos
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Forma Sem Filtro: Não vender a viagem. Criar desejo incontrolável pela viagem.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Uma temporada semanal de 14 vídeos (setembro a dezembro) transformando a preparação em um reality show jovem + game + documentário, seguida por cobertura cinematográfica em tempo real em Porto Seguro.
          </p>
        </div>

        {/* Passaporte Forma Interactive Badge */}
        <div className="mt-10 p-6 sm:p-8 bg-white border border-slate-200 rounded-sm shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7607FD] uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>O Passaporte Forma (Gamificação Real)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                Transformando a campanha inteira em um game com recompensas inegociáveis.
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                Cada participante começa com 0 experiências no aplicativo PRX. Ao longo dos episódios, desbloqueia acessos que o dinheiro não compra:
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-800">
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-sm">🎫 Acesso VIP</span>
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-sm">🎧 DJ por 1 Dia</span>
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-sm">🎤 Repórter de Rafael Molina</span>
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-sm">🎟 Camarim com Artista</span>
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-sm">🌴 Experiência em Floripa</span>
            </div>
          </div>
        </div>

        {/* Episodes Explorer Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Episode List (Left Column, F-Pattern Navigation) */}
          <div className="lg:col-span-5 flex flex-col space-y-2 max-h-[560px] overflow-y-auto pr-1">
            {EPISODES.map((item, index) => {
              const isSelected = index === selectedEp;
              return (
                <button
                  key={item.ep}
                  type="button"
                  onClick={() => setSelectedEp(index)}
                  className={`flex items-center justify-between p-3.5 text-left rounded-sm border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-xs ${
                        isSelected ? "bg-[#7607FD] text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.ep}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold truncate max-w-[240px]">
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-[#0BD9FD] translate-x-0.5" : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Episode Detail Card (Right Column) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-slate-200 rounded-sm shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-[#7607FD] uppercase tracking-wider">
                  {activeEp.ep} • Temporada Oficial
                </span>
                <span className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-sm">
                  {activeEp.theme}
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-black text-slate-950 mt-4 tracking-tight">
                {activeEp.title}
              </h4>

              <div className="mt-6 space-y-4">
                <div>
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Sinopse & Dinâmica do Episódio
                  </h5>
                  <p className="text-sm sm:text-base text-slate-700 mt-1.5 leading-relaxed">
                    {activeEp.summary}
                  </p>
                </div>

                <div className="p-4 bg-purple-50/70 border border-purple-100 rounded-sm">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7607FD]">
                    Missão & Desafio dos Jovens
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-800 mt-1 font-medium">
                    {activeEp.mission}
                  </p>
                </div>
              </div>
            </div>

            {/* Estética & Porto Real Time Callout */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-red-500 animate-none" />
                <span>Cobertura Real-Time durante toda a viagem</span>
              </div>
              <span className="font-semibold text-slate-800">
                Linguagem rápida, street & reality
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
