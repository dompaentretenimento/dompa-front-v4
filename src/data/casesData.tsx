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
      title: "Bello FuteVôlei",
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
      text: "Campanha transformadora com alto engajamento e prêmios exclusivos, reforçando o posicionamento da marca como inovadora e impactante.",
      items: [
        "Parceria com o Instituto Orsi e o atleta Bello",
        "Prêmio principal: PlayStation 5 folheado a ouro",
        "Campanha de impacto nacional com grande alcance digital",
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
        "Campanha promocional nacional em tempo recorde, com integração entre concessionárias e tecnologia para validação automatizada.",
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
      text: "Entrega em 7 dias, com aprovação pela SPA em 48 horas e integração de 87 concessionárias em todo o país.",
      items: [
        "Landing page interativa com número da sorte",
        "Dashboard para acompanhamento em tempo real",
        "Conexão perfeita entre marca, clientes e tecnologia",
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
        "Desenvolvemos uma plataforma exclusiva para o evento do Corinthians, com sorteios e check-in automatizado.",
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
      text: "Plataforma funcional em 48h, garantindo automação e praticidade no sorteio e gerenciamento do evento.",
      items: [
        "Check-in digital integrado ao sistema de validação",
        "Dashboard gerenciável com atualização em tempo real",
        "Experiência fluida e inovadora no evento",
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
        "A Engemon apostou no Vollu para impulsionar o desenvolvimento humano e o engajamento interno.",
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
      text: "Campanha interna com engajamento elevado e inovação em RH utilizando gamificação e feedbacks inteligentes.",
      items: [
        "Uso do Vollu para promover testes de autoconhecimento",
        "Engajamento de colaboradores em atividades interativas",
        "Foco em inovação e bem-estar corporativo",
      ],
      linkHref: "https://www.engemon.com.br/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/engemon/caseDesktop.png",
      imageMobile: "/cases/engemon/case.png",
    },
  },
  {
    slug: "santo-mercado",
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
  {
    slug: "sauva",
    hero: {
      title: "Sauva",
      description:
        "Uma campanha promocional gamificada com figurinhas, roleta premiada e o grande prêmio: um Volvo zero quilômetro.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/sauva/volvo-bg.png",
      backgroundDesktop: "/cases/sauva/volvo-bg.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Resultados",
      text: "Ação divertida e interativa com geração de figurinhas e números da sorte, elevando o engajamento da marca a outro nível.",
      items: [
        "Criação de figurinhas e mecânica gamificada",
        "Integração de roleta premiada digital",
        "Grande prêmio: um Volvo zero quilômetro",
      ],
      linkHref: "https://naestradadobem.com.br/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/sauva/desktop.png",
      imageMobile: "/cases/sauva/desktop.png",
    },
  },
  {
    slug: "clube-parada",
    hero: {
      title: "Clube Parada",
      description:
        "Uma plataforma de benefícios que conecta marcas e pessoas à causa LGBTQIAPN+ com experiências de propósito.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/clube-parada/clube-bg.png",
      backgroundDesktop: "/cases/clube-parada/clube-bg.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Resultados",
      text: "Engajamento e impacto social com foco em diversidade e pertencimento, consolidando o apoio à Parada SP.",
      items: [
        "Criação de plataforma de benefícios inclusiva",
        "Conexão entre marcas e público LGBTQIAPN+",
        "Experiências e recompensas com propósito social",
      ],
      linkHref: "https://clubeparada.com.br/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/clube-parada/desktop.png",
      imageMobile: "/cases/clube-parada/desktop.png",
    },
  },
  {
    slug: "ccaa",
    hero: {
      title: "CCAA",
      description:
        "Campanha promocional integrada que conectou canais digitais e presenciais, premiando alunos com uma viagem exclusiva.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/ccaa/ccaa-bg.png",
      backgroundDesktop: "/cases/ccaa/ccaa-bg.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Resultados",
      text: "Ação que impulsionou matrículas e reforçou a imagem moderna e próxima do público.",
      items: [
        "Integração digital e física dos pontos de contato",
        "Números da sorte por matrícula ou rematrícula",
        "Grande prêmio: viagem exclusiva ao Caribe",
      ],
      linkHref: "https://matriculapremiada.ccaa.com.br/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/ccaa/desktop.png",
      imageMobile: "/cases/ccaa/desktop.png",
    },
  },
  {
    slug: "massa-fm",
    hero: {
      title: "Massa FM",
      description:
        "Campanha nacional que uniu rádio, digital e eventos regionais em uma ação emocionante e premiada.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/massa-fm/massa-bg.png",
      backgroundDesktop: "/cases/massa-fm/massa-bg.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Resultados",
      text: "Uma das maiores campanhas promocionais da rádio, com alto alcance e impacto nacional.",
      items: [
        "Campanha integrada entre rádio e digital",
        "Prêmio principal: uma casa nova",
        "Engajamento recorde entre ouvintes e participantes",
      ],
      linkHref: "https://promoacasadossonhos.com.br/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/massa-fm/desktop.png",
      imageMobile: "/cases/massa-fm/desktop.png",
    },
  },
];
