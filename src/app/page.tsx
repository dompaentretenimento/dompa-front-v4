import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Cases from "@/components/Home/Cases";
import Contato from "@/components/Home/Contato";
import News from "@/components/Home/News";
import Parceiros from "@/components/Home/Parceiros";
import Produtos from "@/components/Home/Produtos";
import SaibaMais from "@/components/Home/SaibaMais";
import Serviços from "@/components/Home/Serviços";
import HeroSection from "@/components/SubComponents/HeroSection";

export default function Home() {
  return (
    <div className="bg-essence-ivory">
      <Header />
      <HeroSection
        title="Revolucionamos o mercado com soluções inteligentes"
        description="Somos líderes em inovação para campanhas promocionais com uma plataforma que utiliza inteligência artificial e tecnologia de ponta para criar experiências únicas e impulsionar marcas."
        primaryButtonText="Começar agora"
        primaryButtonHref="/contato"
        primaryButtonIconSrc="/home/ArrowRight.svg"
        secondaryButtonText="Conheça os serviços"
        secondaryButtonHref="/#servicos"
        backgroundMobile="/home/Hero.webp"
        backgroundDesktop="/home/HeroDesk.webp"
        heroSize="h-[560px]"
      />
      <Parceiros />
      <SaibaMais />
      <Serviços />
      <Produtos />
      <Cases />
      <News />
      <Contato />
      <Footer />
    </div>
  );
}
