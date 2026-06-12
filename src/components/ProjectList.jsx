import { Fragment } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerFast } from "../lib/motion";

// trigger as soon as the top of the (often tall) list enters the viewport
const viewportList = { once: true, amount: 0.05 };

const statusColor = {
  progress: "#e0a04a",
  archived: "var(--color-text-faint)",
  done: "#4ad27f",
};

function primaryHref({ link, demo, repo, video }) {
  return link || demo || repo || video || "#";
}

function buildLinks({ repo, link, video, demo }) {
  return [
    link ? { href: link, label: "site" } : null,
    demo ? { href: demo, label: "jogar" } : null,
    video ? { href: video, label: "vídeo" } : null,
    repo ? { href: repo, label: "código" } : null,
  ].filter(Boolean);
}

export default function ProjectList({ projects, showStatus = true }) {
  return (
    <motion.div
      className="proj-list"
      variants={staggerFast}
      initial="hidden"
      whileInView="show"
      viewport={viewportList}
    >
      {projects.map((project, index) => {
        const links = buildLinks(project);
        const href = primaryHref(project);

        return (
          <motion.div key={project.title} className="proj-row" variants={fadeUp}>
            <span className="proj-num">
              {String(index + 1).padStart(2, "0")}
            </span>

            <a
              className="proj-thumb"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${project.title}`}
              tabIndex={-1}
            >
              {project.foto ? (
                <img
                  src={project.foto}
                  alt={`Prévia do projeto ${project.title}`}
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
            </a>

            <div className="proj-main">
              <div className="proj-head">
                {showStatus && (
                  <span
                    className="proj-status"
                    style={{
                      background:
                        statusColor[project.status] || statusColor.done,
                    }}
                  />
                )}
                <a
                  className="proj-name"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title.toLowerCase()}
                </a>
                {project.category ? (
                  <span className="proj-cat">
                    {project.category.toLowerCase()}
                  </span>
                ) : null}
              </div>

              <p className="proj-body">{project.description}</p>

              <p className="proj-tech">
                {project.techs.map((t, i) => (
                  <Fragment key={t}>
                    {i > 0 ? <span className="sep">·</span> : null}
                    <span>{t.toLowerCase()}</span>
                  </Fragment>
                ))}
              </p>
            </div>

            <div className="proj-links">
              {links.map((l) => (
                <a
                  key={l.label}
                  className="proj-link"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
