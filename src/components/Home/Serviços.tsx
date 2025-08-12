"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const titles = [
  "Ultra CRM",
  "Cashback",
  "Campanhas Promocionais",
  "Social Listening",
  "e-Commerce",
  "Hotsite Promocional",
  "Análise de Dados e BI",
  "Inteligência Artificial",
];

const descriptions = [
  "Analisa dados e cria ações personalizadas. No Vollu, ajudou a segmentar usuários, aumentando engajamento e resultados em campanhas.",
  "Fidelize clientes com benefícios reais, incentivando compras e aumentando o engajamento - devolvendo parte do valor gasto ao cliente.",
  "Engajamento que transforma. Sorteios, promoções e prêmios feitos sob medida para o sucesso da sua marca.",
  "Entenda seu público e antecipe tendências. Monitore redes sociais para capturar opiniões, identificar tendências e fortalecer sua marca.",
  "Simplifique suas vendas e fidelize clientes. Uma solução completa para campanhas promocionais e vendas recorrentes.",
  "Conexão única entre marcas e público. Potencialize suas campanhas com páginas exclusivas, interativas e estratégicas.",
  "Decisões inteligentes baseadas em dados. Transforme informações em estratégias com relatórios precisos e dashboards personalizados.",
  "Transformando dados em decisões estratégicas. Automação inteligente e análises avançadas para resultados precisos.",
];

const links = [
  "/servicos/ultra-crm",
  "/servicos/cashback",
  "/servicos/campanhas-promocionais",
  "/servicos/social-listening",
  "/servicos/e-commerce",
  "/servicos/hotsite-promocional",
  "/servicos/analise-de-dados",
  "/servicos/inteligencia-artificial",
];

export default function Serviços() {
  return (
    <section id="servicos" className="py-xxxl bg-tertiary-tinted">
      <p className="headline-medium text-primary-pure mb-lg desktop:text-lg !pl-xs desktop:!pl-giant">
        Especialistas em fazer acontecer
      </p>

      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        breakpoints={{
          1280: {
            spaceBetween: 32,
          },
        }}
        slidesPerView={"auto"}
        className="!px-xs desktop:!px-giant cursor-grab"
      >
        {titles.map((title, idx) => {
          const fileName = idx === 0 ? "Imagem.gif" : `Imagem (${idx}).gif`;
          return (
            <SwiperSlide key={idx} className="!w-[256px] py-[.5rem]">
              <Link href={links[idx]}>
                <article
                  className={`flex flex-col text-start p-xs bg-essence-ivory w-[256px] h-[320px] rounded-xs border border-neutral-pale duration-300 transition-all hover:bg-neutral-tinted active:bg-neutral-pale hover:shadow-level3 cursor-pointer ${
                    idx === 7 && "pr-xs"
                  }`}
                >
                  <Image
                    src={`/home/servicosGif/${fileName}`}
                    alt={title}
                    width={100}
                    height={100}
                    unoptimized
                  />
                  <h3 className="title-large text-primary-deepest">{title}</h3>
                  <p className="body-large text-neutral-muted text-charcoal">
                    {descriptions[idx]}
                  </p>
                </article>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
