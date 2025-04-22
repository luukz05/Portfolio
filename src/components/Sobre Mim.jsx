import React from "react";
import TechTag from "./Tag";

export const SobreMim = () => {
  return (
    <div className="flex text-right w-[95vh]">
      <div className=" text-offwhite  ">
        <h1 className="text-4xl font-extrabold text-offwhite gap-3 mb-2 text-right">
          Olá, eu sou <span className="text-ch1">Lucas Vargas</span>
        </h1>

        <p className="text-base leading-relaxed mb-4 text-justify">
          Entusiasta em tecnologia com paixão por transformar ideias em soluções
          reais. Desde cedo, sempre fui movido por curiosidade e vontade de
          entender como as coisas funcionam — o que me levou naturalmente ao
          universo da <strong>programação</strong> e da{" "}
          <strong>eletrônica</strong>.
          <br />
          <br />
          Atualmente, estou cursando <strong>Engenharia</strong> e explorando
          projetos que envolvem desde o{" "}
          <strong>desenvolvimento de aplicações mobile</strong> até{" "}
          <strong>integrações com dispositivos físicos</strong> via{" "}
          <strong>IoT</strong>. Gosto especialmente de trabalhar com{" "}
          <strong>interfaces intuitivas</strong> e{" "}
          <strong>experiências de usuário funcionais</strong>.
          <br />
          <br />
          Me considero uma pessoa prática, autodidata e colaborativa. Valorizo
          muito projetos em equipe, metodologias ágeis e o aprendizado contínuo,
          sempre buscando evoluir tanto no lado técnico quanto humano da
          engenharia de software.
        </p>

        <div className="bg-ch3 text-s text-ch1 font-bold px-4 py-2 rounded-lg mb-4 shadow-inner text-justify">
          Estou sempre em busca de novos desafios que me permitam crescer,
          colaborar e impactar positivamente a vida das pessoas através da
          tecnologia.
        </div>

        {/* Tags de tecnologias / habilidades */}
        <div className="flex flex-wrap gap-2 mb-6 justify-end">
          <TechTag label="HTML" />
          <TechTag label="CSS" />
          <TechTag label="TAILWIND" />
          <TechTag label="BOOTSTRAP" />
          <TechTag label="REACT" />
          <TechTag label="REACT NATIVE" />
          <TechTag label="VUE.JS" />
          <TechTag label="NODE.JS" />
          <TechTag label="EXPRESS" />
          <TechTag label="AXIOS" />
          <TechTag label="MONGOOSE" />
          <TechTag label="MONGODB" />
          <TechTag label="MYSQL" />
          <TechTag label="IOT" />
          <TechTag label="GIT" />
          <TechTag label="GITHUB" />
          <TechTag label="APIs REST" />
          <TechTag label="PYTHON" />
          <TechTag label="METODOLOGIAS ÁGEIS" />
          <TechTag label="GAME DEV" />
        </div>

        {/* Botão */}
        <button className="bg-ch1 text-ch4 font-bold py-3 px-6 rounded-xl hover:bg-ch3 transition w-fit">
          Entrar em contato
        </button>
      </div>
    </div>
  );
};
