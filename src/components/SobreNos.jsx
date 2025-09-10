import React from 'react';
import '../assets/styles/SobreNos.css';

const SobreNos = () => {
  return (
    <section id="sobre-nos" className="sobre-nos-section">
      <div className="container">
        <h2>Nossa História e Missão</h2>
        <div className="sobre-nos-conteudo">
          <img src="/assets/images/nossa-historia.jpg" alt="Pet Shop" className="sobre-nos-imagem" />
          <div className="sobre-nos-texto">
            <p>
              Nossa jornada começou com um amor incondicional por animais. Acreditamos que pets são membros da família e merecem o melhor cuidado possível.
            </p>
            <p>
              Nosso objetivo é oferecer produtos de alta qualidade, seguros e que tragam alegria e bem-estar para o seu companheiro de quatro patas. Todos os nossos produtos são selecionados com carinho, pensando na saúde e felicidade deles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;