import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/SubComponents/HeroSection";
import ProdutosSectionOne from "@/components/produtos/ProdutosSectionOne";
import ProdutosSectionTwo from "@/components/produtos/ProdutosSectionTwo";
import { productsData } from "@/data/productsData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(productsData).map((id) => ({ id }));
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = productsData[id];

  if (!product) {
    return {
      title: "Produto não encontrado",
      description: "O produto solicitado não existe",
    };
  }

  return {
    title: product.title,
    description: product.description,
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const product = productsData[id];

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <HeroSection
        tag="Produtos"
        title={product.title}
        description={product.description}
        primaryButtonText="Fale Conosco"
        primaryButtonHref={product.primaryButtonHref ?? ""}
        primaryButtonIconSrc="/home/ArrowRight.svg"
        backgroundMobile={product.images.heroMobile}
        backgroundDesktop={product.images.heroDesktop}
        heroSize="h-[396px] desktop:h-[364px]"
        buttonFullSize={false}
      />
      <ProdutosSectionOne productId={id} />
      <ProdutosSectionTwo productId={id} />
      <Footer />
    </>
  );
}
