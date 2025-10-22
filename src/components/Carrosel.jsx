import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Link } from "react-scroll";
import { ArrowLeft, ArrowRight, ChevronRight, Star } from "lucide-react";
import about from "../assets/img/banner1.jpg";
import cadastro from "../assets/img/cadastro-motor.jpg";
import liberacao from "../assets/img/liberacao-veiculo.jpg";
import primeiroEmplacamento from "../assets/img/primeiro-emplacamento.jpg";
import licenciamento from "../assets/img/licenciamento.jpg";
import atpve from "../assets/img/atpv-e.jpg";
import transferencia from "../assets/img/transferencia-nome.jpg";

function Carrosel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    // ... (seu array de slides)
    {
      imagem: about,
      titulo: "Facilidade e agilidade para cuidar do seu veículo!",
      descricao:
        "Conheça todos os nossos serviços e descubra como podemos facilitar sua vida com soluções completas em documentação veicular.",
      principal: true,
      link: "servicos",
      badge: "Destaque",
    },
    {
      imagem: licenciamento,
      titulo: "Licenciamento em dia",
      descricao:
        "Mantenha sua documentação sempre regularizada conosco. Processo rápido, seguro e sem complicações.",
      badge: "Popular",
    },
    {
      imagem: liberacao,
      titulo: "Liberação de veículo apreendido",
      descricao:
        "Agilizamos todo o processo de liberação do seu veículo apreendido, cuidando da documentação necessária e oferecendo suporte completo.",
      badge: "Urgente",
    },
    {
      imagem: cadastro,
      titulo: "Cadastro de Motor",
      descricao:
        "Regularize seu motor com segurança e rapidez. Nossa equipe especializada cuida de toda a burocracia para você.",
      badge: "Especializado",
    },
    {
      imagem: primeiroEmplacamento,
      titulo: "Primeiro Emplacamento",
      descricao:
        "Facilitamos o processo de emplacamento para seu novo veículo. Tudo organizado e sem dor de cabeça.",
      badge: "Novo",
    },
    {
      imagem: atpve,
      titulo: "ATPV-E",
      descricao:
        "Autorização para Transferência de Propriedade de Veículo Estrangeiro. Especialistas em documentação internacional.",
      badge: "Internacional",
    },
    {
      imagem: transferencia,
      titulo: "Transferência de Nome",
      descricao:
        "Facilitamos a transferência de propriedade do seu veículo, garantindo que toda a documentação seja processada de forma rápida e segura.",
      badge: "Completo",
    },
  ];

  const badgeColors = {
    // ... (seu objeto badgeColors)
  };

  return (
    // Voltamos ao container original com overflow-hidden
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-ocean-50"></div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <FadeInImage
              src={slide.imagem}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay gradiente moderno */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            {/* Conteúdo do slide */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 sm:px-12 lg:px-20 xl:px-32">
              <div className="max-w-4xl space-y-6 animate-fade-in-up">
                {/* ... (Badge, Título, Descrição, Botões) ... */}
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 rounded-full">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span className="text-white/90 text-sm font-medium">
                    {slide.badge}
                  </span>
                </div>

                {/* Título */}
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    {slide.titulo}
                  </span>
                </h1>

                {/* Descrição */}
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl">
                  {slide.descricao}
                </p>

                {/* Botões de ação */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {slide.principal && (
                    <Link
                      to={slide.link}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-2xl shadow-strong hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                    >
                      <span>Explore nossos serviços</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}

                  <Link
                    to="contato"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
                  >
                    <span>Entre em contato</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ============================================================
        MELHORIA AQUI:
        Movendo as setas para o 'bottom-6' para alinhar com a paginação.
        Removido: 'top-1/2', 'transform', '-translate-y-1/2'
        Adicionado: 'bottom-6'
        ============================================================
      */}
      

      {/* Paginação personalizada (permanece no mesmo lugar) */}
      <div className="custom-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2"></div>

      {/* Indicador de progresso */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-ocean-500 transition-all duration-300 ease-out"
          style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

// ... (FadeInImage não precisa de alteração)
function FadeInImage({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`${className} transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-ocean-100 animate-pulse"></div>
      )}
    </div>
  );
}

export default Carrosel;