"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// ✅ IDs e slugs padronizados com hífen

export const products = [
  {
    id: "bello-futevolei",
    label: "Bello Futevôlei",
    title: "Uma campanha de brilhar os olhos",
    description: `Em parceria com o Instituto Orsi e Bello, um dos maiores nomes do Futevôlei no país, realizamos uma campanha transformadora. O grande prêmio foi um PlayStation 5 folheado a ouro, uma verdadeira joia tecnológica, e uma exclusividade no mercado brasileiro.`,
    image: {
      mobile: "/home/cases/bello-futevolei/mobile.png",
      desktop: "/home/cases/bello-futevolei/desktop.png",
    },
  },
  {
    id: "byd",
    label: "BYD",
    title: "Rumo à UEFA",
    description: `Campanha promocional nacional integrando 87 concessionárias...`,
    image: {
      mobile: "/home/cases/byd/mobile.png",
      desktop: "/home/cases/byd/desktop.png",
    },
  },
  {
    id: "corinthians",
    label: "Corinthians",
    title: "Gol de Sorte",
    description: `Desenvolvemos uma plataforma inovadora em apenas 48 horas...`,
    image: {
      mobile: "/home/cases/corinthians/mobile.png",
      desktop: "/home/cases/corinthians/desktop.png",
    },
  },
  {
    id: "engemon",
    label: "Engemon",
    title: "Construindo um futuro",
    description: `Utilizamos nosso produto Vollu para inovar na área de RH...`,
    image: {
      mobile: "/home/cases/engemon/mobile.png",
      desktop: "/home/cases/engemon/desktop.png",
    },
  },
  {
    id: "studiow",
    label: "Studio W",
    title: "Beleza com recompensa",
    description: `Fizemos uma parceria com o Studio W, renomado salão de beleza, para criar a campanha que engajou clientes por meio de experiências exclusivas e prêmios. A cada serviço realizado, os participantes concorriam ao Tratamento Taylor Made e uma experiência imersiva de beleza, em uma ação impulsionada por tecnologia e inteligência artificial.`,
    image: {
      mobile: "/home/cases/studiow/mobile.png",
      desktop: "/home/cases/studiow/desktop.png",
    },
  },
  {
    id: "sauva",
    label: "Sauva",
    title: "Gire, cole e conquiste seu Volvo",
    description: `Criamos para a Sauva uma campanha gamificada com figurinhas, números da sorte e roleta premiada, com um Volvo zero quilômetro como prêmio.`,
    image: {
      mobile: "/cases/sauva/mobile.png",
      desktop: "/cases/sauva/desktop.png",
    },
  },
  {
    id: "santo-mercado",
    label: "Santo Mercado",
    title: "Sabores da tecnologia",
    description: `O case feito para o Santo Mercado, anteriormente conhecido como Mercado Municipal de Santo Amaro, uniu muita tecnologia e recursos exclusivos disponibilizados pela Dompa. Criamos um hotsite interativo que permitiu que visitantes que realizassem compras acima de um valor definido concorressem a prêmios como cashback, vouchers e experiências VIP.
    
Além disso, com um CRM personalizado, os dados foram gerenciados e segmentados, garantindo eficiência e bons resultados para o cliente.`,
    image: {
      mobile: "/home/cases/santomercado/mobile.png",
      desktop: "/home/cases/santomercado/desktop.png",
    },
  },
  {
    id: "clube-parada",
    label: "Clube Parada",
    title: "Diversidade em conexão",
    description: `Criamos o Clube Parada, uma plataforma de benefícios e pertencimento para a causa LGBTQIAPN+.`,
    image: {
      mobile: "/cases/clube-parada/mobile.png",
      desktop: "/cases/clube-parada/desktop.png",
    },
  },
  {
    id: "ccaa",
    label: "CCAA",
    title: "Aprender e ganhar",
    description: `Campanha promocional integrada que premiou alunos com uma viagem exclusiva.`,
    image: {
      mobile: "/cases/ccaa/mobile.png",
      desktop: "/cases/ccaa/desktop.png",
    },
  },
  {
    id: "massa-fm",
    label: "Massa FM",
    title: "Casa dos sonhos",
    description: `Campanha nacional com grande alcance e emoção, premiando ouvintes com uma casa nova.`,
    image: {
      mobile: "/cases/massa-fm/mobile.png",
      desktop: "/cases/massa-fm/desktop.png",
    },
  },
];

export default function Cases() {
  const [selected, setSelected] = useState("bello-futevolei");
  const activeProduct = products.find((p) => p.id === selected);

  return (
    <section id="cases" className="px-xs py-xxxl desktop:px-giant">
      <h2 id="cases-heading" className="headline-large text-primary-pure">
        Resultados concretos para parceiros de peso
      </h2>

      <div className="desktop:flex desktop:mt-lg">
        <nav
          aria-label="Produtos"
          className="my-lg -mr-xs desktop:mr-none desktop:my-none rounded-button gap-[8px] flex justify-center font-regular title-small desktop:text-xxs desktop:w-max "
        >
          <ul className="flex gap-[8px] text-nowrap overflow-scroll scroll-smooth scrollbar-hide desktop:flex-col desktop:px-[.5rem]">
            {products.map((product) => (
              <li key={product.id}>
                <button
                  className={`p-nano cursor-pointer text-neutral-darker bg-neutral-tinted rounded-nano desktop:w-[172.23px] transition-all duration-300 hover:shadow-level3 active:shadow-none active:bg-neutral-pale ${
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

            <Link
              href={`/cases/${activeProduct?.id.toLowerCase()}`}
              className="w-[128px] min-w-[128px] mt-xs mb-md cursor-pointer py-quark px-xs flex justify-center rounded-button body-large border-hairline border-essence-charcoal transition-all duration-300 hover:bg-neutral-pale hover:text-neutral-deep hover:border-neutral-pale active:shadow-none active:bg-neutral-light group"
            >
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
            </Link>
          </div>

          <div className="w-[288px] h-[328px] desktop:w-[550px] desktop:h-[450px] relative desktop:ml-lg">
            <Image
              className="object-cover w-auto rounded-xs"
              src={activeProduct?.image.desktop ?? ""}
              alt={activeProduct?.label ?? ""}
              sizes="(min-width: 1280px) 1280px, 100vw"
              fill
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
