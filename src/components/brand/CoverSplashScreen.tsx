// Hello World
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { PrxAnimatedLogo } from "./PrxAnimatedLogo";
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

  // Sequential animation with ALL THREE LOGOS
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

    clearAllTimers();

    // t=100ms: Title "PROPOSTA DE PARCERIA" reveals
    const t0 = setTimeout(() => setStep(1), 100);

    // t=300ms: Forma logo drops in
    const t1 = setTimeout(() => setStep(2), 300);

    // t=600ms: PRX symbol drops in
    const t2 = setTimeout(() => {
      setPrxParts((prev) => ({ ...prev, symbol: true }));
    }, 600);

    // t=900ms: PRX Letter P drops in (0.3s)
    const t3 = setTimeout(() => {
      setPrxParts((prev) => ({ ...prev, "letter-p": true }));
    }, 900);

    // t=1200ms: PRX Letter R drops in (0.3s)
    const t4 = setTimeout(() => {
      setPrxParts((prev) => ({ ...prev, "letter-r": true }));
    }, 1200);

    // t=1500ms: PRX Letter X drops in (0.3s)
    const t5 = setTimeout(() => {
      setPrxParts((prev) => ({ ...prev, "letter-x": true }));
      setStep(3); // Rafa Molina enters
    }, 1500);

    // t=2000ms: Media Kit subtitle & 2026 badge reveal
    const t6 = setTimeout(() => setStep(4), 2000);

    // t=3300ms: Respiro (~1.3s) for brand unified appreciation, then begin fade-out
    const t7 = setTimeout(() => {
      setIsFadingOut(true);
    }, 3300);

    // t=3950ms: Complete transition
    const t8 = setTimeout(() => {
      setShouldRender(false);
      onComplete();
    }, 3950);

    timersRef.current = [t0, t1, t2, t3, t4, t5, t6, t7, t8];

    return () => clearAllTimers();
  }, [isOpen, onComplete, clearAllTimers]);

  if (!shouldRender) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Apresentação da Proposta de Parceria FORMA, PRX e Rafael Molina"
      className="fixed inset-0 z-50 bg-[#0B0B10] text-white flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out select-none overflow-hidden"
      style={{
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? "scale(1.05)" : "scale(1)",
        pointerEvents: isFadingOut ? "none" : "auto",
        willChange: "transform, opacity",
      }}
    >
      {/* Background ambient lighting matching the PDF cover */}
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

      {/* Center Content: Exact Cover Style of the PDF */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center text-center px-4">
        
        {/* Cover Title */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? "translateY(0)" : "translateY(-30px)",
          }}
        >
          <p className="text-xs sm:text-sm md:text-base font-mono tracking-[0.3em] uppercase text-slate-300 font-semibold">
            PROPOSTA DE
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mt-1 bg-linear-to-r from-white via-slate-100 to-[#0BD9FD] bg-clip-text text-transparent">
            PARCERIA
          </h1>
        </div>

        {/* The 3 Brand Logos Container */}
        <div className="mt-8 sm:mt-12 w-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-12">
          
          {/* Logo 1: FORMA */}
          <div
            className="flex flex-col items-center justify-center transition-all duration-650 ease-out"
            style={{
              opacity: step >= 2 ? 1 : 0,
              transform: step >= 2 ? "translateY(0)" : "translateY(-60px)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="relative w-32 sm:w-40 h-16 sm:h-20 flex items-center justify-center">
              <Image
                src="/brand/forma-logo-white.png"
                alt="Logo FORMA"
                width={200}
                height={120}
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                priority
              />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-1">
              Turismo & Experiência
            </span>
          </div>

          {/* Divider 1 */}
          <div
            className="hidden md:block w-px h-16 bg-linear-to-b from-transparent via-slate-700 to-transparent transition-opacity duration-500"
            style={{ opacity: step >= 2 ? 0.6 : 0 }}
          />

          {/* Logo 2: PRX (with sliced falling letters animation) */}
          <div className="flex flex-col items-center justify-center max-w-[280px] sm:max-w-[340px]">
            <div className="w-full">
              <PrxAnimatedLogo
                partsState={prxParts}
                subtitleVisible={step >= 3}
                className="w-full h-auto filter drop-shadow-[0_4px_16px_rgba(118,7,253,0.3)]"
              />
            </div>
          </div>

          {/* Divider 2 */}
          <div
            className="hidden md:block w-px h-16 bg-linear-to-b from-transparent via-slate-700 to-transparent transition-opacity duration-500"
            style={{ opacity: step >= 3 ? 0.6 : 0 }}
          />

          {/* Logo 3: RAFA MOLINA */}
          <div
            className="flex flex-col items-center justify-center transition-all duration-650 ease-out"
            style={{
              opacity: step >= 3 ? 1 : 0,
              transform: step >= 3 ? "translateY(0)" : "translateY(-60px)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="relative w-36 sm:w-44 h-16 sm:h-20 flex items-center justify-center">
              <Image
                src="/brand/rafa-molina-white.png"
                alt="Logo Rafa Molina"
                width={220}
                height={130}
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                priority
              />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-1">
              Comunicação & Conteúdo
            </span>
          </div>

        </div>

        {/* Footer info & 2026 badge */}
        <div
          className="mt-10 sm:mt-14 flex items-center justify-center gap-4 transition-all duration-700 ease-out"
          style={{
            opacity: step >= 4 ? 1 : 0,
            transform: step >= 4 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span className="text-xs sm:text-sm font-mono tracking-widest text-slate-300">
            MEDIA KIT 2026 • THE NEXT PLACE IS PRX
          </span>
          <span className="px-3 py-1 bg-[#E11D74] text-white font-mono font-bold text-xs rounded-full shadow-sm">
            2026
          </span>
        </div>

      </div>

      {/* Subtle accessibility clue at the bottom */}
      <div className="absolute bottom-6 sm:bottom-8 text-center z-10">
        <p className="text-[11px] sm:text-xs text-slate-500 tracking-wide font-sans">
          Pressione <kbd className="px-1.5 py-0.5 border border-slate-700 rounded-sm bg-slate-900 text-[10px] text-slate-300">Esc</kbd> ou <kbd className="px-1.5 py-0.5 border border-slate-700 rounded-sm bg-slate-900 text-[10px] text-slate-300">Espaço</kbd> para pular
        </p>
      </div>
    </div>
  );
}
