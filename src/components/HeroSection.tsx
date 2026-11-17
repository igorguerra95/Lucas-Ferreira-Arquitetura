import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Compass } from 'lucide-react';
import { HERO_FEATURED_IMAGE, STUDIO_METRICS } from '../data/studioData';
import { CountUpMetric } from './CountUpMetric';

interface HeroSectionProps {
  onContactClick: (projectTitle?: string) => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  const handleScrollToPortfolio = () => {
    const el = document.querySelector('#portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24 bg-gradient-stone bg-grain border-b border-border"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        {/* Split Assimétrico 12 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Coluna Esquerda: Hierarquia Tipográfica */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2 lg:py-4">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0, ease: 'easeOut' }}
                className="text-xs sm:text-sm font-normal tracking-[0.18em] uppercase text-gold-deep mb-5"
              >
                Lucas Ferreira Arquitetura · Estúdio Autoral
              </motion.p>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.08, ease: 'easeOut' }}
                className="font-serif font-medium text-foreground tracking-[-0.03em] leading-[0.98] text-[clamp(3rem,5.5vw,5.5rem)] [text-wrap:balance]"
              >
                Arquitetura que esculpe a luz e o silêncio.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
                className="mt-7 max-w-[54ch] text-base sm:text-lg leading-[1.7] text-muted-foreground font-light"
              >
                Projetamos residências de alto padrão, espaços corporativos e
                interiores atemporais onde matéria natural, rigor estrutural e
                proporção construtiva se encontram em absoluta harmonia.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.24, ease: 'easeOut' }}
              className="mt-10 pt-8 border-t border-border flex flex-wrap items-center gap-5"
            >
              <button
                type="button"
                onClick={() => onContactClick()}
                className="min-h-[48px] inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-bold tracking-[0.1em] uppercase bg-obsidian text-obsidian-foreground border border-obsidian hover:bg-obsidian-elevated hover:border-gold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 shadow-architectural focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={handleScrollToPortfolio}
                className="min-h-[48px] inline-flex items-center gap-2 px-3 py-2 text-sm font-normal text-foreground hover:text-gold-deep transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span>Explorar obras selecionadas</span>
                <ArrowDownRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </motion.div>
          </div>

          {/* Coluna Direita: Projeto Autoral em Destaque */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col"
          >
            <figure className="relative flex-1 min-h-[340px] sm:min-h-[440px] lg:min-h-[520px] border border-border bg-obsidian overflow-hidden shadow-architectural">
              {!imgError ? (
                <img
                  src={HERO_FEATURED_IMAGE.src}
                  alt={HERO_FEATURED_IMAGE.alt}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center lg:absolute lg:inset-0"
                />
              ) : (
                <div className="w-full h-full min-h-[340px] bg-gradient-obsidian flex flex-col items-center justify-center p-8 text-center">
                  <Compass className="w-10 h-10 text-gold mb-4" strokeWidth={1.25} aria-hidden="true" />
                  <p className="font-serif text-2xl text-obsidian-foreground">
                    {HERO_FEATURED_IMAGE.captionTitle}
                  </p>
                </div>
              )}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-transparent"
              />

              <figcaption className="relative lg:absolute lg:inset-x-0 lg:bottom-0 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 bg-obsidian lg:bg-transparent text-obsidian-foreground">
                <div>
                  <span className="block font-serif text-xl sm:text-2xl font-medium tracking-[-0.01em]">
                    {HERO_FEATURED_IMAGE.captionTitle}
                  </span>
                  <span className="block text-xs tracking-[0.06em] text-obsidian-muted mt-0.5">
                    {HERO_FEATURED_IMAGE.captionMeta}
                  </span>
                </div>
                <span className="text-xs tracking-[0.12em] uppercase text-gold whitespace-nowrap">
                  Obra em destaque
                </span>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Faixa Completa de Indicadores do Estúdio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-14 lg:mt-20 pt-10 border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {STUDIO_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-medium tracking-[-0.02em] text-foreground">
                <CountUpMetric value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm font-bold tracking-[0.04em] text-foreground">
                {metric.label}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground max-w-[30ch]">
                {metric.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
