import { motion } from "framer-motion";
import { fadeUp, staggerFast, viewportCard } from "../lib/motion";

const blocks = [
  {
    label: "quem sou",
    value:
      "Sou Lucas Vargas, tenho 20 anos e moro em Sorocaba, São Paulo. Gosto de transformar ideia em interface, sistema e experiência com mais clareza do que ruído.",
  },
  {
    label: "formação",
    value:
      "Minha base passa por engenharia, desenvolvimento web, mobile e projetos conectados a hardware, o que ampliou minha forma de pensar produto e execução.",
  },
  {
    label: "como trabalho",
    value:
      "Atuo entre front-end, full stack, mobile e IoT, sempre buscando consistência visual, boa estrutura técnica e uma experiência final mais bem resolvida.",
  },
  {
    label: "o que valorizo",
    value:
      "Valorizo clareza, colaboração, aprendizado contínuo e decisões visuais que reforcem o produto em vez de competir com ele.",
  },
  {
    label: "o que busco",
    value:
      "Quero participar de projetos em que produto, usabilidade e execução importem tanto quanto a tecnologia utilizada.",
  },
];

export const SobreMim = () => {
  return (
    <motion.div
      className="dl"
      variants={staggerFast}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
    >
      {blocks.map((block) => (
        <motion.div key={block.label} className="dl-row" variants={fadeUp}>
          <span className="dl-key">{block.label}</span>
          <p className="dl-val">{block.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
