import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SobreNos from '../components/SobreNos';
import CatalogoProdutos from '../components/CatalogoProdutos';
import Depoimentos from '../components/Depoimentos';
import FormularioContato from '../components/FormularioContato';
import Footer from '../components/Footer';
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <main>
        <SobreNos />
        <CatalogoProdutos />
        <Depoimentos />
        <FormularioContato />
      </main>
      <Footer />
    </div>
  );
};

export default Home;