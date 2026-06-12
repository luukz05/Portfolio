import { Fragment } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerFast, viewportCard } from "../lib/motion";

const groups = [
  {
    key: "front-end",
    items: [
      "react", "next.js", "html", "css", "javascript", "typescript",
      "tailwind", "bootstrap", "vue.js", "handlebars", "styled components",
      "shadcn/ui", "vite", "axios", "responsividade",
    ],
  },
  {
    key: "back-end",
    items: [
      "node.js", "express", "python", "flask", "fastapi", "web scraping",
      "jwt", "bcrypt", "crypto",
    ],
  },
  {
    key: "dados / infra",
    items: [
      "mongodb", "mongoose", "mysql", "postgresql", "aws", "docker", "git",
      "github",
    ],
  },
  {
    key: "mobile / iot",
    items: ["react native", "expo", "arduino", "esp32", "c++", "iot"],
  },
  {
    key: "ia / visão",
    items: ["yolo", "opencv", "computer vision", "codex", "claude code"],
  },
  {
    key: "games",
    items: [
      "unity 2d", "unity 3d", "godot", "unreal engine", "blueprints",
      "gdscript", "c#", "aseprite", "figma", "canva",
    ],
  },
  {
    key: "metodologias",
    items: ["xp", "scrum", "lean", "kanban"],
  },
];

const principles = [
  "comunicação clara", "aprendizado rápido", "pensamento prático",
  "leitura de contexto", "proatividade", "visão de produto",
];

const highlighted = new Set([
  "react", "next.js", "tailwind", "node.js", "flask", "mongodb",
  "react native", "esp32", "claude code", "unity 2d", "unity 3d",
]);

function ValList({ items }) {
  return (
    <p className="skill-vals">
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 ? <span className="sep">·</span> : null}
          <span className={highlighted.has(item) ? "on" : undefined}>
            {item}
          </span>
        </Fragment>
      ))}
    </p>
  );
}

export default function SkillsSection() {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
    >
      {groups.map((group) => (
        <motion.div key={group.key} className="skill-row" variants={fadeUp}>
          <span className="skill-key">{group.key}</span>
          <ValList items={group.items} />
        </motion.div>
      ))}

      <motion.div className="skill-row" variants={fadeUp}>
        <span className="skill-key">princípios</span>
        <ValList items={principles} />
      </motion.div>

      <motion.div className="skill-row" variants={fadeUp}>
        <span className="skill-key">inglês</span>
        <p className="skill-vals" style={{ display: "block", lineHeight: 1.75 }}>
          <span className="on">B2+ · Wizard by Pearson.</span> Comunicação fluida
          em contextos técnicos, estudos e colaborações — incluindo bootcamp
          imersivo no <span className="on">Kennedy Space Center</span>{" "}
          International Academy, com convívio internacional em inglês durante toda
          a experiência.
        </p>
      </motion.div>
    </motion.div>
  );
}
