import { useEffect, useState } from "react";
import { listarProdutos } from "../data/produtosRepository";
import CardProduto from "./CardProduto";

export default function CatalogoProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      const resposta = await listarProdutos();
      setProdutos(resposta);
      setCarregando(false);
    }

    carregarProdutos();
  }, []);

  return (
    <section id="produtos" className="section products">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Catálogo</span>
          <h2>Produtos em destaque</h2>
          <p>
            Cards modernos, responsivos e organizados para apresentar produtos
            de forma clara.
          </p>
        </div>

        {carregando ? (
          <p>Carregando produtos...</p>
        ) : (
          <div className="products__grid">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}