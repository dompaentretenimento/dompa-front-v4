"use client";

import Image from "next/image";
import React, { useState } from "react";
import HeaderProdutos from "../SubComponents/HeaderProducts";

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
      mobile: "/home/produtos/Mobile.png",
      desktop: "/home/produtos/Desktop.png",
    },
  },
  {
    id: "vollu",
    label: "Vollu",
    title: "Vollu transforma dados em campanhas certeiras",
    description:
      "Com tecnologia de ponta e análise precisa, o Vollu identifica padrões de consumo e personaliza a comunicação da sua marca com os usuários. Resultados reais e campanhas de alto impacto.",
    stats: [
      { label: "Campanhas", value: "150+" },
      { label: "Conversão", value: "87%" },
    ],
    image: {
      mobile: "/home/produtos/Mobile.png",
      desktop: "/home/produtos/Desktop.png",
    },
  },
  {
    id: "corp",
    label: "Corp",
    prefix: "Dompa",
    title: "Soluções corporativas personalizadas",
    description:
      "O Dompa Corp conecta empresas às melhores soluções em engajamento, campanhas promocionais e dados inteligentes. Tudo com segurança, escala e tecnologia proprietária.",
    stats: [
      { label: "Clientes B2B", value: "50+" },
      { label: "Satisfação", value: "98%" },
    ],
    image: {
      mobile: "/home/produtos/Mobile.png",
      desktop: "/home/produtos/Desktop.png",
    },
  },
  {
    id: "promo",
    label: "Promo",
    prefix: "Dompa",
    title: "Campanhas promocionais com resultado",
    description:
      "O Dompa Promo é especialista em criar campanhas de incentivo, sorteios e promoções com alto impacto, compliance e criatividade. Feito sob medida para sua marca.",
    stats: [
      { label: "Campanhas", value: "200+" },
      { label: "Marcas atendidas", value: "70+" },
    ],
    image: {
      mobile: "/home/produtos/Mobile.png",
      desktop: "/home/produtos/Desktop.png",
    },
  },
];

export default function Produtos() {
  const [selected, setSelected] = useState("fazla");
  const activeProduct = products.find((p) => p.id === selected);

  return (
    <section
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
          <button className="w-[128px] min-w-[128px] cursor-pointer py-quark px-xs flex justify-center rounded-button body-large border-hairline border-essence-ivory">
            <div className="flex text-nowrap">
              <p className="mr-nano">Ler mais</p>
              <Image
                width={24}
                height={24}
                alt="arrow"
                src="/home/ArrowRight.svg"
                style={{ width: "24px", height: "24px" }}
                className="invert"
              />
            </div>
          </button>
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
