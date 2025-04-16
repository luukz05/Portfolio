import React from "react";
import TechTag from "./Tag";

export const Destaque = () => {
  return (
    <div className=" scale-90 flex flex-col md:flex-row gap-8 items-center justify justify-center-safe text-justify ">
      <div className=" relative w-[20rem] h-[40rem] rounded-[3rem] bg-black p-2 shadow-2xl border-4 border-neutral-800">
        <img
          src="https://placehold.jp/400x800.png"
          alt="Interface do app DVGC"
          className="w-full h-full rounded-[2rem] object-filled"
        />
        {/* Simulando notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 rounded-b-xl bg-neutral-700 mt-2" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-between text-offwhite md:w-1/2">
        <h1 className="text-4xl font-extrabold text-offwhite flex items-center gap-3 mb-2">
          DVGC
        </h1>

        <p className="text-base leading-relaxed mb-4">
          Projeto desenvolvido em grupo por cinco integrantes como parte de uma
          disciplina acadêmica dentro do tema <strong>“Smart Cities”</strong>. O
          DVGC marcou minha primeira experiência prática integrando{" "}
          <strong>software e hardware</strong>, com o objetivo de criar uma
          solução inovadora e acessível para{" "}
          <strong>monitoramento de segurança doméstica</strong>, focando na{" "}
          <strong>detecção de vazamentos de gás GLP</strong>, amplamente
          utilizado em residências.
          <br />
          <br />
          No projeto, fui responsável por{" "}
          <strong>desenvolver o aplicativo móvel</strong>, realizar a{" "}
          <strong>integração do backend com o dispositivo físico</strong>, além
          de programar o <strong>ESP32</strong> e contribuir ativamente na{" "}
          <strong>montagem do protótipo físico</strong>.
          <br />
          <br />O dispositivo utiliza o <strong>
            microcontrolador ESP32
          </strong>{" "}
          integrado a <strong>sensores de gás</strong>, aplicando conceitos de{" "}
          <strong>eletrônica digital e analógica</strong> para realizar
          monitoramento constante da concentração de GLP no ar. Ao detectar a
          presença do gás, o sistema{" "}
          <strong>envia alertas em tempo real para o smartphone</strong> do
          usuário, por meio de um app desenvolvido em{" "}
          <strong>React Native</strong>.
          <br />
          <br />O aplicativo conta com uma{" "}
          <strong>interface minimalista</strong>,{" "}
          <strong>gráficos interativos gerados em tempo real</strong>,{" "}
          <strong>registro dos horários dos vazamentos</strong> e uma{" "}
          <strong>seção de orientações práticas para emergências</strong>,
          incluindo instruções de evacuação e contato com serviços
          especializados.
          <br />
          <br />A solução inclui também uma{" "}
          <strong>API própria construída com Node.js e Express</strong>, com{" "}
          <strong>persistência dos dados em um banco MySQL</strong>, assegurando
          confiabilidade e um histórico completo dos eventos registrados.
        </p>

        <div className="bg-ch3 text-s text-ch1 font-bold px-4 py-2 rounded-lg mb-4 shadow-inner">
          Mesmo sendo desenvolvido por alunos de primeiro semestre, o DVGC foi
          um dos <strong>5 projetos selecionados</strong> entre todas as turmas
          e períodos dos cursos de engenharia para participar de bootcamps e
          treinamentos com o SEBRAE, graças ao seu{" "}
          <strong>potencial de inovação e impacto social</strong>.
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
          <TechTag label="METODOLOGIAS ÁGEIS - KANBAN" />
        </div>

        {/* Botão */}
        <button className="bg-ch1 text-ch4 font-bold py-3 px-6 rounded-xl hover:bg-ch3 transition w-fit">
          Ver mais detalhes
        </button>
      </div>
    </div>
  );
};
