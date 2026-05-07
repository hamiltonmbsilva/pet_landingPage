import { useState } from "react";

export default function FormularioContato() {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  function alterarCampo(event) {
    const { name, value } = event.target;

    setFormulario((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: value,
    }));
  }

  function enviarFormulario(event) {
    event.preventDefault();

    const mensagemWhatsApp = `Olá, meu nome é ${formulario.nome}. ${formulario.mensagem}`;
    const telefone = "5511999999999";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagemWhatsApp)}`;

    window.open(url, "_blank");

    setFormulario({
      nome: "",
      email: "",
      mensagem: "",
    });
  }

  return (
    <section id="contato" className="section contact">
      <div className="container contact__grid">
        <div className="contact__content">
          <span className="section-label">Contato</span>
          <h2>Pronto para cuidar melhor do seu pet?</h2>
          <p>
            Este formulário simula um contato profissional e já direciona o usuário
            para o WhatsApp. Troque o telefone pelo número real do cliente.
          </p>

          <ul>
            <li>Atendimento rápido</li>
            <li>Produtos selecionados</li>
            <li>Experiência moderna</li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={enviarFormulario}>
          <label>
            Nome
            <input
              type="text"
              name="nome"
              value={formulario.nome}
              onChange={alterarCampo}
              placeholder="Digite seu nome"
              required
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={formulario.email}
              onChange={alterarCampo}
              placeholder="Digite seu e-mail"
              required
            />
          </label>

          <label>
            Mensagem
            <textarea
              name="mensagem"
              value={formulario.mensagem}
              onChange={alterarCampo}
              placeholder="Como podemos ajudar?"
              required
            />
          </label>

          <button type="submit" className="btn btn--primary">
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}