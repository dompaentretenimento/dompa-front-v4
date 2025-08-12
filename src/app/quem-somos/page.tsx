import Footer from "@/components/Footer";
import Header from "@/components/Header";
import News from "@/components/Home/News";
import Dompa from "@/components/quem-somos/Dompa";
import MissaoeValores from "@/components/quem-somos/MissaoeValores";
import HeroSection from "@/components/SubComponents/HeroSection";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <HeroSection
        tag="SOBRE A DOMPA"
        title="Olá, somos a Dompa!"
        description="Somos líderes em inovação para campanhas promocionais com uma plataforma que utiliza inteligência artificial e tecnologia de ponta para criar experiências únicas e impulsionar marcas."
        primaryButtonText="Começar agora"
        primaryButtonHref="/contato"
        primaryButtonIconSrc="/home/ArrowRight.svg"
        secondaryButtonText="Conheça os produtos"
        secondaryButtonHref="/#produtos"
        backgroundMobile="/quem-somos/Hero.png"
        backgroundDesktop="/quem-somos/HeroDesk.png"
        heroSize="h-[560px]"
      />
      <Dompa />
      <MissaoeValores />
      <News />
      <div className="py-xxxl px-xs desktop:px-giant">
        <p className="headline-medium text-primary-pure text-center">
          Juntos, nossos times colaboram para{" "}
          <br className="hidden desktop:flex" /> oferecer soluções completas!💙
        </p>
      </div>
      <Footer />
    </>
  );
}
