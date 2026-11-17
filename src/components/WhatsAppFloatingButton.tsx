import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-5 right-5 z-30">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full border border-gold/70 animate-whatsapp-halo"
      />
      <a
        href={STUDIO_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar pelo WhatsApp (${STUDIO_INFO.phone})`}
        title={`WhatsApp: ${STUDIO_INFO.phone}`}
        className="relative flex items-center justify-center w-13 h-13 rounded-full bg-obsidian text-gold border border-gold/65 shadow-gold-glow hover:bg-obsidian-elevated hover:scale-105 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <MessageCircle className="w-6 h-6" strokeWidth={1.65} aria-hidden="true" />
      </a>
    </div>
  );
}
