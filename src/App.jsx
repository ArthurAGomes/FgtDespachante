import About from "./components/About";
import Carrosel from "./components/Carrosel";
import Contratos from "./components/Contratos";
import Nav from "./components/Nav";
import Servicos from "./components/Servicos";


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
          className="h-screen bg-teal-500 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl">Contato</h1>
        </section>
        <section
          id="localizacao"
          className="h-screen bg-indigo-500 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl">Localização</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
