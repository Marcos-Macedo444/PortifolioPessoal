import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinux,
  FaPython,
  FaReact
} from "react-icons/fa";
import { SiFastapi, SiFlask, SiPostgresql } from "react-icons/si";
import {
  Bot,
  Braces,
  DatabaseZap,
  GlobeLock,
  Network,
  ServerCog,
  ShieldCheck,
  Terminal
} from "lucide-react";
import type { SkillGroup, Technology } from "@/types";

export const tickerSkills = [
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "Flask",
  "FastAPI",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Linux",
  "Terminal",
  "Redes",
  "Cybersecurity",
  "Infraestrutura",
  "Automação",
  "Backend",
  "APIs",
  "Segurança",
  "Sistemas"
];

export const carouselSkills = [
  "Cybersecurity",
  "Infrastructure",
  "Automation",
  "Backend",
  "Python",
  "Networks",
  "Problem Solving",
  "Leadership",
  "Communication",
  "Innovation"
];

export const technologies: Technology[] = [
  { name: "Python", area: "Backend e automação", level: "Intermediário", signal: 92, icon: FaPython },
  { name: "JavaScript", area: "Interfaces e lógica web", level: "Em evolução", signal: 78, icon: FaJs },
  { name: "HTML", area: "Estrutura semântica", level: "Intermediário", signal: 82, icon: FaHtml5 },
  { name: "CSS", area: "Layout e responsividade", level: "Intermediário", signal: 82, icon: FaCss3Alt },
  { name: "Flask", area: "Backend web", level: "Em evolução", signal: 74, icon: SiFlask },
  { name: "FastAPI", area: "APIs modernas", level: "Em evolução", signal: 68, icon: SiFastapi },
  { name: "PostgreSQL", area: "Banco de dados", level: "Base", signal: 64, icon: SiPostgresql },
  { name: "Git", area: "Versionamento", level: "Intermediário", signal: 80, icon: FaGitAlt },
  { name: "GitHub", area: "Colaboração e portfólio", level: "Intermediário", signal: 82, icon: FaGithub },
  { name: "Linux", area: "Ambiente e terminal", level: "Em evolução", signal: 72, icon: FaLinux },
  { name: "Terminal", area: "CLI e produtividade", level: "Intermediário", signal: 84, icon: Terminal },
  { name: "Redes", area: "Fundamentos de infraestrutura", level: "Em evolução", signal: 70, icon: Network },
  { name: "Cybersecurity", area: "Mentalidade defensiva", level: "Em evolução", signal: 76, icon: ShieldCheck },
  { name: "Infraestrutura", area: "Sistemas e serviços", level: "Em evolução", signal: 74, icon: ServerCog },
  { name: "Automação", area: "Rotinas e processos", level: "Intermediário", signal: 88, icon: Bot },
  { name: "Backend", area: "Serviços e regras", level: "Em evolução", signal: 76, icon: DatabaseZap },
  { name: "APIs", area: "Integrações", level: "Em evolução", signal: 74, icon: Braces },
  { name: "Segurança de aplicações", area: "Boas práticas", level: "Em evolução", signal: 70, icon: GlobeLock },
  { name: "React Native", area: "Mobile", level: "Em evolução", signal: 62, icon: FaReact }
];

const skillByName = new Map(technologies.map((technology) => [technology.name, technology]));

function pickSkills(...names: string[]) {
  return names.map((name) => {
    const technology = skillByName.get(name);

    if (!technology) {
      throw new Error(`Skill not found: ${name}`);
    }

    return technology;
  });
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Cybersecurity",
    description: "Base defensiva, leitura de risco e boas práticas aplicadas em produtos e infraestrutura.",
    accent: "green",
    icon: ShieldCheck,
    skills: pickSkills("Cybersecurity", "Segurança de aplicações", "Redes")
  },
  {
    title: "Infraestrutura",
    description: "Sistemas, serviços e operação em ambiente Linux com foco em estabilidade.",
    accent: "cyan",
    icon: ServerCog,
    skills: pickSkills("Linux", "Terminal", "Infraestrutura")
  },
  {
    title: "Automação",
    description: "Scripts, rotinas e integrações para reduzir trabalho manual e acelerar entregas.",
    accent: "purple",
    icon: Bot,
    skills: pickSkills("Python", "Automação", "APIs")
  },
  {
    title: "Desenvolvimento",
    description: "Web, backend e interfaces com atenção a usabilidade, dados e manutenção.",
    accent: "blue",
    icon: Braces,
    skills: pickSkills("JavaScript", "HTML", "CSS", "Flask", "FastAPI", "Backend", "React Native")
  },
  {
    title: "Redes / NOC",
    description: "Fundamentos de redes, terminal e troubleshooting orientado a operação.",
    accent: "cyan",
    icon: Network,
    skills: pickSkills("Redes", "Linux", "Terminal")
  },
  {
    title: "Ferramentas",
    description: "Versionamento, colaboração técnica e persistência de dados para projetos reais.",
    accent: "green",
    icon: FaGithub,
    skills: pickSkills("Git", "GitHub", "PostgreSQL")
  }
];
