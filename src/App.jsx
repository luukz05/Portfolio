import "./App.css";
import { motion } from "framer-motion";
import Header from "./components/Header";
import ImageLinkButton from "./components/ImageButton";
import ProjectCard from "./components/Cards";
import { Destaque } from "./components/Destaque";
import { SobreMim } from "./components/Sobre Mim";
import { Carousel } from "./components/carousel";
import SkillsSection from "./components/skills";
import Contato from "./components/contato";

import envelope from "./assets/envelope.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";

import GAMMA from "./assets/GAMMA.png";
import NBA from "./assets/NBA.png";
import IndieFolio from "./assets/IndieFolio.png";
import Blueprint from "./assets/gif.gif";
import MinimalKeeper from "./assets/MinimalKeeper.png";
import DVGC from "./assets/DVGC.png";
import Rematch from "./assets/Rematch.png";
import ConsultaWeb from "./assets/ConsultaWeb.png";
import Esse from "./assets/Esse.png";
import furia from "./assets/furia.png";
import sata from "./assets/sata.png";
import stagio from "./assets/stagio.png";
import dddtodesco from "./assets/dddtodesco.png";

import lostmemories from "./assets/Lost Memories.png";
import chase from "./assets/The Chase.png";
import zombiefication from "./assets/Zombiefication.png";
import treasure from "./assets/Treasure Island.png";
import dvgcmobile from "./assets/dvgc_mobile.jpg";
import dvgcGrupo from "./assets/dvgc_grupo.png";
import dvgcPrototipo from "./assets/dvgc_prototipo.png";
import dvgcLogo from "./assets/DVGC.png";

import s1 from "./assets/1.png";
import s2 from "./assets/2.png";
import s3 from "./assets/3.png";
import s4 from "./assets/4.png";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerFast,
  viewportCard,
  viewportSection,
} from "./lib/motion";

const webProjects = [
  {
    title: "DVGC",
    description:
      "Projeto de smart cities que conecta ESP32, sensores e app mobile para detectar vazamentos de GLP e enviar alertas em tempo real.",
    techs: [
      "MOBILE",
      "REACT NATIVE",
      "MYSQL",
      "EXPO",
      "EXPRESS",
      "NODE",
      "C++",
      "IOT",
    ],
    video: "https://www.youtube.com/watch?v=VPFjS6IrryU",
    repo: "https://github.com/luukz05/DVGC",
    foto: DVGC,
  },
  {
    title: "SATA",
    description:
      "Sistema acadêmico para monitoramento de alagamentos com ESP32, sensores e notificações móveis em uma proposta de mobilidade urbana segura.",
    techs: [
      "MOBILE",
      "REACT NATIVE",
      "EXPO",
      "EXPRESS",
      "NODE",
      "C++",
      "IOT",
    ],
    repo: "https://github.com/luukz05/SATA",
    foto: sata,
  },
  {
    title: "3D Todesco",
    description:
      "Primeiro projeto freelance com catálogo interativo, filtros, carrinho via WhatsApp e base pronta para expansão comercial.",
    techs: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "TAILWIND",
      "FLASK",
      "MONGODB",
      "SHADCN",
    ],
    repo: "https://github.com/luukz05/3dtodesco",
    foto: dddtodesco,
    link: "https://3dtodesco.shop/",
  },
  {
    title: "Stag.io",
    description:
      "Plataforma pessoal para organizar candidaturas, projetos e metas com kanban, notas, graficos e stack moderna em Next.js e FastAPI.",
    techs: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "TAILWIND",
      "FASTAPI",
      "POSTGRESQL",
      "DOCKER",
    ],
    repo: "https://github.com/luukz05/stag.io",
    foto: stagio,
  },
  {
    title: "FURIA.QG",
    description:
      "Experiência gamificada para a comunidade da FURIA com desafios, ranking e autenticação segura, incluindo uso inicial de IA e OCR.",
    techs: [
      "REACT",
      "TAILWIND",
      "FLASK",
      "PYTHON",
      "MONGODB",
      "JWT",
      "BCRYPT",
    ],
    repo: "https://github.com/luukz05/FURIA_TEST",
    foto: furia,
    link: "https://furiaqg.netlify.app/",
  },
  {
    title: "ReMatch",
    description:
      "Plataforma de sustentabilidade inspirada em matchmaking para conectar pessoas e empresas interessadas em reutilização e economia circular.",
    techs: [
      "REACT",
      "CSS",
      "AXIOS",
      "REACT-COOKIES",
      "MONGODB",
      "MONGOOSE",
      "EXPRESS",
      "NODE",
    ],
    repo: "https://github.com/luukz05/ReMatch",
    foto: Rematch,
  },
  {
    title: "Minimal Keeper",
    description:
      "Aplicativo mobile de segurança pessoal para gerar, validar e armazenar senhas com foco em UX objetiva e integração full stack.",
    techs: [
      "MOBILE",
      "REACT NATIVE",
      "MYSQL",
      "EXPRESS",
      "NODE",
      "BCRYPT",
      "CRYPTO",
      "JWT",
    ],
    repo: "https://github.com/luukz05/MinimalKeeper",
    foto: MinimalKeeper,
    video: "https://www.youtube.com/watch?v=GKuBor_k-s8",
  },
  {
    title: "ConsultaWeb",
    description:
      "Projeto de estudo com scraping, leitura de PDFs e persistência em MySQL, conectado a uma interface Vue para pesquisa e filtros.",
    techs: [
      "VUE.JS",
      "BOOTSTRAP",
      "PYTHON",
      "MYSQL",
      "WEB SCRAPING",
      "FLASK",
    ],
    repo: "https://github.com/luukz05/ConsutaWEB",
    foto: ConsultaWeb,
  },
  {
    title: "IndieFolio",
    description:
      "Portfólio colaborativo para artistas independentes com categorias dinâmicas, Handlebars no front e MongoDB para publicações e usuários.",
    techs: ["HANDLEBARS", "CSS", "JAVASCRIPT", "MONGOOSE", "MONGODB", "NODE"],
    foto: IndieFolio,
    repo: "https://github.com/luukz05/IndieFolio",
    video: "https://youtu.be/fdZvMhgTKn0",
  },
  {
    title: "Tactical Blueprint",
    description:
      "Planner tático para CS com mapas interativos, desenho em tempo real e salvamento de estratégias. Foi meu primeiro projeto em React.",
    techs: ["STYLED-COMPONENTS", "REACT"],
    repo: "https://github.com/luukz05/Tactical-Blueprint-CS2-Planner",
    foto: Blueprint,
    video: "https://youtu.be/G-yF0QhU6Fk?t=25",
  },
  {
    title: "NBA Tracker",
    description:
      "Aplicação web com notícias, elencos, estatísticas e placares em tempo real, consumindo dados externos com foco em integração de API e organização visual.",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://luukz05.github.io/NBA-Tracker/index.html",
    repo: "https://github.com/luukz05/NBA-Tracker",
    foto: NBA,
  },
  {
    title: "Este portfólio",
    description:
      "Projeto criado para apresentar minha evolução técnica, estudar Tailwind e refinar a forma como organizo e comunico meus trabalhos.",
    techs: ["REACT", "TAILWIND", "VITE", "RESPONSIVIDADE"],
    repo: "https://github.com/luukz05/Portfolio",
    foto: Esse,
  },
  {
    title: "G.A.M.M.A",
    description:
      "Site institucional responsivo para uma empresa fictícia de engenharia ambiental, criado para consolidar fundamentos de HTML, CSS e estrutura de interface.",
    techs: ["HTML", "CSS", "RESPONSIVIDADE"],
    link: "https://luukz05.github.io/GAMMA/",
    repo: "https://github.com/luukz05/GAMMA",
    foto: GAMMA,
  },
];

const gameProjects = [
  {
    title: "Treasure Island",
    description:
      "Jogo top-down inspirado em Zelda, com foco em combate, exploração e construção de mapas interativos.",
    techs: ["GODOT", "GDSCRIPT", "ASEPRITE"],
    foto: treasure,
  },
  {
    title: "Lost Memories",
    description:
      "Plataforma inspirada em Celeste, com movimentação precisa, puzzle e narrativa como eixo do design.",
    techs: ["UNITY 2D", "C#"],
    video: "https://youtu.be/IEID1vtLYkM",
    demo: "https://theldev.itch.io/lost-memories",
    foto: lostmemories,
  },
  {
    title: "Zombiefication",
    description:
      "FPS em Unreal Engine voltado ao estudo de combate, progressão por fases e ritmo de gameplay.",
    techs: ["UNREAL ENGINE", "BLUEPRINTS"],
    video: "https://youtu.be/ZiXHtchtcXk",
    foto: zombiefication,
  },
  {
    title: "The Chase",
    description:
      "Jogo de fuga com drift, risco e recompensa, explorando física veicular e atmosfera arcade.",
    techs: ["UNITY 3D", "C#"],
    video: "https://youtu.be/l5qiPo7G6qQ",
    foto: chase,
  },
];

function SectionHeading({ eyebrow, title, description, id, meta }) {
  return (
    <motion.div
      id={id}
      className="editorial-shell section-head"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportSection}
    >
      <motion.div variants={staggerFast}>
        <motion.p variants={fadeUp} className="section-kicker">
          {eyebrow}
        </motion.p>
        <motion.h2 variants={fadeUp} className="section-title">
          {title}
        </motion.h2>
        {description ? (
          <motion.p variants={fadeUp} className="section-copy">
            {description}
          </motion.p>
        ) : null}
      </motion.div>
      {meta ? (
        <motion.div variants={fadeRight} className="section-meta">
          <span className="section-meta-label">{meta.label}</span>
          <p className="section-meta-copy">{meta.copy}</p>
        </motion.div>
      ) : null}
    </motion.div>
  );
}

function ProjectSection({
  id,
  eyebrow,
  title,
  description,
  meta,
  projects,
  tone = "default",
}) {
  return (
    <section
      className={`section-block ${
        tone === "soft" ? "section-block-soft" : "section-block-default"
      }`}
    >
      <SectionHeading
        id={id}
        eyebrow={eyebrow}
        title={title}
        description={description}
        meta={meta}
      />
      <div className="editorial-shell mt-16">
        <div className="project-grid-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} revealIndex={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const heroServices = [
    {
      title: "Front-end",
      copy: "Interfaces claras e responsivas.",
    },
    {
      title: "Full stack",
      copy: "API, dados e produto.",
    },
    {
      title: "Mobile + IoT",
      copy: "Apps e sistemas conectados.",
    },
    {
      title: "Inglês",
      copy: "Comunicação fluente em contexto técnico.",
    },
    {
      title: "Soft skills",
      copy: "Clareza, colaboração e pensamento prático.",
    },
  ];

  return (
    <>
      <Header />
      <main className="relative overflow-x-hidden">
        <section id="hero" className="hero-grid">
          <div className="editorial-shell hero-shell">
            <motion.div
              className="hero-copy"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.span variants={fadeUp} className="hero-pill">
                Portfolio / 2026
              </motion.span>

              <motion.div variants={staggerFast} className="hero-copy-grid">
                <motion.h1 variants={fadeUp} className="hero-title">
                  Lucas Vargas
                </motion.h1>
                <motion.p variants={fadeUp} className="hero-role">
                  Desenvolvedor full stack criando interfaces orientadas a
                  produto, sistemas conectados e experiências digitais com
                  identidade visual forte.
                </motion.p>
                <motion.p variants={fadeUp} className="hero-note">
                  Trabalho entre front-end, back-end, mobile e hardware com
                  foco em clareza, ritmo visual e produtos que parecem
                  construídos com intenção, não montados por partes.
                </motion.p>
              </motion.div>

              <motion.div variants={staggerFast} className="hero-actions">
                <motion.a variants={scaleIn} className="button-primary" href="#web">
                  Ver projetos
                </motion.a>
                <motion.div variants={scaleIn}>
                <ImageLinkButton
                  href="https://github.com/luukz05"
                  src={github}
                  alt="GitHub"
                  newTab={true}
                />
                </motion.div>
                <motion.div variants={scaleIn}>
                <ImageLinkButton
                  href="https://linkedin.com/in/lucasvargasdev"
                  src={linkedin}
                  alt="LinkedIn"
                  newTab={true}
                />
                </motion.div>
                <motion.div variants={scaleIn}>
                <ImageLinkButton
                  href="copy:lucasvargasdev05@gmail.com"
                  src={envelope}
                  alt="Email"
                  newTab={true}
                />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.aside
              className="hero-panel glass-surface"
              variants={fadeRight}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={fadeUp} className="hero-panel-top">
                <p className="hero-panel-label">Serviços</p>
                <span className="hero-availability">Disponível para projetos</span>
              </motion.div>

              <motion.div
                className="hero-service-list"
                variants={staggerFast}
                initial="hidden"
                animate="show"
              >
                {heroServices.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="hero-service-item"
                  >
                    <p className="hero-service-title">{item.title}</p>
                    <p className="hero-service-copy">{item.copy}</p>
                  </motion.div>
                ))}
              </motion.div>

            </motion.aside>
          </div>
        </section>

        <section className="section-block section-block-plain">
          <SectionHeading
            id="sobre"
            eyebrow="Sobre mim"
            title="Desenvolvimento, produto e experiência visual."
            description="Minha base reúne desenvolvimento web, mobile e sistemas conectados ao mundo físico. Aqui, a ideia é apresentar essa trajetória com mais clareza, contexto e organização."
            meta={{
              label: "Nota",
              copy:
                "Prático, autodidata e orientado a produto. Busco construir experiências claras, funcionais e bem apresentadas.",
            }}
          />
          <motion.div
            className="editorial-shell mt-16"
            initial="hidden"
            whileInView="show"
            viewport={viewportSection}
            variants={fadeUp}
          >
            <div className="showcase-grid about-showcase">
              <motion.div variants={fadeLeft}>
                <SobreMim />
              </motion.div>
              <motion.div variants={fadeRight} className="flex h-full items-stretch">
                <Carousel s1={s1} s2={s2} s3={s3} s4={s4} />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="section-block section-block-soft">
          <SectionHeading
            id="destaque"
            eyebrow="Projeto em destaque"
            title="Um projeto que uniu software, hardware e usabilidade."
            description="DVGC representa a parte mais concreta da minha experiência com produto, integração e impacto social."
            meta={{
              label: "Foco do caso",
              copy:
                "Smart Cities, alertas em tempo real, interface mobile e monitoramento físico em um mesmo fluxo.",
            }}
          />
          <motion.div
            className="editorial-shell mt-16"
            initial="hidden"
            whileInView="show"
            viewport={viewportSection}
            variants={fadeUp}
          >
            <Destaque
              groupPhoto={dvgcGrupo}
              prototypePhoto={dvgcPrototipo}
              logoCard={dvgcLogo}
            />
          </motion.div>
        </section>

        <ProjectSection
          id="web"
          eyebrow="Projetos web"
          title="Projetos web selecionados."
          description="Projetos em que produto, interface, dados, autenticação, mobile e integração externa aparecem com pesos diferentes, mas sempre com foco em clareza e boa apresentação."
          meta={{
            label: "Seleção",
            copy: `${String(webProjects.length).padStart(
              2,
              "0"
            )} projetos web organizados por impacto e complexidade.`,
          }}
          projects={webProjects}
        />

        <ProjectSection
          id="games"
          eyebrow="Projetos de jogos"
          title="Projetos de jogos e experimentos interativos."
          description="Uma seleção menor, mas importante para direção criativa, sensação de ritmo e entendimento de experiência interativa."
          meta={{
            label: "Seleção",
            copy: `${String(gameProjects.length).padStart(
              2,
              "0"
            )} projetos apresentados com a mesma grade e o mesmo rigor visual.`,
          }}
          projects={gameProjects}
          tone="soft"
        />

        <section className="section-block">
          <SectionHeading
            id="skill"
            eyebrow="Habilidades"
            title="Tecnologias, ferramentas e forma de trabalho."
            description="Organizado para destacar repertório técnico, critérios de implementação e a maneira como eu trabalho com mais clareza e menos ruído."
            meta={{
              label: "Modo de trabalho",
              copy:
                "Menos ruído visual, mais hierarquia, previsibilidade técnica e escolhas com intenção.",
            }}
          />
          <motion.div
            className="editorial-shell mt-16"
            initial="hidden"
            whileInView="show"
            viewport={viewportSection}
            variants={fadeUp}
          >
            <SkillsSection />
          </motion.div>
        </section>

        <section className="section-block section-block-soft">
          <SectionHeading
            id="contato"
            eyebrow="Contato"
            title="Canais diretos para conversar sobre projetos e oportunidades."
            description="Se fizer sentido conversar sobre front-end, full stack, mobile ou projetos com hardware, estes são os meios mais diretos para falar comigo."
            meta={{
              label: "Disponibilidade",
              copy:
                "Aberto a trabalhos com identidade visual forte, bom critério técnico e ambição de produto.",
            }}
          />
          <motion.div
            className="editorial-shell mt-16"
            initial="hidden"
            whileInView="show"
            viewport={viewportSection}
            variants={fadeUp}
          >
            <Contato />
          </motion.div>
        </section>
      </main>
    </>
  );
}

export default App;
