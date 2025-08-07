import Image from "next/image";
import React from "react";

const logos = ["Polinize", "Saladanoticia", "Valor", "Uol"];

const newsItems = [
  {
    title:
      "Você não sabe, mas estes golpes usam IA para enganar você; aprenda a evitar",
    description:
      "Da ligação à mensagem de texto via WhatsApp, os golpes financeiros vêm se aperfeiçoando a cada dia. E a nova abordagem da vez é usar IA (Inteligência Artificial) para ludibriar as vítimas, já que a estratégia dá uma cara mais profissional às fraudes",
  },
  {
    title:
      "Dompa anuncia lançamento de aplicativo de gamificação que visa premiar usuários em",
    description:
      "A Dompa, primeira plataforma 360 no Brasil com objetivo de revolucionar o segmento de sorteios legais por meio de Inteligência Artificial, anuncia o lançamento do seu novo",
  },
  {
    title: "Oito dicas para organizar sorteios bem-sucedidos",
    description:
      "A prática de sorteios online popularizou-se nas redes sociais, não apenas como meio de promover produtos, mas também como uma estratégia eficaz para envolver os usuários. Nesse contexto, compreender as leis e adotar práticas transparentes, em conformidade com as normas vigentes, torna-se essencial para assegurar o sucesso de um sorteio.",
  },
];

export default function News() {
  return (
    <section className="py-xxxl px-xs desktop:px-giant bg-tertiary-tinted text-essence-charcoal">
      <div className="mb-lg flex flex-wrap justify-between items-center">
        <h2 className="headline-medium desktop:text-lg mb-xs desktop:mb-none text-primary-pure">
          Notícia boa se espalha: Dompa na Mídia
        </h2>

        <div className="flex gap-[24px]">
          {logos.map((logo, index) => (
            <picture key={index} className="relative">
              <source
                media="(min-width: 1280px)"
                srcSet={`/home/news/logos/${logo}Desktop.png`}
              />
              <source
                media="(min-width: 300px)"
                srcSet={`/home/news/logos/${logo}Mobile.png`}
              />
              <img
                src={`/home/news/logos/${logo}Mobile.png`}
                alt={`Logo ${logo}`}
                width={54}
                height={19}
                className="desktop:w-full"
              />
            </picture>
          ))}
        </div>
      </div>

      <div className="flex justify-center desktop:justify-start flex-wrap gap-[24px]">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-essence-ivory rounded-nano w-[288px] desktop:w-[416px] border-1 border-tertiary-pale"
          >
            <div className="w-[288px] h-[256px] desktop:w-[416px] desktop:h-[256px] relative">
              <picture className="absolute top-0 left-0 w-full h-full">
                <source
                  media="(min-width: 1280px)"
                  srcSet={`/home/news/News${
                    index === 0 ? "" : index
                  }Desktop.png`}
                />
                <source
                  media="(min-width: 300px)"
                  srcSet={`/home/news/News${
                    index === 0 ? "" : index
                  }Mobile.png`}
                />
                <Image
                  className="desktop:mt-none object-cover w-auto rounded-nano"
                  src={`/home/news/News${index === 0 ? "" : index}Mobile.png`}
                  alt={`Notícia ${index + 1}`}
                  sizes="(min-width: 1280px) 1280px, 100vw"
                  fill
                />
              </picture>
            </div>
            <div className="p-xs">
              <h2 className="line-clamp-2 title-large">{item.title}</h2>
              <p className="line-clamp-2 body-large text-neutral-darker pt-nano">
                {item.description}
              </p>
              <button className="w-[128px] min-w-[128px] mt-xs cursor-pointer py-quark px-xs flex justify-center rounded-button body-large border-hairline border-essence-charcoal">
                <div className="flex text-nowrap">
                  <p className="mr-nano">Ler mais</p>
                  <Image
                    width={24}
                    height={24}
                    alt="arrow"
                    src="/home/ArrowRight.svg"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
