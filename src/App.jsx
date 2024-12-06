import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Carrosel from "./components/Carrosel";
import About from "./components/About";
import Parceiros from "./components/Parceiros";
import Servicos from "./components/Servicos";
import Forms from "./components/Contratos";
import Contato from "./components/Contato";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Alert from "./components/Alert"; // Importando o Alert

// Páginas específicas
import Login from "./components/Login"; // Componente de Login
import AlterarMensagem from "./components/AlterarMensagem"; // Componente para alterar a mensagem

function App() {
  const [isAlertOpen, setIsAlertOpen] = useState(true); // Controle do Alert

  return (
    <Router>
      <div>
        <Nav />
        <main>
          {/* Define todas as rotas dentro da estrutura do Router */}
          <Routes>
            {/* Rota de Login */}
            <Route path="/login" element={<Login />} />

            {/* Rota de Alterar Mensagem */}
            <Route path="/alterar-mensagem" element={<AlterarMensagem />} />

            {/* Rota principal */}
            <Route
              path="/"
              element={
                <>
                  {/* Alert */}
                  <Alert isOpen={isAlertOpen} />

                  {/* Seções da página principal */}
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
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
