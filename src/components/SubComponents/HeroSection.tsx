import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeroSectionProps = {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  primaryButtonIconSrc: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundMobile: string;
  backgroundDesktop: string;
  tag?: string;
  heroSize: string;
  buttonFullSize?: boolean;
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
  heroSize,
  buttonFullSize = true,
}: HeroSectionProps) {
  return (
    <section
      className={`text-essence-ivory relative ${heroSize} flex justify-start items-center`}
    >
      <article className="max-w-[636px] py-[64px] z-10 relative px-xs desktop:pl-giant desktop:pr-none">
        {tag && <p className="body-small mb-md">{tag}</p>}
        <h1 className="headline-large desktop:text-xl desktop:leading-xxl">
          {title}
        </h1>
        <p className="mt-md body-large">{description}</p>

        <div className="flex flex-col justify-center items-center desktop:flex-row desktop:justify-start desktop:items-center desktop:mt-md">
          <Link
            className={` desktop:mr-md ${
              buttonFullSize
                ? "w-full self-start desktop:max-w-[184px]"
                : "w-[184px] self-start"
            }`}
            href={primaryButtonHref}
            passHref
          >
            <div
              className={`group hover:bg-neutral-darker hover:text-essence-ivory active:bg-essence-charcoal transition-all duration-300 mb-xs desktop:mb-none desktop:mt-none mt-md py-quark px-xs flex justify-center items-center rounded-button title-medium bg-essence-ivory text-essence-charcoal `}
            >
              <p className="mr-nano">{primaryButtonText}</p>
              <Image
                width={24}
                height={24}
                alt="arrow"
                className="group-hover:invert"
                src={primaryButtonIconSrc}
              />
            </div>
          </Link>

          {secondaryButtonText && secondaryButtonHref && (
            <Link
              className="duration-300 transition-all hover:bg-neutral-pale hover:text-neutral-darker active:bg-neutral-light rounded-button"
              href={secondaryButtonHref}
              passHref
            >
              <p className="body-large py-quark px-xs">{secondaryButtonText}</p>
            </Link>
          )}
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
          priority
          fill
        />
      </picture>
    </section>
  );
}
