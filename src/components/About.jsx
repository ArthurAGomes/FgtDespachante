import aboutImg from "../assets/img/fachada.jpg";
import { FaInstagram } from "react-icons/fa";
import { Star, CheckCircle, ArrowRight, Award, Users, Clock, Shield } from "lucide-react";

function About() {
  const stats = [
    { icon: Award, value: "10+", label: "Anos de Experiência" },
    { icon: Users, value: "5000+", label: "Clientes Satisfeitos" },
    { icon: Clock, value: "Rápido", label: "Atendimento" },
    { icon: Shield, value: "100%", label: "Segurança Garantida" },
  ];

  const features = [
    "Documentação completa e organizada",
    "Atendimento personalizado e humanizado",
    "Processos ágeis e transparentes",
    "Suporte especializado 24/7",
    "Preços justos e competitivos",
    "Tecnologia de ponta",
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-white via-primary-50/30 to-ocean-50/30 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-ocean-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-ocean-100/20 to-primary-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-ocean-100 rounded-full mb-6">
            <Star className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-semibold text-sm">Sobre a FGT</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Quem Somos</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de uma década transformando a experiência de documentação veicular 
            com excelência, inovação e compromisso com nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem */}
          <div className="relative animate-slide-in-left order-2 lg:order-1">
            <div className="relative">
              {/* Imagem principal */}
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-strong border border-gray-200">
                <img
                  src={aboutImg}
                  alt="FGT Despachante - Nossa empresa"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              {/* Elemento decorativo sutil */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-medium opacity-80"></div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-right order-1 lg:order-2">
            {/* Descrição principal */}
            <div className="space-y-4 lg:space-y-6">
              <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                Na <span className="font-semibold text-primary-600">FGT Despachante</span>, somos especialistas em descomplicar e agilizar toda a documentação necessária para veículos. Com mais de uma década de experiência, oferecemos serviços completos que garantem praticidade, segurança e tranquilidade para nossos clientes.
              </p>

              <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                Nosso compromisso é com a sua satisfação. Atuamos com transparência, eficiência e um atendimento personalizado para atender suas necessidades. Cuidamos de tudo, desde transferências e licenciamentos até ofícios de regularização e primeiros emplacamentos.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Por que escolher a FGT?</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estatísticas com ícones */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 py-4 lg:py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-xl mb-3 shadow-soft group-hover:shadow-glow transition-all duration-300">
                    <stat.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-primary-600 mb-1">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 lg:pt-6">
              <a
                href="https://www.instagram.com/fgtdespachante"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white font-semibold rounded-xl lg:rounded-2xl shadow-strong hover:shadow-glow transform hover:scale-105 transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="text-sm lg:text-base">Siga-nos no Instagram</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-white border-2 border-primary-200 text-primary-600 font-semibold rounded-xl lg:rounded-2xl shadow-soft hover:shadow-medium hover:bg-primary-50 hover:border-primary-300 transform hover:scale-105 transition-all duration-300"
              >
                <span className="text-sm lg:text-base">Fale Conosco</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
