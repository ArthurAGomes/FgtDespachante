import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { MessageCircle } from "lucide-react"; // Ícone de telefone do Lucide

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-20 w-full bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-customDarkBlue truncate w-full md:w-auto">
          FGT Despachante
        </h1>

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
          } absolute top-full left-0 w-full bg-white shadow-md md:shadow-none md:static md:w-auto md:flex md:items-center md:justify-center`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-10 py-6 md:py-0 text-gray-800">
            {/* Links */}
            <li>
              <Link
                to="inicio"
                offset={-100}
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg hover:text-customOrange transition-colors"
                onClick={toggleMenu}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="quem-somos"
                offset={-100}
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg hover:text-customOrange transition-colors"
                onClick={toggleMenu}
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link
                to="servicos"
                offset={-100}
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg hover:text-customOrange transition-colors"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="contratos"
                offset={-100}
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg hover:text-customOrange transition-colors"
                onClick={toggleMenu}
              >
                Contratos
              </Link>
            </li>
            <li>
              <Link
                to="contato"
                offset={-100}
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg hover:text-customOrange transition-colors"
                onClick={toggleMenu}
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                to="localizacao"
                offset={-100}
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg hover:text-customOrange transition-colors"
                onClick={toggleMenu}
              >
                Localização
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/559999999999" // Substitua pelo número correto
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-400 transition-colors duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>

      {/* Botão Flutuante de WhatsApp (para Mobile) */}
      <a
        href="https://wa.me/559999999999" // Substitua pelo número correto
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-400 transition-colors duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </header>
  );
}

export default Nav;
