import {
  BookOpen,
  Trophy,
  Heart,
  GraduationCap,
  Gift,
  Star,
  Smile,
  DollarSign,
  Users,
  Handshake,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

// ── Navegação ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Campanhas", href: "#campanhas" },
  { label: "Contato", href: "#contato" },
] as const;

// ── Áreas de Atuação ─────────────────────────────────────
export const AREAS = [
  {
    title: "Educação",
    description:
      "Apoio com materiais escolares, reforço educacional, projetos de leitura e atividades pedagógicas que incentivam o aprendizado e o desenvolvimento intelectual das crianças.",
    icon: BookOpen,
    color: "text-primary-600",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-200",
  },
  {
    title: "Esporte",
    description:
      "Escolinhas de futebol, judô, capoeira e outras modalidades esportivas que promovem saúde, disciplina, trabalho em equipe e inclusão social.",
    icon: Trophy,
    color: "text-secondary-600",
    bgColor: "bg-secondary-50",
    borderColor: "border-secondary-200",
  },
  {
    title: "Assistência Social",
    description:
      "Campanhas solidárias, distribuição de cestas básicas, roupas e itens de higiene para famílias em situação de vulnerabilidade social.",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    title: "Oportunidades para Juventude",
    description:
      "Qualificação profissional, cursos de capacitação, orientação vocacional e encaminhamento ao mercado de trabalho para jovens da comunidade.",
    icon: GraduationCap,
    color: "text-accent-600",
    bgColor: "bg-accent-50",
    borderColor: "border-accent-200",
  },
] as const;

// ── Campanhas ─────────────────────────────────────────────
export const CAMPAIGNS = [
  {
    title: "Natal Solidário",
    description:
      "Levamos presentes, cestas natalinas e muito carinho para centenas de crianças e famílias, garantindo que o espírito natalino alcance a todos.",
    icon: Gift,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    title: "Páscoa Solidária",
    description:
      "Distribuímos ovos de Páscoa e chocolates para crianças em situação de vulnerabilidade, proporcionando alegria e acolhimento nessa data especial.",
    icon: Heart,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    title: "Mês das Crianças",
    description:
      "Um mês inteiro de atividades, brincadeiras, presentes e celebrações dedicadas às crianças, reforçando nosso compromisso com a infância feliz.",
    icon: Star,
    color: "text-secondary-500",
    bgColor: "bg-secondary-50",
  },
] as const;

// ── Números de Impacto ────────────────────────────────────
export const IMPACT_NUMBERS = [
  { label: "Crianças Atendidas", value: 500, suffix: "+" },
  { label: "Projetos Realizados", value: 20, suffix: "+" },
  { label: "Campanhas", value: 15, suffix: "+" },
  { label: "Voluntários", value: 100, suffix: "+" },
] as const;

// ── Como Ajudar ──────────────────────────────────────────
export const HELP_OPTIONS = [
  {
    title: "Faça uma Doação",
    description:
      "Sua contribuição financeira ajuda a manter nossos projetos e a transformar vidas. Qualquer valor faz a diferença!",
    icon: DollarSign,
    color: "text-accent-600",
    bgColor: "bg-accent-50",
    cta: "Doar Agora",
    href: "#doe",
    highlight: true,
  },
  {
    title: "Seja Voluntário",
    description:
      "Doe seu tempo e talento. Temos diversas oportunidades para você fazer parte dessa transformação social.",
    icon: Users,
    color: "text-primary-600",
    bgColor: "bg-primary-50",
    cta: "Quero Ser Voluntário",
    href: "#contato",
    highlight: false,
  },
  {
    title: "Seja Parceiro",
    description:
      "Empresas e organizações podem se tornar parceiras do Instituto Presença e ampliar o impacto social.",
    icon: Handshake,
    color: "text-secondary-600",
    bgColor: "bg-secondary-50",
    cta: "Saiba Mais",
    href: "#contato",
    highlight: false,
  },
] as const;

// ── Contato ──────────────────────────────────────────────
export const CONTACT_INFO = {
  phone: "(11) 99999-9999",
  email: "contato@institutopresenca.org.br",
  address: "Rua Exemplo, 123 - Centro, São Paulo - SP",
  phoneIcon: Phone,
  emailIcon: Mail,
  addressIcon: MapPin,
} as const;

// ── Redes Sociais ────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com/institutopresenca", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/institutopresenca", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@institutopresenca", icon: Youtube },
] as const;
