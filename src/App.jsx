import "./App.css";
import ImageLinkButton from "./components/ImageButton";
import Subtitle from "./components/Subtitle";

import ProjectCard from "./components/Cards";
import { Destaque } from "./components/Destaque";
import ProjectCardG from "./components/CardsGames";
import { SobreMim } from "./components/Sobre Mim";

import envelope from "./assets/envelope.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import seta from "./assets/keyboard-arrow-down_117120.svg";
import logo from "./assets/logo.png";

import GAMMA from "./assets/GAMMA.png";
import NBA from "./assets/NBA.png";
import IndieFolio from "./assets/IndieFolio.png";
import Blueprint from "./assets/gif.gif";
import MinimalKeeper from "./assets/MinimalKeeper.png";
import DVGC from "./assets/DVGC.png";
import Rematch from "./assets/Rematch.png";
import ConsultaWeb from "./assets/ConsultaWeb.png";
import Esse from "./assets/Esse.png";

import lostmemories from "./assets/Lost Memories.png";
import stencyl from "./assets/StencylScratch.png";
import chase from "./assets/The Chase.png";
import zombiefication from "./assets/Zombiefication.png";
import treasure from "./assets/Treasure Island.png";
import dvgcmobile from "./assets/dvgc_mobile.jpg";

import { Carousel } from "./components/carousel";
import s1 from "./assets/1.png";
import s2 from "./assets/2.png";
import s3 from "./assets/3.png";
import s4 from "./assets/4.png";

import SkillsSection from "./components/skills";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-offblack shadow-md">
        <div className="flex flex-row items-center justify-center gap-10 px-6 py-4">
          <a href="#hero" className="font-black text-white">
            Início
          </a>
          <a href="#sobre" className="font-black text-white" aria-label="Sobre">
            Sobre Mim
          </a>
          <a
            className="font-black text-ch1 animate-pulse"
            aria-label="Projetos"
            href="#destaque"
          >
            Destaques
          </a>
          <a
            href="#web"
            className="font-black text-white"
            aria-label="Projetos"
          >
            Web Dev
          </a>

          {/* <img src={logo} className="h-15 w-15 object-contain" alt="Logo" /> */}

          <a
            href="#games"
            className="font-black text-white"
            aria-label="Projetos"
          >
            Game Dev
          </a>
          <a
            href="#skill"
            className="font-black text-white"
            aria-label="Projetos"
          >
            Habilidades
          </a>
          <a href="" className="font-black text-white" aria-label="Contato">
            Contato
          </a>
          <a
            className="font-black text-white bg-ch2 p-2 rounded-md"
            aria-label="Contato"
            href=""
          >
            Baixar CV
          </a>
        </div>
      </header>
      {/* HERO */}
      <div
        id="hero"
        className="bg-[url('./assets/image.png')] text-center min-h-screen flex flex-col items-center justify-evenly bg-no-repeat bg-cover bg-fixed"
      >
        <p className="text-offwhite text-4xl font-mono mb-[-30px]">
          Bem vindo(a), visitante!
        </p>
        <div className="flex flex-col items-center justify-evenly gap-2">
          <p className="text-ch1 text-9xl font-black">Meu nome é Lucas</p>
          <Subtitle />
        </div>
        <div className="flex gap-5 mt-[-30px] flex-row items-center justify-center">
          <h1 className="text-5xl">&lt;</h1>
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
            href="mailto:lucasvargasdev05@gmail.com"
            src={envelope}
            alt="Email"
            newTab={true}
          />
          <h1 className="text-5xl">/&gt;</h1>
        </div>
        <div className="flex flex-col mb-[-100px] animate-bounce justify-center items-center">
          <h1 className=" text-offwhite text-2xl font-mono ">SCROLL</h1>
          <img src={seta} className="h-5 w-5 invert" />
          <img src={seta} className="h-5 w-5 invert" />
        </div>
      </div>
      <h2 id="sobre" className="text-4xl font-black text-center mb-12 mt-12">
        Sobre Mim
      </h2>
      <div className="flex justify-center mt-12 flex-col items-center ">
        <div className="flex items-center gap-8">
          <SobreMim />
          <Carousel s1={s1} s2={s2} s3={s3} s4={s4} />
        </div>
      </div>
      <h2 id="destaque" className="text-4xl font-black text-center mb-12 mt-12">
        Destaque
      </h2>
      <div className="flex justify-center mt-12 flex-col items-center">
        <Destaque src={dvgcmobile} />
      </div>
      {/* PROJETOS */}
      <h2 className="text-4xl font-black text-center mb-12 mt-12">
        Desenvolvimento Web
      </h2>
      <div
        id="web"
        className="bg-ch4  px-10 text-white text-justify flex flex-col  items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
          <ProjectCard
            title={"G.A.M.M.A"}
            description={
              "Primeiro projeto web, criado para uma atividade escolar. Desenvolvi um site institucional para a empresa fictícia GAMMA, focado em serviços de engenharia ambiental. O projeto inclui layout 100% responsivo, conteúdo organizado e boas práticas de HTML, CSS e UX."
            }
            techs={["HTML", "CSS", "RESPONSIVIDADE"]}
            link={"https://luukz05.github.io/GAMMA/"}
            repo={"https://github.com/luukz05/GAMMA"}
            foto={GAMMA} // substitui pela imagem real se tiver
          />
          <ProjectCard
            title={"NBA Tracker"}
            description={
              "Aplicação web interativa sobre a NBA, com notícias, estatísticas de jogadores e times, elencos, placares em tempo real e calendário de jogos. Os dados são obtidos via RapidAPI, com foco na integração de APIs externas usando Fetch API e apresentação clara das informações. Site sujeito a erros de requisição e exibição devido a uso de cotas."
            }
            techs={["HTML", "CSS", "JAVASCRIPT"]}
            link={"https://luukz05.github.io/NBA-Tracker/index.html"}
            repo={"https://github.com/luukz05/NBA-Tracker"}
            foto={NBA} // substitui pela imagem real se tiver
          />

          <ProjectCard
            title={"IndieFolio"}
            description={
              "Plataforma web de portfólio colaborativo para artistas independentes, com postagens organizadas por categorias. Usei Handlebars para renderizar páginas dinâmicas e explorei MongoDB pela primeira vez para armazenar dados de usuários e publicações."
            }
            techs={[
              "HANDLEBARS",
              "CSS",
              "JAVASCRIPT",
              "MONGOOSE",
              "MONGODB",
              "NODE",
            ]}
            foto={IndieFolio} // substitui pela imagem real se tiver
            repo={"https://github.com/luukz05/IndieFolio"}
            video={"https://youtu.be/fdZvMhgTKn0"}
          />

          <ProjectCard
            title={"Tactical Blueprint"}
            description={
              "Ferramenta tática interativa para CS:GO e CS2, desenvolvida como meu primeiro projeto com React. Permite desenhar em mapas, posicionar elementos do jogo, adicionar tags, alternar entre mapas e salvar táticas. O foco foi na manipulação de estado, interatividade em tempo real e renderização dinâmica."
            }
            techs={["STYLED-COMPONENTS", "REACT"]}
            repo={"https://github.com/luukz05/Tactical-Blueprint-CS2-Planner"}
            foto={Blueprint}
            video={"https://youtu.be/G-yF0QhU6Fk?t=25"}
          />
          <ProjectCard
            title={"Minimal Keeper"}
            description={
              "Aplicativo mobile de cibersegurança pessoal, desenvolvido com React Native. Permite gerar, testar e armazenar senhas com um cofre seguro e personalizável. Primeiro projeto mobile, com foco em segurança digital e uso inicial de MySQL para integração de dados."
            }
            foto={MinimalKeeper} // substitui pela imagem real se tiver
            techs={[
              "MOBILE",
              "REACT NATIVE",
              "MYSQL",
              "EXPRESS",
              "NODE",
              "BCRYPT",
              "CRYPTO",
              "JWT",
            ]}
            repo={"https://github.com/luukz05/MinimalKeeper"}
            video={"https://www.youtube.com/watch?v=GKuBor_k-s8"}
          />

          <ProjectCard
            title="DVGC ⭐"
            description={
              "Projeto sobre Smart Cities que uniu software e hardware com uso do ESP32 e sensores de gás. Detecta vazamentos de GLP e envia alertas em tempo real para um app mobile feito em React Native, que exibe gráficos, registros e instruções. Marcou minha introdução à IoT e integração entre dispositivos físicos e apps."
            }
            techs={[
              "MOBILE",
              "REACT NATIVE",
              "MYSQL",
              "EXPO",
              "EXPRESS",
              "NODE",
              "C++",
              "IOT",
              "ELETRÔNICA DIGITAL E ANALÓGICA",
              "SEBRAE",
              "METODOLOGIAS ÁGEIS - KANBAN",
            ]}
            video={"https://www.youtube.com/watch?v=VPFjS6IrryU"}
            repo={"https://github.com/luukz05/DVGC"}
            foto={DVGC}
          />

          <ProjectCard
            title="ReMatch"
            description={`Plataforma web de sustentabilidade criada para conectar pessoas e empresas interessadas em reutilizar ou reciclar itens. Inspirada em sistemas de matchmaking, com perfis personalizados, chat e correspondência inteligente. Desenvolvida dentro do tema Cidade Regenerativa, com foco em economia circular e consumo consciente.`}
            techs={[
              "REACT",
              "CSS",
              "AXIOS",
              "REACT-COOKIES",
              "MONGODB",
              "MONGOOSE",
              "EXPRESS",
              "NODE",
              "METODOLOGIAS ÁGEIS - KANBAN",
            ]}
            repo={"https://github.com/luukz05/ReMatch"}
            foto={Rematch} // troca pela imagem real se quiser
          />
          <ProjectCard
            title="ConsultaWeb (Estudo)"
            description={`Projeto de estudo com backend em Python, focado em web scraping, extração de dados de PDFs e MySQL. O sistema coleta dados de planilhas em PDF, armazena no banco e exibe tudo via interface em Vue.js, com buscas e filtros. Também explorou criação de APIs e integração entre backend e frontend.`}
            techs={[
              "VUE.JS",
              "BOOTSTRAP",
              "PYTHON",
              "MYSQL",
              "WEB SCRAPING",
              "BS4",
              "PANDAS",
              "FLASK",
              "PDF PLUMBER",
              "REQUESTS",
              "POSTMAN",
            ]}
            repo={"https://github.com/luukz05/ConsutaWEB"}
            foto={ConsultaWeb} // substitui pela imagem real se tiver
          />

          <ProjectCard
            title="Este portfólio!"
            description={`Portfólio desenvolvido como vitrine de projetos e exercício de aprendizado. Foco no estudo de Tailwind CSS, design limpo, responsividade e usabilidade. Também serviu para revisar e refatorar projetos antigos, consolidando minha evolução técnica e a forma de apresentar meu trabalho.`}
            techs={["REACT", "TAILWIND"]}
            repo={"https://github.com/luukz05/Portfolio"}
            foto={Esse} // substitui pela imagem real do portfólio se quiser
          />
        </div>
      </div>
      <div
        id="games"
        className="bg-ch4 px-10 text-white text-justify flex flex-col  items-center"
      >
        <h2 className="text-4xl font-black text-center mb-12 mt-12">
          Desenvolvimento de Games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <ProjectCardG
            title="Scratch/Stencyl"
            description="Meu primeiro jogo 2D com inspiração em Super Mario, feito no Stencyl após introdução à lógica no Scratch. Infelizmente eu perdi o projeto original. "
            techs={["SCRATCH", "STENCYL", "BLOCKLY", "ASEPRITE"]}
            foto={stencyl}
          />
          <ProjectCardG
            title="Treasure Island"
            description="Jogo top-down inspirado em Zelda, com combate, labirintos e exploração. Um projeto voltado ao estudo de game design, lógica de inimigos e mapas interativos."
            techs={["GODOT", "GDSCRIPT", "ASEPRITE"]}
            foto={treasure}
          />

          <ProjectCardG
            title="Lost Memories"
            description="Jogo de plataforma inspirado em Celeste, com foco em movimentação precisa, puzzles e narrativa emocional. Um marco pessoal no meu desenvolvimento em GameDev."
            techs={["UNITY 2D", "C#"]}
            repo="https://youtu.be/IEID1vtLYkM"
            link="https://theldev.itch.io/lost-memories"
            foto={lostmemories}
          />

          <ProjectCardG
            title="Zombiefication"
            description="FPS feito na Unreal Engine com foco em combate contra zumbis, progressão por fases e sistema de recursos. Projeto voltado ao aprofundamento em mecânicas complexas de gameplay e narrativa."
            techs={["UNREAL ENGINE", "BLUEPRINTS"]}
            repo="https://youtu.be/ZiXHtchtcXk"
            foto={zombiefication}
          />
          <ProjectCardG
            title="The Chase"
            description="Jogo de fuga em mundo semiaberto com sistema de drift, pontuação e trilha sonora personalizada. Foco em física veicular e mecânicas de risco e recompensa."
            techs={["UNITY 3D", "C#"]}
            repo="https://youtu.be/l5qiPo7G6qQ"
            link=""
            foto={chase}
          />
        </div>
      </div>
      <div className="flex justify-center mt-12 flex-col items-center ">
        <h2 id="skill" className="text-4xl font-black text-center mb-12">
          Minhas Habilidades
        </h2>
        <SkillsSection />
        <div className="flex items-center gap-8"></div>
      </div>
    </>
  );
}

export default App;
