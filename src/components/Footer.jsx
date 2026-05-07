export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3>PetCare Store</h3>
          <p>
            Projeto modernizado por HDS para portfólio, com foco em layout
            responsivo, experiência do usuário e organização de código.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
        </div>

        <div>
          <h4>Contato</h4>
          <p>contato@petcare.com.br</p>
          <p>(11) 99999-9999</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} PetCare Store. Desenvolvido por HDS.</p>
      </div>
    </footer>
  );
}