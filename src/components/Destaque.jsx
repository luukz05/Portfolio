import TechTag from "./Tag";

const highlights = [
  {
    label: "Papel",
    value: "App mobile, integracao com backend e trabalho direto com ESP32.",
  },
  {
    label: "Sistema",
    value: "React Native, Node.js, sensores e resposta em tempo real.",
  },
  {
    label: "Impacto",
    value: "Seguranca domestica, alerta rapido e potencial social real.",
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
}) {
  return (
    <div
      className={`group bg-[rgba(245,245,245,0.97)] p-3 text-neutral-900 shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.03] ${className} ${frameClassName}`}
    >
      <div className="overflow-hidden rounded-[0.2rem] bg-black">
        <img src={src} alt={alt} className={`w-full object-cover ${imageClassName}`} />
      </div>
      <p className="px-2 pb-1 pt-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-neutral-700">
        {caption}
      </p>
    </div>
  );
}

export const Destaque = ({ groupPhoto, prototypePhoto, logoCard }) => {
  return (
    <div className="showcase-grid">
      <div className="relative flex min-h-[40rem] items-center justify-center">
        <div className="absolute inset-0 rounded-[2rem] bg-[rgba(255,255,255,0.02)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" />

        <div className="relative h-full w-full">
          <PolaroidCard
            src={groupPhoto}
            alt="Equipe do projeto DVGC"
            caption="Apresentacao do projeto"
            className="absolute left-[3%] top-[4%] z-10 w-[64%] rotate-[-4deg]"
            frameClassName="[clip-path:polygon(2%_1%,100%_0,98%_99%,0_100%)]"
            imageClassName="aspect-[16/10]"
          />

          <PolaroidCard
            src={prototypePhoto}
            alt="Prototipo do DVGC"
            caption="Prototipo fisico"
            className="absolute bottom-[5%] left-[8%] z-20 w-[32%] rotate-[-2deg]"
            imageClassName="aspect-[4/3]"
          />

          <PolaroidCard
            src={logoCard}
            alt="Identidade visual do DVGC"
            caption="Identidade do app"
            className="absolute right-[5%] top-[18%] z-30 w-[30%] rotate-[5deg]"
            imageClassName="aspect-[6/5]"
          />
        </div>
      </div>

      <article className="flex h-full flex-col justify-between rounded-[2rem] bg-[rgba(14,14,16,0.74)] p-7 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:p-9">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-red-soft)]">
            DVGC / Smart Cities
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[var(--color-text-strong)]">
            Detector de Vazamento de Gas
          </h3>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--color-text-muted)] sm:text-base">
            O DVGC nasceu como um sistema completo para detectar vazamentos de
            GLP e alertar o usuario em tempo real. Foi o projeto em que produto,
            software, hardware e interface realmente precisaram operar como uma
            unica experiencia.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] bg-[rgba(255,255,255,0.03)] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
              >
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-red-soft)]">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-mid)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-[rgba(209,31,49,0.08)] px-5 py-4 text-sm leading-7 text-[var(--color-text-mid)] shadow-[inset_0_0_0_1px_rgba(209,31,49,0.08)]">
            O projeto ficou entre os selecionados para bootcamps e treinamentos
            com o SEBRAE, destacando potencial de impacto social e inovacao.
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </article>
    </div>
  );
};
