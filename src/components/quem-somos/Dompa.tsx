import Image from "next/image";
import React from "react";

export default function Dompa() {
  return (
    <section className="bg-gradient-to-r from-primary-deep to-primary-pure px-xs py-xxxl desktop:px-giant desktop:flex justify-center items-center">
      <figure className="bg-primary-tinted rounded-xs p-xs min-w-[80px] min-h-[80px] h-[80px] w-[80px] desktop:w-[200px] desktop:h-[200px] flex justify-center items-center">
        <picture className="relative w-[42.9483px] h-[23.9994px] desktop:w-[128px] desktop:h-[72px]">
          <source media="(min-width: 62em)" srcSet="/home/DompaInfinite.svg" />
          <source
            media="(min-width: 37.5em)"
            srcSet="/home/DompaInfiniteDesk.svg"
          />
          <Image
            src="/home/DompaInfinite.svg"
            alt="Dompa Infinite"
            priority
            fill
            className="object-cover"
          />
        </picture>
      </figure>

      <p className="headline-small text-essence-ivory my-lg desktop:my-none desktop:ml-xxl max-w-[768px]">
        A Dompa nasceu em 2020, com o espírito inovador de uma startup
        determinada a transformar o mercado de campanhas promocionais no Brasil,
        um setor gigante e culturalmente forte, mas carente de inovação e
        marcado pela burocracia. Fundada e construída por pessoas apaixonados
        por tecnologia e marketing, a Dompa foi criada para atender à crescente
        demanda por soluções completas, seguras e tecnológicas, redefinindo os
        padrões do setor.
      </p>
    </section>
  );
}
