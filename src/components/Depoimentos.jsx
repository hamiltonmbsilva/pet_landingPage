const depoimentos = [
  {
    id: 1,
    texto: "Atendimento excelente e produtos de ótima qualidade. Meu cachorro adorou.",
    autor: "Maria Souza",
    pet: "Buddy",
    imagem: "/assets/images/depoimento1.jpg",
  },
  {
    id: 2,
    texto: "Comprei para meu gato e chegou tudo certinho. Site bonito e fácil de usar.",
    autor: "João Pereira",
    pet: "Mia",
    imagem: "/assets/images/depoimento2.jpg",
  },
  {
    id: 3,
    texto: "Gostei muito da organização dos produtos e da facilidade para entrar em contato.",
    autor: "Ana Lima",
    pet: "Thor",
    imagem: "/assets/images/depoimento3.jpg",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Confiança</span>
          <h2>Clientes felizes, pets mais felizes ainda.</h2>
        </div>

        <div className="testimonials__grid">
          {depoimentos.map((depoimento) => (
            <article className="testimonial-card" key={depoimento.id}>
              <img src={depoimento.imagem} alt={`Foto de ${depoimento.pet}`} />
              <p>“{depoimento.texto}”</p>
              <strong>{depoimento.autor}</strong>
              <span>Tutor(a) de {depoimento.pet}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}