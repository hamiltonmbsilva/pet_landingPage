// src/services/api.js

export const getProdutos = async () => {
  // Em um projeto real, aqui seria a chamada à API:
  // const response = await fetch('https://minha-api.com/produtos');
  // const data = await response.json();
  // return data;

  // Para o nosso front-end, vamos usar um array mockado:
  return [
    {
      id: 1,
      nome: 'Ração Premium para Cães',
      preco: 120.50,
      descricao: 'Alimento completo e balanceado, ideal para cães adultos de todas as raças.',
      imagem: '/assets/images/racao-cao.jpg' // A imagem deve estar na pasta assets/images
    },
    {
      id: 2,
      nome: 'Brinquedo Bola de Corda',
      preco: 25.00,
      descricao: 'Brinquedo resistente para cães, ajuda na higiene bucal.',
      imagem: '/assets/images/brinquedo-bola.jpg'
    },
    {
      id: 3,
      nome: 'Arranhador para Gatos',
      preco: 95.00,
      descricao: 'Ideal para gatos afiarem as unhas e se divertirem.',
      imagem: '/assets/images/arranhador-gato.jpg'
    },
    // Adicione mais produtos conforme necessário
  ];
};