import React from 'react';
import '../assets/styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-conteudo">
        <h1>O melhor para quem te dá o melhor.</h1>
        <p>Produtos de alta qualidade e com muito carinho para o seu melhor amigo.</p>
        <a href="#produtos" className="hero-cta">Conheça Nossos Produtos</a>
      </div>
    </section>
  );
};

export default HeroSection;