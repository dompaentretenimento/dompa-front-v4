export interface ProductData {
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  images: {
    mobile: string;
    desktop: string;
    contentMobile?: string;
    contentDesktop?: string;
    heroMobile: string;
    heroDesktop: string;
  };
  primaryButtonHref?: string;
  sectionOne?: {
    heading: string;
    description: string;
    url: string;
  };
  sectionTwo?: {
    heading: string;
    description: string;
  };
}

export const productsData: Record<string, ProductData> = {
  fazla: {
    title: "Faz Lá",
    description:
      "Sonhos que se tornam realidade com benefícios, promoções e experiências únicas.",
    stats: [
      { label: "usuários", value: "39.673" },
      { label: "Influenciadores", value: "12" },
    ],
    images: {
      mobile: "/produtos/fazla/Fazla.png",
      desktop: "/produtos/fazla/FazlaDesktop.png",
      contentMobile: "/produtos/fazla/FazlaContent.png",
      contentDesktop: "/produtos/fazla/FazlaContentDesktop.png",
      heroMobile: "/produtos/fazla/Hero.png",
      heroDesktop: "/produtos/fazla/HeroDesk.png",
    },
    sectionOne: {
      heading: "Saiba mais sobre o Faz Lá",
      description:
        "O Faz Lá é um clube de benefícios que conecta milhares de descontos, experiências únicas e campanhas promocionais, tudo no mesmo ambiente! Oferecemos planos mensal, anual e vitalício, permitindo com que o consumidor escolha a melhor opção para aproveitar tudo o que o Faz Lá tem a oferecer.",
      url: "https://fazla.com.br/",
    },
    sectionTwo: {
      heading: "Para Influenciadores",
      description:
        "O Faz Lá transforma a influência de personalidades em experiências inesquecíveis para a audiência. Crie campanhas promocionais regulamentadas, engaje sua comunidade de forma inovadora e gere receita com o Faz Lá.",
    },
    primaryButtonHref: "/contato",
  },

  vollu: {
    title: "Vollu",
    description:
      "O Vollu é uma plataforma única que combina gamificação com autoconhecimento, oferecendo experiências interativas e recompensadoras.",
    stats: [
      { label: "usuários", value: "39.673" },
      { label: "Influenciadores", value: "12" },
    ],
    images: {
      mobile: "/produtos/vollu/Vollu.png",
      desktop: "/produtos/vollu/VolluDesktop.png",
      contentMobile: "/produtos/vollu/mobile.png",
      contentDesktop: "/produtos/vollu/desktop.png",
      heroMobile: "/produtos/vollu/Hero.png",
      heroDesktop: "/produtos/vollu/HeroDesk.png",
    },
    sectionOne: {
      heading: "Saiba mais sobre o Vollu",
      description:
        "O Vollu é uma plataforma única que combina gamificação com autoconhecimento, oferecendo experiências interativas e recompensadoras. Ideal tanto para pessoas que buscam se conhecer melhor quanto para empresas que desejam transformar treinamentos, campanhas internas e ações de engajamento em iniciativas dinâmicas e impactantes.",
      url: "https://www.vollu.com.br/#/home",
    },
    sectionTwo: {
      heading: "Autoconhecimento e Inovação",
      description:
        "O Vollu é uma plataforma única que combina gamificação com autoconhecimento, oferecendo experiências interativas e recompensadoras. Ideal tanto para pessoas que buscam se conhecer melhor quanto para empresas que desejam transformar treinamentos, campanhas internas e ações de engajamento em iniciativas dinâmicas e impactantes.",
    },
    primaryButtonHref: "/contato",
  },
  corp: {
    title: "Dompa Corp",
    description: "Um universo tecnológico pronto para auxiliar sua empresa.",
    stats: [
      { label: "usuários", value: "23.456" },
      { label: "Influenciadores", value: "45" },
    ],
    images: {
      mobile: "/produtos/corp/Corp.png",
      desktop: "/produtos/corp/CorpDesktop.png",
      contentMobile: "/produtos/corp/mobile.png",
      contentDesktop: "/produtos/corp/desktop.png",
      heroMobile: "/produtos/corp/Hero.png",
      heroDesktop: "/produtos/corp/HeroDesk.png",
    },
    sectionOne: {
      heading: "Saiba mais sobre o Dompa Corp",
      description:
        "A Dompa Corp é referência em soluções tecnológicas para campanhas promocionais, oferecendo uma plataforma completa e integrada que transforma ideias em resultados. Utilizamos ferramentas avançadas, inteligência artificial e estratégias personalizadas para garantir o sucesso de cada ação.",
      url: "https://admin.dompa.com.br/",
    },
    sectionTwo: {
      heading: "Conheça o DaaS",
      description:
        "A Dompa Corp é referência em soluções tecnológicas para campanhas promocionais, oferecendo uma plataforma completa e integrada que transforma ideias em resultados. Utilizamos ferramentas avançadas, inteligência artificial e estratégias personalizadas para garantir o sucesso de cada ação.",
    },
    primaryButtonHref: "/contato",
  },
  promo: {
    title: "Dompa Promo",
    description: "Soluções completas e inovadoras para seu negócios",
    stats: [
      { label: "usuários", value: "36.978" },
      { label: "Influenciadores", value: "56" },
    ],
    images: {
      mobile: "/produtos/promo/Promo.png",
      desktop: "/produtos/promo/PromoDesktop.png",
      contentMobile: "/produtos/promo/mobile.png",
      contentDesktop: "/produtos/promo/desktop.png",
      heroMobile: "/produtos/promo/Hero.png",
      heroDesktop: "/produtos/promo/HeroDesk.png",
    },
    sectionOne: {
      heading: "Saiba mais sobre o Dompa Promo",
      description:
        "Dompa Promo foi criado para atender empresas de todos os segmentos e tamanhos, oferecendo soluções completas e eficientes para campanhas promocionais. Com foco em alinhar o núcleo de negócios às estratégias de marketing, desenvolvemos ações personalizadas que engajam públicos e fortalecem marcas.",
      url: "https://dompashop.com.br/",
    },
    sectionTwo: {
      heading: "Administração e Promoção",
      description:
        "Dompa Promo foi criado para atender empresas de todos os segmentos e tamanhos, oferecendo soluções completas e eficientes para campanhas promocionais. Com foco em alinhar o núcleo de negócios às estratégias de marketing, desenvolvemos ações personalizadas que engajam públicos e fortalecem marcas.",
    },
    primaryButtonHref: "/contato",
  },
};
