import "./App.css";
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
      "Sistema academico para monitoramento de alagamentos com ESP32, sensores e notificacoes moveis em uma proposta de mobilidade urbana segura.",
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
      "Primeiro projeto freelance com catalogo interativo, filtros, carrinho via WhatsApp e base pronta para expansao comercial.",
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
      "Experiencia gamificada para comunidade da FURIA com desafios, ranking e autenticacao segura, incluindo uso inicial de IA e OCR.",
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
      "Plataforma de sustentabilidade inspirada em matchmaking para conectar pessoas e empresas interessadas em reutilizacao e economia circular.",
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
      "Aplicativo mobile de seguranca pessoal para gerar, validar e armazenar senhas com foco em UX objetiva e integracao full stack.",
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
      "Projeto de estudo com scraping, leitura de PDFs e persistencia em MySQL, conectado a uma interface Vue para pesquisa e filtros.",
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
      "Portfolio colaborativo para artistas independentes com categorias dinamicas, Handlebars no front e MongoDB para publicacoes e usuarios.",
    techs: ["HANDLEBARS", "CSS", "JAVASCRIPT", "MONGOOSE", "MONGODB", "NODE"],
    foto: IndieFolio,
    repo: "https://github.com/luukz05/IndieFolio",
    video: "https://youtu.be/fdZvMhgTKn0",
  },
  {
    title: "Tactical Blueprint",
    description:
      "Planner tatico para CS com mapas interativos, desenho em tempo real e salvamento de estrategias. Foi meu primeiro projeto em React.",
    techs: ["STYLED-COMPONENTS", "REACT"],
    repo: "https://github.com/luukz05/Tactical-Blueprint-CS2-Planner",
    foto: Blueprint,
    video: "https://youtu.be/G-yF0QhU6Fk?t=25",
  },
  {
    title: "NBA Tracker",
    description:
      "Aplicacao web com noticias, elencos, estatisticas e placares em tempo real consumindo dados externos com foco em integracao de API e organizacao visual.",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://luukz05.github.io/NBA-Tracker/index.html",
    repo: "https://github.com/luukz05/NBA-Tracker",
    foto: NBA,
  },
  {
    title: "Este portfolio",
    description:
      "Projeto criado para apresentar minha evolucao tecnica, estudar Tailwind e refinar a forma como organizo e comunico meus trabalhos.",
    techs: ["REACT", "TAILWIND", "VITE", "RESPONSIVIDADE"],
    repo: "https://github.com/luukz05/Portfolio",
    foto: Esse,
  },
  {
    title: "G.A.M.M.A",
    description:
      "Site institucional responsivo para uma empresa ficticia de engenharia ambiental, criado para consolidar fundamentos de HTML, CSS e estrutura de interface.",
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
      "Jogo top-down inspirado em Zelda, com foco em combate, exploracao e construcao de mapas interativos.",
    techs: ["GODOT", "GDSCRIPT", "ASEPRITE"],
    foto: treasure,
  },
  {
    title: "Lost Memories",
    description:
      "Plataforma inspirado em Celeste com movimentacao precisa, puzzle e narrativa como eixo do design.",
    techs: ["UNITY 2D", "C#"],
    video: "https://youtu.be/IEID1vtLYkM",
    demo: "https://theldev.itch.io/lost-memories",
    foto: lostmemories,
  },
  {
    title: "Zombiefication",
    description:
      "FPS em Unreal Engine voltado ao estudo de combate, progressao por fases e ritmo de gameplay.",
    techs: ["UNREAL ENGINE", "BLUEPRINTS"],
    video: "https://youtu.be/ZiXHtchtcXk",
    foto: zombiefication,
  },
  {
    title: "The Chase",
    description:
      "Jogo de fuga com drift, risco e recompensa, explorando fisica veicular e atmosfera arcade.",
    techs: ["UNITY 3D", "C#"],
    video: "https://youtu.be/l5qiPo7G6qQ",
    foto: chase,
  },
];

function SectionHeading({ eyebrow, title, description, id, meta }) {
  return (
    <div id={id} className="editorial-shell section-head">
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-copy">{description}</p> : null}
      </div>
      {meta ? (
        <div className="section-meta">
          <span className="section-meta-label">{meta.label}</span>
          <p className="section-meta-copy">{meta.copy}</p>
        </div>
      ) : null}
    </div>
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
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
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
      title: "Ingles",
      copy: "Comunicacao fluente em contexto tecnico.",
    },
    {
      title: "Soft skills",
      copy: "Clareza, colaboracao e pensamento pratico.",
    },
  ];

  return (
    <>
      <Header />
      <main className="relative overflow-x-hidden">
        <section id="hero" className="hero-grid">
          <div className="editorial-shell hero-shell">
            <div className="hero-copy">
              <span className="hero-pill">Portfolio / 2026</span>

              <div className="hero-copy-grid">
                <h1 className="hero-title">Lucas Vargas</h1>
                <p className="hero-role">
                  Desenvolvedor full stack criando interfaces orientadas a
                  produto, sistemas conectados e experiencias digitais com
                  identidade visual forte.
                </p>
                <p className="hero-note">
                  Trabalho entre front-end, back-end, mobile e hardware com
                  foco em clareza, ritmo visual e produtos que parecem
                  construidos com intencao, nao montados por partes.
                </p>
              </div>

              <div className="hero-actions">
                <a className="button-primary" href="#web">
                  Ver projetos
                </a>
                <ImageLinkButton
                  href="https://github.com/luukz05"
                  src={github}
                  alt="GitHub"
                  newTab={true}
                />
                <ImageLinkButton
                  href="https://linkedin.com/in/lucasvargasdev"
                  src={linkedin}
                  alt="LinkedIn"
                  newTab={true}
                />
                <ImageLinkButton
                  href="copy:lucasvargasdev05@gmail.com"
                  src={envelope}
                  alt="Email"
                  newTab={true}
                />
              </div>
            </div>

            <aside className="hero-panel glass-surface">
              <div className="hero-panel-top">
                <p className="hero-panel-label">Servicos</p>
                <span className="hero-availability">Disponivel para projetos</span>
              </div>

              <div>
                <p className="hero-panel-label">Foco</p>
                <p className="hero-panel-copy">
                  Produto, interface e implementacao consistente.
                </p>
              </div>

              <div className="hero-service-list">
                {heroServices.map((item) => (
                  <div key={item.title} className="hero-service-item">
                    <p className="hero-service-title">{item.title}</p>
                    <p className="hero-service-copy">{item.copy}</p>
                  </div>
                ))}
              </div>

            </aside>
          </div>
        </section>

        <section className="section-block section-block-plain">
          <SectionHeading
            id="sobre"
            eyebrow="Perfil"
            title="Mentalidade de engenharia, visao de produto e criterio visual."
            description="Minha base mistura desenvolvimento web, mobile e sistemas conectados ao mundo fisico. Aqui, a ideia e apresentar essa trajetoria com mais clareza, mais contexto e menos excesso."
            meta={{
              label: "Nota",
              copy:
                "Pratico, autodidata e orientado a produto. Busco construir experiencias claras, funcionais e bem apresentadas.",
            }}
          />
          <div className="editorial-shell mt-16">
            <div className="showcase-grid about-showcase">
              <SobreMim />
              <div className="flex h-full items-stretch">
                <Carousel s1={s1} s2={s2} s3={s3} s4={s4} />
              </div>
            </div>
          </div>
        </section>

        <section className="section-block section-block-soft">
          <SectionHeading
            id="destaque"
            eyebrow="Projeto em destaque"
            title="Um projeto em que software, hardware e usabilidade precisaram funcionar juntos."
            description="DVGC representa a parte mais concreta da minha experiencia com produto, integracao e impacto social."
            meta={{
              label: "Foco do caso",
              copy:
                "Smart Cities, alertas em tempo real, interface mobile e monitoramento fisico em um mesmo fluxo.",
            }}
          />
          <div className="editorial-shell mt-16">
            <Destaque
              groupPhoto={dvgcGrupo}
              prototypePhoto={dvgcPrototipo}
              logoCard={dvgcLogo}
            />
          </div>
        </section>

        <ProjectSection
          id="web"
          eyebrow="Projetos web"
          title="Produtos digitais, sistemas e experimentos selecionados."
          description="Projetos em que produto, interface, dados, autenticacao, mobile e integracao externa aparecem com pesos diferentes, mas dentro da mesma obsessao por apresentacao e clareza."
          meta={{
            label: "Selecao",
            copy: `${String(webProjects.length).padStart(
              2,
              "0"
            )} web projects ordenados por impacto e complexidade.`,
          }}
          projects={webProjects}
        />

        <ProjectSection
          id="games"
          eyebrow="Projetos em games"
          title="Estudos de gameplay, atmosfera e experimentacao interativa."
          description="Uma selecao menor, mas importante para direcao criativa, sensacao de ritmo e entendimento de experiencia interativa."
          meta={{
            label: "Selecao",
            copy: `${String(gameProjects.length).padStart(
              2,
              "0"
            )} game projects apresentados com a mesma grade e o mesmo rigor visual.`,
          }}
          projects={gameProjects}
          tone="soft"
        />

        <section className="section-block">
          <SectionHeading
            id="skill"
            eyebrow="Capabilities"
            title="Stack, tools and the way I like to work."
            description="Organizado para destacar repertorio tecnico e a forma como eu abordo implementacao, colaboracao e consistencia."
            meta={{
              label: "Operating mode",
              copy:
                "Menos ruido visual, mais hierarquia, previsibilidade tecnica e escolhas com intencao.",
            }}
          />
          <div className="editorial-shell mt-16">
            <SkillsSection />
          </div>
        </section>

        <section className="section-block section-block-soft">
          <SectionHeading
            id="contato"
            eyebrow="Contact"
            title="Available for product work, freelance builds and strong collaborations."
            description="Se fizer sentido conversar sobre produto, front-end, full stack, mobile ou projetos com hardware, aqui estao os canais mais diretos."
            meta={{
              label: "Availability",
              copy:
                "Aberto a trabalhos com identidade visual forte, bom criterio tecnico e ambicao de produto.",
            }}
          />
          <div className="editorial-shell mt-16">
            <Contato />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
