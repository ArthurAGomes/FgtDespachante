import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-20 mx-auto flex w-full items-center justify-between bg-white border-b border-gray-500 p-3 sm:p-8 shadow">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-serif text-2xl sm:text-3xl text-gray-800">
          FGT Despachante
        </h1>

        {/* Botão Mobile (hamburguer) */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu de Navegação */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-around md:bg-transparent absolute inset-0 top-[60px] left-0 bg-white shadow-lg md:shadow-none md:relative md:top-0 transition-all duration-300 ease-in-out`}
      >
        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md py-4">
            <ul className="flex flex-col items-center w-full text-gray-800">
              <li>
                <Link
                  to="inicio"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="quem-somos"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="servicos"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="contratos"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Contratos
                </Link>
              </li>
              <li>
                <Link
                  to="contato"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="localizacao"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  Localização
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Menu Desktop */}
        <ul className="hidden md:flex md:items-center md:space-x-10 text-gray-800 ">
          <li>
            <Link
              to="inicio"
              offset={-100}
              smooth={true}
              duration={500}
              className="cursor-pointer text-1xl"
            >
              Início
            </Link>
          </li>
          <li className="w-[100px]">
            <Link
              to="quem-somos"
              offset={-100}
              smooth={true}
              duration={500}
              className="cursor-pointer text-1xl"
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
              className="cursor-pointer text-1xl"
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
              className="cursor-pointer text-1xl"
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
              className="cursor-pointer text-1xl"
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
              className="cursor-pointer text-1xl"
            >
              Localização
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
