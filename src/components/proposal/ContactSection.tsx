// Hello World
"use client";

import { Phone, Mail, ExternalLink, Sparkles, Video, Share2 } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="py-16 sm:py-24 border-b border-slate-100 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7607FD]">
            07. Conclusão & Próximos Passos
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            A maior empresa jovem do Brasil começa com esta conversa.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            FORMA tem a experiência e a confiança de milhares de famílias. PRX tem o ecossistema, o cartão e a tecnologia. Rafael Molina tem a voz que conecta e engaja. Juntos, acompanharemos uma geração inteira.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <a
            href="https://wa.me/5511989609797"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-6 bg-white border border-slate-200 rounded-sm hover:border-slate-400 transition-all cursor-pointer shadow-xs group"
          >
            <div className="w-10 h-10 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase">Telefone & WhatsApp</span>
            <strong className="text-base font-bold text-slate-950 mt-1 group-hover:text-emerald-600 transition-colors">
              (11) 98960-9797
            </strong>
            <span className="text-xs text-slate-500 mt-2 flex items-center gap-1">
              Conversar no WhatsApp <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <a
            href="mailto:contato@rafaelmolina.com.br"
            className="flex flex-col p-6 bg-white border border-slate-200 rounded-sm hover:border-slate-400 transition-all cursor-pointer shadow-xs group"
          >
            <div className="w-10 h-10 rounded-sm bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase">E-mail Corporativo</span>
            <strong className="text-sm sm:text-base font-bold text-slate-950 mt-1 truncate group-hover:text-blue-600 transition-colors">
              contato@rafaelmolina.com.br
            </strong>
            <span className="text-xs text-slate-500 mt-2 flex items-center gap-1">
              Enviar mensagem <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <a
            href="https://instagram.com/rafaelmolina.prx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-6 bg-white border border-slate-200 rounded-sm hover:border-slate-400 transition-all cursor-pointer shadow-xs group"
          >
            <div className="w-10 h-10 rounded-sm bg-purple-50 text-[#7607FD] flex items-center justify-center mb-4">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase">Instagram Oficial</span>
            <strong className="text-base font-bold text-slate-950 mt-1 group-hover:text-[#7607FD] transition-colors">
              @rafaelmolina.prx
            </strong>
            <span className="text-xs text-slate-500 mt-2 flex items-center gap-1">
              Ver perfil <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <a
            href="https://youtube.com/@rafaelmolinasa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-6 bg-white border border-slate-200 rounded-sm hover:border-slate-400 transition-all cursor-pointer shadow-xs group"
          >
            <div className="w-10 h-10 rounded-sm bg-red-50 text-red-600 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase">Canal YouTube</span>
            <strong className="text-base font-bold text-slate-950 mt-1 group-hover:text-red-600 transition-colors">
              @rafaelmolinasa
            </strong>
            <span className="text-xs text-slate-500 mt-2 flex items-center gap-1">
              Assistir vídeos <ExternalLink className="w-3 h-3" />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}
