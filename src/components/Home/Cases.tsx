"use client";

import Image from "next/image";
import React, { useState } from "react";

const products = [
  {
    id: "BelloFuteVolei",
    label: "Bello FuteVolei",
    title: "Uma campanha de brihar os olhos",
    description:
      "Em parceria com o Instituto Orsi e Bello, um dos maiores nomes do Futevôlei no país, realizamos uma campanha transformadora. O grande prêmio foi um PlayStation 5 folheado a ouro, uma verdadeira joia tecnológica, e uma exclusividade no mercado brasileiro. Essa campanha não apenas atraiu a atenção dos participantes, mas também reforçou o nosso posicionamento como uma empresa que entrega possibilidades únicas e surpreendentes.",
    image: {
      mobile: "/home/cases/Mobile.png",
      desktop: "/home/cases/Desktop.png",
    },
  },
  {
    id: "vollu",
    label: "BYD",
    title: "Vollu transforma dados em campanhas certeiras",
    description:
      "Com tecnologia de ponta e análise precisa, o Vollu identifica padrões de consumo e personaliza a comunicação da sua marca com os usuários. Resultados reais e campanhas de alto impacto.",
    image: {
      mobile: "/home/cases/Mobile.png",
      desktop: "/home/cases/Desktop.png",
    },
  },
  {
    id: "corp",
    label: "Corinthians",
    title: "Soluções corporativas personalizadas",
    description:
      "O Dompa Corp conecta empresas às melhores soluções em engajamento, campanhas promocionais e dados inteligentes. Tudo com segurança, escala e tecnologia proprietária.",
    image: {
      mobile: "/home/cases/Mobile.png",
      desktop: "/home/cases/Desktop.png",
    },
  },
  {
    id: "BYD",
    label: "Engemon",
    title: "Campanhas promocionais com resultado",
    description:
      "O Dompa Promo é especialista em criar campanhas de incentivo, sorteios e promoções com alto impacto, compliance e criatividade. Feito sob medida para sua marca.",
    image: {
      mobile: "/home/cases/Mobile.png",
      desktop: "/home/cases/Desktop.png",
    },
  },
  {
    id: "Engemon",
    label: "Promo",
    title: "Campanhas promocionais com resultado",
    description:
      "O Dompa Promo é especialista em criar campanhas de incentivo, sorteios e promoções com alto impacto, compliance e criatividade. Feito sob medida para sua marca.",
    image: {
      mobile: "/home/cases/Mobile.png",
      desktop: "/home/cases/Desktop.png",
    },
  },
  {
    id: "StudioW",
    label: "Promo",
    title: "Campanhas promocionais com resultado",
    description:
      "O Dompa Promo é especialista em criar campanhas de incentivo, sorteios e promoções com alto impacto, compliance e criatividade. Feito sob medida para sua marca.",
    image: {
      mobile: "/home/cases/Mobile.png",
      desktop: "/home/cases/Desktop.png",
    },
  },
];

export default function Cases() {
  const [selected, setSelected] = useState("BelloFuteVolei");
  const activeProduct = products.find((p) => p.id === selected);

  return (
    <section className="px-xs py-xxxl desktop:px-giant">
      <h2 id="cases-heading" className="headline-large text-primary-pure">
        Resultados concretos para parceiros de peso
      </h2>

      <div className="desktop:flex desktop:mt-lg">
        <nav
          aria-label="Produtos"
          className="my-lg -mr-xs desktop:mr-none desktop:my-none rounded-button gap-[8px] flex justify-center font-regular title-small desktop:text-sm desktop:w-max "
        >
          <ul className="flex gap-[8px] text-nowrap overflow-scroll scroll-smooth scrollbar-hide desktop:flex-col">
            {products.map((product) => (
              <li key={product.id}>
                <button
                  className={`p-nano desktop:px-xs cursor-pointer text-neutral-darker bg-neutral-tinted rounded-button desktop:w-[172.23px] ${
                    selected === product.id ? " text-primary-pure bold" : ""
                  }`}
                  onClick={() => setSelected(product.id)}
                >
                  {product.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <article className="flex flex-col desktop:flex-row-reverse items-center">
          <div className="max-w-[508px] desktop:my-auto desktop:ml-md">
            <span className="rounded-pill bg-primary-pure px-nano py-quark text-essence-ivory title-small">
              {activeProduct?.label}
            </span>
            <h3 className="title-large my-nano">{activeProduct?.title}</h3>
            <p className="body-large">{activeProduct?.description}</p>

            <button className="w-[128px] min-w-[128px] mt-xs mb-md cursor-pointer py-quark px-xs flex justify-center rounded-button body-large border-hairline border-essence-charcoal">
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
          <div className="w-[288px] h-[328px] desktop:w-[550px] desktop:h-[450px] relative desktop:ml-lg">
            <picture className="absolute top-0 left-0 w-full h-full">
              <source
                media="(min-width: 1280px)"
                srcSet={activeProduct?.image.desktop}
              />
              <source
                media="(min-width: 300px)"
                srcSet={activeProduct?.image.mobile}
              />
              <Image
                className=" desktop:mt-none object-cover w-auto rounded-xs"
                src={`${activeProduct?.image.mobile}`}
                alt={`${activeProduct?.label}`}
                sizes="(min-width: 1280px) 1280px, 100vw"
                fill
              />
            </picture>
          </div>
        </article>
      </div>
    </section>
  );
}
