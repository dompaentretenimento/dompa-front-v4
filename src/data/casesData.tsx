export type HeroData = {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  primaryButtonIconSrc: string;
  backgroundMobile: string;
  backgroundDesktop: string;
  heroSize: string;
  buttonFullSize: boolean;
};

export type CaseSectionData = {
  title: string;
  text: string;
  items: string[];
  linkHref: string;
  linkText: string;
  linkIcon: string;
  imageDesktop: string;
  imageMobile: string;
};

export type CaseData = {
  slug: string;
  hero: HeroData;
  section: CaseSectionData;
};

export const casesData: CaseData[] = [
  {
    slug: "bello-futevolei",
    hero: {
      title: "Bello FuteVolei",
      description:
        "Confira os resultados das nossas campanhas e veja como transformamos ideias em ações que geram engajamento e impacto real.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/bello-futevolei/mobile.png",
      backgroundDesktop: "/cases/bello-futevolei/desktop.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Resultados",
      text: "Recursos captados para apoiar o combate à fome, alto engajamento do público, motivado por um prêmio surpreendente e reforço do compromisso com ações que unem impacto social e criatividade.",
      items: [
        "Parceria com o Instituto Orsi e o atleta Bello",
        "Oferecimento de um PlayStation 5 folheado a ouro",
        "Planejamento estratégico e execução de uma campanha",
      ],
      linkHref: "https://www.youtube.com/@bellofutevolei1991",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/bello-futevolei/caseDesktop.png",
      imageMobile: "/cases/bello-futevolei/case.png",
    },
  },
  {
    slug: "byd",
    hero: {
      title: "BYD",
      description:
        "Confira os resultados das nossas campanhas e veja como transformamos ideias em ações que geram engajamento e impacto real.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/byd/mobile.png",
      backgroundDesktop: "/cases/byd/desktop.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Resultados",
      text: "Campanha lançada em prazo com integração eficiente das concessionárias com validação automatizada segura e confiável e uma experiência exclusiva entregue com sucesso, fortalecendo o impacto da marca.",
      items: [
        "Aprovação pela SPA em 48 horas",
        "Criação de uma landing page interativa",
        "Construção de um dashboard inteligente",
        "Validando dados com IA",
      ],
      linkHref: "http://www.byd.com/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/byd/caseDesktop.png",
      imageMobile: "/cases/byd/case.png",
    },
  },
  {
    slug: "corinthians",
    hero: {
      title: "Corinthians",
      description:
        "Confira os resultados das nossas campanhas e veja como transformamos ideias em ações que geram engajamento e impacto real.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/corinthians/mobile.png",
      backgroundDesktop: "/cases/corinthians/desktop.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Resultados",
      text: "Campanha lançada em prazo com integração eficiente das concessionárias com validação automatizada segura e confiável e uma experiência exclusiva entregue com sucesso, fortalecendo o impacto da marca.",
      items: [
        "Criação de uma plataforma inovadora que permitia o check-in no local",
        "Validação automática dos dados dos associados por meio de IA",
        "Acompanhamento dos organizadores e garantiu eficiência no gerenciamento do sorteio",
      ],
      linkHref: "https://www.corinthians.com.br/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/corinthians/caseDesktop.png",
      imageMobile: "/cases/corinthians/case.png",
    },
  },
  {
    slug: "engemon",
    hero: {
      title: "Engemon",
      description:
        "Confira os resultados das nossas campanhas e veja como transformamos ideias em ações que geram engajamento e impacto real.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/engemon/mobile.png",
      backgroundDesktop: "/cases/engemon/desktop.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Resultados",
      text: "Engajamento elevado dos colaboradores, com participação ativa nos testes e fortalecimento do compromisso da engemon com inovação e desenvolvimento humano dentro do ambiente corporativo.",
      items: [
        "Utilização do Vollu para criar testes que estimulassem a evolução pessoal",
        "Utilização do Vollu para criar testes que estimulassem a evolução pessoal",
      ],
      linkHref: "https://www.engemon.com.br/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/engemon/caseDesktop.png",
      imageMobile: "/cases/engemon/case.png",
    },
  },
  {
    slug: "santomercado",
    hero: {
      title: "Santo Mercado",
      description:
        "Confira os resultados das nossas campanhas e veja como transformamos ideias em ações que geram engajamento e impacto real.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/santomercado/mobile.png",
      backgroundDesktop: "/cases/santomercado/desktop.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Resultados",
      text: "Recursos captados para apoiar o combate à fome, alto engajamento do público, motivado por um prêmio surpreendente e reforço do compromisso com ações que unem impacto social e criatividade.",
      items: [
        "Desenvolvimento de um hotsite interativo para gerenciar a mecânica promocional",
        "Conexão de participantes à campanha de forma intuitiva e a implementação de um CRM personalizado",
        "Otimização da comunicação e dos resultados da ação",
      ],
      linkHref: "https://santomercadosp.com.br/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/santomercado/caseDesktop.png",
      imageMobile: "/cases/santomercado/case.png",
    },
  },
  {
    slug: "studiow",
    hero: {
      title: "Studio W",
      description:
        "Confira os resultados das nossas campanhas e veja como transformamos ideias em ações que geram engajamento e impacto real.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/studiow/mobile.png",
      backgroundDesktop: "/cases/studiow/desktop.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Resultados",
      text: "Alto engajamento dos clientes, motivados por prêmios exclusivos e reforço do posicionamento do Studio W como referência em inovação e personalização no segmento de beleza.",
      items: [
        "Desenvolvimento de uma campanha impulsionada por inteligência artificial",
        'Criação de uma mecânica que permitia aos clientes concorrerem ao “Tratamento Taylor Made"',
        "Experiência imersiva de beleza a cada serviço realizado.",
      ],
      linkHref: "https://www.studiow.com.br/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/studiow/caseDesktop.png",
      imageMobile: "/cases/studiow/case.png",
    },
  },
];
