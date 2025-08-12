import Image from "next/image";

interface SectionProps {
  heading: string;
  text: string;
  imageMobile: string;
  imageDesktop: string;
  imageAlt: string;
}

export default function ServicoSectionOne({
  heading,
  text,
  imageMobile,
  imageDesktop,
  imageAlt,
}: SectionProps) {
  return (
    <section className="py-xxxl px-xs desktop:p-giant bg-tertiary-tinted desktop:flex desktop:justify-between desktop:items-center">
      <div>
        <h2 className="text-primary-pure headline-medium desktop:text-lg desktop:leading-xl">
          {heading}
        </h2>
        <p className="max-w-[518px] text-essence-charcoal body-large mt-xs">
          {text}
        </p>
      </div>
      <div className="w-[288px] h-[256px] desktop:w-[636px] desktop:h-[446px] relative mt-md desktop:mt-none desktop:ml-md rounded-md">
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
