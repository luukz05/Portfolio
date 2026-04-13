const blocks = [
  {
    label: "Quem sou",
    value:
      "Sou Lucas Vargas, tenho 20 anos e moro em Sorocaba, Sao Paulo. Gosto de transformar ideia em interface, sistema e experiencia com mais clareza do que ruido.",
  },
  {
    label: "Formacao",
    value:
      "Minha base passa por engenharia, desenvolvimento web, mobile e projetos conectados a hardware, o que ampliou minha forma de pensar produto e execucao.",
  },
  {
    label: "Como trabalho",
    value:
      "Atuo entre front-end, full stack, mobile e IoT, sempre buscando consistencia visual, boa estrutura tecnica e uma experiencia final mais bem resolvida.",
  },
  {
    label: "O que valorizo",
    value:
      "Valorizo clareza, colaboracao, aprendizado continuo e decisoes visuais que reforcem o produto em vez de competir com ele.",
  },
  {
    label: "O que busco",
    value:
      "Quero participar de projetos em que produto, usabilidade e execucao importem tanto quanto a tecnologia utilizada.",
  },
];

export const SobreMim = () => {
  return (
    <article className="flex h-full w-full flex-col justify-between rounded-[2rem] bg-[rgba(14,14,16,0.74)] p-7 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:p-9">
      <div>
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-red-soft)]">
          Sobre mim
        </p>

        <div className="mt-8">
          {blocks.map((block, index) => (
            <div
              key={block.label}
              className={`grid gap-4 py-5 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-6 ${
                index === 0 ? "" : "border-t border-[rgba(255,255,255,0.05)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[rgba(209,31,49,0.65)]" />
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-red-soft)]">
                  {block.label}
                </p>
              </div>
              <p className="text-sm leading-8 text-[var(--color-text-mid)] sm:text-[0.97rem]">
                {block.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <a
          href="#skill"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[rgba(209,31,49,0.92)] px-5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-strong)] shadow-[inset_0_0_0_1px_rgba(209,31,49,0.45)] transition duration-200 hover:bg-[rgba(182,26,42,0.96)]"
        >
          Conferir skills
        </a>
      </div>
    </article>
  );
};
