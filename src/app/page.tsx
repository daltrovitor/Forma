// Hello World
"use client";

import { useState } from "react";
import { CoverSplashScreen } from "@/components/brand/CoverSplashScreen";
import { ProposalNavbar } from "@/components/proposal/ProposalNavbar";
import { CoverSlide } from "@/components/proposal/CoverSlide";
import { Slide2Parceria } from "@/components/proposal/Slide2Parceria";
import { Slide3MediaKitOverview } from "@/components/proposal/Slide3MediaKitOverview";
import { Slide4FormaSemFiltro } from "@/components/proposal/Slide4FormaSemFiltro";
import { Slide5PassaporteForma } from "@/components/proposal/Slide5PassaporteForma";
import { Slide6Estetica } from "@/components/proposal/Slide6Estetica";
import { SlideEpisodesShowcase } from "@/components/proposal/SlideEpisodesShowcase";
import { SlideEventsShowcase } from "@/components/proposal/SlideEventsShowcase";
import { SlideThesisLtv } from "@/components/proposal/SlideThesisLtv";
import { BusinessModelsSection } from "@/components/proposal/BusinessModelsSection";
import { SlideContactWrapup } from "@/components/proposal/SlideContactWrapup";
import { ProposalFooter } from "@/components/proposal/ProposalFooter";

export default function HomePage() {
  const [isSplashOpen, setIsSplashOpen] = useState(true);

  return (
    <main className="min-h-screen bg-slate-100/60 text-slate-900 overflow-x-hidden selection:bg-[#7607FD] selection:text-white">
      {/* Animated Cover Splash Screen with All 3 Logos (Forma, PRX with falling letters, and Rafa Molina) */}
      <CoverSplashScreen
        isOpen={isSplashOpen}
        onComplete={() => setIsSplashOpen(false)}
      />

      {/* Sticky Header with Navigation & Replay Trigger */}
      <ProposalNavbar onReplaySplash={() => setIsSplashOpen(true)} />

      {/* Slides Stream Styled exactly like the PDF */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Slide 1: Cover */}
        <CoverSlide onReplaySplash={() => setIsSplashOpen(true)} />

        {/* Slide 2: A Parceria (3 Forças) */}
        <Slide2Parceria />

        {/* Slide 3: Media Kit Overview (3 Black Logo Boxes) */}
        <Slide3MediaKitOverview />

        {/* Slide 4: Forma Sem Filtro (Photo p4_0_X4.png) */}
        <Slide4FormaSemFiltro />

        {/* Slide 5: O Passaporte Forma (Photo p5_0_X4.png) */}
        <Slide5PassaporteForma />

        {/* Slide 6: A Estética (Photo p6_0_X4.png) */}
        <Slide6Estetica />

        {/* Slides 7-19: Os 12 Episódios + Porto Real Time (Photos p7 a p19) */}
        <SlideEpisodesShowcase />

        {/* Slides 20-23: Eventos Presenciais PRX (Photos p20 a p23) */}
        <SlideEventsShowcase />

        {/* Slides 24-37: A Tese, Ciclo LTV, Cartão e PRX Fest (Photos p25, p28, p33, p35) */}
        <SlideThesisLtv />

        {/* Slides 38-40: Modelos Societários */}
        <BusinessModelsSection />

        {/* Slides 41-42: Conclusão & Contato Oficial (Photo p42_0_X4.png) */}
        <SlideContactWrapup />
      </div>

      {/* Footer with Viraweb Brand and Replay Action */}
      <ProposalFooter onReplaySplash={() => setIsSplashOpen(true)} />
    </main>
  );
}
