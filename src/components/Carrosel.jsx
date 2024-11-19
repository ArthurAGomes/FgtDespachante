import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import imagem1 from "../assets/img/banner1.jpg";
import imagem2 from "../assets/img/banner2.jpg";
import imagem3 from "../assets/img/banner3.jpg";

function Carrosel() {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-screen h-[560px] overflow-hidden"
      >
        <SwiperSlide className="relative">
          <img
            src={imagem1}
            alt="Imagem 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
            <h1 className="text-2xl md:text-4xl font-bold">
              Texto Sobreposto 1
            </h1>
            <p className="text-sm md:text-lg mt-2">Descrição do slide 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={imagem2}
            alt="Imagem 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
            <h1 className="text-2xl md:text-4xl font-bold">
              Texto Sobreposto 2
            </h1>
            <p className="text-sm md:text-lg mt-2">Descrição do slide 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={imagem3}
            alt="Imagem 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
            <h1 className="text-2xl md:text-4xl font-bold">
              Texto Sobreposto 3
            </h1>
            <p className="text-sm md:text-lg mt-2">Descrição do slide 3</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carrosel;
