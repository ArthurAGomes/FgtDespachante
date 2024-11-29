import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

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
      titulo: "",
      descricao: "",
    },
    {
      imagem: licenciamento,
      titulo: "Licenciamento em dia",
      descricao: "Agilidade e eficiência para manter sua habilitação em dia.",
    },
    {
      imagem: liberacao,
      titulo: "Liberação de veiculo apreendido",
      descricao: "Cuide da documentação do seu veículo sem complicações.",
    },
    {
      imagem: cadastro,
      titulo: "Cadastro de Motor",
      descricao: "Regularize e registre com quem entende do assunto.",
    },
    {
      imagem: primeiroEmplacamento,
      titulo: "Primeiro Emplacamento",
      descricao: "Facilitamos o emplacamento do seu veículo.",
    },
    {
      imagem: atpve,
      titulo: "ATPV-E",
      descricao: "",
    },
    {
      imagem: transferencia,
      titulo: "Transferencia de nome",
      descricao: "",
    },
  ];

  return (
    <div className="w-full h-[550px] flex justify-center items-center bg-gray-100">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
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
            {/* Imagem do slide */}
            <img
              src={slide.imagem}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Texto sobre a imagem */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-8">
              <div className="bg-black bg-opacity-75 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {slide.titulo}
                </h2>
                <p className="text-lg md:text-xl mt-4">{slide.descricao}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrosel;
