import React, { useState, useEffect } from 'react';
import CardProduto from './ui/CardProduto';
import { getProdutos } from '../pages/api';
import '../assets/styles/CatalogoProdutos.css';

const CatalogoProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const data = await getProdutos();
      setProdutos(data);
    };

    fetchProdutos();
  }, []);

  return (
    <section id="produtos" className="catalogo-produtos">
      <div className="container">
        <h2>Nossos Produtos</h2>
        <div className="catalogo-grid">
          {produtos.map(produto => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogoProdutos;