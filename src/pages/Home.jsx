import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SobreNos from "../components/SobreNos";
import CatalogoProdutos from "../components/CatalogoProdutos";
import Depoimentos from "../components/Depoimentos";
import FormularioContato from "../components/FormularioContato";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="app-page">
      <Navbar />

      <main>
        <HeroSection />
        <SobreNos />
        <CatalogoProdutos />
        <Depoimentos />
        <FormularioContato />
      </main>

      <Footer />
    </div>
  );
}