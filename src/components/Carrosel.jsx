import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import imagem1 from "../assets/img/banner1.jpg";
import imagem2 from "../assets/img/banner2.jpg";
import imagem3 from "../assets/img/banner3.jpg";

function Carrosel() {
  const textos = [
    {
      titulo: "Licenciamento em dia",
      descricao: "Agilidade e eficiência para manter sua habilitação em dia.",
    },
    {
      titulo: "Transferência Veicular",
      descricao: "Cuide da documentação do seu veículo sem complicações.",
    },
    {
      titulo: "Documentação de Veículos",
      descricao: "Regularize e registre com quem entende do assunto.",
    },
  ];

  return (
    <div className="w-full h-[550px] flex justify-center items-center bg-gray-100">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1} // Exibe uma imagem por vez
        spaceBetween={0} // Remove espaço entre as imagens
        loop={true} // Permite looping infinito
        autoplay={{
          delay: 4000, // Troca a imagem a cada 4 segundos
          disableOnInteraction: false,
        }}
        navigation={false} // Desativa as setas
        className="w-full h-full" // Ocupar a largura e altura totais do carrossel
      >
        {[imagem1, imagem2, imagem3].map((img, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Imagem */}
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {/* Texto sobreposto */}
            <div className="absolute bottom-10 left-4 right-4 bg-black bg-opacity-60 text-white rounded-lg p-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                {textos[index].titulo}
              </h2>
              <p className="text-lg md:text-xl mt-2">
                {textos[index].descricao}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrosel;
