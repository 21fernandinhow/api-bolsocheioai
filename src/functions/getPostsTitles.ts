import {PostModel, interfacePost} from "../models/post";

export const getPostTitle = async () => {

  try {
    const posts: interfacePost[] = await PostModel.find();
    const todayPostTitle = postsTitles[posts.length];
    return todayPostTitle
  } catch (error) {
    console.log(`Erro ao gerar título de Post: ${error}`)
  }

}

const postsTitles = [
  "Como Economizar Dinheiro: Dicas Práticas para Iniciantes",
  "Investindo para o Futuro: Estratégias Inteligentes de Investimento",
  "Orçamento Doméstico: Como Criar e Manter um Orçamento Eficiente",
  "O Que Fazer com seu Dinheiro Antes dos 30 Anos",
  "Entendendo os Juros: Como Funcionam e Como Evitá-los",
  "A Importância de um Fundo de Emergência: Como Criar e Manter o Seu",
  "O Poder dos Pequenos Investimentos: Comece a Investir com Pouco Dinheiro",
  "Desmistificando o Mercado de Ações: Um Guia para Iniciantes",
  "Planejamento Financeiro: Por Que é Importante e Como Começar",
  "Como Sair das Dívidas: Estratégias Eficazes para Eliminar Débitos",
  "Investindo no Longo Prazo: Construindo Riqueza ao Longo do Tempo",
  "O Mundo das Criptomoedas: O Que Você Precisa Saber",
  "Os Melhores Aplicativos para Controlar suas Finanças Pessoais",
  "Estratégias para Economizar Dinheiro no Dia a Dia",
  "A Psicologia do Dinheiro: Como Nossas Emoções Afetam as Finanças",
  "O Papel do Seguro na Segurança Financeira: O Que Você Precisa Entender",
  "Como Aumentar sua Pontuação de Crédito: Dicas Práticas",
  "Investir em Imóveis: Uma Opção Inteligente para Diversificar",
  "A Arte da Negociação: Como Conseguir Descontos e Ofertas",
  "Finanças para Empreendedores: Como Gerenciar as Finanças do seu Negócio",
  "Entendendo os Impostos: Dicas para Maximizar sua Restituição",
  "O Futuro das Finanças: Tendências a Observar nos Próximos Anos",
  "Diversificação de Investimentos: Por que é Importante e Como Fazer",
  "Educação Financeira para Crianças: Como Ensinar desde Cedo",
  "Economizando para a Aposentadoria: Estratégias para um Futuro Confortável",
  "Como Investir em Ações com Sabedoria: Dicas para Iniciantes",
  "Hábitos Financeiros de Pessoas Bem-Sucedidas: Lições a Serem Aprendidas",
  "O Papel do Ouro no Portfólio de Investimentos",
  "Finanças Sustentáveis: Investindo com Responsabilidade Social",
  "Como Lidar com Despesas Inesperadas: Estratégias para se Preparar",
  "O Que Fazer com seu Dinheiro Extra: Opções de Investimento Inteligentes",
  "Estratégias para Pagar Menos Impostos Legalmente",
  "A Importância do Planejamento Sucessório: Protegendo seu Patrimônio",
  "Investindo em Educação Financeira: Recursos e Cursos Recomendados",
  "A Psicologia dos Gastos: Como Evitar Compras Impulsivas",
  "Investindo no Exterior: O Que Você Precisa Saber",
  "Como Superar uma Crise Financeira: Passos Práticos para a Recuperação",
  "O Mundo dos Empréstimos Pessoais: Quando é uma Boa Opção?",
  "A Arte de Negociar um Aumento Salarial: Dicas para Ter Sucesso",
  "Construindo um Portfólio de Aposentadoria Robusto",
  "A Importância do Planejamento Tributário Pessoal",
  "Como Escolher um Consultor Financeiro: Dicas para Tomar a Melhor Decisão",
  "Como Manter um Estilo de Vida Equilibrado Financeiramente",
  "Investindo em Startups: Riscos e Recompensas",
  "Como Escolher o Melhor Cartão de Crédito para Você",
  "A Influência da Inflação nos Investimentos: Estratégias para se Proteger",
  "Estratégias de Investimento para o Curto Prazo",
  "A Importância da Reserva de Liquidez: Dinheiro Disponível em Caso de Necessidade",
  "Finanças no Casamento: Como Gerenciar o Dinheiro em Conjunto",
  "A Revolução das Finanças Digitais: Como Aproveitar ao Máximo",
  "O Papel da Tecnologia na Transformação das Finanças Pessoais",
  "Como se Preparar Financeiramente para a Aposentadoria: Passos Essenciais"
];