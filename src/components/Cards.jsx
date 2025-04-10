import TechTag from "./Tag";

const ProjectCard = ({ title, description, obs, techs, link, foto }) => {
  return (
    <div className="bg-ch2 rounded-2xl shadow-lg pb-5 w-[30.01rem] flex flex-col h-full justify-between hover:scale-105 transition-transform">
      <img
        className="h-80 w-120 rounded-t-2xl "
        src="https://placehold.jp/80x120.png"
        alt=""
      />
      <div className="m-5">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-base text-offwhite mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 justify-baseline">
          {techs.map((tech, index) => (
            <TechTag key={index} label={tech} />
          ))}
        </div>
        <div className="flex justify-center"></div>

        {link ? (
          <a
            href={link}
            className="bg-ch1 text-ch4 font-bold py-2 px-4 rounded-xl self-start hover:bg-ch3 transition"
          >
            Acesse
          </a>
        ) : (
          <p
            className=" text-white font-bold py-2 px-4 rounded-xl self-start bg-ch3 "
            aria-label={`Ver mais sobre o projeto ${title}`}
          >
            Acesso indisponível
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
