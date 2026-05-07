export class Produto {
  constructor({ id, nome, categoria, preco, descricao, imagem, destaque }) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.destaque = destaque;
  }

  get precoFormatado() {
    return this.preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}