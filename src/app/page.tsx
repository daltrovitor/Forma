// Hello World
"use client";

import { useState } from "react";
import { CoverSplashScreen } from "@/components/brand/CoverSplashScreen";
import { ProposalNavbar } from "@/components/proposal/ProposalNavbar";
import { CoverSlide } from "@/components/proposal/CoverSlide";
import { AuraOportunidadeSlide } from "@/components/proposal/AuraOportunidadeSlide";
import { AuraQuemEstaPorTrasSlide } from "@/components/proposal/AuraQuemEstaPorTrasSlide";
import { AuraParceriaSlide } from "@/components/proposal/AuraParceriaSlide";
import { AuraPrxPassSlide } from "@/components/proposal/AuraPrxPassSlide";
import { AuraEscolasSlide } from "@/components/proposal/AuraEscolasSlide";
import { AuraVisaoSlide } from "@/components/proposal/AuraVisaoSlide";
import { ProposalFooter } from "@/components/proposal/ProposalFooter";

export default function HomePage() {
  const [isSplashOpen, setIsSplashOpen] = useState(true);

  return (
    <main className="min-h-screen bg-slate-100/60 text-slate-900 overflow-x-hidden selection:bg-[#7607FD] selection:text-white">
      {/* Animated Cover Splash Screen with PRX (falling letters) and Grupo Aura (falling SVG asterisk + text) */}
      <CoverSplashScreen
        isOpen={isSplashOpen}
        onComplete={() => setIsSplashOpen(false)}
      />

      {/* Sticky Header with PRX × GRUPO AURA Navigation & Replay Trigger */}
      <ProposalNavbar onReplaySplash={() => setIsSplashOpen(true)} />

      {/* Slides Stream Styled exactly like the Proposal Cards */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Slide 1: Cover (PRX × GRUPO AURA) */}
        <CoverSlide onReplaySplash={() => setIsSplashOpen(true)} />

        {/* Slide 2: A Oportunidade */}
        <AuraOportunidadeSlide />

        {/* Slide 3: Quem Está por Trás (Rafael Molina) */}
        <AuraQuemEstaPorTrasSlide />

        {/* Slide 4: A Parceria (Frente 1 & Frente 2) */}
        <AuraParceriaSlide />

        {/* Slide 5: Grupo Aura dentro do PRX PASS */}
        <AuraPrxPassSlide />

        {/* Slide 6: PRX × Grupo Aura × Escolas (PRX BREAK) */}
        <AuraEscolasSlide />

        {/* Slide 7: A Visão (Manifesto & Próximos Passos) */}
        <AuraVisaoSlide />
      </div>

      {/* Footer with Viraweb Brand and Replay Action */}
      <ProposalFooter onReplaySplash={() => setIsSplashOpen(true)} />
    </main>
  );
}
