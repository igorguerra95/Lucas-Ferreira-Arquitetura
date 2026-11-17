import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import type { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledProject?: string;
}

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  typology: 'Residencial',
  areaEstimate: '',
  message: '',
};

export function ContactSection({ prefilledProject }: ContactSectionProps) {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!prefilledProject) return;
    setSubmitted(false);
    setForm((prev) => ({
      ...prev,
      message: `Gostaria de solicitar informações e agendar uma conversa sobre um projeto com referência em "${prefilledProject}".`,
    }));
    const timer = window.setTimeout(() => {
      nameInputRef.current?.focus();
    }, 350);
    return () => window.clearTimeout(timer);
  }, [prefilledProject]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setErrorMsg(
        'Por favor, preencha seu nome completo, e-mail e telefone para retornarmos o contato.'
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setErrorMsg('Informe um endereço de e-mail válido.');
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
    setErrorMsg(null);
  };

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-28 bg-background bg-grain"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Informações Formais do Estúdio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-gold-deep mb-3">
                Contato &amp; Novos Projetos
              </p>
              <h2
                id="contact-heading"
                className="font-serif font-medium text-foreground tracking-[-0.025em] leading-[1.06] text-[clamp(2.25rem,3.8vw,3.4rem)] [text-wrap:balance]"
              >
                Inicie uma conversa com o estúdio.
              </h2>
              <p className="mt-4 text-base leading-[1.7] text-muted-foreground font-light max-w-[46ch]">
                Atendemos novos estudos residenciais, corporativos e de
                interiores mediante agendamento prévio. Compartilhe o contexto do
                seu terreno ou imóvel.
              </p>
            </div>

            <div className="pt-6 border-t border-border space-y-6">
              <div className="flex items-start gap-4">
                <MapPin
                  className="w-5 h-5 text-gold-deep shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs font-bold tracking-[0.1em] uppercase text-muted-foreground">
                    Endereço do Estúdio
                  </span>
                  <span className="mt-1 block text-base text-foreground">
                    {STUDIO_INFO.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  className="w-5 h-5 text-gold-deep shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs font-bold tracking-[0.1em] uppercase text-muted-foreground">
                    Telefone &amp; WhatsApp
                  </span>
                  <a
                    href={STUDIO_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-base text-foreground hover:text-gold-deep transition-colors tabular-nums"
                  >
                    {STUDIO_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock
                  className="w-5 h-5 text-gold-deep shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs font-bold tracking-[0.1em] uppercase text-muted-foreground">
                    Horário de Atendimento
                  </span>
                  <span className="mt-1 block text-base text-foreground">
                    {STUDIO_INFO.hours}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border flex flex-wrap gap-4">
              <a
                href={STUDIO_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-[0.08em] uppercase border border-border bg-surface-elevated text-foreground hover:border-foreground transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span>Ver no Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold-deep" strokeWidth={1.75} aria-hidden="true" />
              </a>

              <a
                href={STUDIO_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-[0.08em] uppercase border border-border bg-surface-elevated text-foreground hover:border-foreground transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold-deep" strokeWidth={1.75} aria-hidden="true" />
                <span>Atendimento via WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário de Briefing Arquitetônico */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7 bg-surface-elevated border border-border p-6 sm:p-10 shadow-architectural"
          >
            {submitted ? (
              <div className="py-10 text-left space-y-5">
                <div className="inline-flex items-center gap-3 text-foreground">
                  <CheckCircle2
                    className="w-7 h-7 text-gold-deep shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-3xl font-medium">
                    Solicitação registrada com sucesso.
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground max-w-[52ch]">
                  Agradecemos o contato, <strong className="font-bold text-foreground">{form.name}</strong>.
                  Nossa equipe analisará as informações enviadas para o projeto{' '}
                  <strong className="font-bold text-foreground">{form.typology}</strong> e retornará
                  por e-mail ou telefone para agendar uma reunião inicial.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href={STUDIO_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-[0.1em] uppercase bg-obsidian text-obsidian-foreground hover:bg-obsidian-elevated transition-colors"
                  >
                    <span>Continuar pelo WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="min-h-[48px] px-5 py-3 text-xs font-bold tracking-[0.08em] uppercase border border-border text-foreground hover:border-foreground transition-colors cursor-pointer"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="pb-5 border-b border-border">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">
                    Solicitação de Atendimento
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Preencha os campos abaixo para receber um retorno técnico do
                    estúdio.
                  </p>
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="p-4 border border-obsidian bg-surface text-sm text-foreground"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold tracking-[0.08em] uppercase text-foreground mb-2"
                    >
                      Nome completo *
                    </label>
                    <input
                      ref={nameInputRef}
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="Ex.: Mariana Albuquerque"
                      className="w-full min-h-[46px] px-4 py-2.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/65 focus:outline-none focus:border-obsidian transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold tracking-[0.08em] uppercase text-foreground mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="nome@dominio.com.br"
                      className="w-full min-h-[46px] px-4 py-2.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/65 focus:outline-none focus:border-obsidian transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold tracking-[0.08em] uppercase text-foreground mb-2"
                    >
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="(00) 00000-0000"
                      className="w-full min-h-[46px] px-4 py-2.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/65 tabular-nums focus:outline-none focus:border-obsidian transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-typology"
                      className="block text-xs font-bold tracking-[0.08em] uppercase text-foreground mb-2"
                    >
                      Tipologia
                    </label>
                    <select
                      id="contact-typology"
                      value={form.typology}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          typology: e.target.value as ContactFormData['typology'],
                        }))
                      }
                      className="w-full min-h-[46px] px-4 py-2.5 bg-background border border-border text-sm text-foreground focus:outline-none focus:border-obsidian transition-colors"
                    >
                      <option value="Residencial">Residencial</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Interiores">Interiores</option>
                      <option value="Consultoria">Consultoria Técnica</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-area"
                      className="block text-xs font-bold tracking-[0.08em] uppercase text-foreground mb-2"
                    >
                      Área estimada
                    </label>
                    <input
                      id="contact-area"
                      type="text"
                      value={form.areaEstimate}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          areaEstimate: e.target.value,
                        }))
                      }
                      placeholder="Ex.: 450 m²"
                      className="w-full min-h-[46px] px-4 py-2.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/65 tabular-nums focus:outline-none focus:border-obsidian transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold tracking-[0.08em] uppercase text-foreground mb-2"
                  >
                    Escopo e localização do imóvel
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Descreva brevemente o terreno ou imóvel, cidade, prazo desejado e necessidades principais."
                    className="w-full px-4 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/65 focus:outline-none focus:border-obsidian transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-muted-foreground">
                    Atendimento confidencial e sob agendamento.
                  </span>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-bold tracking-[0.1em] uppercase bg-obsidian text-obsidian-foreground border border-obsidian hover:bg-obsidian-elevated hover:border-gold disabled:opacity-60 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <span>
                      {submitting ? 'Enviando solicitação...' : 'Entrar em contato'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
