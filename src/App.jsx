import { useState } from "react";
import "./App.css";
import ImageLinkButton from "./components/ImageButton";
import Subtitle from "./components/Subtitle";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-ch4/80 to-transparent backdrop-blur-md text-center py-6 px-10 h-7 flex flex-row items-center justify-between z-10 relative rounded-b-2xl shadow-md">
        <p className="font-black text-2xl text-white">Lucas Vargas</p>
        <div className="flex flex-row items-center gap-10">
          <button className="font-black text-white">Inicio</button>
          <button className="font-black text-white" aria-label="Sobre">
            Sobre
          </button>
          <button className="font-black text-white" aria-label="Projetos">
            Projetos
          </button>
          <button className="font-black text-white" aria-label="Contato">
            Contato
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="bg-[url('./assets/image.png')] text-center min-h-screen flex flex-col items-center justify-evenly bg-no-repeat bg-cover bg-fixed">
        <div className="flex flex-col items-center justify-evenly gap-2">
          <p className="text-offwhite text-4xl font-mono mb-[-30px]">
            Olá, visitante!
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
        <h1 className="animate-bounce text-offwhite text-2xl font-mono mb-[-100px]">
          SCROLL
        </h1>
      </div>

      <div className="bg-ch4 py-20 px-10 text-white">
        <h2 className="text-4xl font-black text-center mb-12">
          Projetos Gamedev
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Projeto 1 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">xxxxxxxxxxxxxxxxxxxxxxx</h3>
            <p className="text-base text-offwhite mb-4">
              xxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Stencyl
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Blockly
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>

          {/* Projeto 2 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">XXXXXXXXXXXXXXXXX</h3>
            <p className="text-base text-offwhite mb-4">
              xxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Godot
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                GDScript
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>

          {/* Projeto 3 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Lost Memories</h3>
            <p className="text-base text-offwhite mb-4">
              Mundo aberto com exploração, física e combate básico.
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
              Otimizado para Android com progresso salvo em nuvem.
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

          {/* Projeto 4 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">Zombiefication</h3>
            <p className="text-base text-offwhite mb-4">
              Prototipagem de FPS com navegação e inimigos inteligentes.
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
              Otimizado para Android com progresso salvo em nuvem.
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
      <div className="bg-ch4 py-20 px-10 text-white">
        <h2 className="text-4xl font-black text-center mb-12">Projetos Web</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Projeto 1 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">GAMMA</h3>
            <p className="text-base text-offwhite mb-4">
              xxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Stencyl
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Blockly
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">NBA TRACKER</h3>
            <p className="text-base text-offwhite mb-4">
              xxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Stencyl
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Blockly
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>

          {/* Projeto 2 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">INDIEFOLIO</h3>
            <p className="text-base text-offwhite mb-4">
              xxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                Godot
              </span>
              <span className="bg-ch1 text-ch4 text-xs font-semibold px-3 py-1 rounded-full">
                GDScript
              </span>
            </div>
            <button className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition">
              Ver mais
            </button>
          </div>

          {/* Projeto 3 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">TACTICAL BLUEPRINT</h3>
            <p className="text-base text-offwhite mb-4">
              Mundo aberto com exploração, física e combate básico.
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
            <h3 className="text-2xl font-bold mb-2">MINIMAL KEEPER</h3>
            <p className="text-base text-offwhite mb-4">
              Otimizado para Android com progresso salvo em nuvem.
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

          {/* Projeto 4 */}
          <div className="bg-ch2 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">DVGC</h3>
            <p className="text-base text-offwhite mb-4">
              Prototipagem de FPS com navegação e inimigos inteligentes.
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
            <h3 className="text-2xl font-bold mb-2">REMATCH</h3>
            <p className="text-base text-offwhite mb-4">
              Otimizado para Android com progresso salvo em nuvem.
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
    </>
  );
}

export default App;
