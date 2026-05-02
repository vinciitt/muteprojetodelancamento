import { useEffect, useState } from "react";
import {
  Sparkles,
  MessageCircle,
  BookOpen,
  PhoneCall,
  Heart,
  Users,
  Ear,
  ArrowRight,
  Bell,
  Hand,
  Zap,
  Globe2,
  Play,
  ChevronRight,
  Rocket,
  HandHeart,
  Eye,
  Languages,
  Mail,
  CalendarClock,
} from "lucide-react";
import muteIcon from "@/assets/mute-icon.png";

const features = [
  {
    icon: MessageCircle,
    title: "Chat que todos entendem",
    desc: "Converse por texto com frases rápidas em Libras e português, indicador visual de digitação e respostas prontas para o dia a dia.",
    tint: "from-primary/20 to-primary-glow/10",
  },
  {
    icon: BookOpen,
    title: "Aprenda Libras de verdade",
    desc: "Ouvintes aprendem a Língua Brasileira de Sinais em 6 módulos didáticos — do alfabeto a conversas completas, com vídeos e progresso salvo.",
    tint: "from-secondary/20 to-secondary/5",
  },
  {
    icon: PhoneCall,
    title: "Chamadas com legenda ao vivo",
    desc: "Surdos e ouvintes na mesma ligação: legenda automática em tempo real e janela flutuante com intérprete de Libras.",
    tint: "from-accent/20 to-accent/5",
  },
  {
    icon: Eye,
    title: "Acessibilidade visual real",
    desc: "Alto contraste, tipografia legível, alertas visuais e haptic feedback — pensado com e para a comunidade surda.",
    tint: "from-primary/20 to-primary-glow/10",
  },
  {
    icon: Languages,
    title: "Tradução instantânea",
    desc: "Traduza voz em texto e texto em sinais com a câmera. Quebre a barreira da comunicação em qualquer lugar.",
    tint: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Users,
    title: "Comunidade conectada",
    desc: "Encontre intérpretes, eventos e amigos. Surdos e ouvintes juntos, construindo pontes em vez de muros.",
    tint: "from-accent/20 to-accent/5",
  },
];

const pillars = [
  {
    icon: Ear,
    label: "Para surdos",
    title: "Sua voz, do seu jeito",
    desc: "Comunique-se em Libras ou texto sem depender de ninguém. O MUTE coloca a autonomia nas suas mãos — literalmente.",
  },
  {
    icon: HandHeart,
    label: "Para ouvintes",
    title: "Aprenda e conecte-se",
    desc: "Aulas didáticas de Libras e ferramentas de tradução para conversar com colegas, familiares e amigos surdos sem barreiras.",
  },
  {
    icon: Heart,
    label: "Para todos",
    title: "Inclusão de verdade",
    desc: "Um espaço onde a comunicação acontece nos dois sentidos. Porque acessibilidade não é favor, é direito.",
  },
];

const stats = [
  { num: "10M+", label: "Surdos no Brasil" },
  { num: "1 em 4", label: "Brasileiros com alguma deficiência auditiva" },
  { num: "70%", label: "Têm dificuldade de comunicação no dia a dia" },
  { num: "100%", label: "Gratuito para sempre" },
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onMove = (e: MouseEvent) =>
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden noise">
      {/* NAV */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
          scrolled ? "glass py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src={muteIcon}
              alt="Logo MUTE — mão sinalizando 'eu te amo' em Libras"
              width={36}
              height={36}
              className="rounded-lg shadow-glow"
            />
            <span className="font-display text-xl font-extrabold tracking-[0.3em]">MUTE</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground transition-smooth">Funcionalidades</a></li>
            <li><a href="#how" className="hover:text-foreground transition-smooth">Como funciona</a></li>
            <li><a href="#tech" className="hover:text-foreground transition-smooth">Stack</a></li>
            <li><a href="#impact" className="hover:text-foreground transition-smooth">Impacto</a></li>
          </ul>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold shadow-elegant hover:scale-[1.03] transition-spring"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative pt-36 pb-24 px-6">
        {/* animated background */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl animate-blob pointer-events-none"
          style={{ transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)` }}
        />
        <div
          className="absolute top-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl animate-blob pointer-events-none"
          style={{ animationDelay: "4s", transform: `translate(${-mouse.x * 30}px, ${-mouse.y * 30}px)` }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* left */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-primary-glow mb-7">
              <Sparkles size={14} className="animate-pulse" />
              Open source · React Native + Expo
              <span className="ml-1 px-2 py-0.5 rounded-full bg-primary/30 text-[10px]">v1.0</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-extrabold leading-[1.02] mb-6">
              Comunicação <br />
              <span className="text-gradient-vibrant">sem barreiras</span>
              <span className="inline-block ml-2 align-middle text-primary-glow animate-float">
                <Hand size={56} className="inline" />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              App mobile acessível para surdos e ouvintes se comunicarem com{" "}
              <span className="text-foreground font-semibold">chat rápido</span>, aulas de{" "}
              <span className="text-foreground font-semibold">Libras</span> e chamadas com{" "}
              <span className="text-foreground font-semibold">legenda em tempo real</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href="https://github.com"
                className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-4 rounded-2xl font-semibold shadow-elegant hover:shadow-glow-lg hover:scale-[1.03] transition-spring"
              >
                <Download size={18} />
                Ver código no GitHub
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 glass px-7 py-4 rounded-2xl font-semibold hover:border-primary/50 hover:bg-primary/10 transition-smooth"
              >
                <Play size={16} /> Explorar funcionalidades
              </a>
            </div>

            {/* mini stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
              {[
                { icon: Zap, label: "Setup em 3 passos" },
                { icon: Code2, label: "TypeScript strict" },
                { icon: Globe2, label: "iOS + Android" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-muted-foreground">
                  <s.icon size={16} className="text-primary-glow" />
                  {s.label}
                </div>
              ))}
            </div>
          </div>

          {/* right — phone mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-vibrant opacity-20 blur-3xl rounded-full" />
            <div className="relative animate-float">
              {/* glow ring */}
              <div className="absolute -inset-12 bg-gradient-vibrant opacity-20 blur-3xl rounded-full animate-pulse-glow" />
              <div className="relative w-[280px] h-[580px] rounded-[42px] glass border-2 p-2 shadow-elegant">
                <div className="w-full h-full rounded-[34px] bg-card overflow-hidden relative">
                  {/* notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-background rounded-b-2xl z-10" />

                  <div className="px-4 pt-10 pb-20 h-full flex flex-col gap-3">
                    {/* topbar */}
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <div className="flex items-center gap-2">
                        <img src={muteIcon} alt="" width={20} height={20} className="rounded" />
                        <span className="font-display text-xs tracking-[0.2em] font-extrabold text-gradient">MUTE</span>
                      </div>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/25 text-primary-glow">BETA</span>
                    </div>

                    {/* feature card */}
                    <div className="relative rounded-2xl p-4 bg-gradient-primary overflow-hidden shadow-glow">
                      <div className="absolute -bottom-6 -right-4 w-24 h-24 rounded-full bg-white/10" />
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/80 animate-ping-slow" />
                      <PhoneCall size={18} className="text-white mb-2" />
                      <div className="text-xs font-bold text-white">Chamada Acessível</div>
                      <div className="text-[10px] text-white/75 mt-1 leading-relaxed">
                        Legenda em tempo real + janela Libras
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1 bg-white/95 text-primary text-[10px] font-bold px-2.5 py-1 rounded-lg">
                        Testar <ChevronRight size={10} />
                      </div>
                    </div>

                    {/* quick row */}
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: BookOpen, l: "Aulas Libras", d: "6 módulos" },
                        { icon: MessageCircle, l: "Chat rápido", d: "Frases" },
                      ].map((q) => (
                        <div key={q.l} className="rounded-xl p-2.5 bg-muted border border-border">
                          <q.icon size={14} className="text-primary-glow mb-1" />
                          <div className="text-[10px] font-bold">{q.l}</div>
                          <div className="text-[9px] text-muted-foreground">{q.d}</div>
                        </div>
                      ))}
                    </div>

                    {/* progress */}
                    <div className="rounded-xl p-3 bg-muted border border-border">
                      <div className="flex justify-between text-[10px] mb-2">
                        <span className="font-bold">Seu progresso</span>
                        <span className="text-muted-foreground">2/6</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-border overflow-hidden">
                        <div className="h-full w-1/3 bg-gradient-vibrant rounded-full" />
                      </div>
                    </div>

                    {/* live caption */}
                    <div className="mt-auto rounded-xl p-3 bg-gradient-card border border-primary/30">
                      <div className="text-[9px] uppercase tracking-wider text-primary-glow font-bold mb-1">Legenda ao vivo</div>
                      <div className="text-[11px] leading-snug">"Olá! Como posso te ajudar hoje?"</div>
                    </div>
                  </div>

                  {/* bottom tabs */}
                  <div className="absolute bottom-0 inset-x-0 flex bg-card border-t border-border py-2.5">
                    {[
                      { i: "🏠", l: "Início", a: true },
                      { i: "💬", l: "Chat" },
                      { i: "📖", l: "Aulas" },
                      { i: "👤", l: "Perfil" },
                    ].map((t) => (
                      <div key={t.l} className="flex-1 flex flex-col items-center gap-0.5">
                        <span className="text-sm">{t.i}</span>
                        <span className={`text-[8px] ${t.a ? "text-primary-glow font-bold" : "text-muted-foreground"}`}>{t.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* floating chips */}
              <div className="absolute -left-10 top-20 glass rounded-xl px-3 py-2 text-xs font-semibold flex items-center gap-2 animate-float shadow-card" style={{ animationDelay: "1s" }}>
                <Hand size={14} className="text-primary-glow" /> Libras
              </div>
              <div className="absolute -right-8 bottom-32 glass rounded-xl px-3 py-2 text-xs font-semibold flex items-center gap-2 animate-float shadow-card" style={{ animationDelay: "2s" }}>
                <Zap size={14} className="text-secondary" /> Tempo real
              </div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="relative mt-24 overflow-hidden glass rounded-2xl py-4">
          <div className="flex gap-12 animate-marquee whitespace-nowrap text-sm font-semibold text-muted-foreground">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-glow" /> {s}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Funcionalidades</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Tudo que você precisa para <span className="text-gradient">se comunicar</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Construído com acessibilidade em primeiro lugar — para que surdos e ouvintes possam se comunicar de verdade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <article
                key={f.title}
                className={`group relative overflow-hidden rounded-3xl p-7 glass hover:border-primary/50 hover:-translate-y-2 transition-spring shadow-card`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.tint} opacity-0 group-hover:opacity-100 transition-smooth`} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-spring">
                    <f.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="relative py-28 px-6 bg-gradient-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Como funciona</div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">
              Rodando em <span className="text-gradient">3 passos</span>
            </h2>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary via-accent to-secondary opacity-40" />
            {[
              { n: "1", t: "Instale o Expo Go", d: "Baixe o Expo Go na App Store ou Google Play — gratuito, sem conta de desenvolvedor." },
              { n: "2", t: "Clone & npm install", d: "Rode npm install e depois npx expo start no terminal.", code: "npx expo start" },
              { n: "3", t: "Escaneie o QR", d: "Abra o Expo Go e escaneie — o app carrega instantaneamente, sem build." },
            ].map((s) => (
              <div key={s.n} className="relative text-center">
                <div className="relative inline-flex w-16 h-16 rounded-full bg-gradient-primary items-center justify-center font-display text-xl font-extrabold text-primary-foreground shadow-glow mb-5 mx-auto animate-pulse-glow">
                  {s.n}
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.d}</p>
                {s.code && (
                  <code className="inline-block font-mono text-xs px-3 py-1.5 rounded-lg bg-muted border border-border text-primary-glow">
                    $ {s.code}
                  </code>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section id="tech" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Stack tecnológico</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-12">
            Construído com tecnologia <span className="text-gradient">moderna</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {stack.map((t) => (
              <span
                key={t}
                className="glass rounded-xl px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/50 hover:scale-105 transition-spring cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="relative py-24 px-6 border-y border-border bg-gradient-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Impacto social</div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">
              Por que o <span className="text-gradient-vibrant">MUTE</span> importa
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center glass rounded-2xl p-6 hover:scale-105 hover:border-primary/50 transition-spring">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-gradient-vibrant mb-2">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-vibrant opacity-10 blur-3xl" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-3xl mx-auto">
          <img src={muteIcon} alt="" width={80} height={80} className="mx-auto rounded-2xl shadow-glow-lg mb-8 animate-float" />
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-5">
            Pronto para <span className="text-gradient-vibrant">explorar?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Código aberto, documentado e pronto para rodar. Veja, contribua ou use como base para seu próprio projeto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com" className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold shadow-elegant hover:shadow-glow-lg hover:scale-[1.03] transition-spring">
              <Github size={18} /> Ver no GitHub
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 glass px-8 py-4 rounded-2xl font-semibold hover:border-primary/50 hover:bg-primary/10 transition-smooth">
              <BookOpen size={18} /> Documentação
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={muteIcon} alt="" width={28} height={28} className="rounded-lg" />
            <span className="font-display font-extrabold tracking-[0.3em]">MUTE</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Feito com <span className="text-accent">♥</span> para a comunidade surda · React Native + Expo
          </p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
