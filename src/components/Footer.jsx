import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-conteudo">
        <div className="footer-contato">
          <h3>Fale Conosco</h3>
          <p>Email: contato@petstore.com.br</p>
          <p>Telefone: (11) 99999-9999</p>
        </div>
        <div className="footer-redes">
          <h3>Siga-nos</h3>
          <div className="redes-sociais-icones">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/icon-facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/icon-instagram.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/icon-twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Pet Store. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;