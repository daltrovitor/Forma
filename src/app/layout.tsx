// Hello World
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://forma.prx.app.br"),
  title: "PRX × GRUPO AURA | A Próxima Geração Precisa de um Lugar para Acontecer",
  description:
    "Proposta de parceria estratégica entre PRX e Grupo Aura. A PRX leva a comunidade. O Grupo Aura transforma comunidade em experiência.",
  keywords: [
    "PRX",
    "Grupo Aura",
    "Aura Group",
    "Rafael Molina",
    "Geração Z",
    "Eventos",
    "Experiências",
    "PRX UP",
    "PRX RUN",
    "PRX FOUNDERS",
    "PRX PASS",
    "PRX BREAK",
  ],
  authors: [{ name: "Rafael Molina" }, { name: "Viraweb" }],
  openGraph: {
    title: "PRX × GRUPO AURA | A Próxima Geração Precisa de um Lugar para Acontecer",
    description:
      "A PRX leva a comunidade. O Grupo Aura transforma comunidade em experiência. Proposta de parceria estratégica 2026.",
    url: "https://prx.app.br",
    siteName: "PRX × GRUPO AURA",
    images: [
      {
        url: "/brand/prx-logo.png",
        width: 2100,
        height: 635,
        alt: "PRX × GRUPO AURA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/brand/prx-app-icon.svg",
    apple: "/brand/prx-app-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <body suppressHydrationWarning className="font-sans bg-white text-slate-900 selection:bg-[#7607FD] selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
