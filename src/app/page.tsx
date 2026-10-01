// Hello World
"use client";

import { useState } from "react";
import { PrxSplashScreen } from "@/components/brand/PrxSplashScreen";
import { ProposalNavbar } from "@/components/proposal/ProposalNavbar";
import { HeroFPattern } from "@/components/proposal/HeroFPattern";
import { ThreePillarsSection } from "@/components/proposal/ThreePillarsSection";
import { FormaSemFiltroSection } from "@/components/proposal/FormaSemFiltroSection";
import { PrxEventsSection } from "@/components/proposal/PrxEventsSection";
import { LifecycleLtvSection } from "@/components/proposal/LifecycleLtvSection";
import { FintechAndCardSection } from "@/components/proposal/FintechAndCardSection";
import { BusinessModelsSection } from "@/components/proposal/BusinessModelsSection";
import { ContactSection } from "@/components/proposal/ContactSection";
import { ProposalFooter } from "@/components/proposal/ProposalFooter";

export default function HomePage() {
  const [isSplashOpen, setIsSplashOpen] = useState(true);

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Animated Splash Screen with Sliced SVG Parts & Falling Physics */}
      <PrxSplashScreen
        isOpen={isSplashOpen}
        onComplete={() => setIsSplashOpen(false)}
      />

      {/* Sticky Header with Navigation & Replay Trigger */}
      <ProposalNavbar onReplaySplash={() => setIsSplashOpen(true)} />

      {/* Main F-Pattern Structured Sections */}
      <HeroFPattern />
      <ThreePillarsSection />
      <FormaSemFiltroSection />
      <PrxEventsSection />
      <LifecycleLtvSection />
      <FintechAndCardSection />
      <BusinessModelsSection />
      <ContactSection />

      {/* Footer with Viraweb Brand and Replay Action */}
      <ProposalFooter onReplaySplash={() => setIsSplashOpen(true)} />
    </main>
  );
}
