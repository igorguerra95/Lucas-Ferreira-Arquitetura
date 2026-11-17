import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface NavbarProps {
  onContactClick: (projectTitle?: string) => void;
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-background/92 backdrop-blur-md border-b border-border shadow-architectural'
            : 'bg-background/80 backdrop-blur-sm border-b border-border/60'
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12 h-16 md:h-[72px] flex items-center justify-between gap-8">
          {/* Zona 1: Marca em linha única */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-foreground whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {STUDIO_INFO.brandName}
          </a>

          {/* Zona 2: Links concisos em linha única */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative py-1 text-sm font-normal tracking-[0.02em] text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-gold-deep hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: Ação primária única + gatilho do drawer mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onContactClick()}
              className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold tracking-[0.08em] uppercase bg-obsidian text-obsidian-foreground border border-obsidian hover:bg-obsidian-elevated hover:border-gold transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" strokeWidth={1.75} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              className="md:hidden inline-flex items-center justify-center w-11 h-11 text-foreground border border-border bg-surface-elevated hover:border-foreground/40 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Sheet / Drawer Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação móvel"
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-obsidian/65 backdrop-blur-xs"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 w-[min(86vw,360px)] bg-obsidian text-obsidian-foreground border-l border-border-obsidian flex flex-col justify-between p-6 shadow-architectural"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border-obsidian">
                  <span className="font-serif text-xl font-semibold tracking-[-0.02em] text-obsidian-foreground">
                    {STUDIO_INFO.fullBrandName}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Fechar menu"
                    className="inline-flex items-center justify-center w-11 h-11 text-obsidian-foreground border border-border-obsidian hover:border-gold transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </div>

                <nav aria-label="Links de navegação móvel" className="mt-8 flex flex-col gap-2">
                  {NAV_LINKS.map((item, idx) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="flex items-baseline justify-between py-3.5 border-b border-border-obsidian/60 font-serif text-2xl text-obsidian-foreground hover:text-gold transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="font-sans text-xs tracking-[0.14em] text-obsidian-muted tabular-nums">
                        0{idx + 1}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 space-y-5">
                <div className="text-xs text-obsidian-muted space-y-1">
                  <p>{STUDIO_INFO.address}</p>
                  <p className="tabular-nums">{STUDIO_INFO.phone}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onContactClick();
                  }}
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-[0.1em] uppercase bg-gradient-gold text-obsidian cursor-pointer transition-opacity hover:opacity-95"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
