import aboutImg from "../assets/img/about-img.png";
import { Phone, MessageCircle } from "lucide-react";

function About() {
  return (
    <section className="w-full py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <img
            src={aboutImg}
            alt="Sobre nós"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-customOrange opacity-10 rounded-lg -z-10"></div>
        </div>

        {/* Conteúdo */}
        <div className="w-full md:w-1/2 text-gray-800 space-y-6">
          {/* Título */}
          <h1 className="text-4xl font-thin border-b-4 border-customOrange inline-block pb-2">
            Quem Somos
          </h1>

          {/* Subtítulo */}
          <h2 className="text-2xl font-thin text-gray-800">
            Criamos Soluções que Inspiram
          </h2>

          {/* Descrição */}
          <p className="text-lg leading-relaxed text-gray-800">
            Nossa missão é transformar ideias em realidade através de soluções
            criativas e inovadoras. Com uma equipe apaixonada, entregamos
            excelência em cada projeto, sempre priorizando as necessidades dos
            nossos clientes e buscando impactar positivamente suas vidas e
            negócios.
          </p>

          {/* Informações Adicionais */}
          <p className="text-lg leading-relaxed text-gray-800">
            Seja você um pequeno empreendedor ou uma grande organização, estamos
            aqui para oferecer serviços personalizados que geram resultados
            duradouros. Junte-se a nós e faça parte de uma história de sucesso.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-customOrange text-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 transition-colors duration-300">
              <Phone className="w-5 h-5" />
              Saiba Mais
            </button>
            <a
              href="https://wa.me/559999999999" // Substitua pelo número correto
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-transparent border border-customOrange text-customOrange font-semibold rounded-lg hover:bg-customOrange hover:text-white transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
