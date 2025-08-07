import Image from "next/image";
import React from "react";

export default function SaibaMais() {
  return (
    <section className="bg-gradient-to-r from-primary-deep to-primary-pure px-xs py-xxxl desktop:px-giant desktop:flex justify-center items-center">
      <figure className="bg-primary-tinted rounded-xs p-xs min-w-[80px] min-h-[80px] h-[80px] w-[80px] flex justify-center items-center">
        <Image
          src="/home/DompaInfinite.svg"
          alt="Dompa Infinite"
          width={48}
          height={48}
          style={{ width: "48px", height: "48px" }}
        />
      </figure>

      <p className="headline-medium text-essence-ivory my-lg desktop:my-none desktop:mx-lg">
        A Dompa nasceu em 2020, com o espírito inovador de uma startup
        determinada a transformar o mercado de campanhas promocionais no Brasil.
      </p>

      <button className="w-[230px] min-w-[230px] cursor-pointer mb-xs desktop:mr-md desktop:mb-0 desktop:w-max mt-md py-quark px-xs flex justify-center rounded-button title-medium bg-essence-ivory text-essence-charcoal">
        <div className="flex">
          <p className="mr-nano">Saiba mais sobre nós</p>
          <Image
            width={24}
            height={24}
            style={{ width: "24px", height: "24px" }}
            alt="arrow"
            src="/home/ArrowRight.svg"
          />
        </div>
      </button>
    </section>
  );
}
