import { Produto } from "../domain/produtoModel";

const produtosMock = [
  {
    id: 1,
    nome: "Ração Premium para Cães",
    categoria: "Alimentação",
    preco: 120.5,
    descricao: "Nutrição completa para cães adultos, com ingredientes selecionados.",
    imagem: "/assets/images/racao-cao.jpg",
    destaque: true,
  },
  {
    id: 2,
    nome: "Bola de Corda Interativa",
    categoria: "Brinquedos",
    preco: 25,
    descricao: "Brinquedo resistente para diversão, mordida e gasto de energia.",
    imagem: "/assets/images/brinquedo-bola.jpg",
    destaque: false,
  },
  {
    id: 3,
    nome: "Arranhador para Gatos",
    categoria: "Gatos",
    preco: 95,
    descricao: "Ideal para gatos afiarem as unhas, brincarem e relaxarem.",
    imagem: "/assets/images/arranhador-gato.jpg",
    destaque: true,
  },
];

export async function listarProdutos() {
  return produtosMock.map((produto) => new Produto(produto));
}