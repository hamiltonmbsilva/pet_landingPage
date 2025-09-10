// src/components/ui/CardProduto.jsx
import React from 'react';
import '../../assets/styles/CardProduto.css'; // Vamos criar este CSS depois

const CardProduto = ({ produto }) => {
  return (
    <div className="card-produto">
      <img src={produto.imagem} alt={produto.nome} className="card-produto-imagem" />
      <div className="card-produto-info">
        <h3>{produto.nome}</h3>
        <p className="card-produto-preco">R$ {produto.preco.toFixed(2).replace('.', ',')}</p>
        <p className="card-produto-descricao">{produto.descricao}</p>
        <button className="card-produto-botao">Ver Detalhes</button>
      </div>
    </div>
  );
};

export default CardProduto;