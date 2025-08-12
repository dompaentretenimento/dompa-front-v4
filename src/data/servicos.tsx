export interface ServicoSectionTwoCard {
  icon: string;
  title: string;
  description: string;
}

export interface ServicoSectionThreeCard {
  id: number;
  title: string;
  description: string;
}

export interface ServicoSectionThreeFull {
  heading: string;
  items: ServicoSectionThreeCard[];
}

export interface ServicoSectionFourCard {
  icon: string;
  title: string;
  description: string;
}

export interface ServicoSectionFourFull {
  heading: string;
  cards: ServicoSectionFourCard[];
}

export interface ServicoSectionFiveProps {
  heading: string;
  challenge: string;
  solution: string;
  highlightPercentage: string;
  highlightLabel: string;
  imageMobile: string;
  imageDesktop: string;
  imageAlt: string;
}

export interface Servico {
  slug: string;
  tag: string;
  title: string;
  description: string;
  backgroundMobile: string;
  backgroundDesktop: string;
  sections: {
    one: {
      heading: string;
      text: string;
      imageMobile: string;
      imageDesktop: string;
      imageAlt: string;
    };
    two: {
      cards: ServicoSectionTwoCard[];
    };
    three: ServicoSectionThreeFull;
    four: ServicoSectionFourFull;
    five: ServicoSectionFiveProps;
  };
}

export const servicos: Servico[] = [
  {
    slug: "ultra-crm",
    tag: "SERVIÇOS",
    title: "Ultra CRM",
    description:
      "Analisa dados e cria ações personalizadas. No Vollu, ajudou a segmentar usuários, aumentando engajamento e resultados em campanhas.",
    backgroundMobile: "/servicos/Hero.png",
    backgroundDesktop: "/servicos/HeroDesk.png",
    sections: {
      one: {
        heading: "O que é o Ultra CRM?",
        text: `O UltraCRM é a solução da Dompa que organiza e segmenta dados com precisão, permitindo que sua empresa entenda melhor seu público e ofereça experiências personalizadas. Seja para campanhas promocionais ou estratégias de fidelização, o UltraCRM é a ferramenta essencial para empresas que valorizam decisões baseadas em dados.`,
        imageMobile: "/servicos/sectionOne/ultra-crm/mobile.png",
        imageDesktop: "/servicos/sectionOne/ultra-crm/desktop.png",
        imageAlt: "Ultra CRM",
      },
      two: {
        cards: [
          {
            icon: "/servicos/sectionTwo/user-arrows.svg",
            title: "Segmentação Avançada",
            description:
              "Identifique padrões de comportamento e divida seu público em grupos altamente relevantes.",
          },
          {
            icon: "/servicos/sectionTwo/database.svg",
            title: "Curadoria de Dados Automatizada",
            description:
              "Centralize e organize dados dispersos, eliminando inconsistências e duplicidades.",
          },
          {
            icon: "/servicos/sectionTwo/eye.svg",
            title: "Análise Preditiva",
            description:
              "Antecipe as necessidades dos clientes com base em comportamentos e tendências.",
          },
          {
            icon: "/servicos/sectionTwo/arrows-merge.svg",
            title: "Integração Completa",
            description:
              "Conecte o UltraCRM a suas ferramentas de marketing, vendas e BI.",
          },
          {
            icon: "/servicos/sectionTwo/apps.svg",
            title: "Painel Intuitivo",
            description:
              "Visualize insights em tempo real com dashboards fáceis de usar.",
          },
        ],
      },
      three: {
        heading: "Por que escolher o UltraCRM?",
        items: [
          {
            id: 1,
            title: "Decisões Baseadas em Dados",
            description:
              "Reduza achismos e tome decisões estratégicas com base em informações precisas.",
          },
          {
            id: 2,
            title: "Engajamento Relevante",
            description:
              "Entregue mensagens certas para o público certo no momento ideal.",
          },
          {
            id: 3,
            title: "Aumento de ROI",
            description:
              "Maximize o retorno sobre o investimento com campanhas altamente segmentadas.",
          },
          {
            id: 4,
            title: "Fidelização de Clientes",
            description:
              "Crie experiências únicas que aumentam a retenção e fortalecem o relacionamento.",
          },
          {
            id: 5,
            title: "Eficiência Operacional",
            description:
              "Automatize processos e concentre-se no que realmente importa: resultados.",
          },
        ],
      },
      four: {
        heading: "Aplicações",
        cards: [
          {
            icon: "/servicos/sectionFour/diamond.svg",
            title: "Campanha Promocional",
            description:
              "Identifique o Público mais propenso a engajar e otimize a alocação de recursos.",
          },
          {
            icon: "/servicos/sectionFour/user-check.svg",
            title: "Fidelização de Clientes",
            description:
              "Identifique o Público mais propenso a engajar e otimize a alocação de recursos.",
          },
          {
            icon: "/servicos/sectionFour/search.svg",
            title: "Social Listening e Monitoramento",
            description:
              "Identifique o Público mais propenso a engajar e otimize a alocação de recursos.",
          },
          {
            icon: "/servicos/sectionFour/shopping-bag.svg",
            title: "e-Commerce",
            description:
              "Identifique o Público mais propenso a engajar e otimize a alocação de recursos.",
          },
        ],
      },
      five: {
        heading: "O UltraCRM em ação",
        challenge:
          "Organizar dados dispersos e engajar usuários com campanhas personalizadas.",
        solution:
          "Implementação do UltraCRM para segmentação avançada e personalização de mensagens.",
        highlightPercentage: "37%",
        highlightLabel: "Engajamento e Conversão",
        imageMobile: "/servicos/sectionFive/CRM/CRM.png",
        imageDesktop: "/servicos/sectionFive/CRM/CRMDesk.png",
        imageAlt: "Ultra CRM",
      },
    },
  },
  {
    slug: "cashback",
    tag: "SERVIÇOS",
    title: "Cashback",
    description:
      "Cashback: Fidelize Clientes com Benefícios Reais. Incentive compras e aumente o engajamento devolvendo parte do valor gasto ao cliente.",
    backgroundMobile: "/servicos/Hero.png",
    backgroundDesktop: "/servicos/HeroDesk.png",
    sections: {
      one: {
        heading: "O Que é o\nCashback?",
        text: `O Cashback é uma estratégia que devolve parte do valor gasto pelos clientes, incentivando novas compras e fortalecendo a fidelização.
A Dompa utiliza tecnologia avançada para personalizar ofertas e alinhar os benefícios ao perfil de cada consumidor, garantindo resultados expressivos.`,
        imageMobile: "/servicos/sectionOne/cashback/mobile.png",
        imageDesktop: "/servicos/sectionOne/cashback/desktop.png",
        imageAlt: "Cashback",
      },
      two: {
        cards: [
          {
            icon: "/servicos/sectionTwo/user-arrows.svg",
            title: "Devolução Personalizada",
            description:
              "Alinhamos o valor do cashback ao perfil de compra do cliente",
          },
          {
            icon: "/servicos/sectionTwo/database.svg",
            title: "Incentivo à Recorrência",
            description:
              "Aumente o retorno dos clientes ao oferecer benefícios atrativos.",
          },
          {
            icon: "/servicos/sectionTwo/eye.svg",
            title: "Automação e Monitoramento",
            description:
              "Controle automático de valores devolvidos e integração com relatórios de desempenho.",
          },
          {
            icon: "/servicos/sectionTwo/arrows-merge.svg",
            title: "Engajamento Multicanal",
            description:
              "Integre campanhas de cashback a aplicativos, e-mails e redes sociais.",
          },
          {
            icon: "/servicos/sectionTwo/apps.svg",
            title: "Análises Avançadas",
            description:
              "Insights detalhados sobre a performance do cashback e impacto nos clientes.",
          },
        ],
      },

      three: {
        heading: "Por Que Escolher Nossa Solução de Cashback?",
        items: [
          {
            id: 1,
            title: "Fidelização\nGarantida",
            description: "Conquiste clientes ao oferecer\nvantagens reais",
          },
          {
            id: 2,
            title: "Aumento do\nTicket Médio",
            description:
              "Motive os consumidores a gastarem\nmais para obter maiores benefícios",
          },
          {
            id: 3,
            title: "Engajamento\nAumentado",
            description:
              "Mantenha os clientes ativos com\nrecompensas personalizadas",
          },
          {
            id: 4,
            title: "Resultados\nMensuráveis",
            description:
              "Acompanhe o impacto das campanhas\nde forma detalhada",
          },
          {
            id: 5,
            title: "Customização\nTotal",
            description:
              "Crie ofertas alinhadas ao perfil e\ncomportamento de cada cliente",
          },
        ],
      },
      four: {
        heading: "Aplicações",
        cards: [
          {
            icon: "/servicos/sectionFour/diamond.svg",
            title: "Campanha Promocional",
            description:
              "Identifique o Público mais propenso a engajar e otimize a alocação de recursos.",
          },
          {
            icon: "/servicos/sectionFour/user-check.svg",
            title: "Fidelização de Clientes",
            description:
              "Identifique o Público mais propenso a engajar e otimize a alocação de recursos.",
          },
          {
            icon: "/servicos/sectionFour/search.svg",
            title: "Social Listening e Monitoramento",
            description:
              "Identifique o Público mais propenso a engajar e otimize a alocação de recursos.",
          },
          {
            icon: "/servicos/sectionFour/shopping-bag.svg",
            title: "e-Commerce",
            description:
              "Identifique o Público mais propenso a engajar e otimize a alocação de recursos.",
          },
        ],
      },

      five: {
        heading: "Cashback em Ação",
        challenge: "Incentivar compras e\nengajar visitantes.",
        solution:
          "Implementação de\ncashback para compras acima de um\nvalor definido.",
        highlightPercentage: "23%",
        highlightLabel: "Aumento de ticket médio",
        imageMobile: "/servicos/sectionFive/cashback/mobile.png",
        imageDesktop: "/servicos/sectionFive/cashback/desktop.png",
        imageAlt: "Cashback Santo Mercado",
      },
    },
  },
  {
    slug: "campanhas-promocionais",
    tag: "SERVIÇOS",
    title: "Campanha Promocional",
    description:
      "Engajamento que Transforma. Sorteios, promoções e prêmios feitos sob medida para o sucesso da sua marca.",
    backgroundMobile: "/servicos/Hero.png",
    backgroundDesktop: "/servicos/HeroDesk.png",
    sections: {
      one: {
        heading: "Conquiste\ne Fidelize",
        text: `As campanhas promocionais da Dompa oferecem formatos criativos e legais para atrair clientes e fortalecer a marca.
Seja por meio de títulos de capitalização, sorteios, promoções comerciais ou vale-brinde, nossas soluções são personalizadas para atender às suas metas.`,
        imageMobile: "/servicos/sectionOne/campanhas-promocionais/mobile.png",
        imageDesktop: "/servicos/sectionOne/campanhas-promocionais/desktop.png",
        imageAlt: "Campanhas Promocionais",
      },
      two: {
        cards: [
          {
            icon: "/servicos/sectionTwo/user-arrows.svg",
            title: "Títulos de Capitalização",
            description:
              "Ofereça um investimento atrativo que combina sorteio e retorno financeiro, incentivando a participação.",
          },
          {
            icon: "/servicos/sectionTwo/database.svg",
            title: "Sorteios",
            description:
              "Crie campanhas emocionantes que oferecem prêmios exclusivos e de alto valor.",
          },
          {
            icon: "/servicos/sectionTwo/eye.svg",
            title: "Promoções Comerciais",
            description:
              "Aumente as vendas oferecendo descontos, prêmios e incentivos por compras ou participação.",
          },
          {
            icon: "/servicos/sectionTwo/arrows-merge.svg",
            title: "Vale-Brinde",
            description:
              "Ofereça recompensas instantâneas que encantam os clientes.",
          },
          {
            icon: "/servicos/sectionTwo/apps.svg",
            title: "Monitoramento em Tempo Real",
            description:
              "Avalie a performance das campanhas com dados precisos e atualizados.",
          },
        ],
      },
      three: {
        heading: "Por que escolher Nossa Tecnologia de IA?",
        items: [
          {
            id: 1,
            title: "Engajamento\nGarantido",
            description:
              "Modalidades criativas e atrativas que\ncapturam a atenção do público",
          },
          {
            id: 2,
            title: "Resultados\nMensuráveis",
            description:
              "Monitoramento em tempo real para\navaliar o impacto das campanhas",
          },
          {
            id: 3,
            title: "Fidelização\nde Clientes",
            description: "Aumente o vínculo emocional com sua\nmarca",
          },
          {
            id: 4,
            title: "Flexibilidade e\nPersonalização",
            description:
              "Escolha o formato que mais se adapta\nao seu público e objetivos",
          },
          {
            id: 5,
            title: "Conformidade\nLegal",
            description:
              "Garantia de campanhas seguras e\nalinhadas às regulamentações",
          },
        ],
      },
      four: {
        heading: "Como Nossas Modalidades\nTransformam Campanhas?",
        cards: [
          {
            icon: "/servicos/sectionFour/diamond.svg",
            title: "Campanhas de Varejo",
            description:
              "Sorteios e vale-brindes para aumentar o fluxo de clientes",
          },
          {
            icon: "/servicos/sectionFour/user-check.svg",
            title: "Lançamentos de Produtos",
            description:
              "Promoções comerciais para criar buzz e atrair consumidores.",
          },
          {
            icon: "/servicos/sectionFour/search.svg",
            title: "Programas de Fidelidade",
            description:
              "Títulos de capitalização como benefício adicional para clientes recorrentes.",
          },
          {
            icon: "/servicos/sectionFour/shopping-bag.svg",
            title: "Eventos Especiais",
            description:
              "Sorteios para engajar participantes e oferecer experiências memoráveis.",
          },
        ],
      },
      five: {
        heading: "Promocional em Ação",
        challenge:
          "Criar um sorteio\nnacional em 87 concessionárias\ncom prêmios exclusivos.",
        solution:
          "Implementação de sorteios com\nvalidação em tempo real e prêmios\npersonalizados.",
        highlightPercentage: "24%",
        highlightLabel: "Engajamento nacional",
        imageMobile: "/servicos/sectionFive/campanhas-promocionais/mobile.png",
        imageDesktop:
          "/servicos/sectionFive/campanhas-promocionais/desktop.png",
        imageAlt: "Campanhas Promocionais BYD",
      },
    },
  },
  {
    slug: "social-listening",
    tag: "SERVIÇOS",
    title: "Social Listening",
    description:
      "Entenda Seu Público e Antecipe Tendências. Monitore redes sociais para capturar opiniões, identificar tendências e fortalecer sua marca.",
    backgroundMobile: "/servicos/Hero.png",
    backgroundDesktop: "/servicos/HeroDesk.png",
    sections: {
      one: {
        heading: "Conectando\nMarcas",
        text: `O Social Listening monitora conversas nas redes sociais para capturar opiniões sobre sua marca, identificar tendências de mercado e analisar o comportamento do público.
Essa abordagem permite criar conexões mais assertivas e alinhar campanhas às expectativas dos consumidores.`,
        imageMobile: "/servicos/sectionOne/social-listening/mobile.png",
        imageDesktop: "/servicos/sectionOne/social-listening/desktop.png",
        imageAlt: "Social Listening",
      },
      two: {
        cards: [
          {
            icon: "/servicos/sectionTwo/user-arrows.svg",
            title: "Monitoramento em Tempo Real",
            description:
              "Capture menções, hashtags e interações relacionadas à sua marca.",
          },
          {
            icon: "/servicos/sectionTwo/database.svg",
            title: "Análise de Sentimento",
            description:
              "Identifique o tom das conversas: positivo, negativo ou neutro.",
          },
          {
            icon: "/servicos/sectionTwo/eye.svg",
            title: "Identificação de Tendências",
            description:
              "Antecipe movimentos de mercado com base no comportamento do público.",
          },
          {
            icon: "/servicos/sectionTwo/arrows-merge.svg",
            title: "Segmentação de Públicos",
            description:
              "Categorize os consumidores com base em interesses e interações.",
          },
          {
            icon: "/servicos/sectionTwo/apps.svg",
            title: "Insights Estratégicos",
            description:
              "Relatórios detalhados para ajustar campanhas e melhorar a comunicação.",
          },
        ],
      },
      three: {
        heading: "Por Que Escolher Nossa Solução de Social Listening?",
        items: [
          {
            id: 1,
            title: "Conexão\nAutêntica",
            description:
              "Compreenda o que os consumidores\nrealmente pensam e esperam da sua marca",
          },
          {
            id: 2,
            title: "Decisões Orientadas\npor Dados",
            description:
              "Utilize insights para alinhar estratégias\ne otimizar campanhas.",
          },
          {
            id: 3,
            title: "Antecipação\nde Crises",
            description:
              "Identifique problemas antes que eles\nescalem, protegendo a reputação da marca",
          },
          {
            id: 4,
            title: "Engajamento\nPersonalizado",
            description:
              "Construa interações mais significativas\ncom base no comportamento do público",
          },
          {
            id: 5,
            title: "Identificação de\nOportunidades",
            description:
              "Descubra tendências para criar\nprodutos ou serviços inovadores",
          },
        ],
      },
      four: {
        heading: "Como Nossa Solução Está Transformando Marcas?",
        cards: [
          {
            icon: "/servicos/sectionFour/diamond.svg",
            title: "Gestão de Reputação",
            description:
              "Monitoramento de menções para proteger a imagem da marca.",
          },
          {
            icon: "/servicos/sectionFour/user-check.svg",
            title: "Planejamento de Campanhas",
            description:
              "Insights baseados em tendências ajudam a criar campanhas mais eficazes.",
          },
          {
            icon: "/servicos/sectionFour/search.svg",
            title: "Lançamento de Produtos",
            description:
              "Identifique demandas e preferências antes de introduzir novos produtos no mercado.",
          },
          {
            icon: "/servicos/sectionFour/shopping-bag.svg",
            title: "Acompanhamento de Concorrentes",
            description:
              "Analise o desempenho de marcas concorrentes para ajustar sua estratégia",
          },
        ],
      },
      five: {
        heading: "Social L. em Ação",
        challenge:
          "Entender as\npercepções dos colaboradores\nsobre iniciativas internas de\nsustentabilidade.",
        solution:
          "Monitoramento de redes sociais\ninternas e externas para capturar feedback e\nidentificar ajustes necessários.",
        highlightPercentage: "37%",
        highlightLabel: "Engajamento interno",
        imageMobile: "/servicos/sectionFive/social-listening/mobile.png",
        imageDesktop: "/servicos/sectionFive/social-listening/desktop.png",
        imageAlt: "Social Listening Engemon",
      },
    },
  },
  {
    slug: "e-commerce",
    tag: "SERVIÇOS",
    title: "Plataforma E-commerce",
    description:
      "Simplifique Suas Vendas e Fidelize Clientes. Uma solução completa para campanhas promocionais e vendas recorrentes.",
    backgroundMobile: "/servicos/Hero.png",
    backgroundDesktop: "/servicos/HeroDesk.png",
    sections: {
      one: {
        heading: "Pronta para\nConverter",
        text: `A Plataforma de E-commerce da Dompa oferece ferramentas completas para criar, gerenciar e otimizar lojas online.
Ideal para campanhas promocionais, nossa solução facilita vendas recorrentes, melhora a gestão de pedidos e entrega uma experiência diferenciada aos consumidores.`,
        imageMobile: "/servicos/sectionOne/e-commerce/mobile.png",
        imageDesktop: "/servicos/sectionOne/e-commerce/desktop.png",
        imageAlt: "E-commerce",
      },
      two: {
        cards: [
          {
            icon: "/servicos/sectionTwo/user-arrows.svg",
            title: "Gestão de Pedidos",
            description:
              "Monitore e organize pedidos em tempo real com eficiência.",
          },
          {
            icon: "/servicos/sectionTwo/database.svg",
            title: "Venda Recorrente",
            description:
              "Configure assinaturas e planos de recompra automática",
          },
          {
            icon: "/servicos/sectionTwo/eye.svg",
            title: "Personalização de Lojas",
            description:
              "Crie experiências únicas alinhadas à identidade da marca.",
          },
          {
            icon: "/servicos/sectionTwo/arrows-merge.svg",
            title: "Integração de Pagamentos",
            description:
              "Suporte para diversos métodos de pagamento, incluindo Pix, cartão de crédito e carteiras digitais",
          },
          {
            icon: "/servicos/sectionTwo/apps.svg",
            title: "Análise de Desempenho",
            description:
              "Dashboards interativos que mostram conversões, tráfego e ROI",
          },
        ],
      },
      three: {
        heading: "Por Que Escolher Nossa Plataforma de E-commerce?",
        items: [
          {
            id: 1,
            title: "Aumento nas\nConversões",
            description: "Interface otimizada\npara incentivar compras",
          },
          {
            id: 2,
            title: "Fidelização\ndo Cliente",
            description:
              "Funcionalidades de venda recorrente\nque garantem retenção",
          },
          {
            id: 3,
            title: "Gestão\nSimplificada",
            description:
              "Ferramentas intuitivas\npara gerenciar lojas e pedidos",
          },
          {
            id: 4,
            title: "Personalização\nCompleta",
            description:
              "Total controle sobre\no design e funcionalidades da loja",
          },
          {
            id: 5,
            title: "Resultados\nMensuráveis",
            description: "Relatórios detalhados para\nacompanhamento de KPIs",
          },
        ],
      },
      four: {
        heading: "Como Nossa Plataforma Transforma Negócios?",
        cards: [
          {
            icon: "/servicos/sectionFour/diamond.svg",
            title: "Campanhas Promocionais",
            description:
              "Criação de lojas exclusivas para sorteios, vale-brindes e promoções.",
          },
          {
            icon: "/servicos/sectionFour/user-check.svg",
            title: "Assinaturas e Planos Recorrentes",
            description: "Gestão de produtos que exigem recompra periódica.",
          },
          {
            icon: "/servicos/sectionFour/search.svg",
            title: "Personalização de Experiência",
            description:
              "Lojas online adaptadas para atender diferentes nichos de mercado.",
          },
          {
            icon: "/servicos/sectionFour/shopping-bag.svg",
            title: "Integração com Ferramentas de Marketing",
            description:
              "Capacidade de conectar a plataforma a CRMs e campanhas de anúncios digitais.",
          },
        ],
      },
      five: {
        heading: "E-commerce em Ação",
        challenge:
          "Criar uma plataforma\npromocional para venda de\nprodutos digitais e gestão de\nnúmeros da sorte para\nsorteios.",
        solution:
          "Desenvolvimento de uma loja online\ncom integração de pagamentos e gestão\nautomatizada de clientes.",
        highlightPercentage: "30%",
        highlightLabel: "Adesão dos Participantes",
        imageMobile: "/servicos/sectionFive/CRM/CRM.png",
        imageDesktop: "/servicos/sectionFive/CRM/CRMDesk.png",
        imageAlt: "E-commerce Faz Lá",
      },
    },
  },
  {
    slug: "hotsite-promocional",
    tag: "SERVIÇOS",
    title: "HotSites Promocionais",
    description:
      "Conexão Única entre Marcas e Público. Potencialize suas campanhas com páginas exclusivas, interativas e estratégicas.",
    backgroundMobile: "/servicos/Hero.png",
    backgroundDesktop: "/servicos/HeroDesk.png",
    sections: {
      one: {
        heading: "Hot Sites\nExclusivos",
        text: `Os Hot Sites Promocionais da Dompa são páginas personalizadas desenvolvidas para potencializar campanhas e criar conexões significativas com o público.
Oferecemos experiências interativas que destacam a identidade da marca e aumentam o engajamento em ações promocionais.`,
        imageMobile: "/servicos/sectionOne/hotsite-promocional/mobile.png",
        imageDesktop: "/servicos/sectionOne/hotsite-promocional/desktop.png",
        imageAlt: "Hotsite Promocional",
      },
      two: {
        cards: [
          {
            icon: "/servicos/sectionTwo/user-arrows.svg",
            title: "Design Personalizado",
            description:
              "Criação de páginas exclusivas, alinhadas à identidade visual da marca",
          },
          {
            icon: "/servicos/sectionTwo/database.svg",
            title: "Experiência Interativa",
            description:
              "Funcionalidades dinâmicas que incentivam a participação do público",
          },
          {
            icon: "/servicos/sectionTwo/eye.svg",
            title: "Integração de Ferramentas",
            description:
              "Conexão com CRMs, sistemas de pagamento e redes sociais",
          },
          {
            icon: "/servicos/sectionTwo/arrows-merge.svg",
            title: "Gestão em Tempo Real",
            description:
              "Acompanhamento de métricas e desempenho da campanha diretamente na plataforma",
          },
          {
            icon: "/servicos/sectionTwo/apps.svg",
            title: "Otimização para Mobile",
            description:
              "Design responsivo para garantir uma experiência fluida em dispositivos móveis",
          },
        ],
      },
      three: {
        heading: "Por Que Escolher Nossos Hot Sites Promocionais?",
        items: [
          {
            id: 1,
            title: "Engajamento\nElevado",
            description:
              "Experiências imersivas que\ncapturam a atenção do público",
          },
          {
            id: 2,
            title: "Conexão\ncom a Marca",
            description:
              "Comunicação direta e personalizada\ncom os consumidores",
          },
          {
            id: 3,
            title: "Resultados\nMensuráveis",
            description: "Métricas claras para avaliar\no impacto da campanha",
          },
          {
            id: 4,
            title: "Flexibilidade\ne Criatividade",
            description:
              "Soluções adaptadas para diferentes\ntipos de ações promocionais",
          },
          {
            id: 5,
            title: "Conversões\nAumentadas",
            description:
              "Páginas otimizadas para\natrair e reter participantes",
          },
        ],
      },
      four: {
        heading: "Como Nossos Hot Sites Estão Transformando Campanhas?",
        cards: [
          {
            icon: "/servicos/sectionFour/diamond.svg",
            title: "Campanhas de Lançamento",
            description: "Páginas exclusivas para promover novos produtos",
          },
          {
            icon: "/servicos/sectionFour/user-check.svg",
            title: "Sorteios e Promoções",
            description:
              "Plataformas que gerenciam a participação do público e divulgam prêmios",
          },
          {
            icon: "/servicos/sectionFour/search.svg",
            title: "Eventos Especiais",
            description:
              "Hot sites dedicados a festivais, shows ou comemorações sazonais.",
          },
          {
            icon: "/servicos/sectionFour/shopping-bag.svg",
            title: "Captação de Leads",
            description:
              "Ferramentas integradas para capturar dados de potenciais clientes",
          },
        ],
      },
      five: {
        heading: "Hot Sites em Ação",
        challenge:
          "Criar uma plataforma\ndigital que engajasse\nvisitantes e gerenciasse a\nparticipação em campanhas\npromocionais",
        solution:
          "Desenvolvimento de um hot site\ninterativo com cadastro de notas fiscais e\ndistribuição de prêmios.",
        highlightPercentage: "29%",
        highlightLabel: "Engajamento do público",
        imageMobile: "/servicos/sectionFive/cashback/mobile.png",
        imageDesktop: "/servicos/sectionFive/cashback/desktop.png",
        imageAlt: "HotSite Promocional Santo Mercado",
      },
    },
  },
  {
    slug: "analise-de-dados",
    tag: "SERVIÇOS",
    title: "Análise de Dados e BI",
    description:
      "Decisões Inteligentes Baseadas em Dados. Transforme informações em estratégias com relatórios precisos e dashboards personalizados.",
    backgroundMobile: "/servicos/Hero.png",
    backgroundDesktop: "/servicos/HeroDesk.png",
    sections: {
      one: {
        heading: "Decisões\nEstratégicas",
        text: `A Dompa utiliza tecnologia avançada para transformar dados brutos em relatórios precisos e insights estratégicos.
Oferecemos dashboards interativos e personalizados, permitindo que empresas acompanhem campanhas e resultados de forma clara e eficiente.`,
        imageMobile: "/servicos/sectionOne/analise-de-dados-e-bi/mobile.png",
        imageDesktop: "/servicos/sectionOne/analise-de-dados-e-bi/desktop.png",
        imageAlt: "Análise de Dados e BI",
      },
      two: {
        cards: [
          {
            icon: "/servicos/sectionTwo/user-arrows.svg",
            title: "Relatórios Precisos",
            description:
              "Dados organizados e detalhados para decisões informadas",
          },
          {
            icon: "/servicos/sectionTwo/database.svg",
            title: "Dashboards Personalizados",
            description:
              "Painéis adaptados às necessidades específicas da empresa, com informações em tempo real.",
          },
          {
            icon: "/servicos/sectionTwo/eye.svg",
            title: "Insights Estratégicos",
            description:
              "Identificação de padrões e oportunidades para potencializar resultados.",
          },
          {
            icon: "/servicos/sectionTwo/arrows-merge.svg",
            title: "Monitoramento de Campanhas",
            description:
              "Acompanhe o desempenho de campanhas promocionais com métricas claras.",
          },
          {
            icon: "/servicos/sectionTwo/apps.svg",
            title: "Integração de Dados",
            description:
              "Conexão com diferentes fontes para análises centralizadas.",
          },
        ],
      },
      three: {
        heading: "Por Que Escolher Nossa Solução de BI?",
        items: [
          {
            id: 1,
            title: "Decisões Baseadas\nem Dados",
            description: "Minimize incertezas com informações precisas",
          },
          {
            id: 2,
            title: "Visão\nHolística",
            description:
              "Consolide dados de diferentes fontes\nem uma única plataforma",
          },
          {
            id: 3,
            title: "Eficiência\nOperacional",
            description:
              "Acelere análises com relatórios\nautomatizados e dinâmicos",
          },
          {
            id: 4,
            title: "Personalização\nCompleta",
            description:
              "Dashboards que atendem às demandas\nespecíficas do seu negócio",
          },
          {
            id: 5,
            title: "Resultados\nMensuráveis",
            description:
              "Métricas claras que auxiliam no\nacompanhamento de KPIs",
          },
        ],
      },
      four: {
        heading: "Como o BI Está Transformando Empresas?",
        cards: [
          {
            icon: "/servicos/sectionFour/diamond.svg",
            title: "Monitoramento de Campanhas Promocionais",
            description:
              "Relatórios detalhados sobre participação e engajamento.",
          },
          {
            icon: "/servicos/sectionFour/user-check.svg",
            title: "Análise de Mercado",
            description:
              "Identificação de tendências e oportunidades estratégicas",
          },
          {
            icon: "/servicos/sectionFour/search.svg",
            title: "Gestão de Vendas",
            description:
              "Dashboards que acompanham o desempenho de produtos e metas.",
          },
          {
            icon: "/servicos/sectionFour/shopping-bag.svg",
            title: "Medição de ROI",
            description:
              "Avaliação clara do retorno sobre investimentos em campanhas",
          },
        ],
      },
      five: {
        heading: "BI em Ação",
        challenge:
          "Monitorar a eficiência\nde campanhas promocionais e\ngerar insights para estratégias\nfuturas.",
        solution:
          "Criação de dashboards\npersonalizados para acompanhar métricas de\nengajamento e vendas",
        highlightPercentage: "20%",
        highlightLabel: "Aumento de vendas",
        imageMobile: "/servicos/sectionFive/cashback/mobile.png",
        imageDesktop: "/servicos/sectionFive/cashback/desktop.png",
        imageAlt: "BI Santo Mercado",
      },
    },
  },
  {
    slug: "inteligencia-artificial",
    tag: "SERVIÇOS",
    title: "Inteligência Artificial",
    description:
      "Inteligência Artificial: Transformando Dados em Decisões Estratégicas. Automação inteligente e análises avançadas para resultados precisos.",
    backgroundMobile: "/servicos/Hero.png",
    backgroundDesktop: "/servicos/HeroDesk.png",
    sections: {
      one: {
        heading: "O Futuro\nEstá Aqui",
        text: `A Dompa utiliza um algoritmo proprietário baseado em Machine Learning para criar soluções avançadas e automações inteligentes.
Essa tecnologia é capaz de realizar análises profundas, identificando padrões e tendências que ajudam nossos parceiros a tomar decisões assertivas.`,
        imageMobile: "/servicos/sectionOne/inteligencia-artificial/mobile.png",
        imageDesktop:
          "/servicos/sectionOne/inteligencia-artificial/desktop.png",
        imageAlt: "Inteligência Artificial",
      },
      two: {
        cards: [
          {
            icon: "/servicos/sectionTwo/user-arrows.svg",
            title: "Automação Inteligente",
            description:
              "Reduza processos manuais com soluções automatizadas e eficientes.",
          },
          {
            icon: "/servicos/sectionTwo/database.svg",
            title: "Análise Preditiva",
            description:
              "Antecipe tendências e tome decisões baseadas em dados futuros.",
          },
          {
            icon: "/servicos/sectionTwo/eye.svg",
            title: "Segmentação Personalizada",
            description:
              "Identifique padrões de comportamento e segmente públicos com alta precisão.",
          },
          {
            icon: "/servicos/sectionTwo/arrows-merge.svg",
            title: "Recomendações Estratégicas",
            description:
              "Sugestões automatizadas para melhorar a performance das campanhas.",
          },
          {
            icon: "/servicos/sectionTwo/apps.svg",
            title: "Integração de Dados",
            description:
              "Conexão fluida entre diferentes fontes para análises centralizadas",
          },
        ],
      },
      three: {
        heading: "Por que escolher Nossa Tecnologia de IA?",
        items: [
          {
            id: 1,
            title: "Decisões Baseadas\nem Dados",
            description: "Insights confiáveis para\nreduzir incertezas",
          },
          {
            id: 2,
            title: "Eficiência\nOperacional",
            description:
              "Automação de tarefas complexas para\neconomizar tempo e recursos",
          },
          {
            id: 3,
            title: "Maior\nPrecisão",
            description:
              "Resultados mais detalhados e\npersonalizações otimizadas",
          },
          {
            id: 4,
            title: "Inovação\nContínua",
            description:
              "IA atualizada constantemente para\nacompanhar tendências do mercado",
          },
          {
            id: 5,
            title: "Escalabilidade",
            description:
              "Capacidade de adaptar soluções\nconforme o crescimento das demandas\ndo cliente.",
          },
        ],
      },
      four: {
        heading: "Como Nossa IA Está Fazendo a Diferença?",
        cards: [
          {
            icon: "/servicos/sectionFour/diamond.svg",
            title: "Campanhas Promocionais",
            description:
              "Segmentação de participantes e validação em tempo real",
          },
          {
            icon: "/servicos/sectionFour/user-check.svg",
            title: "Análise de Mercado",
            description:
              "Identificação de oportunidades com base em tendências de dados",
          },
          {
            icon: "/servicos/sectionFour/search.svg",
            title: "Recomendações Personalizadas",
            description:
              "Sugestões de ofertas baseadas no comportamento do cliente",
          },
          {
            icon: "/servicos/sectionFour/shopping-bag.svg",
            title: "Social\nListening",
            description:
              "Monitoramento e análise de menções em redes sociais para insights estratégicos",
          },
        ],
      },
      five: {
        heading: "IA em Ação",
        challenge:
          "Gerenciar dados de\n87 concessionárias e validar compras\nem tempo real.",
        solution:
          "Aplicação de IA para integrar dados\ndo chassi e notas fiscais, com análise\nautomatizada.",
        highlightPercentage: "32%",
        highlightLabel: "Redução de Erros",
        imageMobile: "/servicos/sectionFive/campanhas-promocionais/mobile.png",
        imageDesktop:
          "/servicos/sectionFive/campanhas-promocionais/desktop.png",
        imageAlt: "IA BYD",
      },
    },
  },
];
