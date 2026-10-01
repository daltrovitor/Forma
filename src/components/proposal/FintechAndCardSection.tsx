// Hello World
"use client";

import { useState } from "react";
import { CreditCard, Award, Zap, Shield, Sparkles, DollarSign, Smartphone, Star } from "lucide-react";

export function FintechAndCardSection() {
  const [userLevel, setUserLevel] = useState<number>(10);

  const getLevelInfo = (lvl: number) => {
    if (lvl < 5) return { title: "NEWBIE", color: "text-slate-600", badge: "Level 01–04", perks: "Acesso ao Clube, Descontos em parceiros, Acúmulo inicial de XP" };
    if (lvl < 10) return { title: "INSIDER", color: "text-blue-600", badge: "Level 05–09", perks: "Cashback turbinado, Fila prioritária em eventos, Badges de missões" };
    if (lvl < 20) return { title: "VIP", color: "text-[#7607FD]", badge: "Level 10–19", perks: "Acesso a camarins, Cartão Forma PRX Metal, Desconto em pacotes de viagem" };
    return { title: "ICON", color: "text-amber-500", badge: "Level 20+", perks: "Acesso irrestrito a todos os festivais, Experiência automobilística, Mentorias com Founders" };
  };

  const levelInfo = getLevelInfo(userLevel);

  return (
    <section className="py-16 sm:py-24 border-b border-slate-100 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7607FD]">
            05. Produto Digital & Gamificação
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Forma Pass & Cartão Forma PRX: Status, Acesso & Recompensas.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Não é apenas &quot;abrir uma conta bancária&quot;. É o passaporte de identidade digital da juventude. A parte financeira é o motor invisível; a experiência e o status são o verdadeiro objeto de desejo.
          </p>
        </div>

        {/* 2 Main Columns: The Card & The Gamification System */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Forma PRX Card Mockup Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-slate-200 rounded-sm shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#7607FD] uppercase tracking-wider">
                O Cartão da Juventude
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                Forma PRX Card: Vendido como Acesso e Status
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Um cartão físico e digital que abre portas nas melhores festas, proporciona cashback automático e benefícios diretos na viagem de formatura.
              </p>

              {/* Minimalist Graphic Representation of the Card */}
              <div className="mt-6 p-6 sm:p-7 rounded-sm bg-linear-to-br from-slate-950 via-slate-900 to-[#1e1035] text-white shadow-sm border border-slate-800 relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#0BD9FD]" />
                    <span className="text-xs font-mono tracking-widest uppercase text-slate-300">
                      FORMA × PRX
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#7607FD]/40 text-[#0BD9FD] border border-[#7607FD] rounded-xs">
                    BLACK METAL
                  </span>
                </div>

                <div className="mt-10 sm:mt-12 font-mono text-sm sm:text-base tracking-widest text-slate-300">
                  •••• •••• •••• 2026
                </div>

                <div className="mt-6 flex justify-between items-end">
                  <div>
                    <p className="text-[9px] font-mono text-slate-400 uppercase">Titular do Passaporte</p>
                    <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-100">
                      MEMBRO ECOSSISTEMA
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-mono text-[#0BD9FD] uppercase">Nível Atual</p>
                    <p className="text-xs sm:text-sm font-bold tracking-wider text-white">
                      {levelInfo.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Perks list */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-[#7607FD]" />
                  <span>VIP em eventos parceiros</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-[#7607FD]" />
                  <span>Cashback instantâneo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-[#7607FD]" />
                  <span>Acesso antecipado a viagens</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-[#7607FD]" />
                  <span>Experiências com artistas</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
              Proteção estrita e conformidade regulatória para menores de idade.
            </div>
          </div>

          {/* Column 2: Gamification Simulator (Level System) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-slate-200 rounded-sm shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#0BD9FD] uppercase tracking-wider">
                Sistema de Recompensas
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                Gamificação: Transformando ações em XP e Status
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Participar de uma corrida, economizar mesada, indicar um amigo, ir a um festival ou participar de ação social geram pontos reais no Passaporte Forma.
              </p>

              {/* Interactive Level Slider */}
              <div className="mt-6 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono font-bold text-slate-700">
                    Simule o Nível no Passaporte:
                  </span>
                  <span className="text-xs font-mono font-black text-[#7607FD]">
                    Level {userLevel} • {levelInfo.title}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="25"
                  value={userLevel}
                  onChange={(e) => setUserLevel(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#7607FD]"
                  aria-label="Ajustar nível simulado de gamificação"
                />

                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                  <span>Lvl 1 (Newbie)</span>
                  <span>Lvl 5 (Insider)</span>
                  <span>Lvl 10 (VIP)</span>
                  <span>Lvl 20 (Icon)</span>
                </div>

                {/* Level Perks Display */}
                <div className="mt-4 pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-mono font-semibold uppercase text-slate-500">
                    Benefícios Desbloqueados:
                  </span>
                  <p className="text-xs font-medium text-slate-900 mt-1">
                    {levelInfo.perks}
                  </p>
                </div>
              </div>

              {/* Multi-Vertical Revenue Breakdown */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Novo Modelo de Receita Multivertical:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-medium text-slate-700">
                  <span className="p-2 bg-slate-50 border border-slate-200 rounded-xs">✈ Turismo & Pacotes</span>
                  <span className="p-2 bg-slate-50 border border-slate-200 rounded-xs">🎫 Festivais & Shows</span>
                  <span className="p-2 bg-slate-50 border border-slate-200 rounded-xs">💳 Serviços Fintech</span>
                  <span className="p-2 bg-slate-50 border border-slate-200 rounded-xs">🤝 Clube de Parceiros</span>
                  <span className="p-2 bg-slate-50 border border-slate-200 rounded-xs">📊 Ads com Grandes Marcas</span>
                  <span className="p-2 bg-slate-50 border border-slate-200 rounded-xs">🎬 Branded Content</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Festival Anual:</span>
              <strong className="text-slate-900 font-bold">PRX Fest</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
