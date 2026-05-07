export default function HeroSection() {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="tag">Pet shop moderno • HDS</span>

          <h1>Produtos, carinho e bem-estar para quem faz parte da sua família.</h1>

          <p>
            Uma experiência digital moderna para pet shops que desejam apresentar
            produtos, gerar confiança e facilitar o contato com clientes.
          </p>

          <div className="hero__actions">
            <a href="#produtos" className="btn btn--primary">
              Ver produtos
            </a>
            <a href="#contato" className="btn btn--secondary">
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="hero__card">
          <img
            src="/assets/images/hero-background.jpg"
            alt="Cachorro feliz dentro de um pet shop"
          />

          <div className="hero__floating-card">
            <strong>+320</strong>
            <span>clientes satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
}