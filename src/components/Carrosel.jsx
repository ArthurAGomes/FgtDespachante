import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import imagem1 from "../assets/img/banner1.jpg";
import imagem2 from "../assets/img/banner2.jpg";
import imagem3 from "../assets/img/banner3.jpg";

function Carrosel() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-[500px] gap-6 px-4 mt-[15px]">
      
      {/* Carrossel de imagens */}
      <div className="max-w-[650px] md:w-2/3 h-[350px] relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="w-full h-full"
        >
          {[imagem1, imagem2, imagem3].map((img, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões de navegação personalizados */}
        <button className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10">
          ◀
        </button>
        <button className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10">
          ▶
        </button>
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-center items-start text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Destaque seu produto ou serviço
        </h1>
        <p className="text-md md:text-lg text-gray-600 mt-4">
          Um slogan impactante pode transformar seu negócio. Use esta área para
          atrair a atenção do cliente.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Saiba mais
        </button>
      </div>
    </div>
  );
}

export default Carrosel;
