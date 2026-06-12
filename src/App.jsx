import { startTransition, useEffect, useMemo, useState } from "react";
import "./App.css";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import { Destaque } from "./components/Destaque";
import { SobreMim } from "./components/Sobre Mim";
import SkillsSection from "./components/skills";
import Contato from "./components/contato";
import Loader from "./components/Loader";
import Marquee from "./components/Marquee";
import Magnetic from "./components/Magnetic";
import ScrambleText from "./components/ScrambleText";
import { ArrowDown, DotGrid, Grain } from "./components/Svg";

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
import urbanflowCard from "./assets/Etapas de Planejamento e Execução.jpg";

import lostmemories from "./assets/Lost Memories.png";
import chase from "./assets/The Chase.png";
import zombiefication from "./assets/Zombiefication.png";
import treasure from "./assets/Treasure Island.png";
import dvgcmobile from "./assets/dvgc_mobile.jpg";
import dvgcGrupo from "./assets/dvgc_grupo.jpg";
import dvgcPrototipo from "./assets/dvgc_prototipo.jpg";
import dvgcLogo from "./assets/DVGC.png";

import portrait from "./assets/1.jpg";
import { fadeUp, staggerContainer, viewportSection } from "./lib/motion";

const lineReveal = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
};

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
    category: "UPX - Facens",
    status: "done",
    complexity: 98,
    recency: 7,
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
    category: "UPX - Facens",
    status: "done",
    complexity: 70,
    recency: 10,
  },
  {
    title: "Urbanflow",
    description:
      "Sistema de mobilidade urbana com visão computacional para identificar ambulâncias e carros com YOLO e acionar lógica de semáforo com ESP32, priorizando situações de emergência.",
    techs: ["PYTHON", "YOLO", "OPENCV", "ESP32", "C++", "COMPUTER VISION"],
    repo: "https://github.com/luukz05/Urbanflow",
    foto: urbanflowCard,
    category: "UPX - Facens",
    status: "done",
    complexity: 100,
    recency: 13,
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
    category: "Freelancer",
    status: "archived",
    complexity: 88,
    recency: 11,
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
    status: "progress",
    complexity: 95,
    recency: 12,
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
    status: "done",
    complexity: 93,
    recency: 9,
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
    category: "UPX - Facens",
    status: "done",
    complexity: 91,
    recency: 8,
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
    status: "done",
    complexity: 80,
    recency: 5,
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
    category: "Estudos",
    status: "done",
    complexity: 76,
    recency: 6,
  },
  {
    title: "IndieFolio",
    description:
      "Portfólio colaborativo para artistas independentes com categorias dinâmicas, Handlebars no front e MongoDB para publicações e usuários.",
    techs: ["HANDLEBARS", "CSS", "JAVASCRIPT", "MONGOOSE", "MONGODB", "NODE"],
    foto: IndieFolio,
    repo: "https://github.com/luukz05/IndieFolio",
    video: "https://youtu.be/fdZvMhgTKn0",
    status: "done",
    complexity: 66,
    recency: 3,
  },
  {
    title: "Tactical Blueprint",
    description:
      "Planner tático para CS com mapas interativos, desenho em tempo real e salvamento de estratégias. Foi meu primeiro projeto em React.",
    techs: ["STYLED-COMPONENTS", "REACT"],
    repo: "https://github.com/luukz05/Tactical-Blueprint-CS2-Planner",
    foto: Blueprint,
    video: "https://youtu.be/G-yF0QhU6Fk?t=25",
    status: "done",
    complexity: 54,
    recency: 4,
  },
  {
    title: "NBA Tracker",
    description:
      "Aplicação web com notícias, elencos, estatísticas e placares em tempo real, consumindo dados externos com foco em integração de API e organização visual.",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://luukz05.github.io/NBA-Tracker/index.html",
    repo: "https://github.com/luukz05/NBA-Tracker",
    foto: NBA,
    status: "done",
    complexity: 40,
    recency: 2,
  },
  {
    title: "Este portfólio",
    description:
      "Projeto criado para apresentar minha evolução técnica, estudar Tailwind e refinar a forma como organizo e comunico meus trabalhos.",
    techs: ["REACT", "TAILWIND", "VITE", "RESPONSIVIDADE"],
    repo: "https://github.com/luukz05/Portfolio",
    foto: Esse,
    status: "done",
    complexity: 50,
    recency: 14,
  },
  {
    title: "G.A.M.M.A",
    description:
      "Site institucional responsivo para uma empresa fictícia de engenharia ambiental, criado para consolidar fundamentos de HTML, CSS e estrutura de interface.",
    techs: ["HTML", "CSS", "RESPONSIVIDADE"],
    link: "https://luukz05.github.io/GAMMA/",
    repo: "https://github.com/luukz05/GAMMA",
    foto: GAMMA,
    status: "done",
    complexity: 30,
    recency: 1,
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

function Section({ id, label, meta, className = "block", children }) {
  return (
    <section id={id} className={className}>
      <div className="wrap">
        <motion.div
          className="label"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSection}
        >
          <ScrambleText text={label} />
          {meta ? <span className="label-meta">{meta}</span> : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function App() {
  const [webSort, setWebSort] = useState("complexity");
  const [webDirection, setWebDirection] = useState("desc");
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const heroServices = [
    "front-end",
    "full stack",
    "mobile + iot",
    "inglês",
    "soft skills",
  ];

  const sortedWebProjects = useMemo(() => {
    const projects = [...webProjects];

    if (webSort === "status") {
      const statusOrder = {
        progress: 0,
        done: 1,
        archived: 2,
      };

      return projects.sort((a, b) => {
        const byStatus = statusOrder[a.status] - statusOrder[b.status];

        if (byStatus !== 0) {
          return byStatus;
        }

        return b.complexity - a.complexity;
      });
    }

    const direction = webDirection === "asc" ? 1 : -1;

    if (webSort === "recent") {
      return projects.sort((a, b) => (a.recency - b.recency) * direction);
    }

    return projects.sort((a, b) => (a.complexity - b.complexity) * direction);
  }, [webDirection, webSort]);

  const sortOptions = [
    { key: "complexity", label: "complexidade" },
    { key: "recent", label: "recente" },
    { key: "status", label: "status" },
  ];

  const webSortControls = (
    <div className="sort">
      <span>ordenar:</span>
      {sortOptions.map((opt) => (
        <button
          key={opt.key}
          type="button"
          className={`sort-opt ${webSort === opt.key ? "sort-opt-active" : ""}`}
          onClick={() => startTransition(() => setWebSort(opt.key))}
        >
          {opt.label}
        </button>
      ))}
      {webSort !== "status" ? (
        <button
          type="button"
          className="sort-opt sort-dir"
          aria-label="Inverter direção"
          onClick={() =>
            startTransition(() =>
              setWebDirection((d) => (d === "desc" ? "asc" : "desc"))
            )
          }
        >
          {webDirection === "desc" ? "↓ desc" : "↑ asc"}
        </button>
      ) : null}
    </div>
  );

  return (
    <>
      <Grain />
      <AnimatePresence>
        {loading ? <Loader key="loader" onDone={() => setLoading(false)} /> : null}
      </AnimatePresence>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <Header />
      <main className="overflow-x-hidden">
        <section id="hero" className="hero">
          <DotGrid className="hero-dots" />
          <div className="wrap">
            <motion.div
              className="hero-inner"
              variants={staggerContainer}
              initial="hidden"
              animate={loading ? "hidden" : "show"}
            >
              <motion.span variants={fadeUp} className="hero-tag">
                <ScrambleText text="portfolio / 2026" trigger="mount" />
              </motion.span>

              <h1 className="hero-name">
                <span className="hero-line">
                  <motion.span variants={lineReveal} className="hero-line-inner">
                    lucas vargas<span className="hero-dot">.</span>
                  </motion.span>
                </span>
              </h1>

              <motion.p variants={fadeUp} className="hero-role">
                Desenvolvedor full stack criando interfaces orientadas a produto,
                sistemas conectados e experiências digitais com identidade visual
                forte.
              </motion.p>

              <motion.p variants={fadeUp} className="hero-note">
                Trabalho entre front-end, back-end, mobile e hardware com foco em
                clareza, ritmo visual e produtos que parecem construídos com
                intenção, não montados por partes.
              </motion.p>

              <motion.div variants={fadeUp} className="hero-actions">
                <Magnetic strength={0.45}>
                  <a
                    className="hero-link hero-link-primary"
                    href="#web"
                    data-cursor="link"
                  >
                    ver projetos
                  </a>
                </Magnetic>
                <a
                  className="hero-link"
                  href="https://github.com/luukz05"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                >
                  github
                </a>
                <a
                  className="hero-link"
                  href="https://linkedin.com/in/lucasvargasdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                >
                  linkedin
                </a>
                <a
                  className="hero-link"
                  href="mailto:lucasvargasdev05@gmail.com"
                  data-cursor="link"
                >
                  email
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="hero-meta">
                {heroServices.map((item, i) => (
                  <span key={item} className="contents">
                    {i > 0 ? <span className="hero-meta-sep">·</span> : null}
                    <span>{item}</span>
                  </span>
                ))}
                <span className="hero-status">disponível para projetos</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.a
            href="#sobre"
            className="hero-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: loading ? 0 : 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            aria-label="Rolar para baixo"
          >
            <span>scroll</span>
            <ArrowDown className="hero-scroll-arrow" />
          </motion.a>
        </section>

        <Marquee />

        <Section id="sobre" label="sobre">
          <div className="sobre-grid">
            <SobreMim />
            <motion.div
              className="sobre-photo"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSection}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sobre-frame">
                <img
                  src={portrait}
                  alt="Lucas Vargas"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="sobre-caption">lucas vargas — sorocaba, sp</span>
            </motion.div>
          </div>
        </Section>

        <Section id="destaque" label="destaque">
          <Destaque
            groupPhoto={dvgcGrupo}
            prototypePhoto={dvgcPrototipo}
            logoCard={dvgcLogo}
          />
        </Section>

        <Section
          id="web"
          label="trabalho"
          meta={`${String(webProjects.length).padStart(2, "0")} projetos web`}
        >
          {webSortControls}
          <ProjectList projects={sortedWebProjects} showStatus />
        </Section>

        <Section
          id="games"
          label="jogos"
          meta={`${String(gameProjects.length).padStart(2, "0")} projetos`}
        >
          <ProjectList projects={gameProjects} showStatus={false} />
        </Section>

        <Section id="skill" label="habilidades">
          <SkillsSection />
        </Section>

        <Section id="contato" label="contato">
          <p className="lede" style={{ marginBottom: "2.5rem" }}>
            Aberto a trabalhos com identidade visual forte, bom critério técnico e
            ambição de produto. Estes são os canais mais diretos.
          </p>
          <Contato />
        </Section>
      </main>
    </>
  );
}

export default App;
