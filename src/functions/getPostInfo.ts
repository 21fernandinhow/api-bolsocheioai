import {PostModel, interfacePost} from "../models/post";

export interface postInfo {
  title: string,
  keywords: string[]
}

export const getPostInfo = async (append: number = 0) => {

  try {
    const posts: interfacePost[] = await PostModel.find();
    const todayPostInfo = postsInfos[posts.length + append];
    return todayPostInfo
  } catch (error) {
    console.log(`Erro ao gerar título de Post: ${error}`)
  }

}

const postsInfos = [
  {
    title: "Como Economizar Dinheiro: Dicas Práticas para Iniciantes", 
    keywords: ["economia", "poupança", "gastos", "finanças pessoais"] 
  },
  {
    title: "Investindo para o Futuro: Estratégias Inteligentes de Investimento", 
    keywords: ["investimento", "planejamento financeiro", "gestão de patrimônio"] 
  },
  {
    title: "Orçamento Doméstico: Como Criar e Manter um Orçamento Eficiente", 
    keywords: ["orçamento", "controle financeiro", "despesas familiares"] 
  },
  {
    title: "O Que Fazer com seu Dinheiro Antes dos 30 Anos", 
    keywords: ["finanças pessoais", "jovens adultos", "independência financeira"] 
  },
  {
    title: "Entendendo os Juros: Como Funcionam e Como Evitá-los", 
    keywords: ["juros", "empréstimos", "financiamento", "taxas de juros"] 
  },
  {
    title: "A Importância de um Fundo de Emergência: Como Criar e Manter o Seu", 
    keywords: ["reserva financeira", "segurança financeira", "contingência"] 
  },
  {
    title: "O Poder dos Pequenos Investimentos: Comece a Investir com Pouco Dinheiro", 
    keywords: ["investimento inicial", "microinvestimentos", "renda passiva"] 
  },
  {
    title: "Desmistificando o Mercado de Ações: Um Guia para Iniciantes", 
    keywords: ["bolsa de valores", "ações", "investimentos em ações"] 
  },
  {
    title: "Planejamento Financeiro: Por Que é Importante e Como Começar", 
    keywords: ["gestão financeira", "estratégias financeiras", "orçamento pessoal"] 
  },
  {
    title: "Como Sair das Dívidas: Estratégias Eficazes para Eliminar Débitos", 
    keywords: ["quitação de dívidas"] 
  },
  {
    title: "Investindo no Longo Prazo: Construindo Riqueza ao Longo do Tempo", 
    keywords: ["investimento a longo prazo", "acumulação de riqueza"] 
  },
  {
    title: "O Mundo das Criptomoedas: O Que Você Precisa Saber", 
    keywords: ["criptomoedas", "blockchain", "investimentos digitais"] 
  },
  {
    title: "Os Melhores Aplicativos para Controlar suas Finanças Pessoais", 
    keywords: ["aplicativos financeiros", "gestão de dinheiro", "tecnologia financeira"] 
  },
  {
    title: "Estratégias para Economizar Dinheiro no Dia a Dia", 
    keywords: ["economia diária", "dicas de economia", "gestão de despesas"] 
  },
  {
    title: "A Psicologia do Dinheiro: Como Nossas Emoções Afetam as Finanças", 
    keywords: ["psicologia financeira", "comportamento financeiro", "emoções e dinheiro"] 
  },
  {
    title: "O Papel do Seguro na Segurança Financeira: O Que Você Precisa Entender", 
    keywords: ["seguro", "proteção financeira", "planejamento de risco"] 
  },
  {
    title: "Como Aumentar sua Pontuação de Crédito: Dicas Práticas", 
    keywords: ["pontuação de crédito", "histórico de crédito", "score de crédito"] 
  },
  {
    title: "Investir em Imóveis: Uma Opção Inteligente para Diversificar", 
    keywords: ["investimento imobiliário", "propriedade real", "mercado imobiliário"] 
  },
  {
    title: "A Arte da Negociação: Como Conseguir Descontos e Ofertas", 
    keywords: ["negociação", "habilidades de negociação", "estratégias de barganha"] 
  },
  {
    title: "Finanças para Empreendedores: Como Gerenciar as Finanças do seu Negócio", 
    keywords: ["finanças empresariais", "empreendedorismo", "gestão financeira de negócios"] 
  },
  {
    title: "Entendendo os Impostos: Dicas para Maximizar sua Restituição", 
    keywords: ["impostos", "planejamento tributário", "declaração de imposto de renda"] 
  },
  {
    title: "O Futuro das Finanças: Tendências a Observar nos Próximos Anos", 
    keywords: ["tendências financeiras", "inovação financeira", "tecnologia financeira"] 
  },
  {
    title: "Diversificação de Investimentos: Por que é Importante e Como Fazer", 
    keywords: ["diversificação de portfólio", "estratégias de investimento", "gestão de risco"] 
  },
  {
    title: "Educação Financeira para Crianças: Como Ensinar desde Cedo", 
    keywords: ["educação financeira infantil", "ensino de finanças", "educação financeira familiar"] 
  },
  {
    title: "Economizando para a Aposentadoria: Estratégias para um Futuro Confortável", 
    keywords: ["previdência", "aposentadoria", "planejamento de aposentadoria"] 
  },
  {
    title: "Como Investir em Ações com Sabedoria: Dicas para Iniciantes", 
    keywords: ["investimento em ações", "estratégias de investimento", "mercado de ações"] 
  },
  {
    title: "Hábitos Financeiros de Pessoas Bem-Sucedidas: Lições a Serem Aprendidas", 
    keywords: ["hábitos financeiros", "sucesso financeiro", "mentalidade financeira"] 
  },
  {
    title: "O Papel do Ouro no Portfólio de Investimentos", 
    keywords: ["ouro", "investimento em ouro", "metal precioso"] 
  },
  {
    title: "Finanças Sustentáveis: Investindo com Responsabilidade Social", 
    keywords: ["investimento sustentável", "finanças éticas", "responsabilidade social corporativa"] 
  },
  {
    title: "Como Lidar com Despesas Inesperadas: Estratégias para se Preparar", 
    keywords: ["reserva de emergência", "imprevistos financeiros", "despesas inesperadas", "como fazer reserva de emergência"] 
  },
  {
    title: "O Que Fazer com seu Dinheiro Extra: Opções de Investimento Inteligentes", 
    keywords: ["renda extra", "2024", "melhores opções de investimento", "o que fazer com dinheiro", "onde investir"] 
  },
  {
    title: "Estratégias para Pagar Menos Impostos Legalmente", 
    keywords: ["pagar menos impostos", "declarar impostos", "imposto de renda", "restituição", "restituição do imposto de renda"] 
  },
  {
    title: "A Importância do Planejamento Sucessório: Protegendo seu Patrimônio", 
    keywords: ["planejamento sucessório", "herança", "proteção de patrimônio", "proteger patrimônio"] 
  },
  {
    title: "A Psicologia dos Gastos: Como Evitar Compras Impulsivas", 
    keywords: ["compras impulsivas", "psicologia do dinheiro", "como economizar", "como parar de gastar", "consumismo", "comportamento de compra", "psicologia do consumo"] 
  },
  {
    title: "Investindo no Exterior: O Que Você Precisa Saber", 
    keywords: ["investimento internacional", "mercado global", "investir no exterior", "S&P500", "diversificação internacional"] 
  },
  {
    title: "Como Superar uma Crise Financeira: Passos Práticos para a Recuperação", 
    keywords: ["crise financeira", "recuperação financeira", "inflaçao", "aperto financeiro", "como economizar", "planejamento de crise"] 
  },
  {
    title: "O Mundo dos Empréstimos Pessoais: Quando é uma Boa Opção?", 
    keywords: ["empréstimos pessoais", "cálculo de juros", "juros abusivos", "financiamento", "fazer empréstimo", "como fazer empréstimo"] 
  },
  {
    title: "A Arte de Negociar um Aumento Salarial: Dicas para Ter Sucesso", 
    keywords: ["aumento salarial", "negociação salarial", "valorização profissional", "como ganhar mais"] 
  },
  {
    title: "Construindo um Portfólio de Aposentadoria Robusto", 
    keywords: ["diversificação de investimentos", "alocação de ativos", "planejamento fiscal para aposentadoria", "aposentadoria antecipada", "como investir para aposentadoria", "dicas para aposentadoria"] 
  },
  {
    title: "A Importância do Planejamento Tributário Pessoal", 
    keywords: ["deduções fiscais", "isenções fiscais", "planejamento fiscal estratégico", "impostos sobre heranças", "impostos sobre investimentos", "impostos sobre sucessões"] 
  },
  {
    title: "Como Escolher um Consultor Financeiro: Dicas para Tomar a Melhor Decisão", 
    keywords: ["escolher consultor financeiro", "qualidades consultor financeiro", "serviços consultoria financeira", "taxas consultoria financeira", "perguntas para consultor financeiro"]
  },
  {
    title: "Como Manter um Estilo de Vida Equilibrado Financeiramente", 
    keywords: [ "como fazer um orçamento", "habitos financeiros saudáveis", "equilibrio financeiro", "como não gastar demais"] 
  },
  {
    title: "Investindo em Startups: Riscos e Recompensas", 
    keywords: ["como investir em startups", "porque investir em startups", "crowdfunding", "investimento anjo", "venture capital", "avaliação de startups", "dicas para investir em startups"] 
  },
  {
    title: "Como Escolher o Melhor Cartão de Crédito para Você", 
    keywords: ["escolher cartão de crédito", "melhores cartões de crédito", "cartão de crédito ideal", "comparação de cartões de crédito"]
  },
  {
    title: "A Influência da Inflação nos Investimentos: Estratégias para se Proteger", 
    keywords: ["inflação e investimentos", "proteção contra inflação", "estratégias de investimento", "como se proteger da inflação"]
  },
  {
    title: "Estratégias de Investimento para o Curto Prazo", 
    keywords: ["investimento de curto prazo", "estratégias de investimento", "ganhos rápidos", "investimento temporário"]
  },
  {
    title: "A Importância da Reserva de Liquidez: Dinheiro Disponível em Caso de Necessidade", 
    keywords: ["reserva de liquidez", "dinheiro disponível", "emergência financeira", "fundo de emergência", "planejamento financeiro"]
  },
  {
    title: "Finanças no Casamento: Como Gerenciar o Dinheiro em Conjunto", 
    keywords: ["Finanças no casamento", "Gerenciar dinheiro em conjunto", "Orçamento familiar", "Planejamento financeiro a dois", "finanças para casais"]
  },
  {
    title: "A Revolução das Finanças Digitais: Como Aproveitar ao Máximo", 
    keywords: ["Finanças digitais", "Bancos Digitais", "Revolução financeira digital", "Tecnologia financeira", "Serviços financeiros online", "IA nas finanças", "Bancos digitais", "Carteira digital"]
  },
  {
    title: "O Papel da Tecnologia na Transformação das Finanças Pessoais", 
    keywords: ["Tecnologia e finanças pessoais", "Transformação financeira", "Apps de finanças pessoais", "Inovações financeiras", "fintechs", "Ia nas finanças", "Bancos digitais"]
  },
  {
    title: "Como se Preparar Financeiramente para a Aposentadoria: Passos Essenciais", 
    keywords: ["Preparação para aposentadoria", "Planejamento financeiro para aposentadoria", "Passos para aposentadoria", "Investimentos para aposentadoria", "Renda passiva"]
  }
];
