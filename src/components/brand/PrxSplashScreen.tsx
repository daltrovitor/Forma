// Hello World
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { PrxAnimatedLogo } from "./PrxAnimatedLogo";
import { ArrowRight } from "lucide-react";

interface PrxSplashScreenProps {
  isOpen: boolean;
  onComplete: () => void;
}

export function PrxSplashScreen({ isOpen, onComplete }: PrxSplashScreenProps) {
  const [partsState, setPartsState] = useState<Record<string, boolean>>({
    symbol: false,
    "letter-p": false,
    "letter-r": false,
    "letter-x": false,
  });
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const skip = useCallback(() => {
    clearAllTimers();
    // Reveal all elements immediately
    setPartsState({
      symbol: true,
      "letter-p": true,
      "letter-r": true,
      "letter-x": true,
    });
    setSubtitleVisible(true);
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

  // Run sequential animation
  useEffect(() => {
    if (!isOpen) {
      setShouldRender(false);
      return;
    }

    setShouldRender(true);
    setIsFadingOut(false);
    setSubtitleVisible(false);
    setPartsState({
      symbol: false,
      "letter-p": false,
      "letter-r": false,
      "letter-x": false,
    });

    clearAllTimers();

    // 1. Symbol drops in at 100ms
    const t0 = setTimeout(() => {
      setPartsState((prev) => ({ ...prev, symbol: true }));
    }, 100);

    // 2. Letter P drops in at 400ms (0.3s stagger)
    const t1 = setTimeout(() => {
      setPartsState((prev) => ({ ...prev, "letter-p": true }));
    }, 400);

    // 3. Letter R drops in at 700ms (0.3s stagger)
    const t2 = setTimeout(() => {
      setPartsState((prev) => ({ ...prev, "letter-r": true }));
    }, 700);

    // 4. Letter X drops in at 1000ms (0.3s stagger)
    const t3 = setTimeout(() => {
      setPartsState((prev) => ({ ...prev, "letter-x": true }));
    }, 1000);

    // 5. Reveal subtitle smoothly below completed logo
    const t4 = setTimeout(() => {
      setSubtitleVisible(true);
    }, 1450);

    // 6. Respiro (~1 second) for brand unified appreciation
    const t5 = setTimeout(() => {
      setIsFadingOut(true);
    }, 2650);

    // 7. Transition to main page (fade-out with scale 1.05 and pointer-events-none)
    const t6 = setTimeout(() => {
      setShouldRender(false);
      onComplete();
    }, 3250);

    timersRef.current = [t0, t1, t2, t3, t4, t5, t6];

    return () => clearAllTimers();
  }, [isOpen, onComplete, clearAllTimers]);

  if (!shouldRender) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Apresentação da Marca PRX"
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 transition-all duration-600 ease-out select-none"
      style={{
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? "scale(1.05)" : "scale(1)",
        pointerEvents: isFadingOut ? "none" : "auto",
        willChange: "transform, opacity",
      }}
    >
      {/* Top right skip button */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10">
        <button
          type="button"
          onClick={skip}
          aria-label="Pular introdução da marca PRX"
          className="group inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-400 bg-white/90 backdrop-blur-sm rounded-md shadow-xs transition-colors cursor-pointer"
        >
          <span>Pular introdução</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Centered animated brand lockup */}
      <div className="w-full max-w-2xl px-4 flex flex-col items-center justify-center">
        <PrxAnimatedLogo
          partsState={partsState}
          subtitleVisible={subtitleVisible}
        />
      </div>

      {/* Subtle accessibility and shortcut footer clue */}
      <div className="absolute bottom-6 sm:bottom-8 text-center">
        <p className="text-[11px] sm:text-xs text-slate-400 tracking-wide font-sans">
          Pressione <kbd className="px-1.5 py-0.5 border border-slate-200 rounded-sm bg-slate-50 text-[10px] text-slate-600">Esc</kbd> ou <kbd className="px-1.5 py-0.5 border border-slate-200 rounded-sm bg-slate-50 text-[10px] text-slate-600">Espaço</kbd> para pular
        </p>
      </div>
    </div>
  );
}
