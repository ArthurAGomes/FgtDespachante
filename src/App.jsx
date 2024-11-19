import About from "./components/About";
import Carrosel from "./components/Carrosel";
import Nav from "./components/Nav";


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
          className="h-screen bg-red-500 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl">Nossos Serviços</h1>
        </section>
        <section
          id="contratos"
          className="h-screen bg-yellow-500 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl">Modelos de Contrato</h1>
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
