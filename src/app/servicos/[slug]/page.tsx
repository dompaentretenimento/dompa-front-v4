import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicoSectionFive from "@/components/servicos/ServicoSectionFive";
import ServicoSectionFour from "@/components/servicos/ServicoSectionFour";
import ServicoSectionOne from "@/components/servicos/ServicoSectionOne";
import ServicoSectionThree from "@/components/servicos/ServicoSectionThree";
import ServicoSectionTwo from "@/components/servicos/ServicoSectionTwo";
import HeroSection from "@/components/SubComponents/HeroSection";
import { servicos } from "@/data/servicos";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicos.map((s) => ({
    slug: s.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const service = servicos.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <>
      <Header />
      <HeroSection
        tag={service.tag}
        title={service.title}
        description={service.description}
        primaryButtonText="Começar agora"
        primaryButtonHref="/contato"
        primaryButtonIconSrc="/home/ArrowRight.svg"
        backgroundMobile={service.backgroundMobile}
        backgroundDesktop={service.backgroundDesktop}
        heroSize="h-[396px] desktop:h-[364px]"
        buttonFullSize={false}
      />
      <ServicoSectionOne {...service.sections.one} />
      <ServicoSectionTwo {...service.sections.two} />
      <ServicoSectionThree {...service.sections.three} />
      <ServicoSectionFour {...service.sections.four} />
      <ServicoSectionFive {...service.sections.five} />
      <Footer />
    </>
  );
}
