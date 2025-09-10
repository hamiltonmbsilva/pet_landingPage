import React from 'react';
import '../assets/styles/Depoimentos.css';

const Depoimentos = () => {
  const depoimentos = [
    {
      id: 1,
      texto: 'Adorei os produtos! Meu cachorro se divertiu muito com o novo brinquedo.',
      autor: 'Maria S.',
      pet: 'Buddy',
      imagem: '/assets/images/depoimento1.jpg'
    },
    {
      id: 2,
      texto: 'Entrega super rápida e ração de altíssima qualidade. O meu gato está mais feliz e saudável.',
      autor: 'João P.',
      pet: 'Mia',
      imagem: '/assets/images/depoimento2.jpg'
    },
    // Adicione mais depoimentos aqui
  ];

  return (
    <section className="depoimentos-section">
      <div className="container">
        <h2>O que nossos clientes dizem</h2>
        <div className="depoimentos-grid">
          {depoimentos.map(depoimento => (
            <div key={depoimento.id} className="depoimento-card">
              <img src={depoimento.imagem} alt={`Foto de ${depoimento.pet}`} className="depoimento-imagem" />
              <p className="depoimento-texto">"{depoimento.texto}"</p>
              <p className="depoimento-autor">- {depoimento.autor} com o(a) {depoimento.pet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;