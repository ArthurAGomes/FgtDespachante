import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import { Link } from "react-scroll";

import about from "../assets/img/banner1.jpg";
import cadastro from "../assets/img/cadastro-motor.jpg";
import liberacao from "../assets/img/liberacao-veiculo.jpg";
import primeiroEmplacamento from "../assets/img/primeiro-emplacamento.jpg";
import licenciamento from "../assets/img/licenciamento.jpg";
import atpve from "../assets/img/atpv-e.jpg";
import transferencia from "../assets/img/transferencia-nome.jpg";

function Carrosel() {
  const slides = [
    {
      imagem: about,
      titulo: "Facilidade e agilidade para cuidar do seu veículo!",
      descricao: "Conheça todos os nossos serviços ao lado!",
      principal: true,
      link: "servicos", // Associado à seção de serviços
    },
    {
      imagem: licenciamento,
      titulo: "Licenciamento em dia",
      descricao: "Mantenha sua documentação regularizada conosco.",
    },
    {
      imagem: liberacao,
      titulo: "Liberação de veículo apreendido",
      descricao: "Processos simplificados e sem complicações.",
    },
    {
      imagem: cadastro,
      titulo: "Cadastro de Motor",
      descricao: "Regularize com segurança e rapidez.",
    },
    {
      imagem: primeiroEmplacamento,
      titulo: "Primeiro Emplacamento",
      descricao: "Cuidamos de tudo para você.",
    },
    {
      imagem: atpve,
      titulo: "ATPV-E",
      descricao: "Assinatura digital descomplicada.",
    },
    {
      imagem: transferencia,
      titulo: "Transferência de Nome",
      descricao: "Cuidamos de toda a documentação.",
    },
  ];

  return (
    <div className="w-full h-[550px] bg-gray-100">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Configuração para fade-in */}
            <FadeInImage
              src={slide.imagem}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {slide.principal ? (
              // Layout do slide principal ajustado
              <div className="absolute inset-0 flex items-center pl-6 md:pl-16 lg:pl-24 bg-gradient-to-r from-black/60 to-transparent">
                <div className="text-white max-w-2xl space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.titulo}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl leading-relaxed">
                    {slide.descricao}
                  </p>
                  <div className="mt-6 flex space-x-4">
                    <Link
                      to={slide.link}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold cursor-pointer"
                    >
                      Explore nossos serviços
                    </Link>
                    <Link
                      to="contato"
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="bg-transparent border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 font-semibold cursor-pointer"
                    >
                      Entre em contato
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              // Layout dos slides secundários
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {slide.titulo}
                </h2>
                <p className="mt-2 text-lg text-white">{slide.descricao}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// Componente de imagem com fade-in
function FadeInImage({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-700 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      onLoad={() => setIsLoaded(true)}
    />
  );
}

export default Carrosel;

