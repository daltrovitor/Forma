// Hello World
"use client";

import { useState } from "react";
import Image from "next/image";
import { PdfSlideFrame } from "./PdfSlideFrame";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface EpisodeData {
  num: string;
  tag: string;
  title: string;
  img: string;
  content: string[];
  mission: string;
  extra?: string;
}

const EPISODES_DATA: EpisodeData[] = [
  {
    num: "EP. 01",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 01 — VOCÊ ESTÁ PRONTO PRA PORTO?",
    img: "/pdf-images/p7_0_X4.png",
    content: [
      "Você chega na escola e coloca os alunos diante de um teste de prontidão para a viagem. Perguntas absurdamente rápidas:",
      "• \"Quantas horas você pretende dormir?\"",
      "• \"Você já sabe quem vai beijar?\"",
      "• \"Você já sabe o que vai vestir?\"",
      "• \"Quem vai perder o celular?\"",
      "• \"Quem vai voltar namorando?\"",
      "• \"Quem vai voltar solteiro?\"",
      "Entre respostas e acusações dos amigos, você seleciona os personagens mais engraçados.",
    ],
    mission: "MISSÃO FINAL: Cada participante tem 30 segundos para vender sua própria viagem. No final, todos escolhem qual experiência querem disputar.",
  },
  {
    num: "EP. 02",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 02 — PAI, DEIXA EU IR",
    img: "/pdf-images/p8_0_X4.png",
    content: [
      "Você coloca pais e filhos frente a frente.",
      "O filho responde: \"Meu pai confia em mim.\"",
      "O pai: \"Confio.\"",
      "Você: \"Então por que ele está olhando assim?\"",
      "Perguntas rápidas, teste de confiança e situações hipotéticas:",
      "• \"Seu filho chega às 5h da manhã. Você pergunta onde ele estava?\"",
      "• \"Ele posta uma foto com alguém que você nunca viu. Você investiga?\"",
      "• \"Você daria dinheiro extra?\"",
      "O humor vem do choque entre gerações.",
    ],
    mission: "FINAL: Pai e filho fazem uma aposta. Se o filho vencer, ganha uma chance extra na disputa por uma experiência Forma.",
  },
  {
    num: "EP. 03",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 03 — MEU NAMORADO NÃO VAI",
    img: "/pdf-images/p9_0_X4.png",
    content: [
      "Um episódio inteiro sobre os casais que não viajarão juntos. Você coloca os dois diante de perguntas que eles prefeririam não responder.",
      "\"Vai sentir ciúme?\" \"Pode dançar com outra pessoa?\" \"Pode trocar Instagram?\" \"Pode beijar alguém?\" \"Quem é mais ciumento?\"",
      "Depois vem o TESTE DE CONFIANÇA: Você mostra situações e cada um levanta uma placa: ❤️ TRANQUILO ou 🚨 TEMOS UM PROBLEMA.",
      "O melhor momento é quando eles discordam.",
    ],
    mission: "MISSÃO: O casal precisa responder 5 perguntas sobre o outro. Quem acertar mais ganha uma vantagem para concorrer às experiências.",
  },
  {
    num: "EP. 04",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 04 — A MALA",
    img: "/pdf-images/p10_0_X4.png",
    content: [
      "Você cria o clássico: \"O QUE TEM NA SUA MALA?\" Só que em ritmo de interrogatório. O aluno abre a mala e você vai encontrando coisas.",
      "\"Você vai para Porto ou para uma mudança definitiva?\" \"Por que você trouxe quatro perfumes?\" \"Você realmente acha que vai usar isso?\" \"Quantos looks você preparou para uma viagem de quatro dias?\"",
      "Depois vem o DESAFIO DA MALA: 60 segundos para montar uma mala fictícia com objetos espalhados. O grupo decide: ESSENCIAL × DESNECESSÁRIO.",
    ],
    mission: "E obviamente alguém vai tentar levar o secador.",
  },
  {
    num: "EP. 05",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 05 — VOCÊ CONHECE O ARTISTA?",
    img: "/pdf-images/p11_0_X4.png",
    content: [
      "Aqui entra música, game e expectativa.",
      "Você toca 3 segundos de uma música de um dos artistas que será atração da Forma. Eles precisam adivinhar. Depois: 5 segundos. Depois só a introdução. \"Que música é essa?\"",
    ],
    mission: "FINAL BOSS: Você dá 30 segundos para cada participante provar que merece conhecer o artista no camarim. Pode cantar, dançar, contar uma história ou imitar. No final: \"Você está concorrendo ao camarim.\"",
  },
  {
    num: "EP. 06",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 06 — QUEM É O MAIS PROVÁVEL?",
    img: "/pdf-images/p12_0_X4.png",
    content: [
      "Você junta um grupo de amigos. A cada pergunta apontam para quem acreditam que seja o mais provável:",
      "• \"Quem é o mais provável de perder o celular?\"",
      "• \"Quem vai beijar primeiro?\"",
      "• \"Quem vai dormir primeiro?\"",
      "• \"Quem vai ficar famoso?\"",
      "• \"Quem vai voltar da viagem namorando?\"",
      "Aí começa o caos. Você transforma os próprios amigos em jurados uns dos outros.",
    ],
    mission: "MISSÃO: O mais votado precisa provar que os amigos estão errados.",
  },
  {
    num: "EP. 07",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 07 — PROMOTER: VOCÊ É BOM MESMO?",
    img: "/pdf-images/p13_0_X4.png",
    content: [
      "Esse episódio é estratégico para a Forma. Você pega promoters que já se cadastraram e transforma o processo em entretenimento. Não pergunta: \"Por que você quer ser promoter?\".",
      "Você pergunta: \"Você consegue vender uma viagem sem falar a palavra viagem?\"",
      "\"Convença um aluno que não quer ir.\" \"Venda Porto para alguém que odeia praia.\" \"Faça sua mãe deixar você viajar em 20 segundos.\"",
    ],
    mission: "RANKING: 🔥 CARISMA | 🧠 CRIATIVIDADE | 🎯 PODER DE CONVENCIMENTO | 😂 CAOS. O melhor promoter ganha pontuação extra nas experiências.",
  },
  {
    num: "EP. 08",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 08 — O QUE VOCÊ NÃO CONTARIA PRA SUA MÃE",
    img: "/pdf-images/p14_0_X4.png",
    content: [
      "Esse é o episódio mais \"Pânico\". Você cria perguntas em envelopes. O participante escolhe: RESPONDE ou PASSA. Mas quem passa precisa pagar uma prenda engraçada.",
      "Perguntas: \"Qual foi a maior mentira que você já contou para sair?\", \"Quem você não gostaria de encontrar nessa viagem?\", \"Você já stalkeou alguém aqui?\".",
      "Sempre mantendo o humor sem transformar o programa em exposição humilhante.",
    ],
    mission: "RECOMPENSA: Quem tiver coragem suficiente ganha uma segunda chance de concorrer à experiência escolhida.",
  },
  {
    num: "EP. 09",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 09 — QUEM VAI SOBREVIVER À VIAGEM?",
    img: "/pdf-images/p15_0_X4.png",
    content: [
      "Você transforma os alunos em personagens de um game. Situações:",
      "• \"Seu celular morreu.\"",
      "• \"Seu amigo sumiu.\"",
      "• \"Você perdeu o grupo.\"",
      "• \"Seu dinheiro acabou.\"",
      "• \"Seu ex está na mesma festa.\"",
      "Cada participante tem 10 segundos para resolver. Você narra como se fosse um videogame: LEVEL 01, LEVEL 02 e BOSS FIGHT.",
    ],
    mission: "No final, você revela quem tem maior índice de sobrevivência Forma.",
  },
  {
    num: "EP. 10",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 10 — VOCÊ SABE O QUE ESTÁ TE ESPERANDO?",
    img: "/pdf-images/p16_0_X4.png",
    content: [
      "Agora você começa a criar expectativa sobre a própria viagem. Você apresenta experiências, festas, artistas, destinos e situações — algumas verdadeiras, outras falsas.",
      "Os participantes precisam descobrir: FORMA FACT ou FORMA FAKE.",
      "Depois você revela algumas coisas que eles não sabiam que poderiam viver na viagem.",
    ],
    mission: "FINAL: \"Qual dessas experiências você faria qualquer coisa para viver?\" Essa resposta define a disputa de cada um.",
  },
  {
    num: "EP. 11",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 11 — O ÚLTIMO TESTE",
    img: "/pdf-images/p17_0_X4.png",
    content: [
      "Neste episódio, eu abordo jovens e mostrarei, em um papel, quais jovens ganharam cada selo.",
      "A ideia é captar a reação de surpresa de quem lê o papel, porém, a câmera não revelará o que está no papel.",
      "Na verdade, estará escrito: Todos ganharam.",
    ],
    mission: "Mas isso só será revelado no episódio seguinte.",
  },
  {
    num: "EP. 12",
    tag: "EPISÓDIO PRÉ-VIAGEM",
    title: "EP. 12 — UNLOCKED",
    img: "/pdf-images/p18_0_X4.png",
    content: [
      "O episódio antes da viagem. Você reúne os participantes. Começa a revelação: Todos venceram. Eu chamo os vencedores e entrego Selo Forma pra cada um.",
      "E então vem a última surpresa: CADA VENCEDOR RECEBE 2 SELOS EXTRAS. Mas não pode usar. Precisa presentear jovens de outras cidades que estarão na viagem.",
      "Isso cria uma ponte linda entre Goiânia e o resto do Brasil.",
    ],
    mission: "E fecha a temporada com: \"Vocês passaram 12 episódios tentando ganhar experiências. Agora vocês têm a chance de fazer alguém ganhar também.\". Tela preta. NEXT STOP: PORTO.",
  },
  {
    num: "PORTO",
    tag: "VIDEOS - PORTO",
    title: "FORMA PORTO — REAL TIME",
    img: "/pdf-images/p19_0_X4.png",
    content: [
      "Durante a viagem, o projeto sai do ambiente das escolas e entra dentro da experiência real.",
      "Os conteúdos serão gravados e publicados em real time, acompanhando o que estiver acontecendo em Porto: chegada, festas, bastidores, desafios, personagens, surpresas, experiências VIP e momentos espontâneos dos alunos.",
      "A linguagem será rápida, irreverente e cinematográfica, com entrevistas de rua, humor ácido, missões, desafios e histórias reais.",
    ],
    mission: "Mais do que registrar a viagem, a proposta é fazer quem está em casa sentir: \"Eu precisava estar aí.\"",
  },
];

export function SlideEpisodesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? EPISODES_DATA.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => (i === EPISODES_DATA.length - 1 ? 0 : i + 1));
  };

  const cur = EPISODES_DATA[currentIndex];

  return (
    <PdfSlideFrame id="episodios">
      {/* Slider Controls Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-300/80 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-black uppercase tracking-wider text-[#7607FD]">
            {cur.tag}
          </span>
          <span className="text-xs font-mono text-slate-500">
            ({currentIndex + 1} de {EPISODES_DATA.length})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Episódio anterior"
            className="w-8 h-8 rounded-xs border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center cursor-pointer transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-slate-700" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próximo episódio"
            className="w-8 h-8 rounded-xs border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center cursor-pointer transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-slate-700" />
          </button>
        </div>
      </div>

      {/* Slide Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Column: Real PDF Episode Image */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-3/4 rounded-xs overflow-hidden border border-slate-400 shadow-md">
            <Image
              src={cur.img}
              alt={cur.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>

        {/* Right Column: Episode Text & Mission */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="relative inline-block self-start pb-1">
              <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-900">
                {cur.num}
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 rounded-full" />
            </div>

            <h3 className="mt-2 text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
              {cur.title}
            </h3>

            <div className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {cur.content.map((p, idx) => (
                <p key={idx} className={p.startsWith("•") ? "pl-2 font-medium" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-xs">
            <p className="text-xs sm:text-sm text-purple-950 font-bold leading-snug">
              {cur.mission}
            </p>
          </div>
        </div>

      </div>

      {/* Episode Thumbnail Navigation Bar */}
      <div className="mt-8 pt-6 border-t border-slate-300/80 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {EPISODES_DATA.map((ep, idx) => (
          <button
            key={ep.num}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xs shrink-0 cursor-pointer border transition-colors ${
              idx === currentIndex
                ? "bg-slate-950 text-white border-slate-950"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
            }`}
          >
            {ep.num}
          </button>
        ))}
      </div>
    </PdfSlideFrame>
  );
}
