import Image from "next/image";
import React from "react";

export interface ServicoSectionFourCard {
  icon: string;
  title: string;
  description: string;
}

interface ServicoSectionFourProps {
  heading: string;
  cards: ServicoSectionFourCard[];
}

export default function ServicoSectionFour({
  heading,
  cards,
}: ServicoSectionFourProps) {
  return (
    <section className="py-xxxl bg-tertiary-tinted px-xs desktop:px-giant">
      <p className="headline-medium text-primary-pure mb-lg desktop:text-lg">
        {heading}
      </p>
      <div className="flex flex-wrap justify-center desktop:justify-start gap-[24px]">
        {cards.map((item, index) => (
          <article
            key={index}
            className="bg-essence-ivory flex flex-col text-start p-xs max-w-[288px] desktop:max-w-[306px] desktop:h-[208px] border border-neutral-pale rounded-xs"
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={40}
              height={40}
              unoptimized
            />
            <h3 className="title-large text-primary-deepest my-nano">
              {item.title}
            </h3>
            <p className="body-large text-neutral-muted text-charcoal">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
