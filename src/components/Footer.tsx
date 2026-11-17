import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-obsidian text-obsidian-foreground border-t border-border-obsidian">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-obsidian">
          <div className="md:col-span-5 space-y-3">
            <p className="font-serif text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-obsidian-foreground">
              {STUDIO_INFO.fullBrandName}
            </p>
            <p className="text-sm text-obsidian-muted font-light max-w-[40ch] leading-relaxed">
              Arquitetura autoral, planejamento espacial e curadoria de
              interiores com rigor técnico e permanência estética.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-gold">
              Navegação
            </p>
            <ul className="space-y-2 text-sm text-obsidian-muted">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#portfolio', label: 'Portfólio' },
                { href: '#sobre', label: 'Sobre & Processo' },
                { href: '#contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="hover:text-obsidian-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-gold">
              Estúdio
            </p>
            <div className="space-y-2 text-sm text-obsidian-muted">
              <p>{STUDIO_INFO.address}</p>
              <p className="tabular-nums">Telefone: {STUDIO_INFO.phone}</p>
              <p>Horário: {STUDIO_INFO.hours}</p>
              <a
                href={STUDIO_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 pt-1 text-xs font-bold tracking-[0.08em] uppercase text-gold hover:text-obsidian-foreground transition-colors"
              >
                <span>Localização no Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-obsidian-muted">
          <p>
            © {new Date().getFullYear()} {STUDIO_INFO.fullBrandName}. Todos os
            direitos reservados.
          </p>
          <p>Arquitetura · Design Espacial · Interiores</p>
        </div>
      </div>
    </footer>
  );
}
