import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutProcessSection } from './components/AboutProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [prefilledProject, setPrefilledProject] = useState<string | undefined>(
    undefined
  );

  const handleContactClick = (projectTitle?: string) => {
    if (projectTitle) {
      setPrefilledProject(projectTitle);
    }
    const contactEl = document.querySelector('#contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-obsidian focus:text-obsidian-foreground focus:border focus:border-gold"
        >
          Pular para o conteúdo principal
        </a>

        <Navbar onContactClick={handleContactClick} />

        <main id="conteudo-principal" className="flex-1">
          <HeroSection onContactClick={handleContactClick} />
          <PortfolioSection onContactClick={handleContactClick} />
          <AboutProcessSection onContactClick={handleContactClick} />
          <ContactSection prefilledProject={prefilledProject} />
        </main>

        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </MotionConfig>
  );
}
