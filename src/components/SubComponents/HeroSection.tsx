import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeroSectionProps = {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  primaryButtonIconSrc: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  backgroundMobile: string;
  backgroundDesktop: string;
  tag?: string;
};

export default function HeroSection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  primaryButtonIconSrc,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundMobile,
  backgroundDesktop,
  tag,
}: HeroSectionProps) {
  return (
    <section className="text-essence-ivory relative min-h-[560px] flex justify-start items-center">
      <article className="max-w-[636px] py-[64px] z-10 relative px-xs desktop:pl-giant desktop:pr-none">
        {tag && <p className="body-small mb-md">{tag}</p>}
        <h1 className="headline-large desktop:text-xl desktop:leading-xxl">
          {title}
        </h1>
        <p className="mt-md body-large">{description}</p>

        <div className="flex flex-col justify-center items-center desktop:flex-row desktop:justify-start">
          <Link
            className="w-full desktop:w-max"
            // href={primaryButtonHref}
            href="#"
            passHref
          >
            <div className=" mb-xs desktop:mr-md desktop:mb-0 mt-md py-quark px-xs flex justify-center items-center rounded-button title-medium bg-essence-ivory text-essence-charcoal w-full">
              <p className="mr-nano">{primaryButtonText}</p>
              <Image
                width={24}
                height={24}
                alt="arrow"
                src={primaryButtonIconSrc}
              />
            </div>
          </Link>

          <Link
            // href={secondaryButtonHref}
            href="#"
            passHref
          >
            <p className="body-large h-max py-quark px-xs">
              {secondaryButtonText}
            </p>
          </Link>
        </div>
      </article>

      <picture className="absolute top-0 left-0 w-full h-full">
        <source media="(min-width: 62em)" srcSet={backgroundDesktop} />
        <source media="(min-width: 37.5em)" srcSet={backgroundMobile} />
        <Image
          className="object-cover"
          src={backgroundMobile}
          alt="hero"
          decoding="async"
          loading="eager"
          fetchPriority="high"
          priority={true}
          fill
        />
      </picture>
    </section>
  );
}
