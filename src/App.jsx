import React, { useState } from "react";
import Alert from "./components/Alert"; // Importe o componente Alert
import Nav from "./components/Nav";
import Carrosel from "./components/Carrosel";
import About from "./components/About";
import Parceiros from "./components/Parceiros";
import Servicos from "./components/Servicos";
import Forms from "./components/Contratos";
import Contato from "./components/Contato";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  const [isAlertOpen, setIsAlertOpen] = useState(true); // Controla a exibição do alerta

  // Função para fechar o alerta
  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <div>
      <Nav />
      <main>
        <section id="inicio">
          <Carrosel />
        </section>
        <section id="quem-somos">
          <About />
          <Parceiros />
        </section>
        <section id="servicos">
          <Servicos />
        </section>
        <section id="formularios">
          <Forms />
        </section>
        <section id="contato">
          <Contato />
        </section>
        <section id="localizacao">
          <Location />
        </section>
        <Footer />
      </main>

      {/* Exibe o alerta no topo */}
      <Alert isOpen={isAlertOpen} />
    </div>
  );
}

export default App;
