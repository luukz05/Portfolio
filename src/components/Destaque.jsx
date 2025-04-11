import React from "react";
import TechTag from "./Tag";

export const Destaque = () => {
  return (
    <div className="bg-ch2 rounded-3xl shadow-2xl md:p-12 flex flex-col w-[100rem] h-auto gap-6 justify-center items-center ">
      <div className="flex flex-col md:flex-row gap-8 items-center justify justify-evenly">
        <div className="relative w-[20rem] h-[40rem] rounded-[3rem] bg-black p-2 shadow-2xl border-4 border-neutral-800">
          <img
            src="https://placehold.jp/400x800.png"
            alt="Interface do app DVGC"
            className="w-full h-full rounded-[2rem] object-cover"
          />
          {/* Simulando notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 rounded-b-xl bg-neutral-700 mt-2" />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col justify-between text-offwhite md:w-1/2">
          <h3 className="text-4xl font-extrabold text-ch4 flex items-center gap-3 mb-2">
            DVGC
          </h3>

          <p className="text-base leading-relaxed mb-4">
            <p className="text-base leading-relaxed mb-4">
              Projeto desenvolvido como parte de uma disciplina da faculdade
              dentro do tema <strong>“Smart Cities”</strong>. O DVGC representou
              minha primeira experiência prática integrando{" "}
              <strong>software e hardware</strong>. O objetivo era criar uma
              solução inovadora e acessível para o monitoramento de segurança
              doméstica, com foco na detecção de vazamentos de gás GLP,
              amplamente utilizado em residências como gás de cozinha.
              <br />
              <br />
              Para isso, desenvolvi um{" "}
              <strong>
                dispositivo físico utilizando o microcontrolador ESP32
              </strong>
              , integrando <strong>sensores de gás</strong>, cabeamento, e
              aplicando conceitos de{" "}
              <strong>eletrônica digital e analógica</strong>. O sistema realiza
              leituras constantes da qualidade do ar, identificando a presença
              de GLP no ambiente e, em caso de detecção,{" "}
              <strong>dispara alertas em tempo real para o smartphone</strong>{" "}
              conectado via uma aplicação móvel desenvolvida com{" "}
              <strong>React Native</strong>.
              <br />
              <br />O aplicativo não só notifica o usuário sobre os incidentes,
              como também oferece uma interface intuitiva que apresenta{" "}
              <strong>gráficos interativos</strong>,{" "}
              <strong>registro dos horários de vazamentos</strong>, e uma{" "}
              <strong>
                seção de orientações práticas para situações de emergência
              </strong>
              , como evacuação segura e acionamento de serviços especializados.
              <br />
              <br />
              Além da implementação técnica, o projeto incluiu o desenvolvimento
              de uma <strong>API própria com Node.js e Express</strong>, e
              persistência dos dados em um banco de dados <strong>MySQL</strong>
              , garantindo confiabilidade e histórico completo dos eventos
              registrados.
            </p>
          </p>

          <div className="bg-ch3 text-s text-ch1 font-bold px-4 py-2 rounded-lg mb-4 shadow-inner">
            O DVGC foi um dos 5 projetos selecionados em toda a engenharia para
            participar de bootcamps e treinamentos com o SEBRAE pelo seu
            potencial de inovação e impacto social.
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <TechTag label="REACT NATIVE" />
            <TechTag label="MYSQL" />
            <TechTag label="EXPO" />
            <TechTag label="EXPRESS" />
            <TechTag label="NODE" />
            <TechTag label="C++" />
            <TechTag label="IOT" />
            <TechTag label="ELETRÔNICA DIGITAL E ANALÓGICA" />
            <TechTag label="SEBRAE" />
            <TechTag label="KANBAN" />
          </div>

          {/* Botão */}
          <button className="bg-ch1 text-ch4 font-bold py-3 px-6 rounded-xl hover:bg-ch3 transition w-fit">
            Ver mais detalhes
          </button>
        </div>
      </div>
    </div>
  );
};
