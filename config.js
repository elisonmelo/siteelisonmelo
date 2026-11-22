/* ------------------------------------------------------------------
   CONFIGURAÇÃO DO LINK NA BIO
   Tudo que muda com frequência fica aqui. Edite e salve: pronto.
------------------------------------------------------------------- */

// Número do WhatsApp só com dígitos: DDI + DDD + número.
// Exemplo: "5511999999999"
const WHATSAPP = "558181366219";

// Links principais. Cada item vira um botão.
//   icone:     "crescimento" | "sistema" | "site"
//   titulo:    texto grande do botão
//   descricao: linha pequena embaixo do título
//   mensagem:  texto que já chega escrito no seu WhatsApp
//   url:       (opcional) se preencher, o botão abre essa URL em vez do WhatsApp
//   destaque:  true deixa o botão com a borda clara
const LINKS = [
  {
    icone: "crescimento",
    titulo: "Quero mais clientes",
    descricao: "Tráfego pago: anúncios para quem já procura o que você vende",
    mensagem: "Oi, Elison. Vim pelo seu link da bio e quero saber sobre tráfego pago.",
    destaque: true,
  },
  {
    icone: "sistema",
    titulo: "Quero um sistema",
    descricao: "Sob medida, para tirar sua operação da planilha",
    mensagem: "Oi, Elison. Vim pelo seu link da bio e quero criar um sistema.",
  },
  {
    icone: "site",
    titulo: "Quero um site",
    descricao: "Rápido no celular e pronto para receber anúncios",
    mensagem: "Oi, Elison. Vim pelo seu link da bio e quero criar um site.",
  },
];

// Mensagem do botão "Chamar no WhatsApp" do rodapé.
const MENSAGEM_GERAL = "Oi, Elison. Vim pelo seu link da bio e quero conversar.";

// Redes sociais (os ícones abaixo da frase). Deixe a url vazia para
// manter o ícone apagado; apague a linha para remover o ícone.
//   rede: "instagram" | "linkedin" | "email"  (email usa "mailto:endereco")
const REDES = [
  { rede: "instagram", url: "https://www.instagram.com/desenvor/" },
  { rede: "email", url: "mailto:elisonrdm@gmail.com" },
];
