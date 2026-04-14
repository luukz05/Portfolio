import TechTag from "./Tag";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, scaleIn, staggerFast, viewportCard } from "../lib/motion";

const highlights = [
  {
    label: "Papel",
    value: "App mobile, integração com backend e trabalho direto com ESP32.",
  },
  {
    label: "Sistema",
    value: "React Native, Node.js, sensores e resposta em tempo real.",
  },
  {
    label: "Impacto",
    value: "Segurança doméstica, alerta rápido e potencial social real.",
  },
];

const tags = [
  "REACT NATIVE",
  "EXPO",
  "NODE",
  "EXPRESS",
  "MYSQL",
  "ESP32",
  "IOT",
];

function PolaroidCard({
  src,
  alt,
  caption,
  className = "",
  imageClassName = "",
  frameClassName = "",
  mediaClassName = "",
  captionClassName = "",
}) {
  return (
    <motion.div
      className={`group bg-[rgba(245,245,245,0.97)] p-3 pb-5 text-neutral-900 shadow-[0_24px_60px_rgba(0,0,0,0.2)] transition duration-300 hover:scale-[1.03] ${className} ${frameClassName}`}
      variants={scaleIn}
    >
      <div className={`overflow-hidden bg-black ${mediaClassName}`}>
        <img
          src={src}
          alt={alt}
          className={`block w-full object-cover ${imageClassName}`}
        />
      </div>
      <p
        className={`px-1 pt-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-neutral-700 ${captionClassName}`}
      >
        {caption}
      </p>
    </motion.div>
  );
}

export const Destaque = ({ groupPhoto, prototypePhoto, logoCard }) => {
  return (
    <motion.div
      className="showcase-grid"
      variants={staggerFast}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
    >
      <motion.div
        className="destaque-polaroid-stage"
        variants={fadeLeft}
      >
        <motion.div className="destaque-polaroid-grid" variants={staggerFast}>
          <PolaroidCard
            src={groupPhoto}
            alt="Equipe do projeto DVGC"
            caption="Apresentação do projeto"
            className="polaroid-card polaroid-card-main"
            frameClassName="[clip-path:polygon(2%_1%,100%_0,98%_99%,0_100%)]"
            mediaClassName="[clip-path:polygon(2%_1%,100%_0,98%_99%,0_100%)]"
            captionClassName="pr-4"
            imageClassName="aspect-[16/10]"
          />

          <PolaroidCard
            src={prototypePhoto}
            alt="Protótipo do DVGC"
            caption="Protótipo físico"
            className="polaroid-card polaroid-card-secondary"
            imageClassName="aspect-[4/3]"
          />

          <PolaroidCard
            src={logoCard}
            alt="Identidade visual do DVGC"
            caption="Identidade do app"
            className="polaroid-card polaroid-card-tertiary"
            imageClassName="aspect-[6/5]"
          />
        </motion.div>
      </motion.div>

      <motion.article
        className="flex h-full flex-col justify-between rounded-[2rem] bg-[rgba(14,14,16,0.74)] p-7 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:p-9"
        variants={fadeRight}
      >
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-red-soft)]">
            DVGC / Smart Cities
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[var(--color-text-strong)]">
            Detector de Vazamento de Gás
          </h3>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--color-text-muted)] sm:text-base">
            O DVGC nasceu como um sistema completo para detectar vazamentos de
            GLP e alertar o usuário em tempo real. Foi o projeto em que produto,
            software, hardware e interface realmente precisaram operar como uma
            única experiência.
          </p>

          <motion.div className="mt-8 grid gap-3 sm:grid-cols-3" variants={staggerFast}>
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="rounded-[1.5rem] bg-[rgba(255,255,255,0.03)] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
              >
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-red-soft)]">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-mid)]">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(240,90,104,0.14),rgba(209,31,49,0.08))] px-5 py-4 text-sm leading-7 text-[var(--color-text-mid)] shadow-[inset_0_0_0_1px_rgba(240,90,104,0.12)]">
            O projeto ficou entre os selecionados para bootcamps e treinamentos
            com o SEBRAE, destacando potencial de impacto social e inovação.
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </motion.article>
    </motion.div>
  );
};
