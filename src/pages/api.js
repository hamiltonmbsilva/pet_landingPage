export const getProdutos = async () => {
  return [
    {
      id: 1,
      nome: 'Ração Premium para Cães',
      preco: 120.50,
      descricao: 'Alimento completo e balanceado, ideal para cães adultos de todas as raças.',
      imagem:'/assets/images/racao-cao.jpg'
    },
    {
      id: 2,
      nome: 'Brinquedo Bola de Corda',
      preco: 25.00,
      descricao: 'Brinquedo resistente para cães, ajuda na higiene bucal.',
      imagem:'/assets/images/brinquedo-bola.jpg'
    },
    {
      id: 3,
      nome: 'Arranhador para Gatos',
      preco: 95.00,
      descricao: 'Ideal para gatos afiarem as unhas e se divertirem.',
      imagem:'/assets/images/arranhador-gato.jpg'
    },
  ];
};