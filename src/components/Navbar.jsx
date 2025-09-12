import React, { useState } from 'react';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo" onClick={fecharMenu}>
        <img src="/assets/images/logo.png" alt="Logo Pet Store" />
      </a>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-menu ${menuAberto ? 'aberto' : ''}`}>
        <li><a href="#produtos" onClick={fecharMenu}>Nossos Produtos</a></li>
        <li><a href="#sobre-nos" onClick={fecharMenu}>Sobre Nós</a></li>
        <li><a href="#contato" onClick={fecharMenu}>Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;