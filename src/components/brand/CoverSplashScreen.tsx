// Hello World
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { PrxAnimatedLogo } from "./PrxAnimatedLogo";
import { AuraAnimatedLogo } from "./AuraLogo";
import { ArrowRight, Sparkles } from "lucide-react";

interface CoverSplashScreenProps {
  isOpen: boolean;
  onComplete: () => void;
}

export function CoverSplashScreen({ isOpen, onComplete }: CoverSplashScreenProps) {
  const [step, setStep] = useState<number>(0);
  const [prxParts, setPrxParts] = useState<Record<string, boolean>>({
    symbol: false,
    "letter-p": false,
    "letter-r": false,
    "letter-x": false,
  });
  const [auraSymbol, setAuraSymbol] = useState<boolean>(false);
  const [auraText, setAuraText] = useState<boolean>(false);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(isOpen);

  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const skip = useCallback(() => {
    clearAllTimers();
    setStep(5);
    setPrxParts({
      symbol: true,
      "letter-p": true,
      "letter-r": true,
      "letter-x": true,
    });
    setAuraSymbol(true);
    setAuraText(true);
    setIsFadingOut(true);

    const fadeTimer = setTimeout(() => {
      setShouldRender(false);
      onComplete();
    }, 450);
    timersRef.current.push(fadeTimer);
  }, [clearAllTimers, onComplete]);

  // Keyboard shortcut listener (Escape, Enter, Space)
  useEffect(() => {
    if (!isOpen || !shouldRender) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        skip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, shouldRender, skip]);

  // Sequential animation with PRX and GRUPO AURA
  useEffect(() => {
    if (!isOpen) {
      setShouldRender(false);
      return;
    }

    setShouldRender(true);
    setIsFadingOut(false);
    setStep(0);
    setPrxParts({
      symbol: false,
      "letter-p": false,
      "letter-r": false,
      "letter-x": false,
    });
    setAuraSymbol(false);
    setAuraText(false);

    clearAllTimers();

    // t=100ms: Title "PROPOSTA DE PARCERIA" reveals
    const t0 = setTimeout(() => setStep(1), 100);

    // t=300ms: PRX symbol drops in
    const t1 = setTimeout(() => {
      setPrxParts((prev) => ({ ...prev, symbol: true }));
    }, 300);

    // t=600ms: PRX Letter P drops in (0.3s)
    const t2 = setTimeout(() => {
      setPrxParts((prev) => ({ ...prev, "letter-p": true }));
    }, 600);

    // t=900ms: PRX Letter R drops in (0.3s)
    const t3 = setTimeout(() => {
      setPrxParts((prev) => ({ ...prev, "letter-r": true }));
    }, 900);

    // t=1200ms: PRX Letter X drops in (0.3s)
    const t4 = setTimeout(() => {
      setPrxParts((prev) => ({ ...prev, "letter-x": true }));
    }, 1200);

    // t=1500ms: Grupo Aura Asterisk drops in (0.3s)
    const t5 = setTimeout(() => {
      setAuraSymbol(true);
      setStep(2);
    }, 1500);

    // t=1800ms: Grupo Aura Typography reveals (0.3s)
    const t6 = setTimeout(() => {
      setAuraText(true);
      setStep(3);
    }, 1800);

    // t=2200ms: Subtitle & Manifesto reveal
    const t7 = setTimeout(() => setStep(4), 2200);

    // t=3600ms: Respiro for brand appreciation, then begin fade-out
    const t8 = setTimeout(() => {
      setIsFadingOut(true);
    }, 3600);

    // t=4250ms: Complete transition
    const t9 = setTimeout(() => {
      setShouldRender(false);
      onComplete();
    }, 4250);

    timersRef.current = [t0, t1, t2, t3, t4, t5, t6, t7, t8, t9];

    return () => clearAllTimers();
  }, [isOpen, onComplete, clearAllTimers]);

  if (!shouldRender) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Apresentação da Proposta de Parceria PRX × GRUPO AURA"
      className="fixed inset-0 z-50 bg-[#0B0B10] text-white flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out select-none overflow-hidden"
      style={{
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? "scale(1.05)" : "scale(1)",
        pointerEvents: isFadingOut ? "none" : "auto",
        willChange: "transform, opacity",
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-[#1e1035] via-[#0B0B10] to-[#050508] opacity-80 pointer-events-none" />

      {/* Top right skip button */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
        <button
          type="button"
          onClick={skip}
          aria-label="Pular introdução da proposta"
          className="group inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 bg-slate-900/80 backdrop-blur-md rounded-md shadow-xs transition-colors cursor-pointer"
        >
          <span>Pular introdução</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#0BD9FD]" />
        </button>
      </div>

      {/* Center Content: Exact Duo Branding for PRX × GRUPO AURA */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center text-center px-4">
        
        {/* Cover Title */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? "translateY(0)" : "translateY(-30px)",
          }}
        >
          <p className="text-xs sm:text-sm md:text-base font-mono tracking-[0.35em] uppercase text-slate-400 font-semibold">
            PROPOSTA DE PARCERIA ESTRATÉGICA
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mt-2 bg-linear-to-r from-white via-slate-100 to-[#0BD9FD] bg-clip-text text-transparent">
            PRX × GRUPO AURA
          </h1>
        </div>

        {/* The Two Brand Logos Container */}
        <div className="mt-8 sm:mt-12 w-full flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
          
          {/* Logo 1: PRX (with falling vector letters) */}
          <div className="flex flex-col items-center justify-center max-w-[280px] sm:max-w-[340px]">
            <div className="w-full">
              <PrxAnimatedLogo
                partsState={prxParts}
                subtitleVisible={step >= 3}
                className="w-full h-auto filter drop-shadow-[0_4px_16px_rgba(118,7,253,0.35)]"
              />
            </div>
          </div>

          {/* Central Connecting Element */}
          <div
            className="flex items-center justify-center transition-all duration-500"
            style={{ opacity: step >= 2 ? 0.9 : 0 }}
          >
            <span className="text-2xl sm:text-4xl font-light text-slate-600 font-mono">
              ×
            </span>
          </div>

          {/* Logo 2: GRUPO AURA (with animated SVG asterisk and typography) */}
          <div className="flex flex-col items-center justify-center max-w-[260px] sm:max-w-[320px]">
            <div className="w-full">
              <AuraAnimatedLogo
                symbolVisible={auraSymbol}
                textVisible={auraText}
                className="w-full h-auto filter drop-shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
              />
            </div>
            <span
              className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-2 transition-opacity duration-500"
              style={{ opacity: auraText ? 1 : 0 }}
            >
              Eventos & Experiências
            </span>
          </div>

        </div>

        {/* Subtitle & Manifesto */}
        <div
          className="mt-10 sm:mt-14 flex flex-col items-center justify-center gap-3 transition-all duration-700 ease-out"
          style={{
            opacity: step >= 4 ? 1 : 0,
            transform: step >= 4 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-base sm:text-xl font-medium text-slate-200 max-w-xl">
            &ldquo;A próxima geração precisa de um lugar para acontecer.&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#0BD9FD] font-semibold">
              THE NXT PLACE IS PRX
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <span className="px-3 py-0.5 bg-[#7607FD] text-white font-mono font-bold text-xs rounded-full shadow-xs">
              2026
            </span>
          </div>
        </div>

      </div>

      {/* Accessibility clue */}
      <div className="absolute bottom-6 sm:bottom-8 text-center z-10">
        <p className="text-[11px] sm:text-xs text-slate-500 tracking-wide font-sans">
          Pressione <kbd className="px-1.5 py-0.5 border border-slate-700 rounded-sm bg-slate-900 text-[10px] text-slate-300">Esc</kbd> ou <kbd className="px-1.5 py-0.5 border border-slate-700 rounded-sm bg-slate-900 text-[10px] text-slate-300">Espaço</kbd> para pular
        </p>
      </div>
    </div>
  );
}
