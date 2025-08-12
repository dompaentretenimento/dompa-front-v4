"use client";

import Image from "next/image";
import React, { useState } from "react";
import HeaderProdutos from "../SubComponents/HeaderProducts";
import Link from "next/link";

const products = [
  {
    id: "fazla",
    label: "Faz lá",
    title:
      "Sonhos que se tornam realidade com benefícios, promoções e experiências únicas",
    description:
      "O Faz Lá é um clube de benefícios que conecta milhares de descontos, experiências únicas e campanhas promocionais, tudo no mesmo ambiente! Oferecemos planos mensal, anual e vitalício, permitindo com que o consumidor escolha a melhor opção para aproveitar tudo o que o Faz Lá tem a oferecer.",
    stats: [
      { label: "Usuários", value: "39.673" },
      { label: "Influenciadores", value: "12" },
    ],
    image: {
      mobile: "/home/produtos/fazla/mobile.png",
      desktop: "/home/produtos/fazla/desktop.png",
    },
  },
  {
    id: "vollu",
    label: "Vollu",
    title: "Autoconhecimento e inovação se encontram para te premiar",
    description:
      "O Vollu é uma plataforma única que combina gamificação com autoconhecimento, oferecendo experiências interativas e recompensadoras. Ideal tanto para pessoas que buscam se conhecer melhor quanto para empresas que desejam transformar treinamentos, campanhas internas e ações de engajamento em iniciativas dinâmicas e impactantes.",
    stats: [
      { label: "Usuários", value: "11.456" },
      { label: "Influencers", value: "16" },
    ],
    image: {
      mobile: "/home/produtos/vollu/mobile.png",
      desktop: "/home/produtos/vollu/desktop.png",
    },
  },
  {
    id: "corp",
    label: "Corp",
    prefix: "Dompa",
    title: "Um universo tecnológico pronto para auxiliar sua empresa",
    description:
      "A Dompa Corp é referência em soluções tecnológicas para campanhas promocionais, oferecendo uma plataforma completa e integrada que transforma ideias em resultados. Utilizamos ferramentas avançadas, inteligência artificial e estratégias personalizadas para garantir o sucesso de cada ação.",
    stats: [
      { label: "Usuários", value: "23.456" },
      { label: "Influencers", value: "45" },
    ],
    image: {
      mobile: "/home/produtos/corp/mobile.png",
      desktop: "/home/produtos/corp/desktop.png",
    },
  },
  {
    id: "promo",
    label: "Promo",
    prefix: "Dompa",
    title: "Soluções completas e inovadoras para seu negócios",
    description:
      "Dompa Promo foi criado para atender empresas de todos os segmentos e tamanhos, oferecendo soluções completas e eficientes para campanhas promocionais. Com foco em alinhar o núcleo de negócios às estratégias de marketing, desenvolvemos ações personalizadas que engajam públicos e fortalecem marcas.",
    stats: [
      { label: "Usuários", value: "36.978" },
      { label: "Influencers", value: "56" },
    ],
    image: {
      mobile: "/home/produtos/promo/mobile.png",
      desktop: "/home/produtos/promo/desktop.png",
    },
  },
];

export default function Produtos() {
  const [selected, setSelected] = useState("fazla");
  const activeProduct = products.find((p) => p.id === selected);

  return (
    <section
      id="produtos"
      aria-labelledby="produtos-heading"
      className="bg-primary-pure text-essence-ivory px-xs py-xxxl desktop:p-giant"
    >
      <h2
        id="produtos-heading"
        className="headline-medium tablet:text-center desktop:text-lg"
      >
        Soluções inteligentes para desafios reais
      </h2>
      <HeaderProdutos
        products={products}
        selected={selected}
        setSelected={setSelected}
      />
      <article className="flex flex-wrap flex-row-reverse justify-center">
        <div className="max-w-[508px] desktop:my-auto desktop:ml-md">
          <h3 className="title-large mb-nano">{activeProduct?.title}</h3>
          <p className="body-large">{activeProduct?.description}</p>
          <div className="my-xs px-nano desktop:px-xs py-xs flex gap-[32px] border rounded-nano bg-primary-dark max-w-[295px]">
            {activeProduct?.stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col 
                  border-l-thick pl-xs
                }`}
              >
                <span className="headline-medium">{stat.value}</span>
                <span className="body-large">{stat.label}</span>
              </div>
            ))}
          </div>
          <Link href={`/produtos/${activeProduct?.id}`}>
            <button className="w-[128px] min-w-[128px] cursor-pointer py-quark px-xs flex justify-center rounded-button body-large border-hairline border-essence-ivory transition-all duration-300 hover:bg-neutral-pale hover:text-neutral-deep hover:border-neutral-pale active:shadow-none active:bg-neutral-light group">
              <div className="flex text-nowrap">
                <p className="mr-nano">Ler mais</p>
                <Image
                  width={24}
                  height={24}
                  alt="arrow"
                  src="/home/ArrowRight.svg"
                  style={{ width: "24px", height: "24px" }}
                  className="invert group-hover:invert-0"
                />
              </div>
            </button>
          </Link>
        </div>
        <div className="w-[288px] h-[356px] desktop:w-[636px] desktop:h-[446px] relative">
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
              className="mt-md desktop:mt-none object-cover w-auto"
              src={`${activeProduct?.image.mobile}`}
              alt={`${activeProduct?.label}`}
              sizes="(min-width: 1280px) 1280px, 100vw"
              fill
            />
          </picture>
        </div>
      </article>
    </section>
  );
}
