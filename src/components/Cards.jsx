import TechTag from "./Tag";
import githubIcon from "../assets/github.svg";
import resize from "../assets/resize.png";
import controller from "../assets/controller.svg";
import youtube from "../assets/youtube.svg";

const ProjectCard = ({
  title,
  description,
  techs,
  link,
  foto,
  repo,
  video,
  demo,
}) => {
  return (
    <div
      className="
        bg-ch2 rounded-2xl shadow-lg pb-5 flex flex-col
        w-full min-w-[250px] max-w-sm sm:max-w-md lg:max-w-lg
        scale-[0.9] md:scale-[0.75] lg:scale-[0.85]
        hover:scale-95 lg:hover:scale-90 transition-transform duration-300
      "
    >
      {foto ? (
        <img
          className="w-full h-40 sm:h-52 md:h-60 lg:h-72 object-cover rounded-t-2xl"
          src={foto}
          alt={`Imagem do projeto ${title}`}
        />
      ) : (
        <img
          className="w-full h-40 sm:h-52 md:h-60 lg:h-72 object-cover rounded-t-2xl"
          src={`https://placehold.jp/75x120.png`}
          alt={`Imagem do projeto ${title}`}
        />
      )}

      {/* Conteúdo */}
      <div className="m-5 flex flex-col justify-between flex-1">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-base text-offwhite mb-4">{description}</p>

        {/* Tags de Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech, index) => (
            <TechTag key={index} label={tech} />
          ))}
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto w-full">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ch4 font-bold py-2 px-4 rounded-xl hover:bg-zinc-700 transition w-full inline-flex items-center justify-center gap-2 text-white"
            >
              <img src={githubIcon} className="invert h-6" />
              <p>Repositório</p>
            </a>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cherry text-offwhite font-bold py-2 px-4 rounded-xl hover:bg-ch3 transition w-full inline-flex items-center justify-center gap-2"
            >
              <img src={resize} className="h-6 invert" />
              <p>Acessar página</p>
            </a>
          )}

          {video && (
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cherry font-bold py-2 px-4 rounded-xl hover:bg-ch3 text-offwhite transition w-full inline-flex items-center justify-center gap-2"
              aria-label="Assistir Demo"
            >
              <img src={youtube} className="invert h-6" />
              <p>Demonstração</p>
            </a>
          )}
          {demo && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cherry text-offwhite font-bold py-2 px-4 rounded-xl hover:bg-zinc-700 transition w-full inline-flex items-center justify-center gap-2"
              aria-label="Jogar"
            >
              <img src={controller} className="h-6 invert" />
              <p>Jogar</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
