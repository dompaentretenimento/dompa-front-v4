import Image from "next/image";
import Marquee from "react-fast-marquee";
import React from "react";

const logos = [
    {src:"logos.svg", title:"Corinhians"},
    {src:"logos-1.svg", title:"BYD"},
    {src:"logos-2.svg", title:"Chute Boxe"},
    {src:"logos-3.svg", title:"Engemon"},
    {src:"logos-4.svg", title:"Parada SP"},
    {src:"logos-5.svg", title:"PegPet"},
    {src:"logos-ccaa.svg", title:"CCAA"},
    {src:"logos-6.svg", title:"RCN Notícias"},
    {src:"logos-7.svg", title:"Saúva"},
    {src:"logos-8.svg", title:"Projeto ORSI"},
    {src:"logos-9.svg", title:"Santo Mercado"},
    {src:"logos-10.svg", title:"Studio W"},
]

export default function Parceiros() {
  // const logos = Array.from({ length: 11 }, (_, i) => i);

  return (
    <section className="py-xxl desktop:py-xxxl min-h-[232px] desktop:min-h-[224px]">
      <p className="headline-medium text-primary-pure mb-lg desktop:text-lg px-md desktop:px-giant">
        Veja quem já está conosco
      </p>

      <Marquee speed={125} pauseOnHover={true} autoFill={true}>
        {logos.map((logo, num) => (
          <div key={num} className="mr-xl">
              {/*{logo.src}-{logo.title}*/}
            <Image
              src={`/home/logos/${logo.src}`}
              alt={`Logo ${logo.title}`}
              width={150}
              height={48}
              style={{ width: "150px", height: "48px" }}
              className="w-auto h-auto grayscale"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
