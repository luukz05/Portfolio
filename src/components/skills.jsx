import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLeanpub,
  FaColumns,
  FaTasks,
  FaUnity,
  FaMicrochip,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiAmazonwebservices,
  SiArduino,
  SiDocker,
  SiExpress,
  SiGodotengine,
  SiMongodb,
  SiMysql,
  SiNasa,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaCodeBranch } from "react-icons/fa6";
import { fadeLeft, fadeRight, fadeUp, staggerFast, viewportCard } from "../lib/motion";

const skillGroups = [
  {
    title: "Front-end",
    items: [
      { icon: FaReact, label: "React" },
      { icon: RiNextjsFill, label: "Next.js" },
      { icon: FaHtml5, label: "HTML" },
      { icon: FaCss3Alt, label: "CSS" },
      { icon: IoLogoJavascript, label: "JavaScript" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: SiTailwindcss, label: "Tailwind UI" },
    ],
  },
  {
    title: "Back-end e linguagens",
    items: [
      { icon: FaNodeJs, label: "Node.js" },
      { icon: SiExpress, label: "Express" },
      { icon: FaPython, label: "Python" },
    ],
  },
  {
    title: "Dados e infraestrutura",
    items: [
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiMysql, label: "MySQL" },
      { icon: SiAmazonwebservices, label: "Amazon Web Services" },
      { icon: SiDocker, label: "Docker" },
      { icon: FaGitAlt, label: "Git" },
      { icon: FaGithub, label: "GitHub" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { icon: FaReact, label: "React Native" },
    ],
  },
  {
    title: "Hardware e games",
    items: [
      { icon: SiArduino, label: "Arduino" },
      { icon: FaMicrochip, label: "ESP32" },
      { icon: FaUnity, label: "Unity" },
      { icon: SiGodotengine, label: "Godot" },
    ],
  },
];

const principles = [
  "Comunicação clara em equipe",
  "Aprendizado rápido",
  "Pensamento prático",
  "Boa leitura de contexto técnico",
  "Proatividade",
  "Visão de produto",
];

const processHighlight = {
  title: "Metodologias ágeis",
  subtitle: "Rotina colaborativa e iterativa",
  copy:
    "Vivência com XP, Scrum, Lean e Kanban aplicados à organização de backlog, definição de prioridades, entregas em ciclos curtos, acompanhamento contínuo e alinhamentos frequentes para revisar o progresso e ajustar o escopo.",
  accent: "Processo",
};

const processMethods = [
  { icon: FaCodeBranch, label: "XP" },
  { icon: FaTasks, label: "Scrum" },
  { icon: FaLeanpub, label: "Lean" },
  { icon: FaColumns, label: "Kanban" },
];

const languageHighlights = [
  {
    title: "Idioma e comunicação",
    subtitle: "Inglês em contexto técnico",
    copy:
      "Certificado em inglês no nível B2+ pela Wizard by Pearson, com domínio avançado da língua e comunicação fluida em conversas técnicas, estudos e colaborações.",
    accent: "Idioma",
  },
  {
    title: "Experiência internacional",
    subtitle: "Kennedy Space Center International Academy",
    copy:
      "Participação em bootcamp imersivo no Kennedy Space Center International Academy, com aulas, atividades práticas e convívio internacional usando inglês durante toda a experiência.",
    accent: "NASA",
  },
];

function SkillCard({ icon: Icon, label }) {
  return (
    <motion.div
      className="flex min-h-14 items-center gap-3 rounded-[18px] bg-[rgba(255,255,255,0.02)] px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition duration-200 hover:bg-[linear-gradient(135deg,rgba(240,90,104,0.16),rgba(209,31,49,0.08))] hover:shadow-[inset_0_0_0_1px_rgba(240,90,104,0.16)]"
      variants={fadeUp}
      whileHover={{ y: -2 }}
    >
      <Icon className="shrink-0 text-[1.15rem] text-[var(--color-red-soft)]" />
      <span className="text-[0.8rem] font-medium uppercase tracking-[0.14em] text-[var(--color-text-mid)]">
        {label}
      </span>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <motion.div
      className="grid gap-6"
      variants={staggerFast}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
    >
      <motion.section variants={fadeUp} className="rounded-[30px] bg-[rgba(14,14,16,0.76)] p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
        <div className="flex flex-wrap gap-3">
          {principles.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[linear-gradient(135deg,rgba(240,90,104,0.14),rgba(209,31,49,0.06))] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--color-text-strong)] shadow-[inset_0_0_0_1px_rgba(240,90,104,0.16)]"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.section>

      <div className="grid gap-6">
        {skillGroups.map((group) => (
          <motion.section
            key={group.title}
            variants={fadeUp}
            className="rounded-[30px] bg-[rgba(14,14,16,0.76)] p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
          >
            <div className="grid gap-6 lg:grid-cols-[15rem_1fr] lg:items-start lg:gap-8">
              <motion.div className="lg:pt-2" variants={fadeLeft}>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-text-strong)]">
                  {group.title}
                </h3>
              </motion.div>
              <motion.div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3" variants={staggerFast}>
                {group.items.map((item) => (
                  <SkillCard key={`${group.title}-${item.label}`} {...item} />
                ))}
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>

      <motion.section variants={fadeUp} className="rounded-[30px] bg-[rgba(14,14,16,0.76)] p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-red-soft)]">
          {processHighlight.accent}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[var(--color-text-strong)]">
          {processHighlight.title}
        </h3>
        <p className="mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
          {processHighlight.subtitle}
        </p>
        <motion.div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" variants={staggerFast}>
          {processMethods.map((item) => (
            <SkillCard key={item.label} {...item} />
          ))}
        </motion.div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-mid)]">
          {processHighlight.copy}
        </p>
      </motion.section>

      <motion.section variants={fadeUp} className="rounded-[30px] bg-[rgba(14,14,16,0.76)] p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
        <div className="mb-6 flex items-start justify-between gap-6">
          <motion.div variants={fadeLeft}>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-red-soft)]">
              Inglês
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--color-text-strong)]">
              Comunicação internacional e experiência imersiva.
            </h3>
          </motion.div>
          <motion.div className="hidden items-center gap-3 lg:flex" variants={fadeRight}>
            <LiaFlagUsaSolid className="text-4xl text-[var(--color-text-strong)]" />
            <span className="text-[var(--color-text-faint)]">+</span>
            <SiNasa className="text-4xl text-[var(--color-red-soft)]" />
          </motion.div>
        </div>

        <motion.div className="grid gap-4 lg:grid-cols-2" variants={staggerFast}>
          {languageHighlights.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-[22px] bg-[rgba(255,255,255,0.02)] px-5 py-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-red-soft)]">
                {item.accent}
              </p>
              <h4 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[var(--color-text-strong)]">
                {item.title}
              </h4>
              <p className="mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
                {item.subtitle}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-mid)]">
                {item.copy}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
