export default function CardProduto({ produto }) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={produto.imagem} alt={produto.nome} />

        {produto.destaque && (
          <span className="product-card__badge">Destaque</span>
        )}
      </div>

      <div className="product-card__content">
        <span>{produto.categoria}</span>
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>

        <div className="product-card__footer">
          <strong>{produto.precoFormatado}</strong>
          <button type="button">Ver detalhes</button>
        </div>
      </div>
    </article>
  );
}