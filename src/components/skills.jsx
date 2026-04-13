import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaUnity,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiArduino,
  SiDocker,
  SiExpress,
  SiGodotengine,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

const skillGroups = [
  {
    title: "Core stack",
    items: [
      { icon: FaReact, label: "React" },
      { icon: RiNextjsFill, label: "Next.js" },
      { icon: FaNodeJs, label: "Node.js" },
      { icon: SiExpress, label: "Express" },
      { icon: SiTailwindcss, label: "Tailwind" },
      { icon: IoLogoJavascript, label: "JavaScript" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: FaPython, label: "Python" },
    ],
  },
  {
    title: "Data and infra",
    items: [
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiMysql, label: "MySQL" },
      { icon: SiDocker, label: "Docker" },
      { icon: FaGitAlt, label: "Git" },
      { icon: FaGithub, label: "GitHub" },
    ],
  },
  {
    title: "Interface and front-end",
    items: [
      { icon: FaHtml5, label: "HTML" },
      { icon: FaCss3Alt, label: "CSS" },
      { icon: SiTailwindcss, label: "UI systems" },
      { icon: FaReact, label: "React Native" },
    ],
  },
  {
    title: "Hardware and game dev",
    items: [
      { icon: SiArduino, label: "Arduino" },
      { icon: FaMicrochip, label: "ESP32" },
      { icon: FaUnity, label: "Unity" },
      { icon: SiGodotengine, label: "Godot" },
    ],
  },
];

const principles = [
  "Comunicacao clara em equipe",
  "Aprendizado rapido",
  "Pensamento pratico",
  "Boa leitura de contexto tecnico",
];

function SkillCard({ icon: Icon, label }) {
  return (
    <div className="flex min-h-24 flex-col justify-between rounded-[24px] bg-[rgba(255,255,255,0.02)] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition duration-200 hover:bg-[rgba(209,31,49,0.05)]">
      <Icon className="text-2xl text-[var(--color-red-soft)]" />
      <span className="mt-5 text-sm font-medium uppercase tracking-[0.16em] text-[var(--color-text-mid)]">
        {label}
      </span>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="flex flex-col gap-6">
        <div className="rounded-[30px] bg-[rgba(14,14,16,0.76)] p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-red-soft)]">
            Visao de trabalho
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--color-text-strong)]">
            Menos ruido, mais consistencia.
          </h3>
          <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
            Tenho mais interesse em sistemas que funcionam bem, interfaces que
            comunicam com clareza e implementacoes que mantem o produto coeso
            ao longo do tempo.
          </p>
        </div>

        <div className="rounded-[30px] bg-[rgba(14,14,16,0.76)] p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-red-soft)]">
            Soft skills
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {principles.map((item) => (
              <span
                key={item}
                className="rounded-full px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--color-text-mid)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </aside>

      <div className="grid gap-6">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-[30px] bg-[rgba(14,14,16,0.76)] p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
          >
            <div className="mb-6 flex items-center justify-between gap-4 pb-4">
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-text-strong)]">
                {group.title}
              </h3>
              <span className="h-px flex-1 bg-[rgba(255,255,255,0.05)]" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {group.items.map((item) => (
                <SkillCard key={`${group.title}-${item.label}`} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
