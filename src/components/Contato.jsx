import { FaWhatsapp, FaPhone, FaClock } from "react-icons/fa";
import { MessageCircle, Send } from "lucide-react";

function Contato() {
  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const message = event.target.message.value;
    const phoneNumber = "5511940774221";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Olá, meu nome é ${name}. ${message}`
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header simplificado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos disponíveis para responder suas dúvidas e oferecer o melhor atendimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Informações de contato simplificadas */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                Fale Conosco
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Nossa equipe está pronta para ajudar você com todos os serviços de documentação veicular.
              </p>
            </div>

            {/* Contatos diretos */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg">
                  <FaPhone className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm lg:text-base">(11) 3532-5515</p>
                  <p className="text-xs lg:text-sm text-gray-600">Segunda a Sexta, 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg">
                  <FaWhatsapp className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm lg:text-base">(11) 94077-4221</p>
                  <p className="text-xs lg:text-sm text-gray-600">WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg">
                  <FaClock className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm lg:text-base">Horário de Funcionamento</p>
                  <p className="text-xs lg:text-sm text-gray-600">Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário simplificado */}
          <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
            <div className="mb-4 lg:mb-6">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                Envie sua Mensagem
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Preencha os campos abaixo e envie sua mensagem diretamente pelo WhatsApp.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-3 lg:space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Descreva como podemos ajudar você..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
