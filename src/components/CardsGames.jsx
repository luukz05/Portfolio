import TechTag from "./Tag";
import youtube from "../assets/youtube.svg";
import controller from "../assets/controller.svg";
import frown from "../assets/emoji-frown-fill.svg";

const ProjectCardG = ({ title, description, techs, link, foto, repo }) => {
  return (
    <div className=" bg-ch2 scale-70 rounded-2xl shadow-lg pb-5 md:w-125 flex flex-col  md:h-full hover:scale-75 transition-transform">
      {foto ? (
        <img
          className="w-full h-70 object-cover rounded-t-2xl"
          src={foto}
          alt={`Imagem do projeto ${title}`}
        />
      ) : (
        <img
          className="w-full h-screen object-cover rounded-t-2xl"
          src={`https://placehold.jp/80x120.png`}
          alt={`Imagem do projeto ${title}`}
        />
      )}
      <div className="m-5 flex flex-col justify-between flex-1">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-base text-offwhite mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 justify-baseline">
          {techs.map((tech, index) => (
            <TechTag key={index} label={tech} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-auto w-full justify-center">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ch4 text-offwhite font-bold py-2 px-4 rounded-xl hover:bg-zinc-700 transition w-full inline-flex items-center justify-center gap-2"
              aria-label="Jogar"
            >
              <img src={controller} className="h-6 invert" />
              <p>Jogar</p>
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cherry font-bold py-2 px-4 rounded-xl hover:bg-ch3 text-offwhite transition w-full inline-flex items-center justify-center gap-2"
              aria-label="Assistir Demo"
            >
              <img src={youtube} className="invert h-6" />
              <p>Demonstração</p>
            </a>
          )}
          {!link && !repo && <></>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardG;
