import aboutImg from "../assets/img/about-img.png";
import { FaInstagram } from "react-icons/fa";

function About() {
  return (
    <section className="w-full py-16 px-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
            <img
              src={aboutImg}
              alt="Sobre nós"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-customOrange via-transparent to-customOrange opacity-20"></div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Título */}
          <h1 className="text-4xl font-bold text-gray-800">Quem Somos</h1>

          {/* Subtítulo */}
          <h2 className="text-2xl font-light text-gray-700">
            Mais de 10 Anos de Excelência em Serviços de Despachante
          </h2>

          {/* Descrição */}
          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            Na FGT, somos especialistas em descomplicar e agilizar toda a
            documentação necessária para veículos. Com mais de uma década de
            experiência, oferecemos serviços completos que garantem praticidade,
            segurança e tranquilidade para nossos clientes.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            Nosso compromisso é com a sua satisfação. Atuamos com transparência,
            eficiência e um atendimento personalizado para atender suas
            necessidades. Cuidamos de tudo, desde transferências e
            licenciamentos até ofícios de regularização e primeiros
            emplacamentos.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            Seja para resolver pendências ou prevenir futuros problemas, a FGT
            está ao seu lado para oferecer soluções rápidas e confiáveis.
            Junte-se aos nossos clientes satisfeitos e confie em quem entende do
            assunto.
          </p>

          {/* Botão */}
          <div className="flex items-start mt-8">
            <a
              href="https://www.instagram.com/fgtdespachante"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
              Siga-nos no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
