import Image from "next/image";
import React from "react";

export interface ServicoSectionFiveProps {
  heading: string;
  challenge: string;
  solution: string;
  highlightPercentage: string;
  highlightLabel: string;
  imageMobile: string;
  imageDesktop: string;
  imageAlt: string;
}

export default function ServicoSectionFive({
  heading,
  challenge,
  solution,
  highlightPercentage,
  highlightLabel,
  imageMobile,
  imageDesktop,
  imageAlt,
}: ServicoSectionFiveProps) {
  return (
    <section className="py-xxxl px-xs desktop:p-giant flex flex-wrap justify-between items-center">
      <div className="flex flex-col gap-[16px] max-w-[518px]">
        <h2 className="text-primary-pure headline-medium">{heading}</h2>
        <div className="body-large text-essence-charcoal rounded-xs p-xs border border-primary-pale">
          <p>
            <span className="bold">Desafio:</span> {challenge}
          </p>
        </div>
        <div className="body-large text-essence-ivory bg-primary-pure rounded-xs p-xs border border-primary-pale">
          <p>
            <span className="bold">Solução:</span> {solution}
          </p>
        </div>
        <div className="border-l-thick border-primary-pale px-xs">
          <span className="headline-large mb-nano text-primary-pure">
            {highlightPercentage}
          </span>
          <p className="body-large text-neutral-deep">{highlightLabel}</p>
        </div>
      </div>
      <div className="w-[288px] h-[243px] desktop:w-[636px] desktop:h-[446px] relative mt-md desktop:mt-none desktop:ml-md rounded-md">
        <picture className="absolute top-0 left-0 w-full h-full">
          <source media="(min-width: 1280px)" srcSet={imageDesktop} />
          <source media="(min-width: 300px)" srcSet={imageMobile} />
          <Image
            className="desktop:mt-none object-cover w-auto rounded-md shadow-level3"
            src={imageMobile}
            alt={imageAlt}
            sizes="(min-width: 1280px) 1280px, 100vw"
            fill
          />
        </picture>
      </div>
    </section>
  );
}
