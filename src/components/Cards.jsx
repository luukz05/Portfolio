import TechTag from "./Tag";
import githubIcon from "../assets/github.svg";
import resize from "../assets/resize.png";
import frown from "../assets/emoji-frown-fill.svg";
import youtube from "../assets/youtube.svg";

const ProjectCard = ({
  title,
  description,
  techs,
  link,
  foto,
  repo,
  video,
}) => {
  return (
    <div className=" bg-ch2 scale-70 rounded-2xl shadow-lg pb-5 md:w-125 flex flex-col  md:h-full hover:scale-75 transition-transform">
      {foto ? (
        <img
          className="w-full h-70 object-fill rounded-t-2xl"
          src={foto}
          alt={`Imagem do projeto ${title}`}
        />
      ) : (
        <img
          className="w-full h-screen object-cover rounded-t-2xl"
          src={`https://placehold.jp/75x120.png`}
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

        <div className="flex gap-3 mt-auto w-full justify-center">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ch4 font-bold py-2 px-4 rounded-xl hover:bg-zinc-700 transition w-full inline-flex items-center justify-center gap-2"
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
              <p>Demonstação</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
