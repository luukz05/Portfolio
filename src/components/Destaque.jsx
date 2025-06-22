import React from "react";
import TechTag from "./Tag";

export const Destaque = ({ src }) => {
  return (
    <div
      className="
    flex flex-col lg:flex-row items-start justify-center
    gap-12 xl:gap-20
    max-w-[1700px] mx-auto px-4
  "
    >
      {/* Mockup celular */}
      <div
        className="
      relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[20rem] xl:w-[22rem]
      lg:h-[40rem] xl:h-[45rem]
      rounded-3xl bg-black p-2 shadow-2xl border-4 border-neutral-800
      hidden sm:block
    "
      >
        <img
          src={src}
          alt="Interface do app DVGC"
          className="w-full h-72 sm:h-96 md:h-full rounded-2xl object-cover"
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-2 rounded-b-xl bg-neutral-700 mt-2" />
      </div>

      {/* Texto mais largo */}
      <div className="flex flex-col text-offwhite flex-1 max-w-[1100px]">
        <div className="flex flex-row items-center sm:flex-row justify-between mb-4  sm:items-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-offwhite">
            DVGC
          </p>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-ch1 font-bold">
            Detector de Vazamento de Gás de Cozinha
          </p>
        </div>

        <p className="text-sm sm:text-base leading-relaxed mb-4 text-justify ">
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

        <div className="bg-ch3 text-xs sm:text-sm text-ch1 font-bold px-4 py-2 rounded-lg mb-4 shadow-inner">
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
      </div>
    </div>
  );
};
