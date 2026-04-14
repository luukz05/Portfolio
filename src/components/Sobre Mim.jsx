import { motion } from "framer-motion";
import { fadeUp, staggerFast, viewportCard } from "../lib/motion";

const blocks = [
  {
    label: "Quem sou",
    value:
      "Sou Lucas Vargas, tenho 20 anos e moro em Sorocaba, São Paulo. Gosto de transformar ideia em interface, sistema e experiência com mais clareza do que ruído.",
  },
  {
    label: "Formação",
    value:
      "Minha base passa por engenharia, desenvolvimento web, mobile e projetos conectados a hardware, o que ampliou minha forma de pensar produto e execução.",
  },
  {
    label: "Como trabalho",
    value:
      "Atuo entre front-end, full stack, mobile e IoT, sempre buscando consistência visual, boa estrutura técnica e uma experiência final mais bem resolvida.",
  },
  {
    label: "O que valorizo",
    value:
      "Valorizo clareza, colaboração, aprendizado contínuo e decisões visuais que reforcem o produto em vez de competir com ele.",
  },
  {
    label: "O que busco",
    value:
      "Quero participar de projetos em que produto, usabilidade e execução importem tanto quanto a tecnologia utilizada.",
  },
];

export const SobreMim = () => {
  return (
    <motion.article
      className="flex h-full w-full flex-col justify-between rounded-[2rem] bg-[rgba(14,14,16,0.74)] p-7 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:p-9"
      variants={staggerFast}
      initial="hidden"
      whileInView="show"
      viewport={viewportCard}
    >
      <div>
        <motion.p
          variants={fadeUp}
          className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-red-soft)]"
        >
          Sobre mim
        </motion.p>

        <div className="mt-8">
          {blocks.map((block, index) => (
            <motion.div
              key={block.label}
              variants={fadeUp}
              className={`grid gap-4 py-5 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-6 ${
                index === 0 ? "" : "border-t border-[rgba(255,255,255,0.05)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[rgba(240,90,104,0.68)]" />
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-red-soft)]">
                  {block.label}
                </p>
              </div>
              <p className="text-sm leading-8 text-[var(--color-text-mid)] sm:text-[0.97rem]">
                {block.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div variants={fadeUp} className="mt-8">
        <motion.a
          href="#skill"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--gradient-red-action)] px-5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-strong)] shadow-[inset_0_0_0_1px_var(--color-red-border-strong)] transition duration-200 hover:shadow-[inset_0_0_0_1px_rgba(240,90,104,0.34),0_14px_30px_rgba(132,17,31,0.22)]"
          whileHover={{ y: -2 }}
        >
          Conferir habilidades
        </motion.a>
      </motion.div>
    </motion.article>
  );
};
