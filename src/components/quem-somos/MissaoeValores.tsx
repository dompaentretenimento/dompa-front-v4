import Image from "next/image";
import React from "react";

const values = [
  {
    title: "Jogo limpo",
    description:
      "Agimos com ética e clareza. A confiança está no centro de tudo o que fazemos, e a transparência é nossa regra de ouro.",
  },
  {
    title: "Bora resolver",
    description:
      "Somos movidos por atitude! Arregaçamos as mangas, encaramos desafios e entregamos resultados que",
  },
  {
    title: "Todo mundo junto",
    description:
      "Aqui ninguém cresce sozinho. Trabalhamos em equipe, ouvindo, apoiando e somando forças para alcançar o sucesso.",
  },
  {
    title: "Faz Sentido? Faz Diferença!",
    description:
      "Cada passo é pensado para criar impacto real. Nossa bússola é o propósito e a vontade de fazer.",
  },
  {
    title: "Na Base dos Dados",
    description:
      "Nada de achismos! Nossas decisões são guiadas por dados, garantindo precisão e inteligência.",
  },
  {
    title: "Menos Ego, mais Resultado",
    description:
      "Focar no que importa: resolver problemas, comprometimento com a excelência em tudo o que fazemos.",
  },
];

export default function MissaoeValores() {
  return (
    <section className="py-xxxl bg-tertiary-tinted px-xs desktop:px-giant">
      <p className="headline-medium text-primary-pure mb-lg desktop:text-lg">
        Especialistas em fazer acontecer
      </p>
      <div className="flex flex-wrap justify-center desktop:justify-start gap-[32px]">
        <article
          className={`flex flex-col text-start p-xs bg-essence-ivory max-w-[288px] desktop:max-w-[632px] h-[320px] desktop:max-h-[256px] rounded-xs`}
        >
          <Image
            src={`/home/servicosGif/Imagem (6).gif`}
            alt={"gif"}
            width={100}
            height={100}
            unoptimized
          />
          <h3 className="title-large text-primary-deepest desktop:my-nano">
            Nossa Missão
          </h3>
          <p className="body-large text-neutral-muted text-charcoal desktop:max-w-[95%]">
            Abrir as portas das campanhas promocionais para todo mundo.{" "}
            <br className=" desktop:hidden flex" />{" "}
            <br className=" desktop:hidden flex" /> Criar soluções sob medida e
            transformar dados em ideias que fazem a diferença.
          </p>
        </article>
        <article
          className={`flex flex-col text-start p-xs bg-essence-ivory max-w-[288px] desktop:max-w-[632px] h-[320px] desktop:max-h-[256px] rounded-xs`}
        >
          <Image
            src={`/quem-somos/gif/Eye.gif`}
            alt={"gif"}
            width={100}
            height={100}
            unoptimized
          />
          <h3 className="title-large text-primary-deepest desktop:my-nano">
            Nossa Visão
          </h3>
          <p className="body-large text-neutral-muted text-charcoal max-w-[95%]">
            Revolucionar o mundo das campanhas promocionais com soluções
            inovadoras, acessíveis e completas, abrindo novas portas para
            negócios com dados que realmente fazem acontecer.
          </p>
        </article>
      </div>

      <div className="flex flex-wrap desktop:flex-nowrap desktop:justify-between text-start p-xs bg-essence-ivory rounded-xs mt-lg max-w-[1296px]">
        <div className="desktop:flex flex-col justify-center">
          <Image
            src={`/quem-somos/gif/Eye.gif`}
            alt={"gif"}
            width={100}
            height={100}
            unoptimized
          />
          <h2 className="mb-md desktop:mb-none desktop:mr-md title-large desktop:text-nowrap">
            Nossos Valores
          </h2>
        </div>
        <div className="flex flex-wrap gap-[16px] desktop:justify-end">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col p-xs border rounded-xs gap-[8px] max-w-[352px]"
            >
              <h3 className="title-medium">{value.title}</h3>
              <p className="body-large">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
