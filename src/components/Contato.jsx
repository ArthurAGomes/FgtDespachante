import { FaWhatsapp } from "react-icons/fa";
import {Phone} from 'lucide-react';

function Contato() {
  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const message = event.target.message.value;
    const phoneNumber = "559999999999"; // Substitua pelo número correto
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Olá, meu nome é ${name}. ${message}`
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-customDarkBlue py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto de destaque */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-orange-500">
            Precisa de ajuda? <br />
            Entre em contato agora!
          </h2>
          <p className="mt-4 text-slate-50 text-lg">
            Estamos disponíveis para responder suas dúvidas. Preencha os campos
            e envie sua mensagem diretamente pelo WhatsApp.
          </p>
          <div className="mt-6 flex items-center justify-center align-baseline md:justify-start gap-4">
            <Phone className="text-slate-50 w-8 h-8" />
            <span className="text-slate-50 text-2xl font-semibold">
              (11) 3532-5515{" "}
            </span>
          </div>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleWhatsAppSubmit}
          className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Seu Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Digite seu nome"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Digite sua mensagem"
              rows="4"
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <FaWhatsapp className="w-6 h-6" />
            Enviar via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;
