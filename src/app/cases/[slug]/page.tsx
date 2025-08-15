import CasesSection from "@/components/cases/CasesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/SubComponents/HeroSection";
import { CaseData, casesData } from "@/data/casesData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = casesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Serviço não encontrado",
      description: "O serviço solicitado não existe",
    };
  }

  return {
    title: service.hero.title,
    description: service.hero.description,
    twitter: {
      card: "summary_large_image",
    },
  };
}

export async function generateStaticParams() {
  return casesData.map((c) => ({ slug: c.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const caseItem: CaseData | undefined = casesData.find((c) => c.slug === slug);

  if (!caseItem) {
    notFound();
  }

  return (
    <>
      <Header />
      <HeroSection {...caseItem.hero} />
      <CasesSection section={caseItem.section} />
      <Footer />
    </>
  );
}
