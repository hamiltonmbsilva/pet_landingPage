// src/App.jsx
import React from 'react';
import Home from './pages/Home';
import './assets/styles/global.css'; // Estilos CSS globais, como fontes, reset, etc.

const App = () => {
  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
};

export default App;