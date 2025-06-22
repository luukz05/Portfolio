import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaUnity,
  FaCode,
  FaMicrochip,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiAxios,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiUnrealengine,
  SiAseprite,
  SiArduino,
} from "react-icons/si";

import { LiaFlagUsaSolid } from "react-icons/lia";

import {
  FaRegSmile,
  FaPeopleCarry,
  FaLightbulb,
  FaHandsHelping,
  FaClock,
  FaPuzzlePiece,
  FaBrain,
  FaColumns,
  FaProjectDiagram,
  FaBalanceScale,
} from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";

const softSkills = [
  {
    icon: <FaRegSmile />,
    title: "Empatia",
    description:
      "Habilidade de compreender sentimentos e perspectivas alheias, criando conexões genuínas e fortalecendo o trabalho em equipe.",
  },
  {
    icon: <FaComments />,
    title: "Comunicação",
    description:
      "Capacidade de expressar ideias com clareza, escutar ativamente e adaptar a linguagem ao público e ao contexto.",
  },
  {
    icon: <FaPeopleCarry />,
    title: "Trabalho em Equipe",
    description:
      "Aptidão para colaborar com pessoas diversas, respeitando opiniões e contribuindo de forma proativa para resultados coletivos.",
  },
  {
    icon: <FaLightbulb />,
    title: "Criatividade",
    description:
      "Mentalidade inovadora para resolver problemas de forma original, propor melhorias e impulsionar projetos com visão diferenciada.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Liderança",
    description:
      "Capacidade de influenciar positivamente, motivar equipes, tomar decisões assertivas e guiar iniciativas rumo ao sucesso.",
  },
  {
    icon: <FaClock />,
    title: "Gestão de Tempo",
    description:
      "Organização eficiente de tarefas e prioridades, garantindo entregas de qualidade dentro dos prazos estabelecidos.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Adaptabilidade",
    description:
      "Flexibilidade para lidar com mudanças, aprender rapidamente e se ajustar a novos contextos e tecnologias.",
  },
  {
    icon: <FaBrain />,
    title: "Pensamento Crítico",
    description:
      "Análise lógica e estratégica de problemas, questionando padrões e tomando decisões embasadas e eficientes.",
  },
];

import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
const skills = {
  "Front-End": [
    { icon: <FaHtml5 className="text-ch1" />, label: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS" },
    {
      icon: <IoLogoJavascript className="text-yellow-400" />,
      label: "Javacript",
    },
    { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind" },
    { icon: <FaBootstrap className="text-fuchsia-500" />, label: "Bootstrap" },
    { icon: <FaReact className="text-ch1" />, label: "React" },
    { icon: <FaReact className="text-blue-500" />, label: "React Native" },
    { icon: <FaVuejs className="text-green-500" />, label: "Vue.js" },
  ],
  "Back-End": [
    {
      icon: <IoLogoJavascript className="text-yellow-400" />,
      label: "Javacript",
    },
    { icon: <FaNodeJs className="text-green-600" />, label: "Node.js" },
    { icon: <SiExpress className="text-gray-700" />, label: "Express" },
    { icon: <SiAxios className="text-blue-400" />, label: "Axios" },
    { icon: <FaPython className="text-yellow-500" />, label: "Python" },
    { icon: <SiMongoose className="text-ch1" />, label: "Mongoose" },
    {
      icon: <TbApi className="text-ch1" />,
      label: "API RESTful",
    },
  ],
  "Banco de Dados": [
    { icon: <SiMongodb className="text-green-700" />, label: "MongoDB" },
    { icon: <SiMariadb className="text-blue-700" />, label: "MariaDB" },
    { icon: <SiMysql className="text-blue-700" />, label: "MySQL" },
  ],
  "Versionamento e Gestão de Projetos": [
    { icon: <FaGitAlt className="text-ch1" />, label: "Git" },
    { icon: <FaGithub className="text-black" />, label: "GitHub" },
    {
      icon: <FaLightbulb className="text-yellow-500" />,
      label: "XP (Extreme Programming)",
    },
    { icon: <FaColumns className="text-blue-600" />, label: "Kanban / Trello" },
    { icon: <FaProjectDiagram className="text-red-500" />, label: "Scrum" },
    { icon: <FaBalanceScale className="text-green-600" />, label: "Lean" },
  ],
  Hardware: [
    { icon: <SiArduino className="text-blue-700" />, label: "Arduino" },
    { icon: <FaMicrochip className="text-gray-700" />, label: "ESP32" },
  ],
  "Estudando Atualmente": [
    { icon: <RiNextjsFill className="text-black" />, label: "Next.JS" },
    { icon: <SiTypescript className="text-sky-700" />, label: "TypeScript" },
    { icon: <SiDocker className="text-blue-800" />, label: "Docker" },
  ],
};
import { SiNasa, SiMariadb, SiTypescript, SiDocker } from "react-icons/si";

export default function SkillsSection() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-12 px-4">
      <div className="flex flex-col w-full lg:w-1/2 gap-12">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center gap-2 text-white text-lg font-mono justify-center flex-col">
            <div className="flex gap-2 justify-center items-center">
              <span className="text-cherry">&lt;</span>
              <h2 className="text-2xl font-bold">Soft-Skills</h2>
              <span className="text-cherry">/&gt;</span>
            </div>
            <p className="text-s font-bold">Características interpessoais</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-5xl">
            {softSkills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-ch2 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 hover:bg-cherry/20"
              >
                <div className="text-4xl">{skill.icon}</div>
                <h3 className="mt-4 text-xl text-white font-semibold">
                  {skill.title}
                </h3>
                <p className="mt-2 text-white/70 text-center text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center gap-2 text-white text-lg font-mono justify-center flex-col">
            <div className="flex items-center gap-2 text-white text-lg font-mono justify-center flex-col">
              <div className="flex gap-2 justify-center items-center">
                <span className="text-cherry">&lt;</span>
                <h2 className="text-2xl font-bold">Línguas</h2>
                <span className="text-cherry">/&gt;</span>
              </div>
              <p className="text-s font-bold">Idiomas e experiências</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-ch2 p-6 rounded-xl shadow-lg hover:scale-101 transition duration-300 hover:bg-cherry/20 w-full">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <LiaFlagUsaSolid className="text-5xl text-offwhite" />
              <p className="text-3xl">+</p>
              <SiNasa className="text-8xl text-red-500" />
            </div>
            <h3 className="mt-4 text-xl text-white font-semibold text-center">
              Inglês + Bootcamp Kennedy Space Center International Academy
            </h3>
            <p className="mt-2 text-white/70 text-center text-sm">
              <strong>Certificado no nível B2+ de inglês</strong> pela Wizard by
              Pearson, com <strong>domínio avançado da língua.</strong>{" "}
              Participei de um bootcamp imersivo no{" "}
              <strong>
                Kennedy Space Center – International Academy, NASA,
              </strong>{" "}
              utilizando o inglês 100% do tempo em aulas, atividades práticas e
              convivência internacional. Recebeu{" "}
              <strong>
                certificação de aptidão na área de STEM (Ciência, Tecnologia,
                Engenharia e Matemática)
              </strong>
              , com foco em inovação e aplicação de conhecimento técnico em um
              ambiente multicultural.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 gap-8">
        <div className="flex items-center gap-2 text-white text-lg font-mono justify-center flex-col">
          <div className="flex gap-2 justify-center items-center">
            <span className="text-cherry">&lt;</span>
            <h2 className="text-2xl font-bold">Hard-Skills</h2>
            <span className="text-cherry">/&gt;</span>
          </div>
          <p className="text-s font-bold">Tecnologias e ferramentas</p>
        </div>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white text-lg font-mono">
              <span className="text-cherry">&lt;</span>
              <h2 className="text-xl font-bold">{category}</h2>
              <span className="text-cherry">/&gt;</span>
            </div>

            <div
              className={`grid gap-4 ${
                items.length > 4
                  ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                  : "grid-cols-2 sm:grid-cols-3"
              } overflow-x-auto sm:overflow-visible p-2`}
            >
              {items.map(({ icon, label }, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center text-center bg-ch2 p-4 rounded-2xl shadow-md hover:scale-105 transition duration-300 hover:bg-cherry/20 min-w-[100px]"
                >
                  <div className="text-5xl">{icon}</div>
                  <span className="mt-2 text-sm font-mono text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
