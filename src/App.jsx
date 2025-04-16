import { useState } from "react";
import "./App.css";
import ImageLinkButton from "./components/ImageButton";
import Subtitle from "./components/Subtitle";

import ProjectCard from "./components/Cards";
import { Destaque } from "./components/Destaque";
import ProjectCardG from "./components/CardsGames";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-offblack shadow-md">
        <div className="flex flex-row items-center justify-center gap-10 px-6 py-4">
          <a className="font-black text-white">Início</a>
          <a className="font-black text-white" aria-label="Sobre">
            Sobre Mim
          </a>
          <a
            className="font-black text-ch1 animate-pulse"
            aria-label="Projetos"
          >
            Destaques
          </a>
          <a className="font-black text-white" aria-label="Projetos">
            Projetos
          </a>

          <img
            src="src/assets/logo.png"
            className="h-10 w-10 object-contain"
            alt="Logo"
          />

          <a
            href="https://placehold.jp/80x120.png"
            className="font-black text-white"
            aria-label="Projetos"
          >
            Games
          </a>
          <a className="font-black text-white" aria-label="Projetos">
            Habilidades
          </a>
          <a className="font-black text-white" aria-label="Contato">
            Contato
          </a>
          <a
            className="font-black text-white bg-ch2 p-2 rounded-md"
            aria-label="Contato"
          >
            Baixar CV
          </a>
        </div>
      </header>
      {/* HERO */}
      <div className="bg-[url('./assets/image.png')] text-center min-h-screen flex flex-col items-center justify-evenly bg-no-repeat bg-cover bg-fixed">
        <div className="flex flex-col items-center justify-evenly gap-2">
          <p className="text-offwhite text-4xl font-mono mb-[-30px]">
            Bem vindo(a), visitante!
          </p>
          <p className="text-ch1 text-9xl font-black">Meu nome é Lucas</p>
          <Subtitle />
        </div>
        <div className="flex gap-5 mt-[-30px] flex-row items-center justify-center">
          <h1 className="text-5xl">&lt;</h1>
          <ImageLinkButton
            href="https://github.com/luukz05"
            src="/src/assets/github.svg"
            alt="GitHub"
            newTab={true}
          />
          <ImageLinkButton
            href="https://linkedin.com/in/seulink"
            src="/src/assets/linkedin.svg"
            alt="LinkedIn"
            newTab={true}
          />
          <ImageLinkButton
            href="mailto:seuemail@exemplo.com"
            src="/src/assets/envelope.svg"
            alt="Email"
            newTab={true}
          />
          <h1 className="text-5xl">/&gt;</h1>
        </div>
        <div className="flex flex-col mb-[-100px] animate-bounce justify-center items-center">
          <h1 className=" text-offwhite text-2xl font-mono ">SCROLL</h1>
          <img
            src="src/assets/keyboard-arrow-down_117120.svg"
            className="h-5 w-5 invert"
          />
          <img
            src="src/assets/keyboard-arrow-down_117120.svg"
            className="h-5 w-5 invert"
          />
        </div>
      </div>
      <div className="flex justify-center mt-12 flex-col items-center">
        <h2 className="text-4xl font-black text-center mb-12">Destaque</h2>
        <Destaque />
      </div>
      {/* PROJETOS */}
      <div className="bg-ch4 py-20 px-10 text-white text-justify flex flex-col  items-center">
        <h2 className="text-4xl font-black text-center mb-20">Projetos Web</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
          <ProjectCard
            title={"G.A.M.M.A"}
            description={
              "Primeiro projeto web, criado para uma atividade escolar. Desenvolvi um site institucional para a empresa fictícia GAMMA, focado em serviços de engenharia ambiental. O projeto inclui layout 100% responsivo, conteúdo organizado e boas práticas de HTML, CSS e UX."
            }
            techs={["HTML", "CSS", "RESPONSIVIDADE"]}
            link={"https://gamma-git-main-luukz05s-projects.vercel.app/"}
            repo={"https://github.com/luukz05/GAMMA"}
            foto="src/assets/thumbnails/GAMMA.png" // substitui pela imagem real se tiver
          />

          <ProjectCard
            title={"NBA Tracker"}
            description={
              "Aplicação web interativa sobre a NBA, com notícias, estatísticas de jogadores e times, elencos, placares em tempo real e calendário de jogos. Os dados são obtidos via RapidAPI, com foco na integração de APIs externas usando Fetch API e apresentação clara das informações."
            }
            techs={["HTML", "CSS", "JAVASCRIPT"]}
            link={"#"}
            repo={"#"}
            foto="https://placehold.jp/80x120.png" // substitui pela imagem real se tiver
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
            foto="https://placehold.jp/80x120.png" // substitui pela imagem real se tiver
            link={"#"}
            repo={"#"}
          />

          <ProjectCard
            title={"Tactical Blueprint"}
            description={
              "Ferramenta tática interativa para CS:GO e CS2, desenvolvida como meu primeiro projeto com React. Permite desenhar em mapas, posicionar elementos do jogo, adicionar tags, alternar entre mapas e salvar táticas. O foco foi na manipulação de estado, interatividade em tempo real e renderização dinâmica."
            }
            techs={["STYLED-COMPONENTS", "REACT"]}
            link={"#"}
            repo={"#"}
            foto="https://placehold.jp/80x120.png" // substitui pela imagem real se tiver
          />
          <ProjectCard
            title={"Minimal Keeper"}
            description={
              "Aplicativo mobile de cibersegurança pessoal, desenvolvido com React Native. Permite gerar, testar e armazenar senhas com um cofre seguro e personalizável. Primeiro projeto mobile, com foco em segurança digital e uso inicial de MySQL para integração de dados."
            }
            foto="https://placehold.jp/80x120.png" // substitui pela imagem real se tiver
            techs={[
              "REACT NATIVE",
              "MYSQL",
              "EXPRESS",
              "NODE",
              "BCRYPT",
              "CRYPTO",
              "JWT",
            ]}
            link={"#"}
            repo={"#"}
          />

          <ProjectCard
            title="DVGC ⭐"
            description={
              "Projeto sobre Smart Cities que uniu software e hardware com uso do ESP32 e sensores de gás. Detecta vazamentos de GLP e envia alertas em tempo real para um app mobile feito em React Native, que exibe gráficos, registros e instruções. Marcou minha introdução à IoT e integração entre dispositivos físicos e apps."
            }
            techs={[
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
            link={"#"}
            repo={"#"}
            foto="https://placehold.jp/80x120.png"
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
            link={"#"}
            repo={"#"}
            foto="https://placehold.jp/80x120.png" // troca pela imagem real se quiser
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
            link={"#"}
            repo={"#"}
            foto="https://placehold.jp/80x120.png" // substitui pela imagem real se tiver
          />

          <ProjectCard
            title="Este portfólio!"
            description={`Portfólio desenvolvido como vitrine de projetos e exercício de aprendizado. Foco no estudo de Tailwind CSS, design limpo, responsividade e usabilidade. Também serviu para revisar e refatorar projetos antigos, consolidando minha evolução técnica e a forma de apresentar meu trabalho.`}
            techs={["REACT", "TAILWIND"]}
            link={"#"}
            repo={"#"}
            foto="https://placehold.jp/80x120.png" // substitui pela imagem real do portfólio se quiser
          />
        </div>
      </div>
      <div className="bg-ch4 py-20 px-10 text-white text-justify flex flex-col  items-center">
        <h2 className="text-4xl font-black text-center mb-20">
          Projetos Gamedev
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <ProjectCardG
            title="Scratch/Stencyl"
            description="Meu primeiro jogo 2D com inspiração em Super Mario, feito no Stencyl após introdução à lógica no Scratch. Infelizmente eu perdi o projeto original. "
            techs={["Scratch", "Stencyl", "Blockly", "Aseprite"]}
            foto="src/assets/thumbnails/StencylScratch.png"
          />
          <ProjectCardG
            title="Treasure Island"
            description="Jogo top-down inspirado em Zelda, com combate, labirintos e exploração. Um projeto voltado ao estudo de game design, lógica de inimigos e mapas interativos."
            techs={["Godot", "GDScript", "Aseprite"]}
            foto={"src/assets/thumbnails/Treasure Island.png"}
          />

          <ProjectCardG
            title="Lost Memories ⭐"
            description="Jogo de plataforma inspirado em Celeste, com foco em movimentação precisa, puzzles e narrativa emocional. Um marco pessoal no meu desenvolvimento em GameDev."
            techs={["Unity 2D", "C#"]}
            repo="https://youtu.be/IEID1vtLYkM"
            link="https://theldev.itch.io/lost-memories"
            foto={"src/assets/thumbnails/Lost Memories.png"}
          />

          <ProjectCardG
            title="Zombiefication"
            description="FPS feito na Unreal Engine com foco em combate contra zumbis, progressão por fases e sistema de recursos. Projeto voltado ao aprofundamento em mecânicas complexas de gameplay e narrativa."
            techs={["Unreal Engine", "Blueprints"]}
            repo="https://youtu.be/ZiXHtchtcXk"
            foto={"src/assets/thumbnails/Zombiefication.png"}
          />
          <ProjectCardG
            title="The Chase"
            description="Jogo de fuga em mundo semiaberto com sistema de drift, pontuação e trilha sonora personalizada. Foco em física veicular e mecânicas de risco e recompensa."
            techs={["Unity 3D", "C#"]}
            repo="https://youtu.be/l5qiPo7G6qQ"
            link=""
            foto={"src/assets/thumbnails/The Chase.png"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
