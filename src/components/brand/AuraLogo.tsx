// Hello World
"use client";

import { useId, type CSSProperties } from "react";

export interface AuraLogoProps {
  className?: string;
  style?: CSSProperties;
  theme?: "dark" | "light";
}

export function AuraLogo({
  className = "w-full h-auto",
  style,
  theme = "dark",
}: AuraLogoProps) {
  const fillColor = theme === "dark" ? "#FFFFFF" : "#0B0B10";

  return (
    <svg
      viewBox="0 0 960 520"
      className={className}
      style={style}
      role="img"
      aria-label="Grupo Aura Logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Símbolo Asterisco 6 pontas */}
      <g transform="translate(195, 260)">
        <rect x="-26" y="-125" width="52" height="250" rx="6" fill={fillColor} />
        <rect x="-26" y="-125" width="52" height="250" rx="6" fill={fillColor} transform="rotate(60)" />
        <rect x="-26" y="-125" width="52" height="250" rx="6" fill={fillColor} transform="rotate(120)" />
      </g>

      {/* Tipografia aura™ */}
      <g transform="translate(360, 230)">
        <text
          x="0"
          y="0"
          fill={fillColor}
          fontSize="145"
          fontWeight="900"
          fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
          letterSpacing="-0.04em"
        >
          aura
        </text>
        <text
          x="328"
          y="-72"
          fill={fillColor}
          fontSize="32"
          fontWeight="800"
          fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
        >
          TM
        </text>
      </g>

      {/* Tipografia group */}
      <g transform="translate(360, 365)">
        <text
          x="0"
          y="0"
          fill={fillColor}
          fontSize="145"
          fontWeight="900"
          fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
          letterSpacing="-0.04em"
        >
          group
        </text>
      </g>
    </svg>
  );
}

export interface AuraAnimatedLogoProps {
  className?: string;
  style?: CSSProperties;
  symbolVisible?: boolean;
  textVisible?: boolean;
  theme?: "dark" | "light";
}

export function AuraAnimatedLogo({
  className = "w-full max-w-[380px] h-auto",
  style,
  symbolVisible = true,
  textVisible = true,
  theme = "dark",
}: AuraAnimatedLogoProps) {
  const fillColor = theme === "dark" ? "#FFFFFF" : "#0B0B10";

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <svg
        viewBox="0 0 960 520"
        className={className}
        style={style}
        role="img"
        aria-label="Grupo Aura Logo"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Símbolo Asterisco 6 pontas com animação de queda suave */}
        <g
          style={{
            opacity: symbolVisible ? 1 : 0,
            transform: symbolVisible ? "translateY(0px)" : "translateY(-120px)",
            transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out",
            willChange: "transform, opacity",
          }}
        >
          <g transform="translate(195, 260)">
            <rect x="-26" y="-125" width="52" height="250" rx="6" fill={fillColor} />
            <rect x="-26" y="-125" width="52" height="250" rx="6" fill={fillColor} transform="rotate(60)" />
            <rect x="-26" y="-125" width="52" height="250" rx="6" fill={fillColor} transform="rotate(120)" />
          </g>
        </g>

        {/* Tipografia aura group revelando suavemente */}
        <g
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0px)" : "translateY(-100px)",
            transition: "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.45s ease-out 0.15s",
            willChange: "transform, opacity",
          }}
        >
          {/* aura™ */}
          <g transform="translate(360, 230)">
            <text
              x="0"
              y="0"
              fill={fillColor}
              fontSize="145"
              fontWeight="900"
              fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
              letterSpacing="-0.04em"
            >
              aura
            </text>
            <text
              x="328"
              y="-72"
              fill={fillColor}
              fontSize="32"
              fontWeight="800"
              fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
            >
              TM
            </text>
          </g>

          {/* group */}
          <g transform="translate(360, 365)">
            <text
              x="0"
              y="0"
              fill={fillColor}
              fontSize="145"
              fontWeight="900"
              fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
              letterSpacing="-0.04em"
            >
              group
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
