// Hello World
"use client";

import { Handshake, GitMerge, Building2, CheckCircle2 } from "lucide-react";

export function BusinessModelsSection() {
  const models = [
    {
      id: "joint-venture",
      badge: "Modelo 01",
      title: "Joint Venture",
      subtitle: "Nova Companhia Compartilhada: FORMA PRX",
      icon: Handshake,
      desc: "Forma e PRX unem forças para constituir uma nova entidade jurídica operando o ecossistema contínuo, onde cada parte aporta seus maiores ativos:",
      points: [
        "FORMA aporta: Distribuição nacional, marca histórica, relacionamento com colégios, operação de turismo e megafestas.",
        "PRX aporta: Produto digital nativo, plataforma fintech, gamificação, comunidade e governança tech.",
        "Divisão societária com governança e conselho conjunto.",
      ],
    },
    {
      id: "fusao",
      badge: "Modelo 02",
      title: "Fusão Estratégica",
      subtitle: "Ecossistema Corporativo Unificado",
      icon: GitMerge,
      desc: "As duas operações se integram sob uma mesma holding corporativa, tornando a PRX a camada digital e bancária oficial da marca FORMA:",
      points: [
        "A marca PRX atua como a infraestrutura de tecnologia e fintech de todos os produtos Forma.",
        "Sinergia operacional imediata com unificação de bases de clientes e canais de comunicação.",
        "Preservação integral da identidade afetiva da FORMA nos destinos de viagem.",
      ],
    },
    {
      id: "participacao",
      badge: "Modelo 03",
      title: "Participação no Capital",
      subtitle: "Entrada Societária da FORMA na PRX",
      icon: Building2,
      desc: "A FORMA ingressa como investidora estratégica no capital social da PRX, acelerando a expansão com smart money:",
      points: [
        "FORMA injeta capital de escala, acesso irrestrito às escolas e canais de distribuição.",
        "Rafael Molina permanece como co-founder liderando a estratégia da vertical Youth Ecosystem.",
        "Crescimento acelerado do valuation da fintech ancorado na base fiel da Forma.",
      ],
    },
  ];

  return (
    <section id="modelos" className="py-16 sm:py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7607FD]">
            06. Estruturas Societárias
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Não é uma simples aquisição. É a criação de uma nova categoria corporativa.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Apresentamos 3 caminhos contratuais flexíveis para a formalização da parceria, garantindo a preservação total da marca FORMA e a adição do ecossistema tecnológico da PRX.
          </p>
        </div>

        {/* 3 Models Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="flex flex-col p-6 sm:p-8 bg-[#fafafa] border border-slate-200 rounded-sm hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-[#7607FD] uppercase tracking-wider">
                    {mod.badge}
                  </span>
                  <div className="w-8 h-8 rounded-xs bg-slate-900 text-white flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#0BD9FD]" />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-slate-950">
                    {mod.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-slate-500 mt-1">
                    {mod.subtitle}
                  </p>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {mod.desc}
                </p>

                <ul className="mt-6 space-y-3 text-xs text-slate-700">
                  {mod.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7607FD] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Brand Preservation Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-950 text-white rounded-sm border border-slate-900 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#0BD9FD] uppercase tracking-widest font-semibold">
              Regra de Ouro da Parceria
            </span>
            <h4 className="text-lg sm:text-xl font-bold mt-1 text-white">
              O mais importante: Não matar a marca FORMA.
            </h4>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              FORMA continua sendo a dona absoluta da experiência, do afeto e das viagens. A PRX entra como a extensão de vida diária: banco, cashback, eventos e futuro.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-300 flex flex-col gap-1 border-l-2 border-[#7607FD] pl-4 self-start lg:self-auto">
            <span>FORMA: Experience</span>
            <span>PRX: Life & Ecosystem</span>
            <strong className="text-white font-bold">FORMA × PRX</strong>
          </div>
        </div>

      </div>
    </section>
  );
}
