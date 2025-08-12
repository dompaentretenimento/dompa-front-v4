import Image from "next/image";
import React from "react";
import { productsData, ProductData } from "@/data/productsData";

interface ProdutosSectionTwoProps {
  productId: string;
}

export default function ProdutosSectionTwo({
  productId,
}: ProdutosSectionTwoProps) {
  const product: ProductData | undefined = productsData[productId];

  if (!product) return null;

  return (
    <section className="py-xxxl px-xs desktop:p-giant desktop:flex desktop:justify-between desktop:flex-row-reverse desktop:items-center">
      <div className="max-w-[518px] desktop:mr-[119px]">
        <h2 className="headline-medium desktop:text-xl text-primary-pure mb-xs">
          {product.sectionTwo?.heading || "Para Influenciadores"}
        </h2>
        <p className="body-large text-essence-charcoal">
          {product.sectionTwo?.description ||
            `O ${product.title} transforma a influência de personalidades em experiências inesquecíveis para a audiência.`}
        </p>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="w-[288px] h-[356px] desktop:w-[635px] desktop:h-[414px] relative z-1 mt-md desktop:mt-none">
          <picture className="absolute top-0 left-0 w-full h-full">
            <source
              media="(min-width: 1280px)"
              srcSet={product.images.contentDesktop ?? product.images.desktop}
            />
            <source
              media="(min-width: 300px)"
              srcSet={product.images.contentMobile ?? product.images.mobile}
            />
            <Image
              className="mt-md desktop:mt-none object-cover w-auto"
              src={product.images.contentMobile ?? product.images.mobile}
              alt={`Imagem do conteúdo do produto ${product.title}`}
              sizes="(min-width: 1280px) 1280px, 100vw"
              fill
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
