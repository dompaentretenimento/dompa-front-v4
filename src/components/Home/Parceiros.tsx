import Image from "next/image";
import Marquee from "react-fast-marquee";
import React from "react";

export default function Parceiros() {
  const logos = Array.from({ length: 41 }, (_, i) => i);

  return (
    <section className="py-xxl desktop:py-xxxl min-h-[232px] desktop:min-h-[224px]">
      <p className="headline-medium text-primary-pure mb-lg desktop:text-lg px-md desktop:px-giant">
        Veja quem já está conosco
      </p>

      <Marquee speed={125} pauseOnHover={true} autoFill={true}>
        {logos.map((num) => (
          <div key={num} className="mr-xl">
            <Image
              src={`/home/logos/logos${num === 0 ? "" : `-${num}`}.svg`}
              alt={`Logo ${num}`}
              width={100}
              height={32}
              style={{ width: "100px", height: "32px" }}
              className="w-auto h-auto"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
