import Image from "next/image";
import React from "react";

export interface ServicoSectionTwoCard {
  icon: string;
  title: string;
  description: string;
}

interface ServicoSectionTwoProps {
  cards: ServicoSectionTwoCard[];
}

export default function ServicoSectionTwo({ cards }: ServicoSectionTwoProps) {
  return (
    <section className="py-xxxl bg-essence-ivory px-xs desktop:px-giant">
      <p className="headline-medium text-primary-pure mb-lg desktop:text-lg">
        Especialistas em fazer acontecer
      </p>
      <div className="flex flex-wrap justify-center desktop:justify-start gap-[32px]">
        {cards.map((item, index) => (
          <article
            key={index}
            className="flex flex-col text-start p-xs max-w-[288px] desktop:max-w-[233px] h-[216px] desktop:h-[264px] border border-neutral-pale rounded-xs"
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={40}
              height={40}
              unoptimized
            />
            <h3 className="title-large text-primary-deepest mb-nano mt-xs">
              {item.title}
            </h3>
            <p className="body-large text-neutral-muted text-charcoal max-w-[95%]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
