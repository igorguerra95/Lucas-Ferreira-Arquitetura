import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Maximize2,
  X,
} from 'lucide-react';
import { PROJECTS } from '../data/studioData';
import type { ProjectCategory, ProjectItem } from '../types';

interface PortfolioSectionProps {
  onContactClick: (projectTitle?: string) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'Todos',
  'Residencial',
  'Comercial',
  'Interiores',
];

export function PortfolioSection({ onContactClick }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const activeProject: ProjectItem | null =
    selectedIndex !== null && filteredProjects[selectedIndex]
      ? filteredProjects[selectedIndex]
      : null;

  useEffect(() => {
    if (selectedIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredProjects.length
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredProjects.length) % filteredProjects.length
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex, filteredProjects.length]);

  const handleCategoryChange = (category: ProjectCategory) => {
    setSelectedIndex(null);
    setActiveCategory(category);
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-20 lg:py-28 bg-background"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        {/* Cabeçalho de Seção + Controle Segmentado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <p className="text-xs tracking-[0.18em] uppercase text-gold-deep mb-3">
              Portfólio Selecionado
            </p>
            <h2
              id="portfolio-heading"
              className="font-serif font-medium text-foreground tracking-[-0.025em] leading-[1.04] text-[clamp(2.25rem,4vw,3.5rem)] [text-wrap:balance]"
            >
              Obras onde a forma responde ao lugar e ao programa.
            </h2>
            <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-muted-foreground font-light">
              Cada projeto nasce de uma investigação singular sobre topografia,
              luz natural e longevidade material, abrangendo residências
              contemporâneas, sedes corporativas e interiores sob medida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-5 flex lg:justify-end"
          >
            <div
              role="tablist"
              aria-label="Filtrar projetos por categoria"
              className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-surface border border-border"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => handleCategoryChange(category)}
                    className={`min-h-[40px] px-4 py-2 text-xs font-bold tracking-[0.06em] uppercase transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                      isActive
                        ? 'bg-obsidian text-obsidian-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Grade Assimétrica de Portfólio (12 Colunas) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const isHeroTile =
              activeCategory === 'Todos' && index === 0;
            const colSpanClass =
              activeCategory === 'Todos'
                ? isHeroTile
                  ? 'md:col-span-2 lg:col-span-7'
                  : index === 1
                    ? 'lg:col-span-5'
                    : 'lg:col-span-4'
                : 'lg:col-span-6';

            const hasImageError = Boolean(failedImages[project.id]);

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.65,
                  delay: Math.min(index * 0.07, 0.28),
                  ease: 'easeOut',
                }}
                className={`${colSpanClass} group flex flex-col bg-surface-elevated border border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Ampliar galeria e ficha técnica de ${project.title}`}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-obsidian text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {!hasImageError ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      onError={() =>
                        setFailedImages((prev) => ({
                          ...prev,
                          [project.id]: true,
                        }))
                      }
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-obsidian flex flex-col items-center justify-center p-6 text-center">
                      <Compass
                        className="w-8 h-8 text-gold mb-3"
                        strokeWidth={1.25}
                        aria-hidden="true"
                      />
                      <span className="font-serif text-xl text-obsidian-foreground">
                        {project.title}
                      </span>
                    </div>
                  )}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/20 transition-colors duration-200"
                  />

                  <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-obsidian/88 text-obsidian-foreground text-[11px] tracking-[0.08em] uppercase border border-border-obsidian opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                    <span>Galeria</span>
                  </span>
                </button>

                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    {/* Metadados limpos sem pílulas */}
                    <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.06em] text-muted-foreground tabular-nums">
                      <span className="text-gold-deep font-bold uppercase tracking-[0.1em]">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.area}</span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-medium tracking-[-0.015em] text-foreground">
                      <button
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        className="text-left hover:text-gold-deep transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      >
                        {project.title}
                      </button>
                    </h3>

                    <p className="mt-3 text-sm leading-[1.65] text-muted-foreground font-light">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between gap-4">
                    <span className="text-xs text-muted-foreground truncate">
                      {project.location}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.08em] uppercase text-foreground hover:text-gold-deep transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Ver detalhes</span>
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Rodapé de Conversão do Portfólio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-14 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <p className="font-serif text-2xl sm:text-3xl text-foreground tracking-[-0.015em]">
            Deseja desenvolver um estudo preliminar para seu terreno ou imóvel?
          </p>
          <button
            type="button"
            onClick={() => onContactClick()}
            className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-bold tracking-[0.1em] uppercase bg-obsidian text-obsidian-foreground border border-obsidian hover:bg-obsidian-elevated hover:border-gold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <span>Entrar em contato</span>
            <ArrowUpRight className="w-4 h-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox / Galeria de Fotos */}
      <AnimatePresence>
        {activeProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-project-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed inset-0 bg-obsidian/88 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.985 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[1160px] max-h-[92vh] overflow-y-auto bg-obsidian text-obsidian-foreground border border-border-obsidian shadow-architectural grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Fechar */}
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Fechar galeria"
                className="absolute top-4 right-4 z-20 inline-flex items-center justify-center w-11 h-11 bg-obsidian/90 text-obsidian-foreground border border-border-obsidian hover:border-gold transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              </button>

              {/* Imagem em Alta Resolução */}
              <div className="lg:col-span-7 relative bg-obsidian-elevated aspect-[4/3] lg:aspect-auto lg:min-h-[540px]">
                {!failedImages[activeProject.id] ? (
                  <img
                    src={activeProject.image}
                    alt={activeProject.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center p-8">
                    <Compass className="w-10 h-10 text-gold mb-3" strokeWidth={1.25} aria-hidden="true" />
                    <span className="font-serif text-2xl">{activeProject.title}</span>
                  </div>
                )}
              </div>

              {/* Dossiê Arquitetônico */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.08em] text-obsidian-muted tabular-nums pr-12">
                    <span className="text-gold uppercase font-bold tracking-[0.12em]">
                      {activeProject.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProject.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProject.area}</span>
                  </div>

                  <h3
                    id="lightbox-project-title"
                    className="mt-4 font-serif text-3xl sm:text-4xl font-medium tracking-[-0.02em] text-obsidian-foreground"
                  >
                    {activeProject.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-[1.7] text-obsidian-muted font-light">
                    {activeProject.concept}
                  </p>

                  <dl className="mt-8 pt-6 border-t border-border-obsidian space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-obsidian-muted">Localização</dt>
                      <dd className="text-obsidian-foreground text-right">
                        {activeProject.location}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-obsidian-muted">Superfície</dt>
                      <dd className="text-obsidian-foreground tabular-nums text-right">
                        {activeProject.area}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-obsidian-muted shrink-0">Materialidade</dt>
                      <dd className="text-obsidian-foreground text-right">
                        {activeProject.materials}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="space-y-4 pt-6 border-t border-border-obsidian">
                  <button
                    type="button"
                    onClick={() => {
                      const title = activeProject.title;
                      setSelectedIndex(null);
                      onContactClick(title);
                    }}
                    className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-[0.1em] uppercase bg-gradient-gold text-obsidian cursor-pointer hover:opacity-95 transition-opacity"
                  >
                    <span>Entrar em contato</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                  </button>

                  {filteredProjects.length > 1 && (
                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedIndex(
                            (prev) =>
                              ((prev ?? 0) - 1 + filteredProjects.length) %
                              filteredProjects.length
                          )
                        }
                        className="inline-flex items-center gap-2 py-2 text-xs tracking-[0.08em] uppercase text-obsidian-muted hover:text-gold transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                        <span>Anterior</span>
                      </button>

                      <span className="text-xs text-obsidian-muted tabular-nums">
                        {(selectedIndex ?? 0) + 1} / {filteredProjects.length}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedIndex(
                            (prev) => ((prev ?? 0) + 1) % filteredProjects.length
                          )
                        }
                        className="inline-flex items-center gap-2 py-2 text-xs tracking-[0.08em] uppercase text-obsidian-muted hover:text-gold transition-colors cursor-pointer"
                      >
                        <span>Próximo</span>
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
