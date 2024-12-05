import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/img/fgt-logo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-20 w-full bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4 md:px-10">
        
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="FGT Despachante"
            className="h-12 sm:h-12 object-contain rounded-md"
          />
        </a>

        {/* Botão Mobile (hamburguer) */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-customDarkBlue"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu de Navegação */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md md:shadow-none md:static md:w-auto md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-10 py-6 md:py-0 text-gray-800">
            {/* Links */}
            {[
              { to: "inicio", label: "Início" },
              { to: "quem-somos", label: "Quem Somos" },
              { to: "servicos", label: "Serviços" },
              { to: "formularios", label: "Formulários" },
              { to: "contato", label: "Contato" },
              { to: "localizacao", label: "Localização" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  offset={-100}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-lg hover:text-customOrange transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5511940774221"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-400 transition-colors duration-300"
        >
          <FaWhatsapp className="w-5 h-5" />
          WhatsApp
        </a>
      </div>

      {/* Botão Flutuante de WhatsApp (para Mobile) */}
      <a
        href="https://wa.me/5511940774221"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-400 transition-colors duration-300"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </header>
  );
}

export default Nav;
