import Location from "./components/Location";
import About from "./components/About";
import Carrosel from "./components/Carrosel";
import Contratos from "./components/Contratos";
import Nav from "./components/Nav";
import Servicos from "./components/Servicos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Parceiros from "./components/Parceiros";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <section id="inicio">
          <Carrosel />
        </section>
        <section
          id="quem-somos"
        >
          <About/>
          <Parceiros/>
        </section>
        <section
          id="servicos"
        >
          <Servicos/>
        </section>
        <section
          id="contratos"
        >
          <Contratos/>
        </section>
        <section
          id="contato"
        >
          <Contato/>
        </section>
        <section
          id="localizacao"
        >
          <Location/>
        </section>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
