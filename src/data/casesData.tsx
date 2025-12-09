import { ReactNode } from 'react';

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
  text: ReactNode;
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
      title: "Bello Futevôlei",
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
      title: "Saúva",
      description:
        `Criamos a base tecnológica que possibilitou a campanha Na Estrada do Bem: uma plataforma intuitiva, segura e escalável, que tornou o processo de doação e participação acessível e transparente.`,
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
      text: <>A solução desenvolvida fortalece a operação e a credibilidade da campanha, garantindo fluidez, estabilidade e segurança em todas as etapas — desde a doação e recebimento do número da sorte ao acompanhamento do impacto social.
      <br/><br/>Além de potencializar a gestão do projeto, nossa entrega reforça o valor de uma experiência digital confiável e empática para ações beneficentes de grande alcance.</>,
      items: [
        "Desenvolvimento completo da plataforma digital, com arquitetura escalável e segura.",
        "Campanhas digitais 100% regulamentadas pela SPA",
        "Interface intuitiva e responsiva, voltada à acessibilidade e conversão.",
        "Monitoramento e suporte contínuo, assegurando estabilidade durante toda a campanha.",
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
        "Criamos o Clube Parada em parceria com a ParadaSP: um ecossistema de benefícios e conexões que amplia o impacto do movimento LGBTQIAPN+ durante todo o ano.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/clube-parada/clube-bg.png",
      backgroundDesktop: "/cases/clube-parada/clube-bg.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Crescimento com Propósito",
      text: <>A campanha do Clube Parada fortalece o relacionamento da ParadaSP com seu público ao criar uma presença contínua e significativa além do evento anual.
      <br/><br/>O projeto posiciona a marca como um símbolo ativo de diversidade, gerando valor para parceiros, patrocinadores e para toda a comunidade LGBTQIAPN+.
      <br/><br/>Mais que benefícios: é um convite à representatividade e ao engajamento social.</>,
      items: [
        "Plataforma de benefícios exclusiva, com experiências reais e descontos inclusivos.",
        "Conexão direta entre marcas e público LGBTQIAPN+, fortalecendo negócios diversos.",
        "Posicionamento de marca com propósito, levando o nome ParadaSP além do evento.",
        "Comunicação afetiva e identidade vibrante, refletindo orgulho, inclusão e pertencimento.",
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
        `Lançamos campanhas que tornam a matrícula um passo rumo a novas conquistas,
        inclusive viagens dos sonhos para os participantes.`,
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/ccaa/ccaa-bg.png",
      backgroundDesktop: "/cases/ccaa/ccaa-bg.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Evolução da Campanha",
      text:<>
      As campanhas Matrícula Premiada e Rematrícula Premiada reforçam o posicionamento do CCAA como uma marca moderna, próxima e premiadora.
A mecânica — simples, digital e 100% regulamentada pela Secretaria de Prêmios e Apostas (SPA) — incentiva novas inscrições e renovações, aumentando a taxa de conversão e fidelidade dos alunos.
<br/><br/>
Além disso, os sites exclusivos oferecem uma experiência fluida e segura, integrando cadastro, geração de números da sorte e acesso aos regulamentos oficiais.
<br/><br/>O resultado é uma campanha que estimula o engajamento, gera valor percebido e mantém o CCAA em destaque nacionalmente durante o período promocional.
      </>,
      items: [
        "Campanhas digitais com mecânica de sorteio 100% validada pela SPA",
        "Jornada simples e intuitiva de participação (cadastro → números da sorte → sorteio)",
        "Parceria estratégica com o CCAA em todo o território nacional",
        "Ações integradas de comunicação e fidelização de alunos",
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
      title: "A Casa dos Sonhos",
      description:
        "A campanha conecta marcas, lojistas e consumidores em uma ação promocional única. Combinando QR Codes, roleta de prêmios e um álbum de figurinhas sobre decoração, o projeto cria engajamento real e fortalece a presença do nosso cliente no mercado.",
      primaryButtonText: "Fale Conosco",
      primaryButtonHref: "/contato",
      primaryButtonIconSrc: "/home/ArrowRight.svg",
      backgroundMobile: "/cases/massa-fm/massa-bg.png",
      backgroundDesktop: "/cases/massa-fm/massa-bg.png",
      heroSize: "h-[332px] desktop:h-[428px]",
      buttonFullSize: false,
    },
    section: {
      title: "Impactos e Engajamento",
      text: <>A campanha demonstra resultados expressivos em <strong>atração de público, frequência de compra e visibilidade regional.</strong><br/><br/>O formato interativo aproxima o consumidor das marcas parceiras e reforça o vínculo emocional com o tema do lar, um dos valores mais simbólicos para o público brasileiro.</>,
      items: [
        "Aumento da frequência de compras nos estabelecimentos participantes",
        "Crescimento da base de cadastros e engajamento digital via roleta e álbum",
        // "Ampliação da presença de marca do Grupo RCN e parceiros",
        "Incentivo à economia local e fortalecimento do varejo regional",
        "Ação 100% regulamentada pela Secretaria de Prêmios e Apostas (SPA)",
      ],
      linkHref: "https://promoacasadossonhos.com.br/",
      linkText: "Acesse o site",
      linkIcon: "/cases/ArrowUp.svg",
      imageDesktop: "/cases/massa-fm/desktop.png",
      imageMobile: "/cases/massa-fm/desktop.png",
    },
  },
];
