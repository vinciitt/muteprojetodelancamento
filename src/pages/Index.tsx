import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
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
  Video,
  GraduationCap,
  DollarSign,
  Star,
  Shield,
  Lock,
  CheckCircle2,
  Mic,
  Subtitles,
  Award,
  TrendingUp,
  UserCheck,
  Wallet,
  Send,
} from "lucide-react";
import muteIcon from "@/assets/mute-icon.png";

const features = [
  {
    icon: Video,
    title: "Avatar tradutor em chamadas",
    desc: "Um avatar 3D em Libras aparece na chamada e traduz a fala do ouvinte em sinais em tempo real — para que o surdo entenda tudo que está sendo dito.",
    tint: "from-primary/20 to-primary-glow/10",
  },
  {
    icon: GraduationCap,
    title: "Curso completo de Libras",
    desc: "Do básico ao avançado: alfabeto, vocabulário, gramática e conversação. Trilha didática com vídeos, quizzes e progresso salvo.",
    tint: "from-secondary/20 to-secondary/5",
  },
  {
    icon: MessageCircle,
    title: "Salas de bate-papo",
    desc: "Comunidades temáticas onde surdos e ouvintes trocam ideias sobre cultura surda, Libras e o dia a dia — em texto, vídeo ou sinais.",
    tint: "from-accent/20 to-accent/5",
  },
  {
    icon: Award,
    title: "Surdos como professores",
    desc: "Professores surdos e instrutores de Libras criam aulas em vídeo e ensinam ouvintes — com renda extra de verdade pelo aplicativo.",
    tint: "from-primary/20 to-primary-glow/10",
  },
  {
    icon: Subtitles,
    title: "Legenda automática ao vivo",
    desc: "Toda fala em uma chamada vira legenda em tempo real — para o surdo acompanhar mesmo sem o avatar ativado.",
    tint: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Users,
    title: "Comunidade conectada",
    desc: "Encontre intérpretes, professores, eventos e amigos. Surdos e ouvintes juntos, construindo pontes em vez de muros.",
    tint: "from-accent/20 to-accent/5",
  },
];

const pillars = [
  {
    icon: Ear,
    label: "Para surdos",
    title: "Sua voz, do seu jeito",
    desc: "Receba tudo que o ouvinte fala em Libras (avatar) e em legenda. Participe de chamadas, salas e ainda dê aulas pelo app — com renda extra.",
  },
  {
    icon: HandHeart,
    label: "Para ouvintes",
    title: "Aprenda Libras de verdade",
    desc: "Curso do básico ao avançado, aulas com professores surdos e ferramentas para conversar sem barreiras com colegas, família e amigos.",
  },
  {
    icon: Heart,
    label: "Para todos",
    title: "Inclusão de verdade",
    desc: "Salas de bate-papo, eventos e uma comunidade ativa onde a comunicação acontece nos dois sentidos — porque acessibilidade é direito.",
  },
];

const stats = [
  { num: "10M+", label: "Surdos no Brasil" },
  { num: "1 em 4", label: "Brasileiros com alguma deficiência auditiva" },
  { num: "70%", label: "Têm dificuldade de comunicação no dia a dia" },
  { num: "100%", label: "Gratuito para começar" },
];

// Schema de validação seguro do e-mail
const emailSchema = z
  .string()
  .trim()
  .min(1, { message: "Digite seu e-mail" })
  .email({ message: "E-mail inválido" })
  .max(255, { message: "E-mail muito longo" });

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [lastSubmit, setLastSubmit] = useState(0);

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

  const courseModules = useMemo(
    () => [
      { lvl: "Básico", t: "Alfabeto manual & cumprimentos", time: "2h", color: "from-primary/30 to-primary-glow/10" },
      { lvl: "Básico", t: "Números, cores e família", time: "3h", color: "from-primary/30 to-primary-glow/10" },
      { lvl: "Intermediário", t: "Verbos e expressões faciais", time: "4h", color: "from-secondary/30 to-secondary/5" },
      { lvl: "Intermediário", t: "Conversação no dia a dia", time: "5h", color: "from-secondary/30 to-secondary/5" },
      { lvl: "Avançado", t: "Gramática de Libras (CL e classificadores)", time: "6h", color: "from-accent/30 to-accent/5" },
      { lvl: "Avançado", t: "Cultura surda e literatura em Libras", time: "5h", color: "from-accent/30 to-accent/5" },
    ],
    [],
  );

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Anti-spam simples: bloqueia envios em sequência rápida
    const now = Date.now();
    if (now - lastSubmit < 3000) {
      setEmailError("Aguarde alguns segundos antes de tentar novamente");
      return;
    }
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setEmailError(result.error.issues[0].message);
      return;
    }
    setEmailError(null);
    setLastSubmit(now);
    setEmailSent(true);
    setEmail("");
  };

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
              alt="Logo DEAF — mão sinalizando 'eu te amo' em Libras"
              width={36}
              height={36}
              className="rounded-lg shadow-glow"
            />
            <span className="font-display text-xl font-extrabold tracking-[0.3em]">DEAF</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <li><a href="#proposta" className="hover:text-foreground transition-smooth">Proposta</a></li>
            <li><a href="#nome" className="hover:text-foreground transition-smooth">Por que DEAF?</a></li>
            <li><a href="#libras" className="hover:text-foreground transition-smooth">Libras</a></li>
            <li><a href="#avatar" className="hover:text-foreground transition-smooth">Avatar</a></li>
            <li><a href="#curso" className="hover:text-foreground transition-smooth">Curso</a></li>
            <li><a href="#salas" className="hover:text-foreground transition-smooth">Salas</a></li>
            <li><a href="#professores" className="hover:text-foreground transition-smooth">Professores</a></li>
          </ul>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold shadow-elegant hover:scale-[1.03] transition-spring"
          >
            <Bell size={16} /> Avise-me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative pt-36 pb-24 px-6">
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
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-primary-glow mb-7">
              <Sparkles size={14} className="animate-pulse" />
              Lançamento oficial · em breve nas lojas
              <span className="ml-1 px-2 py-0.5 rounded-full bg-primary/30 text-[10px]">2026</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-extrabold leading-[1.02] mb-6">
              Comunicação <br />
              <span className="text-gradient-vibrant">sem barreiras</span>
              <span className="inline-block ml-2 align-middle text-primary-glow animate-float">
                <Hand size={56} className="inline" />
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              O DEAF conecta <span className="text-foreground font-semibold">surdos e ouvintes</span> em uma só conversa.
              Avatar tradutor em chamadas, curso de Libras do básico ao avançado, salas de bate-papo
              e aulas com <span className="text-foreground font-semibold">professores surdos</span> — tudo em um só app.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-4 rounded-2xl font-semibold shadow-elegant hover:shadow-glow-lg hover:scale-[1.03] transition-spring"
              >
                <Bell size={18} />
                Quero ser avisado no lançamento
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
              </a>
              <a
                href="#avatar"
                className="inline-flex items-center gap-2 glass px-7 py-4 rounded-2xl font-semibold hover:border-primary/50 hover:bg-primary/10 transition-smooth"
              >
                <Play size={16} /> Ver demonstração
              </a>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
              {[
                { icon: HandHeart, label: "Feito com a comunidade surda" },
                { icon: Shield, label: "Privacidade e segurança em 1º lugar" },
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
              <div className="absolute -inset-12 bg-gradient-vibrant opacity-20 blur-3xl rounded-full animate-pulse-glow" />
              <div className="relative w-[280px] h-[580px] rounded-[42px] glass border-2 p-2 shadow-elegant">
                <div className="w-full h-full rounded-[34px] bg-card overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-background rounded-b-2xl z-10" />

                  <div className="px-4 pt-10 pb-20 h-full flex flex-col gap-3">
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <div className="flex items-center gap-2">
                        <img src={muteIcon} alt="" width={20} height={20} className="rounded" />
                        <span className="font-display text-xs tracking-[0.2em] font-extrabold text-gradient">DEAF</span>
                      </div>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/25 text-primary-glow">BETA</span>
                    </div>

                    <div className="relative rounded-2xl p-4 bg-gradient-primary overflow-hidden shadow-glow">
                      <div className="absolute -bottom-6 -right-4 w-24 h-24 rounded-full bg-white/10" />
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/80 animate-ping-slow" />
                      <Video size={18} className="text-white mb-2" />
                      <div className="text-xs font-bold text-white">Avatar em Libras</div>
                      <div className="text-[10px] text-white/75 mt-1 leading-relaxed">
                        Traduz a fala do ouvinte em tempo real
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1 bg-white/95 text-primary text-[10px] font-bold px-2.5 py-1 rounded-lg">
                        Ativar <ChevronRight size={10} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: GraduationCap, l: "Curso Libras", d: "Básico → Avançado" },
                        { icon: MessageCircle, l: "Salas", d: "+12 ativas" },
                      ].map((q) => (
                        <div key={q.l} className="rounded-xl p-2.5 bg-muted border border-border">
                          <q.icon size={14} className="text-primary-glow mb-1" />
                          <div className="text-[10px] font-bold">{q.l}</div>
                          <div className="text-[9px] text-muted-foreground">{q.d}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl p-3 bg-muted border border-border">
                      <div className="flex justify-between text-[10px] mb-2">
                        <span className="font-bold">Seu progresso no curso</span>
                        <span className="text-muted-foreground">2/6</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-border overflow-hidden">
                        <div className="h-full w-1/3 bg-gradient-vibrant rounded-full" />
                      </div>
                    </div>

                    <div className="mt-auto rounded-xl p-3 bg-gradient-card border border-primary/30">
                      <div className="text-[9px] uppercase tracking-wider text-primary-glow font-bold mb-1">Legenda ao vivo</div>
                      <div className="text-[11px] leading-snug">"Olá! Como posso te ajudar hoje?"</div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 flex bg-card border-t border-border py-2.5">
                    {[
                      { i: "🏠", l: "Início", a: true },
                      { i: "💬", l: "Salas" },
                      { i: "📖", l: "Curso" },
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
            {[
              "Comunicação é direito, não privilégio",
              "Libras é língua, é cultura, é identidade",
              "Surdos e ouvintes na mesma conversa",
              "Acessibilidade não é favor",
              "Professores surdos ganhando dinheiro pelo app",
              "Pontes, não barreiras",
            ].concat([
              "Comunicação é direito, não privilégio",
              "Libras é língua, é cultura, é identidade",
              "Surdos e ouvintes na mesma conversa",
              "Acessibilidade não é favor",
              "Professores surdos ganhando dinheiro pelo app",
              "Pontes, não barreiras",
            ]).map((s, i) => (
              <span key={i} className="flex items-center gap-2">
                <Hand size={14} className="text-primary-glow" /> {s}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* POR QUE DEAF? */}
      <section id="nome" className="relative py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">A história do nome</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Por que <span className="text-gradient-vibrant">DEAF</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              "Deaf" significa <span className="text-foreground font-semibold">surdo</span> em inglês — mas dentro
              da comunidade surda, a palavra carrega muito mais do que uma tradução. Ela representa
              <span className="text-foreground font-semibold"> identidade, cultura e orgulho</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="glass rounded-3xl p-8 hover:border-primary/40 transition-smooth">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <HandHeart className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Identidade, não deficiência</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quando escrita com "D" maiúsculo (<span className="text-foreground font-semibold">Deaf</span>),
                a palavra deixa de descrever uma condição auditiva e passa a representar um povo:
                pessoas que compartilham uma língua de sinais, uma história e uma cultura própria.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 hover:border-primary/40 transition-smooth">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <Sparkles className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Orgulho surdo (Deaf Pride)</h3>
              <p className="text-muted-foreground leading-relaxed">
                O movimento <span className="text-foreground font-semibold">Deaf Pride</span> celebra ser surdo
                como algo positivo. Inspirou a Lei de Libras no Brasil (10.436/2002) e a luta por escolas
                bilíngues, intérpretes e acessibilidade real.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 hover:border-primary/40 transition-smooth">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <Users className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Símbolo global</h3>
              <p className="text-muted-foreground leading-relaxed">
                "Deaf" é reconhecida no mundo inteiro como bandeira da comunidade surda.
                Usar esse nome é honrar uma luta internacional por respeito, língua e pertencimento —
                e dizer claramente: este app é da comunidade surda.
              </p>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 md:p-10 text-center border-primary/30">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-[0.3em] text-primary-glow uppercase">
              <Heart size={14} /> O significado
            </div>
            <p className="font-display text-2xl md:text-3xl leading-snug max-w-3xl mx-auto">
              "Ser <span className="text-gradient-vibrant">Deaf</span> não é o que falta.
              É o que <span className="text-gradient-vibrant">existe</span>: língua, cultura e comunidade."
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              O nome DEAF foi escolhido para colocar a comunidade surda no centro — como protagonista,
              não como exceção. Acessibilidade começa pelo respeito à identidade.
            </p>
          </div>
        </div>
      </section>

      {/* PROPOSTA */}
      <section id="proposta" className="relative py-28 px-6 bg-gradient-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Nossa proposta</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Conectar quem <span className="text-gradient">fala</span> com quem <span className="text-gradient-vibrant">sinaliza</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              No Brasil, mais de 10 milhões de pessoas são surdas — mas a maioria dos ouvintes nunca aprendeu Libras.
              O DEAF existe para mudar isso, de forma simples, segura e acessível.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                t: "O problema",
                d: "Surdos enfrentam barreiras todos os dias — em hospitais, lojas, escolas e até em casa. Conversar virou um esforço.",
                tone: "from-destructive/20 to-destructive/5",
              },
              {
                icon: HandHeart,
                t: "Nossa solução",
                d: "Avatar tradutor em chamadas, curso de Libras, salas de bate-papo e aulas com professores surdos — tudo em um só lugar.",
                tone: "from-primary/20 to-primary-glow/10",
              },
              {
                icon: Rocket,
                t: "O impacto",
                d: "Surdos com mais autonomia e renda extra como professores. Ouvintes mais conscientes. Uma sociedade que conversa nos dois sentidos.",
                tone: "from-secondary/20 to-secondary/5",
              },
            ].map((p) => (
              <div key={p.t} className="group relative overflow-hidden rounded-3xl p-7 glass hover:-translate-y-2 transition-spring shadow-card">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.tone} opacity-50`} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                    <p.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{p.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE É LIBRAS */}
      <section id="libras" className="relative py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Sobre a língua</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              O que é <span className="text-gradient-vibrant">Libras</span>?
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 glass shadow-card">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/10 opacity-60" />
            <div className="relative space-y-5">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                A <strong className="text-gradient">Libras</strong> (Língua Brasileira de Sinais) é a língua oficial
                de comunicação da comunidade surda no Brasil, baseada em <strong>movimentos, gestos e expressões faciais</strong>{" "}
                (visual-espacial).
              </p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                Reconhecida pela <strong className="text-primary-glow">Lei 10.436/2002</strong>, ela possui{" "}
                <strong>gramática própria</strong> e não é uma simples gestualização do português.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {[
                  { t: "Visual-espacial", d: "Movimentos, gestos e expressões faciais" },
                  { t: "Lei 10.436/2002", d: "Reconhecida oficialmente no Brasil" },
                  { t: "Gramática própria", d: "Não é o português sinalizado" },
                ].map((c) => (
                  <div key={c.t} className="rounded-2xl p-5 bg-background/40 border border-border/50">
                    <div className="font-display font-bold text-base mb-1">{c.t}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{c.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVATAR — destaque com demo */}
      <section id="avatar" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Tecnologia que inclui</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Avatar em <span className="text-gradient-vibrant">Libras</span> dentro da chamada
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Em toda chamada de áudio ou vídeo, o DEAF exibe um avatar 3D que traduz a fala do ouvinte
              para a Língua Brasileira de Sinais — em tempo real. O surdo entende exatamente o que está sendo
              dito, sem depender de intérprete humano e sem perder o contexto da conversa.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mic, t: "Captura a fala do ouvinte", d: "Reconhecimento de voz com baixa latência" },
                { icon: Languages, t: "Traduz para Libras", d: "Modelo treinado com gramática e classificadores reais" },
                { icon: Hand, t: "Avatar sinaliza para o surdo", d: "Movimentos naturais e expressões faciais" },
                { icon: Subtitles, t: "Legenda como apoio", d: "Sempre visível em paralelo, para reforço visual" },
              ].map((s) => (
                <div key={s.t} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary shrink-0 flex items-center justify-center shadow-glow">
                    <s.icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold mb-0.5">{s.t}</div>
                    <div className="text-sm text-muted-foreground">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEMO da videochamada surdo ↔ ouvinte com avatar PiP */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-vibrant opacity-25 blur-3xl rounded-full" />
            <div className="relative glass rounded-3xl p-5 shadow-elegant">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">Ao vivo · 02:34</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <PhoneCall size={12} /> Videochamada acessível
                </div>
              </div>

              {/* Tela principal: ouvinte em destaque + miniatura do surdo + AVATAR PiP no canto */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-secondary/25 via-background to-primary/15 mb-3">
                {/* Ouvinte (vídeo principal) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center text-6xl shadow-glow mb-3">
                      🧑‍💼
                    </div>
                    <div className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1 text-[11px] font-semibold">
                      <Mic size={11} className="text-secondary animate-pulse" /> Lucas (ouvinte) · falando
                    </div>
                  </div>
                </div>

                {/* Miniatura do surdo (canto superior direito) */}
                <div className="absolute top-3 right-3 w-20 h-28 rounded-xl border-2 border-primary/40 bg-gradient-to-br from-primary/30 to-accent/10 overflow-hidden shadow-glow">
                  <div className="absolute inset-0 flex items-center justify-center text-3xl">🧑</div>
                  <div className="absolute bottom-1 left-1 right-1 text-[8px] font-bold bg-background/80 text-center rounded px-1 py-0.5">
                    Marina (surda)
                  </div>
                </div>

                {/* AVATAR Libras — janela PiP no canto inferior esquerdo */}
                <div className="absolute bottom-3 left-3 w-28 h-36 rounded-xl border-2 border-primary bg-gradient-to-br from-primary/40 to-accent/20 overflow-hidden shadow-glow animate-pulse-glow">
                  <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between">
                    <span className="text-[8px] font-bold bg-primary text-primary-foreground px-1.5 py-0.5 rounded">AVATAR</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-glow animate-ping-slow" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pt-3">
                    <div className="text-5xl animate-float">🤟</div>
                  </div>
                  <div className="absolute bottom-1 left-1 right-1 text-[8px] font-bold text-center bg-background/80 rounded px-1 py-0.5 flex items-center justify-center gap-1">
                    <Hand size={8} className="text-primary-glow" /> Sinalizando
                  </div>
                </div>

                {/* Legenda sobreposta */}
                <div className="absolute left-3 right-3 bottom-3 ml-32 glass rounded-xl px-3 py-2">
                  <div className="text-[9px] uppercase tracking-wider text-primary-glow font-bold mb-0.5 flex items-center gap-1.5">
                    <Subtitles size={10} /> Tradução em tempo real
                  </div>
                  <div className="text-[11px] leading-snug font-medium">
                    "Marquei a consulta para terça às 14h. Tudo bem?"
                  </div>
                </div>
              </div>

              {/* Controles da chamada */}
              <div className="grid grid-cols-5 gap-2">
                {[
                  { i: "🎤", l: "Mic" },
                  { i: "📷", l: "Câmera" },
                  { i: "🤟", l: "Avatar", on: true },
                  { i: "💬", l: "Legenda", on: true },
                  { i: "📞", l: "Sair", danger: true },
                ].map((b, k) => (
                  <button
                    key={k}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-0.5 transition-smooth ${
                      b.danger
                        ? "bg-destructive/20 hover:bg-destructive/30"
                        : b.on
                        ? "bg-gradient-primary shadow-glow"
                        : "glass hover:bg-primary/15"
                    }`}
                  >
                    <span className="text-base">{b.i}</span>
                    <span className={`text-[8px] font-bold ${b.on ? "text-primary-foreground" : "text-muted-foreground"}`}>{b.l}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURSO de Libras */}
      <section id="curso" className="relative py-28 px-6 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            {/* Demo do curso */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-8 bg-gradient-vibrant opacity-15 blur-3xl rounded-full" />
              <div className="relative glass rounded-3xl p-6 shadow-elegant space-y-4">
                {/* Player de aula em vídeo */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/30 via-background to-secondary/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl animate-float">🤟</div>
                  </div>
                  {/* Badge de aula */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-background/85 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold">
                    <Video size={10} className="text-primary-glow" /> Aula 03 · Cumprimentos
                  </div>
                  <div className="absolute top-3 right-3 text-[10px] font-bold bg-primary text-primary-foreground px-2 py-1 rounded-full">HD</div>

                  {/* Botão play central */}
                  <button className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-glow hover:scale-110 transition-spring" aria-label="Reproduzir aula">
                    <Play size={22} className="text-primary fill-primary ml-1" />
                  </button>

                  {/* Legenda da aula */}
                  <div className="absolute left-3 right-3 bottom-9 glass rounded-lg px-2.5 py-1.5">
                    <div className="text-[9px] uppercase tracking-wider text-primary-glow font-bold mb-0.5">Sinal: BOM DIA</div>
                    <div className="text-[11px] font-medium">"Repita comigo: leve a mão até a boca e abra para a frente."</div>
                  </div>

                  {/* Barra de progresso */}
                  <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-background/90 to-transparent">
                    <div className="flex items-center gap-2 text-[9px] font-mono">
                      <span>02:14</span>
                      <div className="flex-1 h-1 rounded-full bg-border overflow-hidden">
                        <div className="h-full w-1/3 bg-gradient-vibrant rounded-full" />
                      </div>
                      <span className="text-muted-foreground">07:42</span>
                    </div>
                  </div>
                </div>

                {/* Info da aula */}
                <div className="flex items-center justify-between rounded-xl glass px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-sm">👩🏽</div>
                    <div>
                      <div className="text-xs font-bold flex items-center gap-1">Profa. Marina <span className="text-[8px] bg-secondary/30 text-secondary px-1 rounded">SURDA</span></div>
                      <div className="text-[10px] text-muted-foreground flex items-center gap-1"><Star size={9} className="fill-primary-glow text-primary-glow" /> 4.9 · 312 alunos</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-primary-glow">Aula gratuita</span>
                </div>

                <div className="flex items-center justify-between mb-2 pt-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-primary-glow" />
                    <span className="font-display font-bold text-sm">Sua trilha</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary/25 text-primary-glow">25h totais</span>
                </div>

                {courseModules.slice(0, 4).map((m, i) => (
                  <div key={i} className={`relative overflow-hidden rounded-2xl p-3 border border-border bg-gradient-to-br ${m.color} hover:border-primary/50 transition-smooth`}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${i < 2 ? "bg-primary text-primary-foreground" : "glass text-muted-foreground"}`}>
                          {i + 1}
                        </div>
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-wider text-primary-glow">{m.lvl}</div>
                          <div className="text-xs font-semibold">{m.t}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-[10px] text-muted-foreground">{m.time}</div>
                        {i < 2 && <CheckCircle2 size={14} className="text-secondary inline mt-1" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Aprenda Libras</div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Curso do <span className="text-gradient">básico</span> ao <span className="text-gradient-vibrant">avançado</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Uma trilha completa para que ouvintes aprendam Libras de verdade — e se conectem
                melhor com surdos no trabalho, na família ou na comunidade. São 6 módulos didáticos,
                vídeos curtos, quizzes interativos e prática real com falantes nativos da língua.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: BookOpen, t: "6 módulos didáticos" },
                  { icon: Video, t: "Vídeos com sinais em câmera lenta" },
                  { icon: CheckCircle2, t: "Quizzes e exercícios práticos" },
                  { icon: Award, t: "Certificado ao concluir" },
                ].map((b) => (
                  <div key={b.t} className="flex items-center gap-3 glass rounded-xl p-3">
                    <b.icon size={18} className="text-primary-glow shrink-0" />
                    <span className="text-sm font-medium">{b.t}</span>
                  </div>
                ))}
              </div>

              <a href="#cta" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl font-semibold hover:border-primary/50 hover:bg-primary/10 transition-smooth">
                Quero começar pelo básico <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SALAS de bate-papo */}
      <section id="salas" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Comunidade</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Salas de <span className="text-gradient-vibrant">bate-papo</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Espaços onde surdos e ouvintes se encontram para trocar ideias, tirar dúvidas e conversar
              sobre o universo das Libras. Por texto, vídeo ou sinais — do seu jeito.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
            {/* lista de salas */}
            <div className="space-y-3">
              {[
                { n: "Cultura Surda 🇧🇷", on: 42, tag: "Pública" },
                { n: "Aprendendo Libras", on: 128, tag: "Iniciantes" },
                { n: "Intérpretes & dúvidas", on: 17, tag: "Profissional" },
                { n: "Memes em Libras 😂", on: 89, tag: "Descontraída" },
                { n: "Trabalho & inclusão", on: 31, tag: "Networking" },
              ].map((s) => (
                <div key={s.n} className="group glass rounded-2xl p-4 flex items-center justify-between hover:border-primary/50 hover:translate-x-1 transition-spring cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <MessageCircle size={16} className="text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{s.n}</div>
                      <div className="text-[11px] text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        {s.on} online · {s.tag}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary-glow transition-smooth" />
                </div>
              ))}
            </div>

            {/* mock chat */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-vibrant opacity-15 blur-3xl rounded-full" />
              <div className="relative glass rounded-3xl shadow-elegant overflow-hidden">
                <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <MessageCircle size={16} className="text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Aprendendo Libras</div>
                      <div className="text-[11px] text-muted-foreground">128 online</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary/25 text-primary-glow">PÚBLICA</span>
                </div>

                <div className="p-5 space-y-4 min-h-[320px] bg-gradient-card">
                  {[
                    { who: "Marina (Surda)", t: "Oi gente! Hoje aprendi um sinal novo: APRENDER 🤟", me: false, badge: "PROF" },
                    { who: "Lucas (Ouvinte)", t: "Que legal! Pode mandar um vídeo demonstrando?", me: true },
                    { who: "Marina (Surda)", t: "Claro! Já vou gravar e mandar aqui na sala.", me: false, badge: "PROF" },
                    { who: "Ana (Ouvinte)", t: "Adoro essa sala 💜 Aprendo todo dia algo novo!", me: false },
                  ].map((m, i) => (
                    <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${m.me ? "bg-gradient-primary text-primary-foreground" : "glass"}`}>
                        <div className="text-[10px] font-bold opacity-80 mb-0.5 flex items-center gap-1.5">
                          {m.who}
                          {m.badge && <span className="px-1.5 py-0.5 rounded bg-secondary/30 text-secondary text-[8px]">{m.badge}</span>}
                        </div>
                        {m.t}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-3 border-t border-border flex items-center gap-2">
                  <div className="flex-1 glass rounded-xl px-3 py-2 text-xs text-muted-foreground">Escreva uma mensagem…</div>
                  <button className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow" aria-label="Enviar">
                    <Send size={14} className="text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSORES SURDOS — aulas pagas */}
      <section id="professores" className="relative py-28 px-6 bg-gradient-card overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-secondary mb-5">
              <Wallet size={14} /> Renda extra para a comunidade surda
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Surdos <span className="text-gradient-vibrant">ensinam</span>, ouvintes <span className="text-gradient">aprendem</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              No DEAF, professores surdos e instrutores de Libras podem dar aulas em vídeo online —
              e <span className="text-foreground font-semibold">cobrar por isso</span>. Uma forma direta
              de gerar renda extra ensinando a sua própria língua para quem quer aprender.
            </p>
          </div>

          {/* Como funciona */}
          <div className="grid md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: UserCheck, t: "1. Cadastre-se como professor", d: "Verificação simples. Exclusivo para surdos e instrutores de Libras certificados." },
              { icon: Video, t: "2. Crie suas aulas", d: "Aulas ao vivo (1:1 ou grupo) ou vídeo-aulas gravadas com seu próprio preço." },
              { icon: DollarSign, t: "3. Receba alunos", d: "Ouvintes contratam aulas direto pelo app. Pagamento seguro e protegido." },
              { icon: TrendingUp, t: "4. Ganhe renda extra", d: "Você define o valor por hora. O DEAF cuida do pagamento e repassa para você." },
            ].map((s, i) => (
              <div key={i} className="group glass rounded-2xl p-6 hover:-translate-y-2 hover:border-primary/50 transition-spring shadow-card">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-spring">
                  <s.icon size={20} className="text-primary-foreground" />
                </div>
                <div className="font-display font-bold mb-1.5">{s.t}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>

          {/* Demo cards de professores */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { n: "Marina Souza", spec: "Libras para iniciantes", price: "R$ 45", rating: 4.9, students: 120, emoji: "👩🏽" },
              { n: "Carlos Lima", spec: "Conversação avançada", price: "R$ 70", rating: 5.0, students: 87, emoji: "👨🏼" },
              { n: "Beatriz Alves", spec: "Cultura surda & história", price: "R$ 55", rating: 4.8, students: 64, emoji: "👩🏻" },
            ].map((p) => (
              <article key={p.n} className="group relative overflow-hidden rounded-3xl glass shadow-card hover:-translate-y-2 hover:border-primary/50 transition-spring">
                <div className="aspect-video bg-gradient-primary relative flex items-center justify-center">
                  <div className="text-7xl">{p.emoji}</div>
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-1 rounded-full">
                    <Hand size={10} /> Professor surdo
                  </div>
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 bg-background/80 text-[10px] font-bold px-2 py-1 rounded-full">
                    <Star size={10} className="fill-accent text-accent" /> {p.rating}
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-bold">{p.n}</div>
                  <div className="text-xs text-muted-foreground mb-3">{p.spec}</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Aula 1h</div>
                      <div className="font-display text-xl font-extrabold text-gradient">{p.price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-muted-foreground">{p.students} alunos</div>
                      <button className="mt-1 inline-flex items-center gap-1 bg-gradient-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-lg shadow-glow">
                        Agendar <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Card de impacto financeiro */}
          <div className="relative rounded-3xl p-8 md:p-10 glass border-2 border-primary/30 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-vibrant opacity-15 blur-3xl" />
            <div className="relative grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-3">Pagamento seguro</div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                  Aulas pagas com proteção total
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  O DEAF intermedeia o pagamento: o aluno paga no app, o valor fica protegido e é
                  liberado para o professor após a aula. Sem fraudes, sem calote — e com nota fiscal
                  e relatório de ganhos para o professor acompanhar a renda.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Lock, t: "Pagamento protegido" },
                  { icon: Shield, t: "Antifraude" },
                  { icon: Wallet, t: "Repasse rápido" },
                  { icon: TrendingUp, t: "Relatórios" },
                ].map((b) => (
                  <div key={b.t} className="glass rounded-xl p-3 text-center">
                    <b.icon size={18} className="text-primary-glow mx-auto mb-1" />
                    <div className="text-[11px] font-semibold">{b.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Tudo no DEAF</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Recursos pensados para <span className="text-gradient">conectar</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Acessibilidade em primeiro lugar — para que surdos e ouvintes possam se comunicar de verdade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <article
                key={f.title}
                className="group relative overflow-hidden rounded-3xl p-7 glass hover:border-primary/50 hover:-translate-y-2 transition-spring shadow-card"
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

      {/* PARA QUEM */}
      <section id="publico" className="relative py-28 px-6 bg-gradient-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Para quem é o DEAF</div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">
              Um app, <span className="text-gradient-vibrant">duas pontas</span>, uma conversa
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <article key={p.title} className="group relative overflow-hidden rounded-3xl p-8 glass hover:border-primary/50 hover:-translate-y-2 transition-spring shadow-card">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-vibrant opacity-10 blur-2xl group-hover:opacity-25 transition-smooth" />
                <div className="relative">
                  <div className="text-xs font-bold tracking-[0.25em] text-primary-glow uppercase mb-4">{p.label}</div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-spring">
                    <p.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEGURANÇA & PRIVACIDADE */}
      <section id="seguranca" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Segurança & privacidade</div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">
              Seus dados, suas <span className="text-gradient-vibrant">conversas</span>, sua proteção
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Acessibilidade só faz sentido com confiança. Por isso, segurança é parte da fundação do DEAF.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Lock, t: "Criptografia ponta a ponta", d: "Mensagens, chamadas e legendas protegidas em trânsito." },
              { icon: Shield, t: "LGPD compliant", d: "Tratamos dados conforme a Lei Geral de Proteção de Dados." },
              { icon: UserCheck, t: "Verificação de professores", d: "Cadastro com validação para evitar fraudes em aulas pagas." },
              { icon: Wallet, t: "Pagamento seguro", d: "Antifraude e proteção tanto para alunos quanto professores." },
            ].map((s) => (
              <div key={s.t} className="glass rounded-2xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-spring">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <s.icon size={18} className="text-primary-foreground" />
                </div>
                <div className="font-bold mb-1">{s.t}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="relative py-24 px-6 border-y border-border bg-gradient-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-[0.3em] text-primary-glow uppercase mb-4">Por que importa</div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">
              Os números por trás do <span className="text-gradient-vibrant">DEAF</span>
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
      <section id="cta" className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-vibrant opacity-10 blur-3xl" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-2xl mx-auto">
          <img src={muteIcon} alt="" width={80} height={80} className="mx-auto rounded-2xl shadow-glow-lg mb-8 animate-float" />
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-primary-glow mb-6">
            <CalendarClock size={14} /> Lançamento em breve
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-5">
            Seja o primeiro a <span className="text-gradient-vibrant">usar o DEAF</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Cadastre seu e-mail e avisamos no dia do lançamento. Acesso antecipado para os primeiros inscritos —
            inclusive professores surdos interessados em dar aulas pelo app.
          </p>

          <form
            onSubmit={handleEmailSubmit}
            noValidate
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-3"
          >
            <div className="relative flex-1">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(null);
                  if (emailSent) setEmailSent(false);
                }}
                aria-invalid={!!emailError}
                aria-describedby={emailError ? "email-error" : undefined}
                placeholder="seu@email.com"
                className={`w-full pl-12 pr-4 py-4 rounded-2xl glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth ${
                  emailError ? "border-destructive/70" : ""
                }`}
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-4 rounded-2xl font-semibold shadow-elegant hover:shadow-glow-lg hover:scale-[1.03] transition-spring"
            >
              <Bell size={18} /> Avise-me
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
            </button>
          </form>

          <div className="min-h-[24px] mb-3" aria-live="polite">
            {emailError && (
              <p id="email-error" className="text-sm text-destructive font-medium">{emailError}</p>
            )}
            {emailSent && !emailError && (
              <p className="text-sm text-secondary font-medium inline-flex items-center gap-2">
                <CheckCircle2 size={16} /> Tudo certo! Avisaremos você no lançamento. 🤟
              </p>
            )}
          </div>

          <p className="text-xs text-muted-foreground inline-flex items-center gap-2">
            <Shield size={12} /> Sem spam. Seus dados são tratados conforme a LGPD.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={muteIcon} alt="" width={28} height={28} className="rounded-lg" />
            <span className="font-display font-extrabold tracking-[0.3em]">DEAF</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Feito com <span className="text-accent">♥</span> para e com a comunidade surda
          </p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
