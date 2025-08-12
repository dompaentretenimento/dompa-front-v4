import React from "react";
import { ServicoSectionThreeCard } from "@/data/servicos";

interface ServicoSectionThreeProps {
  heading: string;
  items: ServicoSectionThreeCard[];
}

export default function ServicoSectionThree({
  heading,
  items,
}: ServicoSectionThreeProps) {
  return (
    <section className="px-xs py-xxxl desktop:p-giant bg-primary-darker">
      <p className="headline-medium text-essence-ivory mb-lg desktop:text-lg">
        {heading}
      </p>
      <div className="flex flex-wrap justify-center desktop:justify-start gap-[32px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-md desktop:px-xs rounded-md bg-essence-ivory max-w-[288px] desktop:max-w-[233px] relative"
          >
            <div className="bg-primary-soft p-xs w-[72px] h-[72px] text-center rounded-xs absolute top-[-.5rem] left-[-.5rem]">
              <span className="headline-large text-essence-ivory">
                {item.id}
              </span>
            </div>
            <h3 className="title-large text-primary-deepest mt-[56px] max-w-[75%]">
              {item.title}
            </h3>
            <p className="body-large text-essence-charcoal mt-nano">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
