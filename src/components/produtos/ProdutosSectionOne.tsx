import Image from "next/image";
import Link from "next/link";
import React from "react";
import { productsData, ProductData } from "@/data/productsData";

interface ProdutosSectionOneProps {
  productId: string;
}

export default function ProdutosSectionOne({
  productId,
}: ProdutosSectionOneProps) {
  const product: ProductData | undefined = productsData[productId];

  if (!product) {
    return null;
  }

  return (
    <section className="bg-tertiary-tinted py-xxxl px-xs desktop:p-giant flex flex-wrap justify-between desktop:items-center">
      <div>
        <h2 className="text-primary-pure headline-medium desktop:text-lg desktop:leading-xl">
          {product.sectionOne?.heading}
        </h2>
        <p className="max-w-[518px] text-essence-charcoal body-large mt-xs">
          {product.sectionOne?.description}
        </p>
        <div className="my-xs px-nano desktop:px-xs py-xs flex gap-[32px] border rounded-nano bg-primary-dark text-essence-ivory max-w-[295px] desktop:hidden">
          {product.stats.map((stat, i) => (
            <div key={i} className="flex flex-col border-l-thick pl-xs">
              <span className="headline-medium">{stat.value}</span>
              <span className="body-large">{stat.label}</span>
            </div>
          ))}
        </div>
        <Link
          target="_blank"
          href={product.sectionOne?.url as string}
          className="w-max rounded-button py-quark px-xs text-primary-pure title-medium border-hairline border-primary-pure hidden desktop:flex desktop:mt-xs hover:bg-primary-pale hover:shadow-level3 active:shadow-none active:bg-primary-soft  transition-all duration-300"
        >
          Acesse o site
          <Image
            src="/cases/ArrowUp.svg"
            alt="Seta para cima"
            width={24}
            height={24}
            className="ml-nano"
          />
        </Link>
      </div>
      <div className="relative desktop:flex-1 desktop:flex desktop:justify-end desktop:items-end desktop:mr-[3rem]">
        <div className="hidden desktop:flex border border-primary-deepest rounded-circular w-[382px] h-[184px] absolute top-1/2 -translate-y-1/2 z-1 right-[-4.5rem] -rotate-45" />
        <div className="w-[288px] h-[323px] desktop:w-[220px] desktop:h-[446px] relative z-1">
          <picture className="absolute top-0 left-0 w-full h-full">
            <source
              media="(min-width: 1280px)"
              srcSet={product.images.desktop}
            />
            <source media="(min-width: 300px)" srcSet={product.images.mobile} />
            <Image
              className="mt-md desktop:mt-none object-cover w-auto"
              src={product.images.mobile}
              alt={`Imagem do produto ${product.title}`}
              sizes="(min-width: 1280px) 1280px, 100vw"
              fill
            />
          </picture>
        </div>
        <div className="desktop:py-[43px] desktop:pl-[48px] hidden desktop:flex desktop:items-center justify-start desktop:absolute desktop:top-1/2 desktop:-translate-y-1/2 gap-[32px] border rounded-pill bg-primary-dark text-essence-ivory desktop:w-[636px] desktop:right-[-3rem]">
          <div
            className={`flex flex-col 
                  border-l-thick pl-xs`}
          >
            <span className="headline-medium">{product.stats[0].value}</span>
            <span className="body-large">{product.stats[0].label}</span>
          </div>
          <div
            className={`flex flex-col 
                  border-l-thick pl-xs`}
          >
            <span className="headline-medium">{product.stats[1].value}</span>
            <span className="body-large">{product.stats[1].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
