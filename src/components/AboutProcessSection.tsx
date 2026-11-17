import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Compass } from 'lucide-react';
import {
  CREATIVE_PROCESS,
  MATERIAL_PRINCIPLES,
  STUDIO_PORTRAIT_IMAGE,
} from '../data/studioData';

interface AboutProcessSectionProps {
  onContactClick: (projectTitle?: string) => void;
}

export function AboutProcessSection({
  onContactClick,
}: AboutProcessSectionProps) {
  const [portraitError, setPortraitError] = useState(false);

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-20 lg:py-28 bg-gradient-obsidian text-obsidian-foreground border-y border-border-obsidian"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        {/* Bloco 1: Visão Estética & Retrato do Estúdio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Retrato */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col"
          >
            <figure className="relative flex-1 min-h-[380px] sm:min-h-[460px] border border-border-obsidian bg-obsidian-elevated overflow-hidden">
              {!portraitError ? (
                <img
                  src={STUDIO_PORTRAIT_IMAGE.src}
                  alt={STUDIO_PORTRAIT_IMAGE.alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={() => setPortraitError(true)}
                  className="w-full h-full object-cover object-top lg:absolute lg:inset-0"
                />
              ) : (
                <div className="w-full h-full min-h-[380px] flex flex-col items-center justify-center p-8 text-center">
                  <Compass className="w-10 h-10 text-gold mb-4" strokeWidth={1.25} aria-hidden="true" />
                  <p className="font-serif text-2xl text-obsidian-foreground">
                    Lucas Ferreira
                  </p>
                </div>
              )}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-obsidian/85 via-obsidian/35 to-transparent"
              />

              <figcaption className="relative lg:absolute lg:inset-x-0 lg:bottom-0 p-5 sm:p-6 bg-obsidian lg:bg-transparent">
                <span className="block font-serif text-xl text-obsidian-foreground">
                  Lucas Ferreira
                </span>
                <span className="block text-xs tracking-[0.08em] text-obsidian-muted mt-0.5">
                  Arquiteto Titular · Direção Criativa
                </span>
              </figcaption>
            </figure>
          </motion.div>

          {/* Manifesto & Princípios Materiais */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-gold mb-4">
                Sobre &amp; Visão Estética
              </p>

              <h2
                id="about-heading"
                className="font-serif font-medium text-obsidian-foreground tracking-[-0.025em] leading-[1.06] text-[clamp(2.25rem,4vw,3.5rem)] [text-wrap:balance]"
              >
                Rigor construtivo a serviço da permanência e da serenidade.
              </h2>

              <div className="mt-6 space-y-4 max-w-[62ch] text-base leading-[1.75] text-obsidian-muted font-light">
                <p>
                  À frente do estúdio Lucas Ferreira Arquitetura, conduzimos
                  cada encomenda como uma obra irrepetível. Afastamo-nos de
                  modismos passageiros para perseguir uma arquitetura clara em sua
                  estrutura, generosa nas proporções e sensível à passagem do
                  tempo.
                </p>
                <p>
                  Do traço inicial em croqui à especificação de ferragens,
                  luminotécnica e mobiliário fixo, o projeto é tratado como um
                  organismo único — onde conforto térmico, silêncio acústico e
                  nobreza material sustentam a experiência cotidiana.
                </p>
              </div>
            </div>

            {/* Três Pilares Materiais separados por hairlines */}
            <div className="mt-10 pt-8 border-t border-border-obsidian grid grid-cols-1 sm:grid-cols-3 gap-8">
              {MATERIAL_PRINCIPLES.map((principle) => (
                <div key={principle.title} className="space-y-2">
                  <h3 className="font-serif text-xl font-medium text-gold">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-[1.65] text-obsidian-muted font-light">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bloco 2: Processo Criativo */}
        <div className="mt-20 lg:mt-24 pt-16 border-t border-border-obsidian">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
          >
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-gold mb-3">
                Processo Criativo
              </p>
              <h3 className="font-serif font-medium text-obsidian-foreground tracking-[-0.02em] leading-[1.08] text-[clamp(2rem,3.4vw,2.85rem)] [text-wrap:balance]">
                Quatro etapas de precisão do conceito à entrega da obra.
              </h3>
            </div>

            <button
              type="button"
              onClick={() => onContactClick()}
              className="self-start lg:self-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs font-bold tracking-[0.1em] uppercase bg-gradient-gold text-obsidian hover:opacity-95 transition-opacity cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-obsidian">
            {CREATIVE_PROCESS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                className="p-6 sm:p-8 border-r border-b border-border-obsidian bg-obsidian-elevated/45 flex flex-col justify-between gap-6"
              >
                <div>
                  <span className="font-serif text-3xl text-gold tabular-nums block">
                    {step.number}
                  </span>
                  <h4 className="mt-4 font-serif text-2xl font-medium text-obsidian-foreground tracking-[-0.01em]">
                    {step.title}
                  </h4>
                  <p className="mt-3 text-sm leading-[1.7] text-obsidian-muted font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-obsidian/80">
                  <span className="block text-[11px] tracking-[0.12em] uppercase text-obsidian-muted">
                    Entregável
                  </span>
                  <span className="mt-1 block text-xs font-bold text-obsidian-foreground">
                    {step.deliverable}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
