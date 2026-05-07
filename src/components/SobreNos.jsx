export default function SobreNos() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        <div className="about__image">
          <img src="/assets/images/nossa-historia.jpg" alt="Atendimento em pet shop" />
        </div>

        <div className="about__content">
          <span className="section-label">Nossa missão</span>
          <h2>Cuidar bem começa por escolher melhor.</h2>

          <p>
            A PetCare Store nasceu com o objetivo de aproximar tutores de produtos
            confiáveis, seguros e selecionados com atenção para cada fase da vida do pet.
          </p>

          <p>
            Nesta versão modernizada, o projeto foi pensado como uma vitrine de
            portfólio: visual profissional, boa organização de código, responsividade
            e navegação simples.
          </p>

          <div className="about__stats">
            <div>
              <strong>100%</strong>
              <span>responsivo</span>
            </div>
            <div>
              <strong>SEO</strong>
              <span>estrutura amigável</span>
            </div>
            <div>
              <strong>HDS</strong>
              <span>projeto autoral</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}