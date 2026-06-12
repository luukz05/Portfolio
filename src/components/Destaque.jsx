import { motion } from "framer-motion";
import { fadeUp, staggerFast, viewportCard } from "../lib/motion";

const highlights = [
  {
    label: "papel",
    value: "App mobile, integração com backend e trabalho direto com ESP32.",
  },
  {
    label: "sistema",
    value: "React Native, Node.js, sensores e resposta em tempo real.",
  },
  {
    label: "impacto",
    value: "Segurança doméstica, alerta rápido e potencial social real.",
  },
];

export const Destaque = ({ groupPhoto, prototypePhoto, logoCard }) => {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
    >
      <motion.p
        variants={fadeUp}
        className="text-[0.8rem] text-[var(--color-red-soft)]"
      >
        dvgc — smart cities
      </motion.p>
      <motion.h3 variants={fadeUp} className="heading mt-3">
        Detector de Vazamento de Gás
      </motion.h3>
      <motion.p variants={fadeUp} className="lede mt-5">
        O DVGC nasceu como um sistema completo para detectar vazamentos de GLP e
        alertar o usuário em tempo real. Foi o projeto em que produto, software,
        hardware e interface realmente precisaram operar como uma única
        experiência.
      </motion.p>

      <motion.div variants={fadeUp} className="dl mt-9 max-w-[46rem]">
        {highlights.map((item) => (
          <div key={item.label} className="dl-row">
            <span className="dl-key">{item.label}</span>
            <p className="dl-val">{item.value}</p>
          </div>
        ))}
      </motion.div>

      <motion.p variants={fadeUp} className="quote max-w-[46rem]">
        O projeto ficou entre os selecionados para bootcamps e treinamentos com o
        SEBRAE, destacando potencial de impacto social e inovação.
      </motion.p>

      <motion.div variants={fadeUp} className="media-grid">
        <div className="frame frame-wide">
          <img
            src={groupPhoto}
            alt="Equipe do projeto DVGC"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="frame">
          <img
            src={prototypePhoto}
            alt="Protótipo do DVGC"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="frame">
          <img
            src={logoCard}
            alt="Identidade visual do DVGC"
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
