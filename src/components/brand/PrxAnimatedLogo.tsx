// Hello World
"use client";

import { useId, type CSSProperties } from "react";

export interface PrxAnimatedLogoProps {
  className?: string;
  style?: CSSProperties;
  /**
   * Visibility status of each part during sequential intro animation
   */
  partsState?: Record<string, boolean>;
  subtitleVisible?: boolean;
  theme?: "dark" | "light";
}

export function PrxAnimatedLogo({
  className = "w-full max-w-[840px] h-auto",
  style,
  partsState = {
    symbol: true,
    "letter-p": true,
    "letter-r": true,
    "letter-x": true,
  },
  subtitleVisible = true,
  theme = "dark",
}: PrxAnimatedLogoProps) {
  const uid = useId().replace(/:/g, "");
  const prxsId = `prxs-${uid}`;
  const prxxId = `prxx-${uid}`;

  const isSymbolVisible = partsState["symbol"] ?? false;
  const isPVisible = partsState["letter-p"] ?? false;
  const isRVisible = partsState["letter-r"] ?? false;
  const isXVisible = partsState["letter-x"] ?? false;

  const letterFill = theme === "dark" ? "#FFFFFF" : "#0B0B10";

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <svg
        viewBox="0 0 776.5 181"
        className={className}
        style={style}
        role="img"
        aria-label="PRX - The Next Pays"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial gradient for symbol right chevron: normal azul com roxo */}
          <radialGradient id={prxsId} gradientUnits="userSpaceOnUse" cx="330" cy="172" r="140">
            <stop offset="0" stopColor="#7607FD" />
            <stop offset="0.42" stopColor="#6430FA" />
            <stop offset="0.7" stopColor="#3C9CFD" />
            <stop offset="1" stopColor="#0BD9FD" />
          </radialGradient>

          {/* Linear gradient for letter X: normal azul com roxo */}
          <linearGradient id={prxxId} gradientUnits="userSpaceOnUse" x1="450" y1="310" x2="570" y2="405">
            <stop offset="0" stopColor="#7C04F0" />
            <stop offset="0.4" stopColor="#6420F9" />
            <stop offset="0.55" stopColor="#4F80FE" />
            <stop offset="1" stopColor="#06E4F9" />
          </linearGradient>
        </defs>

        {/* 1. SÍMBOLO (Symbol: Left chevron black with white outline + Right chevron blue/purple gradient) */}
        <g
          id="part-symbol"
          style={{
            opacity: isSymbolVisible ? 1 : 0,
            transform: isSymbolVisible ? "translateY(0px)" : "translateY(-120px)",
            transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out",
            willChange: "transform, opacity",
          }}
        >
          <g transform="translate(-214 -92)">
            {/* Left Chevron: Black with crisp white outline on dark background */}
            <path
              d="M214 119H312L340 147.8H282.2L333.7 199.7L261.2 272.7H221L293.5 199Z"
              fill="#0B0B10"
              stroke={theme === "dark" ? "#FFFFFF" : "none"}
              strokeWidth={theme === "dark" ? 2.5 : 0}
              strokeLinejoin="round"
            />
            {/* Right Chevron: Authentic azul com roxo gradient */}
            <path
              d="M414 92H464.5L383.3 173L458.2 253.2H359.5L332 223.2H389.5L339.2 167.8Z"
              fill={`url(#${prxsId})`}
            />
          </g>
        </g>

        {/* 2. LETRA P (Branca na entrada e no tema dark) */}
        <g
          id="part-letter-p"
          style={{
            opacity: isPVisible ? 1 : 0,
            transform: isPVisible ? "translateY(0px)" : "translateY(-120px)",
            transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out",
            willChange: "transform, opacity",
          }}
        >
          <g transform="translate(205.0 -265.4)">
            <path
              d="M101 306.2H174A31.3 31.3 0 0 1 174 368.8H118.5V405.6H101ZM118.5 320.8H172A15.8 16.7 0 0 1 172 354.2H118.5Z"
              fill={letterFill}
            />
          </g>
        </g>

        {/* 3. LETRA R (Branca na entrada e no tema dark) */}
        <g
          id="part-letter-r"
          style={{
            opacity: isRVisible ? 1 : 0,
            transform: isRVisible ? "translateY(0px)" : "translateY(-120px)",
            transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out",
            willChange: "transform, opacity",
          }}
        >
          <g transform="translate(205.0 -265.4)">
            <path
              d="M279.2 306.2H350.5A32.5 31.6 0 0 1 350.5 369.4H348L383.5 405.6H361.2L324.2 369.4H296.8V405.6H279.2ZM296.8 321H350.5A16 16.95 0 0 1 350.5 354.9H296.8Z"
              fill={letterFill}
            />
          </g>
        </g>

        {/* 4. LETRA X (Na cor normal azul com roxo) */}
        <g
          id="part-letter-x"
          style={{
            opacity: isXVisible ? 1 : 0,
            transform: isXVisible ? "translateY(0px)" : "translateY(-120px)",
            transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out",
            willChange: "transform, opacity",
          }}
        >
          <g transform="translate(205.0 -265.4)">
            <path
              d="M447.5 306.5H471.5L570.6 405.6H546.6L508.4 367.5L469.8 405.6H447L496 355.5ZM548 306.5H571.5L527 351L515.5 339.5Z"
              fill={`url(#${prxxId})`}
            />
          </g>
        </g>
      </svg>

      {/* Institutional Subtitle & Accent Line */}
      <div
        className="w-full max-w-[540px] flex flex-col items-center mt-3 sm:mt-4 transition-all duration-700 ease-out"
        style={{
          opacity: subtitleVisible ? 1 : 0,
          transform: subtitleVisible ? "translateY(0)" : "translateY(16px)",
          willChange: "transform, opacity",
        }}
      >
        <div className="w-full flex items-center justify-between text-[10px] sm:text-[12px] md:text-[13px] font-semibold tracking-[0.28em] text-slate-300 uppercase select-none">
          <span>THE</span>
          <span className="text-[#7607FD]">•</span>
          <span>NEXT</span>
          <span className="text-[#0BD9FD]">•</span>
          <span>PAYS</span>
        </div>
        <div
          className="h-[2px] w-28 sm:w-36 mt-1.5 sm:mt-2 rounded-full transition-all duration-700 ease-out"
          style={{
            background: "linear-gradient(90deg, #7607FD 0%, #0BD9FD 100%)",
            transform: subtitleVisible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
          }}
        />
      </div>
    </div>
  );
}

export interface PrxStaticLogoProps {
  className?: string;
  style?: CSSProperties;
  theme?: "dark" | "light";
}

export function PrxStaticLogo({
  className = "w-full h-auto",
  style,
  theme = "dark",
}: PrxStaticLogoProps) {
  const uid = useId().replace(/:/g, "");
  const prxsId = `prxs-static-${uid}`;
  const prxxId = `prxx-static-${uid}`;

  const letterFill = theme === "dark" ? "#FFFFFF" : "#0B0B10";

  return (
    <svg
      viewBox="0 0 776.5 181"
      className={className}
      style={style}
      role="img"
      aria-label="PRX - The Next Pays"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={prxsId} gradientUnits="userSpaceOnUse" cx="330" cy="172" r="140">
          <stop offset="0" stopColor="#7607FD" />
          <stop offset="0.42" stopColor="#6430FA" />
          <stop offset="0.7" stopColor="#3C9CFD" />
          <stop offset="1" stopColor="#0BD9FD" />
        </radialGradient>
        <linearGradient id={prxxId} gradientUnits="userSpaceOnUse" x1="450" y1="310" x2="570" y2="405">
          <stop offset="0" stopColor="#7C04F0" />
          <stop offset="0.4" stopColor="#6420F9" />
          <stop offset="0.55" stopColor="#4F80FE" />
          <stop offset="1" stopColor="#06E4F9" />
        </linearGradient>
      </defs>

      {/* Símbolo com parte preta e parte azul com roxo */}
      <g transform="translate(-214 -92)">
        <path
          d="M214 119H312L340 147.8H282.2L333.7 199.7L261.2 272.7H221L293.5 199Z"
          fill="#0B0B10"
          stroke={theme === "dark" ? "#FFFFFF" : "none"}
          strokeWidth={theme === "dark" ? 2.5 : 0}
          strokeLinejoin="round"
        />
        <path
          d="M414 92H464.5L383.3 173L458.2 253.2H359.5L332 223.2H389.5L339.2 167.8Z"
          fill={`url(#${prxsId})`}
        />
      </g>

      {/* Letras P e R brancas e X em degradê azul com roxo */}
      <g transform="translate(205.0 -265.4)">
        <path
          d="M101 306.2H174A31.3 31.3 0 0 1 174 368.8H118.5V405.6H101ZM118.5 320.8H172A15.8 16.7 0 0 1 172 354.2H118.5Z"
          fill={letterFill}
        />
        <path
          d="M279.2 306.2H350.5A32.5 31.6 0 0 1 350.5 369.4H348L383.5 405.6H361.2L324.2 369.4H296.8V405.6H279.2ZM296.8 321H350.5A16 16.95 0 0 1 350.5 354.9H296.8Z"
          fill={letterFill}
        />
        <path
          d="M447.5 306.5H471.5L570.6 405.6H546.6L508.4 367.5L469.8 405.6H447L496 355.5ZM548 306.5H571.5L527 351L515.5 339.5Z"
          fill={`url(#${prxxId})`}
        />
      </g>
    </svg>
  );
}
