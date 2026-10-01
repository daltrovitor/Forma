// Hello World
"use client";

import { useState } from "react";
import { Clock, TrendingUp, Layers, Check, ArrowRight } from "lucide-react";

interface LifecycleStage {
  age: string;
  brand: string;
  title: string;
  focus: string;
  products: string[];
  thesis: string;
}

const STAGES: LifecycleStage[] = [
  {
    age: "14 ANOS",
    brand: "PRX",
    title: "A Descoberta & O Clube",
    focus: "Pertencimento, Conteúdo & Primeiros Benefícios",
    products: ["Clube de Vantagens", "Conteúdo Exclusivo", "Eventos Jovens", "Comunidade Digital"],
    thesis: "O jovem entra no ecossistema ainda no ensino fundamental através de amigos, eventos culturais e benefícios imediatos.",
  },
  {
    age: "15–16 ANOS",
    brand: "PRX + FORMA",
    title: "O Desejo & A Preparação",
    focus: "Promoter, Gamificação & Expectativa",
    products: ["Rede de Promoters", "Pontos PRX", "Pré-Eventos", "Forma Sem Filtro"],
    thesis: "A expectativa da formatura começa a ser construída. O jovem atua como promoter ou embaixador acumulando selos e pontos.",
  },
  {
    age: "17–18 ANOS",
    brand: "FORMA EXPERIENCE",
    title: "O Clímax da Juventude",
    focus: "Viagem de Formatura, Festivais & Memória Eterna",
    products: ["Formatura Porto Seguro", "Floripa Exclusive", "Shows & Camarins", "Passaporte VIP"],
    thesis: "O momento de maior impacto emocional da adolescência. A FORMA entrega a viagem da vida, e a PRX gerencia todo o acesso digital.",
  },
  {
    age: "18–20 ANOS",
    brand: "PRX BANK",
    title: "A Emancipação Financeira",
    focus: "Conta Digital, Cartão com Status & Cashback",
    products: ["Conta Corrente Jovem", "Forma PRX Card", "Cashback nas Festas", "Educação Financeira"],
    thesis: "Após a formatura, o jovem não é descartado: ele abre sua primeira conta no PRX Bank e utiliza o cartão com cashback em eventos.",
  },
  {
    age: "18–24 ANOS",
    brand: "PRX INVEST",
    title: "Construção de Patrimônio",
    focus: "Educação Prática & Primeiros Ativos",
    products: ["Módulos de Investimento", "Renda Fixa & Ações", "Mentorias", "Gamificação Financeira"],
    thesis: "Desmistificando o mercado de capitais para a Geração Z com linguagem direta e transparência regulatória.",
  },
  {
    age: "20–24+ ANOS",
    brand: "PRX FOUNDERS",
    title: "Liderança & Empreendedorismo",
    focus: "Networking, Startups & Nova Economia",
    products: ["Encontros de Founders", "Análise de Startups", "Networking Executivo", "Carreira & Inovação"],
    thesis: "Acompanhando o jovem na faculdade e nos primeiros passos como criador de empresas, mantendo-o para sempre no ecossistema.",
  },
];

export function LifecycleLtvSection() {
  const [activeStage, setActiveStage] = useState<number>(2); // Default to Formatura 17-18

  return (
    <section id="tese-ltv" className="py-16 sm:py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7607FD]">
            04. A Tese do LTV & Modelo Econômico
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Uma viagem dura uma semana. A relação com uma geração dura 10 anos.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Hoje a Forma já possui o ativo mais valioso do mercado jovem: momentos de pico emocional. A PRX entra para construir o que acontece antes e depois da formatura, multiplicando o Lifetime Value por 10 vezes.
          </p>
        </div>

        {/* Comparison Callout Cards (O que cada um ganha) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#fafafa] border border-slate-200 rounded-sm">
            <span className="text-xs font-mono font-bold text-amber-600 uppercase">
              O que a FORMA ganha
            </span>
            <h3 className="text-lg font-bold text-slate-950 mt-1">
              Fim da dependência de venda pontual
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              O aluno deixa de ser apenas um &quot;passageiro passageiro&quot; e se torna um membro permanente do ecossistema. Viagem → conta → cartão → eventos → investimentos → carreira. Receita contínua por anos.
            </p>
          </div>

          <div className="p-6 bg-[#fafafa] border border-slate-200 rounded-sm">
            <span className="text-xs font-mono font-bold text-[#7607FD] uppercase">
              O que a PRX ganha
            </span>
            <h3 className="text-lg font-bold text-slate-950 mt-1">
              Máquina orgânica de aquisição de clientes
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              O que uma fintech levaria anos e dezenas de milhões de reais em tráfego para construir, a FORMA já tem pronto: relacionamento direto com colégios, famílias, coordenadores e formadores de opinião.
            </p>
          </div>
        </div>

        {/* 10-Year Interactive Timeline */}
        <div className="mt-14">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <h3 className="text-base sm:text-lg font-bold text-slate-950">
              Ciclo de Vida do Cliente: Dos 14 aos 24+ Anos
            </h3>
            <span className="text-xs font-mono text-slate-500">
              Selecione a fase para ver os detalhes
            </span>
          </div>

          {/* Timeline Step Indicators */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {STAGES.map((st, i) => {
              const isSelected = i === activeStage;
              return (
                <button
                  key={st.age}
                  type="button"
                  onClick={() => setActiveStage(i)}
                  className={`p-3 text-left rounded-sm border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-950 text-white border-slate-950 shadow-xs"
                      : "bg-[#fafafa] text-slate-800 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <p className={`text-xs font-mono font-bold ${isSelected ? "text-[#0BD9FD]" : "text-[#7607FD]"}`}>
                    {st.age}
                  </p>
                  <p className="text-xs font-semibold truncate mt-1">
                    {st.brand}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Card */}
          <div className="mt-6 p-6 sm:p-8 bg-[#fafafa] border border-slate-200 rounded-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
              <div>
                <span className="text-xs font-mono font-bold text-[#7607FD] uppercase tracking-wider">
                  Fase: {STAGES[activeStage].age} • {STAGES[activeStage].brand}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
                  {STAGES[activeStage].title}
                </h4>
              </div>
              <span className="text-xs font-mono font-semibold px-3 py-1 bg-white border border-slate-200 rounded-sm text-slate-700 self-start lg:self-auto">
                {STAGES[activeStage].focus}
              </span>
            </div>

            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              {STAGES[activeStage].thesis}
            </p>

            <div className="mt-6 pt-5 border-t border-slate-200/80">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                Produtos & Ativações Ativas nesta Janela:
              </p>
              <div className="flex flex-wrap gap-2">
                {STAGES[activeStage].products.map((prod) => (
                  <span
                    key={prod}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-xs font-medium text-slate-900 rounded-sm shadow-2xs"
                  >
                    <Check className="w-3.5 h-3.5 text-[#7607FD]" />
                    <span>{prod}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
