import { useState } from "react";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="navbar">
      <a href="#inicio" className="navbar__brand" onClick={fecharMenu}>
        <span className="navbar__logo">HDS</span>
        <div>
          <strong>PetCare Store</strong>
          <small>Cuidado moderno para pets</small>
        </div>
      </a>

      <button
        className="navbar__toggle"
        onClick={() => setMenuAberto((estadoAtual) => !estadoAtual)}
        aria-label="Abrir menu"
        aria-expanded={menuAberto}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar__menu ${menuAberto ? "navbar__menu--open" : ""}`}>
        <a href="#sobre" onClick={fecharMenu}>Sobre</a>
        <a href="#produtos" onClick={fecharMenu}>Produtos</a>
        <a href="#depoimentos" onClick={fecharMenu}>Depoimentos</a>
        <a href="#contato" onClick={fecharMenu} className="navbar__cta">Contato</a>
      </nav>
    </header>
  );
}