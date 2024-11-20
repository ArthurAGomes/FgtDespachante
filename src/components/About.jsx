import aboutImg from "../assets/img/about-img.png";

function About() {
  return (
    <div className="w-full h-full  py-16 px-5 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <img
          src={aboutImg}
          alt="Sobre nós"
          className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute top-0 left-0 w-full h-full   rounded-lg -z-10"></div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-gray-800 space-y-6">
        {/* Title */}
        <h1 className="text-4xl font-thin border-b-4 border-blue-500 inline-block pb-2">
          Quem Somos
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl  text-gray-800 font-thin">
          Criamos Soluções que Inspiram
        </h2>

        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-800">
          Nossa missão é transformar ideias em realidade através de soluções
          criativas e inovadoras. Com uma equipe apaixonada, entregamos
          excelência em cada projeto, sempre priorizando as necessidades dos
          nossos clientes e buscando impactar positivamente suas vidas e
          negócios.
        </p>

        {/* Additional Information */}
        <p className="text-lg leading-relaxed text-gray-800">
          Seja você um pequeno empreendedor ou uma grande organização, estamos
          aqui para oferecer serviços personalizados que geram resultados
          duradouros. Junte-se a nós e faça parte de uma história de sucesso.
        </p>

        {/* Call to Action */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
            Saiba Mais
          </button>
          <button className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
