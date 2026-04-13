import TechTag from "./Tag";
import githubIcon from "../assets/github.svg";
import resize from "../assets/resize.png";
import controller from "../assets/controller.svg";
import youtube from "../assets/youtube.svg";

const actionClass =
  "inline-flex h-7 w-full items-center justify-center gap-1 px-3 text-[0.6rem] font-medium uppercase leading-none tracking-[0.14em] transition duration-200";

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
  const imageSrc = foto ?? "https://placehold.jp/640x420.png";
  const actions = [
    repo
      ? {
          href: repo,
          icon: githubIcon,
          label: "Codigo",
          className:
            "bg-[rgba(255,255,255,0.03)] text-[var(--color-text-mid)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--color-text-strong)]",
        }
      : null,
    link
      ? {
          href: link,
          icon: resize,
          label: "Abrir",
          className:
            "bg-[rgba(255,255,255,0.045)] text-[var(--color-text-mid)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.07)] hover:text-[var(--color-text-strong)]",
        }
      : null,
    video
      ? {
          href: video,
          icon: youtube,
          label: "Demo",
          className:
            "bg-[rgba(255,255,255,0.03)] text-[var(--color-text-mid)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--color-text-strong)]",
          ariaLabel: "Assistir demonstracao",
        }
      : null,
    demo
      ? {
          href: demo,
          icon: controller,
          label: "Jogar",
          className:
            "bg-[rgba(255,255,255,0.045)] text-[var(--color-text-mid)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.07)] hover:text-[var(--color-text-strong)]",
          ariaLabel: "Jogar",
        }
      : null,
  ].filter(Boolean);

  return (
    <article className="group flex h-full min-h-[35rem] flex-col overflow-hidden rounded-[2rem] bg-[rgba(14,14,16,0.7)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition duration-300 hover:bg-[rgba(18,18,20,0.88)]">
      <div className="overflow-hidden">
        <img
          className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          src={imageSrc}
          alt={`Imagem do projeto ${title}`}
        />
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-6">
        <p className="mb-3 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-text-faint)]">
          Project
        </p>
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="project-title text-[1.75rem] font-semibold tracking-[-0.05em] text-[var(--color-text-strong)]">
            {title}
          </h3>
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-red)]" />
        </div>

        <p className="project-copy mb-5 text-sm leading-7 text-[var(--color-text-muted)]">
          {description}
        </p>

        <div className="project-tags mb-5 flex flex-wrap gap-2">
          {techs.map((tech) => (
            <TechTag key={`${title}-${tech}`} label={tech} />
          ))}
        </div>

        <div
          className={`project-actions mt-auto grid auto-rows-fr gap-2 ${
            actions.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {actions.map((action) => (
            <a
              key={`${title}-${action.label}`}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionClass} rounded-full ${action.className}`}
              aria-label={action.ariaLabel}
            >
              <img src={action.icon} className="h-3.5 invert" />
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
