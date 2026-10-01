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
  title: "FORMA × PRX | A Empresa da Juventude - Media Kit 2026 Rafael Molina",
  description:
    "Proposta de parceria estratégica entre FORMA, PRX e Rafael Molina: De uma empresa de viagens para o maior ecossistema contínuo da Geração Z no Brasil.",
  keywords: [
    "FORMA",
    "PRX",
    "Rafael Molina",
    "Media Kit 2026",
    "Geração Z",
    "Formatura",
    "Fintech Jovem",
    "Forma Sem Filtro",
  ],
  authors: [{ name: "Rafael Molina" }, { name: "Viraweb" }],
  openGraph: {
    title: "FORMA × PRX | A Empresa da Juventude - Media Kit 2026",
    description:
      "Transformando viagens em memórias eternas e conectando a nova geração a finanças, benefícios, eventos e oportunidades contínuas.",
    url: "https://forma.prx.app.br",
    siteName: "FORMA × PRX Media Kit 2026",
    images: [
      {
        url: "/brand/prx-logo.png",
        width: 2100,
        height: 635,
        alt: "FORMA × PRX",
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
