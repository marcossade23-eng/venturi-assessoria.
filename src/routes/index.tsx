import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Instagram, MessageCircle, Shield, Scale, Sparkles, Eye, HandshakeIcon,
  FileSearch, ClipboardList, Target, HeartHandshake, TrendingUp, Building2,
  CreditCard, FileWarning, AlertCircle, Send, ArrowRight, Quote, CheckCircle2,
} from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/5511989272500";
const PHONE_DISPLAY = "(11) 98927-2500";
const INSTAGRAM = "https://instagram.com/venturi.solucoes";

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-navy text-gold">
            <Scale className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-navy">Felipe Venturi</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Assessoria Financeira</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-navy/80 md:flex">
          <a href="#como-funciona" className="hover:text-gold transition-colors">Como funciona</a>
          <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
          <a href="#porque" className="hover:text-gold transition-colors">Por que nós</a>
          <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-navy/15 bg-card px-4 py-2 text-sm font-medium text-navy shadow-sm hover:border-gold transition-colors">
          <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, var(--navy) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/80 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-navy backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Recuperação de Crédito
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-navy md:text-7xl">
            Limpe seu nome.<br />
            <span className="text-gradient-gold">É o seu direito.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Estratégias jurídicas e financeiras para retirada de restrições, protestos e recuperação do seu crédito — com segurança e atendimento humanizado.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:bg-navy-deep">
              Agende seu orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:border-gold">
              <MessageCircle className="h-4 w-4 text-gold" /> Falar no WhatsApp
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-navy/80">
            <a href={`tel:+5511989272500`} className="inline-flex items-center gap-2 font-medium">
              <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Instagram className="h-4 w-4 text-gold" /> @venturi.solucoes
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-navy/5" />
            <div className="relative animate-float rounded-3xl border border-border bg-card p-10 shadow-elegant">
              <img src={heroIllustration} alt="Balança, escudo e moedas" width={1024} height={1024} className="h-auto w-full" />
              <div className="divider-gold my-6" />
              <p className="text-center font-display text-lg text-navy">Direito · Estratégia · Sigilo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs uppercase tracking-[0.3em] text-gold">{kicker}</span>
      <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
      <div className="divider-gold mx-auto mt-6 w-24" />
    </div>
  );
}

const STEPS = [
  { icon: FileSearch, title: "Análise do CPF e das restrições", desc: "Diagnóstico completo do seu cenário financeiro e jurídico." },
  { icon: Scale, title: "Avaliação jurídica e financeira", desc: "Identificamos negativações e oportunidades legais." },
  { icon: Target, title: "Estratégia personalizada", desc: "Propositura de ação judicial para exclusão da dívida em aberto, respeitando a legislação atual conforme:\n• Art. 42 do Código de Defesa do Consumidor – vedação ao constrangimento do consumidor em razão de dívidas;\n• Art. 43 do Código de Defesa do Consumidor – obrigatoriedade de prévia notificação formal para negativação;\n• Súmula 359 do Superior Tribunal de Justiça – e-mail e SMS não substituem notificação formal com Aviso de Recebimento (AR)." },
  { icon: HeartHandshake, title: "Acompanhamento humanizado", desc: "Atendimento próximo e respeitoso em cada etapa do processo.\nAcompanhamento e comunicação direta e próxima de cada etapa com toda a segurança necessária." },
  { icon: TrendingUp, title: "Recuperação gradual da credibilidade", desc: "Reconstrução sólida do seu histórico financeiro." },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader kicker="Como funciona" title="Seu caso analisado com estratégia." />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <div key={i} className="group relative rounded-2xl border border-border bg-background p-6 transition-all hover:border-gold hover:shadow-card">
              <span className="absolute -top-3 left-6 rounded-full bg-navy px-3 py-1 text-xs font-medium text-primary-foreground">
                Etapa {i + 1}
              </span>
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-soft/40 to-gold/30 text-navy">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg text-navy">{s.title}</h3>
              <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Building2, title: "Protestos em cartório", desc: "Análise e estratégia para retirada de protestos com respaldo jurídico." },
  { icon: CreditCard, title: "SPC e Serasa", desc: "Avaliação e ação sobre negativações nos principais órgãos de proteção ao crédito." },
  { icon: HandshakeIcon, title: "Negociações financeiras", desc: "Mediação técnica com credores buscando as melhores condições." },
  { icon: TrendingUp, title: "Recuperação de crédito", desc: "Plano estruturado para reconstrução de score e histórico." },
  { icon: ClipboardList, title: "Orientação financeira", desc: "Direcionamento estratégico para reorganizar suas finanças." },
  { icon: FileWarning, title: "Negativação indevida", desc: "Identificação e contestação de cobranças e registros irregulares." },
];

function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader kicker="Serviços" title="Atuação completa, do diagnóstico à recuperação." />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:border-gold/60">
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-gold/10 transition-transform group-hover:scale-150" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-navy text-gold">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-6 font-display text-2xl text-navy">{s.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { icon: HeartHandshake, title: "Atendimento humanizado", desc: "Escuta atenta e respeito em cada conversa." },
  { icon: Eye, title: "Sigilo e discrição", desc: "Total confidencialidade sobre o seu caso." },
  { icon: FileSearch, title: "Análise individual", desc: "Cada cliente recebe avaliação dedicada e única." },
  { icon: Target, title: "Suporte estratégico", desc: "Planejamento técnico com base jurídica sólida." },
  { icon: Shield, title: "Transparência", desc: "Clareza sobre prazos, custos e possibilidades reais." },
  { icon: CheckCircle2, title: "Foco em soluções possíveis", desc: "Caminhos viáveis, sem promessas milagrosas." },
];

function WhyUs() {
  return (
    <section id="porque" className="relative overflow-hidden bg-navy py-24 text-primary-foreground md:py-32">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Por que escolher</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Venturi Soluções</h2>
          <div className="divider-gold mx-auto mt-6 w-24" />
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <div key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors hover:border-gold/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-soft/30 to-gold/20 text-gold">
                <r.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl">{r.title}</h3>
                <p className="mt-1.5 text-sm text-white/70">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promotion() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card p-10 shadow-elegant md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Condições especiais</span>
              <h2 className="mt-3 font-display text-4xl text-navy md:text-5xl">
                Condições especiais <span className="text-gradient-gold">disponíveis</span>
              </h2>
              <ul className="mt-6 grid gap-3 text-sm text-navy/80 sm:grid-cols-2">
                {["Análise do CPF", "Atendimento prioritário", "Parcelamento facilitado", "Diagnóstico em 24h"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy-deep">
                Solicitar sua análise <ArrowRight className="h-4 w-4" />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-6 py-3.5 text-sm font-medium text-navy hover:border-gold">
                <MessageCircle className="h-4 w-4 text-gold" /> Conversar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Olá, sou ${data.get("nome")}.%0ATelefone: ${data.get("telefone")}%0AE-mail: ${data.get("email")}%0ATipo de restrição: ${data.get("tipo")}%0AMensagem: ${data.get("mensagem")}`;
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
    setSent(true);
  };
  return (
    <section id="contato" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeader kicker="Agende seu orçamento" title="Receba uma análise dedicada do seu caso." subtitle="Seu atendimento será realizado com total sigilo e atenção individual." />
        <form onSubmit={handleSubmit} className="mx-auto mt-12 grid max-w-3xl gap-4 rounded-2xl border border-border bg-background p-8 shadow-card md:p-10">
          <div className="grid gap-4 md:grid-cols-2">
            <Field name="nome" label="Nome completo" required />
            <Field name="telefone" label="Telefone" type="tel" required />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field name="email" label="E-mail" type="email" required />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Tipo da restrição</label>
              <select name="tipo" required className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy outline-none focus:border-gold">
                <option value="">Selecione...</option>
                <option>Protesto em cartório</option>
                <option>SPC / Serasa</option>
                <option>Negativação indevida</option>
                <option>Recuperação de crédito</option>
                <option>Outro</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Mensagem</label>
            <textarea name="mensagem" rows={4} className="mt-2 w-full resize-none rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy outline-none focus:border-gold" />
          </div>
          <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy-deep">
            {sent ? "Enviado — abrindo WhatsApp" : "Solicitar análise"} <Send className="h-4 w-4" />
          </button>
          <p className="text-center text-xs text-muted-foreground">
            <Shield className="mr-1 inline h-3 w-3 text-gold" />
            Suas informações são tratadas com total confidencialidade.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name} type={type} required={required}
        className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-navy outline-none focus:border-gold"
      />
    </div>
  );
}

const TESTIMONIALS = [
  { name: "Marcos R.", role: "Empresário", text: "Recuperei meu nome e voltei a ter acesso a crédito. Atendimento sério e respeitoso do começo ao fim." },
  { name: "Ana L.", role: "Autônoma", text: "Fui orientada com clareza, sem promessas vazias. Em poucos meses meu cenário mudou completamente." },
  { name: "Carlos M.", role: "Comerciante", text: "Profissionalismo e sigilo absolutos. Recomendo a quem busca solução real para restrições financeiras." },
];

function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader kicker="Provas sociais" title="Histórias reais de recuperação." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <Quote className="h-6 w-6 text-gold" />
              <blockquote className="mt-4 text-sm leading-relaxed text-navy/85">"{t.text}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display text-lg text-navy">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg">Felipe Venturi</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Assessoria Financeira</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Atendimento estratégico com foco em recuperação financeira, orientação e soluções personalizadas.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Contato</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><a href="tel:+5511989272500" className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Instagram className="h-4 w-4 text-gold" /> @venturi.solucoes</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-gold" /> WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Atendimento</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li><a href="#contato" className="hover:text-gold">Agende seu orçamento</a></li>
              <li><a href="#servicos" className="hover:text-gold">Nossos serviços</a></li>
              <li><a href="#como-funciona" className="hover:text-gold">Como funciona</a></li>
            </ul>
          </div>
        </div>
        <div className="divider-gold my-10" />
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Felipe Venturi Assessoria Financeira. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1"><AlertCircle className="h-3 w-3" /> Sigilo e responsabilidade profissional.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold shadow-elegant transition-transform hover:scale-110">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <HowItWorks />
      <Services />
      <WhyUs />
      <Promotion />
      <ContactForm />
      <Testimonials />
      <Footer />
      <FloatingWhats />
    </main>
  );
}
