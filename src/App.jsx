import Nav from "./components/Nav";


function App() {
  return (
    <div>
      <Nav/>
      <main>
        <section
          id="inicio"
          className="h-screen bg-blue-500 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl">Bem-vindo ao Início</h1>
        </section>
        <section
          id="quem-somos"
          className="h-screen bg-green-500 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl">Quem Somos</h1>
        </section>
        <section
          id="nossos-servicos"
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
          id="parceiros"
          className="h-screen bg-purple-500 flex items-center justify-center"
        >
          <h1 className="text-white text-4xl">Parceiros</h1>
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
