import { useState } from "react";
import "./App.css";
import ImageLinkButton from "./components/ImageButton";
import Subtitle from "./components/Subtitle";
import TechTag from "./components/Tag";
import ProjectCard from "./components/Cards";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-ch4/80 to-transparent backdrop-blur-md text-center font-mono py-6 px-10 h-7 flex flex-row items-center justify-center z-10 relative rounded-b-2xl shadow-md">
        {/* <p className="font-mono text-2xl text-white">Lucas Vargas</p> */}
        <div className="flex flex-row items-center gap-10 justify-center">
          <a className="font-black text-white">Inicio</a>
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
            Projetos Web
          </a>

          <img src="src/assets/logo.png" className="h-15 w-15" alt="" />
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
      </div>

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
      <div className="bg-ch4 py-20 px-10 text-white text-justify">
        <h2 className="text-4xl font-black text-center mb-12">Projetos Web</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
            title={"G.A.M.M.A"}
            description={
              "Meu primeiro projeto de desenvolvimento web, criado como parte de uma atividade escolar. Desenvolvi um site institucional para uma empresa fictícia de engenharia ambiental chamada GAMMA, com foco em apresentar seus serviços, missão e valores. O projeto envolveu a criação de um layout responsivo, organização de conteúdo e aplicação de boas práticas."
            }
            techs={["HTML", "CSS"]}
            link={"#"}
          />

          <ProjectCard
            title={"NBA Tracker"}
            description={
              "Aplicação web interativa para acompanhar tudo sobre a NBA, incluindo notícias atualizadas, estatísticas detalhadas de jogadores e times, elencos completos (rosters), placares em tempo real e calendário de jogos futuros. As informações são obtidas por meio de requisições à RapidAPI. O foco do projeto foi a integração com APIs externas utilizando Fetch API e a apresentação intuitiva das informações."
            }
            techs={["HTML", "CSS", "JAVASCRIPT"]}
            link={"#"}
          />

          <ProjectCard
            title={"IndieFolio"}
            description={
              "Plataforma web criada para funcionar como um portfólio colaborativo para artistas independentes, permitindo a postagem de obras organizadas por categorias. Neste projeto, explorei pela primeira vez o uso de template engines dinâmicas, utilizando Handlebars para renderizar páginas com conteúdo personalizado. Também foi minha introdução ao uso de MongoDB como banco de dados, armazenando as informações dos usuários e publicações de forma estruturada."
            }
            techs={[
              "HANDLEBARS",
              "CSS",
              "JAVASCRIPT",
              "MONGOOSE",
              "MONGODB",
              "NODE",
            ]}
            link={"#"}
          />

          <ProjectCard
            title={"Tactical Blueprint"}
            description={
              "Meu primeiro projeto desenvolvido com React, focado em criar uma ferramenta visual tática para os jogos CS:GO e CS2. A aplicação funciona como um quadro estratégico interativo, permitindo aos usuários desenhar em tempo real no mapa com diferentes cores e espessuras, arrastar e posicionar elementos do jogo (como jogadores, granadas, etc.), adicionar tags com nomes personalizados, alternar entre todos os mapas oficiais dos jogos e nomear e salvar táticas para consultas futuras. Esse projeto marcou minha introdução ao React, com foco em manipulação de estado, interatividade em tempo real e renderização dinâmica de componentes."
            }
            techs={["STYLED-COMPONENTS", "REACT"]}
            link={"#"} // Atualiza aqui quando tiver o link real
          />
          <ProjectCard
            title={"Minimal Keeper"}
            description={
              "Aplicativo mobile voltado à cibersegurança pessoal, desenvolvido com uma proposta minimalista e intuitiva. A ferramenta permite gerar, armazenar, testar e consultar senhas, oferecendo recursos como um gerador altamente personalizável, um avaliador de senhas baseado em critérios reais de segurança digital e um cofre seguro para armazenamento de credenciais. Foi meu primeiro projeto utilizando React Native para desenvolvimento mobile, além de marcar minha introdução ao uso do MySQL como banco de dados, integrando dados de forma segura e estruturada."
            }
            techs={[
              "REACT NATIVE",
              "MYSQL",
              "EXPRESS",
              "NODE",
              "BCRYPT",
              "CRYPTO",
              "JWT",
            ]}
            link={"#"} // Substitui quando tiver o link final
          />

          <ProjectCard
            title="DVGC ⭐"
            description={`Projeto desenvolvido como parte de uma disciplina da faculdade, dentro do tema “Smart Cities”. Foi meu primeiro trabalho unindo software e hardware, com o desenvolvimento de um dispositivo físico utilizando o microcontrolador ESP32, sensores de gás, fiação e aplicação de conceitos de elétrica e eletrônica digital e analógica. O sistema realiza requisições a uma API própria e envia alertas em tempo real para o celular conectado em caso de detecção de vazamento de gás GLP, também conhecido como gás de cozinha. O aplicativo, feito em React Native, também gera gráficos e listas com dados dos vazamentos, registra os horários dos incidentes e fornece instruções práticas para situações de emergência. Esse projeto marcou minha introdução prática ao universo da IoT e à integração entre dispositivos físicos e aplicações móveis.

⭐ O DVGC foi um dos 5 projetos selecionados entre todas as turmas e períodos do curso de engenharia para participar de bootcamps e treinamentos com o SEBRAE, graças ao seu potencial de inovação e impacto social.`}
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
            link="#" // ou um link, se houver
            foto="https://placehold.jp/80x120.png"
          />

          {/* Projeto 5 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">ReMatch</h3>
            <p className="text-base text-offwhite mb-4">
              Plataforma web desenvolvida com o objetivo de promover a
              sustentabilidade por meio da conexão entre pessoas e empresas
              interessadas em reutilizar, reciclar ou reaproveitar itens
              descartáveis. Inspirada no modelo de “matchmaking”, a aplicação
              opera em modalidades P2P, P2C e C2C, possibilitando a criação de
              perfis personalizados, sistema de correspondência inteligente e
              chat integrado para facilitar a negociação de objetos que perderam
              seu valor original, mas ainda possuem potencial de reuso. O
              projeto foi desenvolvido dentro da disciplina de Projetos, cujo
              tema era Cidade Regenerativa, e tem como proposta central
              incentivar a economia circular, reduzindo o desperdício e
              contribuindo para práticas de consumo mais consciente, ao conectar
              de forma eficiente quem deseja descartar com quem pode
              reaproveitar.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                REACT
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                CSS
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                AXIOS
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                REACT-COOKIES
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                MONGODB
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                MONGOOSE
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                EXPRESS
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                NODE
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                METODOLOGIAS ÁGEIS - KANBAN
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">ConsultaWeb (Estudo)</h3>
            <p className="text-base text-offwhite mb-4">
              Projeto desenvolvido para fins de estudo, com o objetivo de
              aplicar Python no backend em conjunto com técnicas de web
              scraping, extração de dados de PDFs e manipulação de banco de
              dados MySQL. O sistema extrai tabelas de planilhas contidas em
              arquivos PDF, insere os dados em um banco MySQL, e permite
              consultas filtradas diretamente no banco. Posteriormente, os dados
              são exibidos em uma interface desenvolvida com Vue.js, com
              mecanismos de busca e filtragem geral para facilitar a
              visualização e análise das informações. Além disso, o projeto
              serviu como estudo de estruturação de APIs, criação de coleções no
              Postman e integração entre backend em Python e frontend moderno.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <TechTag label="VUE.JS" />
              <TechTag label="BOOTSTRAP" />
              <TechTag label="PYTHON" />
              <TechTag label="MYSQL" />
              <TechTag label="WEB SCRAPING" />
              <TechTag label="BS4" />
              <TechTag label="PANDAS" />
              <TechTag label="FLASK" />
              <TechTag label="PDF PLUMBER" />
              <TechTag label="REQUESTS" />
              <TechTag label="POSTMAN" />
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Este portfolio!</h3>
            <p className="text-base text-offwhite mb-4">
              Este portfólio foi desenvolvido não apenas como uma vitrine dos
              meus projetos, mas também como um exercício prático de aprendizado
              e revisão. O foco principal foi o estudo aprofundado de Tailwind
              CSS, visando aplicar conceitos de design limpo, responsividade e
              usabilidade moderna. Durante sua criação, aproveitei para
              revisitar projetos anteriores — muitos dos quais apresentavam
              limitações técnicas ou de estrutura — com o objetivo de
              identificar erros, refatorar ideias e consolidar aprendizados
              adquiridos ao longo da minha trajetória. O resultado é uma
              plataforma única que reflete minha evolução como desenvolvedor,
              tanto em termos técnicos quanto na forma de apresentar meu
              trabalho de maneira mais clara, consistente e profissional.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                REACT
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                TAILWIND
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>
        </div>
      </div>
      <div className="bg-ch2 py-20 px-10 text-white">
        <h2 className="text-4xl font-black text-center mb-12">
          Projetos Gamedev
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Projeto 1 */}
          <div className="bg-ch3 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Scratch/Stencyl</h3>
            <p className="text-base text-offwhite mb-4">
              Meu primeiro contato com programação foi através do Scratch, onde
              explorei conceitos básicos de lógica e interação visual. Pouco
              depois, desenvolvi meu primeiro jogo utilizando o Stencyl, uma
              plataforma de desenvolvimento focada em jogos 2D. O projeto era um
              plataforma 2D com temática inspirada em jogos como Super Mario,
              onde o jogador precisava superar inimigos, avançar por fases e
              enfrentar uma boss fight final, culminando na queda do vilão em um
              abismo. Embora eu não tenha mais acesso a esse projeto, ele foi
              essencial para despertar meu interesse por desenvolvimento de
              jogos — abrindo caminho para minha evolução na área de aplicações
              web e software.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Scratch
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Stencyl
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Blockly
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Aseprite
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>

          {/* Projeto 2 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Treasure Island</h3>
            <p className="text-base text-offwhite mb-4">
              Jogo inspirado em The Legend of Zelda: The Minish Cap, com
              gameplay no estilo top-down, focado em combate corpo a corpo,
              exploração de labirintos e resolução de pequenos desafios ao longo
              do caminho. Desenvolvido com o objetivo de aprofundar meus
              conhecimentos em game design, lógica de inimigos e estruturação de
              mapas interativos, foi um dos projetos que consolidou minha paixão
              pelo desenvolvimento de jogos com foco em experiências imersivas e
              mecânicas bem definidas.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Godot
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                GDScript
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Aseprite
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>

          {/* Projeto 3 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Lost Memories ⭐</h3>
            <p className="text-base text-offwhite mb-4">
              Considerado por mim o meu melhor projeto de GameDev até o momento,
              Lost Memories é um jogo com forte inspiração em Celeste, centrado
              na jornada de um viajante preso dentro das próprias memórias. Com
              foco em mecânicas de movimentação precisa, puzzles de cenário e
              timings bem calibrados, o jogador precisa superar obstáculos para
              reconstruir suas lembranças antes que seja tarde demais. O projeto
              representa um marco importante na minha evolução como
              desenvolvedor de jogos, unindo narrativa, design de nível e
              gameplay em uma experiência coesa e significativa.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Unity 2D
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                C#
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>
          {/* Game Jam */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Game Jam Natalina</h3>
            <p className="text-base text-offwhite mb-4">
              Projeto desenvolvido em uma game jam de 24 horas, com o desafio de
              criar um jogo com temática natalina. O resultado foi uma coletânea
              com dois mini games: um no estilo Subway Surfers, onde o jogador
              coleta presentes desviando de obstáculos, e outro inspirado em
              Angry Birds, em que o objetivo é entregar os presentes utilizando
              uma mecânica de lançamento. A experiência foi focada em
              prototipagem rápida, criatividade sob pressão e no desenvolvimento
              de ideias jogáveis em um curto espaço de tempo.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Unity 2D
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                C#
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>

          {/* Projeto 4 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Zombiefication</h3>
            <p className="text-base text-offwhite mb-4">
              Jogo em primeira pessoa desenvolvido na Unreal Engine, com foco em
              combate contra hordas de zumbis em uma narrativa de sobrevivência.
              Ao longo de quatro fases, o jogador enfrenta diferentes tipos de
              inimigos — são cerca de cinco variantes de zumbis, cada um com
              comportamentos e características distintas. Durante a progressão,
              é necessário explorar o cenário, coletar cartões de acesso,
              gerenciar estamina, utilizar armas diferentes e cumprir objetivos
              até chegar ao laboratório, onde deve sintetizar a cura, defendê-la
              durante o processo e finalmente aguardar a extração. O projeto foi
              importante para aprofundar o uso da Unreal Engine em sistemas de
              combate, progressão por objetivos, gerenciamento de recursos e
              variedade de inimigos.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Unreal Engine
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Blueprints
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>

          {/* Projeto 5 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">The Chase</h3>
            <p className="text-base text-offwhite mb-4">
              Último projeto desenvolvido antes da minha transição para o
              desenvolvimento web, The Chase é um jogo de fuga em mundo
              semiaberto, onde o objetivo é escapar da polícia enquanto o
              jogador acumula pontos e dinheiro realizando manobras arriscadas.
              Com uma proposta de ser ao mesmo tempo relaxante e desafiador, o
              jogo inclui mecânicas como tempo limitado, barra de vida, sistema
              de drift, modificadores de pontuação e um mapa urbano com rampas,
              curvas, viadutos e vielas. Tudo isso ao som de uma playlist
              personalizada, composta por músicas do meu gosto pessoal,
              selecionadas para combinar com o ritmo e a atmosfera do jogo. Esse
              projeto foi essencial para explorar design de mecânicas de risco e
              recompensa e controle de física veicular.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Unity 3D
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                C#
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>
        </div>
      </div>

      <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
        <h3 className="text-2xl font-bold mb-2">DVGC ⭐</h3>
        <p className="text-base text-offwhite mb-4">
          Projeto desenvolvido como parte de uma disciplina da faculdade, dentro
          do tema “Smart Cities”. Foi meu primeiro trabalho unindo software e
          hardware, com o desenvolvimento de um dispositivo físico utilizando o
          microcontrolador ESP32, sensores de gás, fiação e aplicação de
          conceitos de elétrica e eletrônica digital e analógica. O sistema
          realiza requisições a uma API própria e envia alertas em tempo real
          para o celular conectado em caso de detecção de vazamento de gás GLP,
          também conhecido como gás de cozinha. O aplicativo, feito em React
          Native, também gera gráficos e listas com dados dos vazamentos,
          registra os horários dos incidentes e fornece instruções práticas para
          situações de emergência. Esse projeto marcou minha introdução prática
          ao universo da IoT e à integração entre dispositivos físicos e
          aplicações móveis.
          <br />
          <br />
          <span className="text-s bg-ch3 font-bold">
            O DVGC foi um dos 5 projetos selecionados entre todas as turmas e
            períodos do curso de engenharia para participar de bootcamps e
            treinamentos com o SEBRAE, graças ao seu potencial de inovação e
            impacto social.
          </span>
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <TechTag label="REACT NATIVE" />
          <TechTag label="MYSQL" />
          <TechTag label="EXPO" />
          <TechTag label="EXPRESS" />
          <TechTag label="NODE" />
          <TechTag label="C++" />
          <TechTag label="IOT" />
          <TechTag label="ELETRÔNICA DIGITAL E ANALÓGICA" />
          <TechTag label="SEBRAE" />
          <TechTag label="METODOLOGIAS ÁGEIS - KANBAN" />
        </div>
        <div className="flex justify-center">
          <img
            className="mb-4 h-80 w-120 "
            src="https://placehold.jp/80x120.png"
            alt=""
          />
        </div>
        <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
          Ver mais
        </button>
      </div>
    </>
  );
}

export default App;
