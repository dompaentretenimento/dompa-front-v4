// CasesSection.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { CaseSectionData } from "@/data/casesData";

type CasesSectionProps = {
  section: CaseSectionData;
};

export default function CasesSection({ section }: CasesSectionProps) {
  return (
    <section className="py-xxxl px-xs desktop:p-giant bg-tertiary-tinted desktop:flex desktop:justify-between desktop:items-center">
      <div className="max-w-[518px]">
        <h2 className="text-primary-pure headline-large">{section.title}</h2>
        <p className="max-w-[518px] text-essence-charcoal body-large mt-xs">
          {section.text}
        </p>
        <ul className="flex flex-col gap-[16px] my-xs">
          {section.items.map((item, index) => (
            <li
              key={index}
              className="rounded-xs border-primary-pale p-xs body-large bold border"
            >
              {item}
            </li>
          ))}
        </ul>
        <Link
          target="_blank"
          href={section.linkHref}
          className="flex w-max rounded-button py-quark px-xs text-primary-pure title-medium border-hairline border-primary-pure hover:bg-primary-pale hover:shadow-level3 active:shadow-none active:bg-primary-soft  transition-all duration-300"
        >
          {section.linkText}
          <Image
            src={section.linkIcon}
            alt={section.linkText}
            width={24}
            height={24}
            className="ml-nano"
          />
        </Link>
      </div>

      <div className="w-[288px] h-[256px] desktop:w-[636px] desktop:h-[446px] relative mt-md desktop:mt-none desktop:ml-md rounded-md">
        <picture className="absolute top-0 left-0 w-full h-full">
          <source media="(min-width: 1280px)" srcSet={section.imageDesktop} />
          <source media="(min-width: 300px)" srcSet={section.imageMobile} />
          <Image
            className="desktop:mt-none object-cover w-auto rounded-md shadow-level3"
            src={section.imageMobile}
            alt={section.title}
            sizes="(min-width: 1280px) 1280px, 100vw"
            fill
          />
        </picture>
      </div>
    </section>
  );
}
