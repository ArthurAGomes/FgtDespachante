import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import { Link } from "react-scroll";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
      link: "servicos",
    },
    {
      imagem: licenciamento,
      titulo: "Licenciamento em dia",
      descricao: "Mantenha sua documentação regularizada conosco.",
    },
    {
      imagem: liberacao,
      titulo: "Liberação de veículo apreendido",
      descricao:
        "Agilizamos todo o processo de liberação do seu veículo apreendido, cuidando da documentação necessária e oferecendo suporte completo para que você recupere seu veículo com tranquilidade e rapidez.",
    },
    {
      imagem: cadastro,
      titulo: "Cadastro de Motor",
      descricao: "Regularize com segurança e rapidez.",
    },
    {
      imagem: primeiroEmplacamento,
      titulo: "Primeiro Emplacamento",
      descricao: "Facilitamos o processo de emplacamento para você!",
    },
    {
      imagem: atpve,
      titulo: "ATPV-E",
      descricao: "",
    },
    {
      imagem: transferencia,
      titulo: "Transferência de Nome",
      descricao:
        "Facilitamos a transferência de propriedade do seu veículo, garantindo que toda a documentação seja processada de forma rápida, segura e sem complicações. Deixe os detalhes burocráticos conosco!",
    },
  ];

  return (
    <div className="w-full h-[450px] sm:h-[550px] bg-gray-100">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1} // Sempre 1 slide por vez
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <FadeInImage
              src={slide.imagem}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {slide.principal ? (
              <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-16 lg:pl-24 lg:pr-16 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
                <div className="text-white max-w-2xl lg:max-w-xl space-y-4 sm:space-y-6">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    {slide.titulo}
                  </h1>
                  <p className="mt-2 text-sm sm:text-lg md:text-xl leading-relaxed">
                    {slide.descricao}
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      to={slide.link}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="bg-customDarkBlue hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold cursor-pointer"
                    >
                      Explore nossos serviços
                    </Link>
                    <Link
                      to="contato"
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="bg-transparent border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-customDarkBlue font-semibold cursor-pointer"
                    >
                      Entre em contato
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  {slide.titulo}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-white leading-snug">
                  {slide.descricao}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de navegação */}
      <button className="custom-prev hidden sm:flex absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-customDarkBlue text-white p-3 lg:p-4 rounded-full shadow-lg hover:bg-gray-700">
        <ArrowLeft size={30} />
      </button>
      <button className="custom-next hidden sm:flex absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-customDarkBlue text-white p-3 lg:p-4 rounded-full shadow-lg hover:bg-gray-700">
        <ArrowRight size={30} />
      </button>
    </div>
  );
}

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
