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
        <h1 className="font-serif text-2xl sm:text-3xl text-slate-500">
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
            <ul className="flex flex-col items-center space-y-4 text-slate-500">
              {[
                { to: "inicio", label: "Início" },
                { to: "quem-somos", label: "Quem Somos" },
                { to: "servicos", label: "Serviços" },
                { to: "contratos", label: "Contratos" },
                { to: "contato", label: "Contato" },
                { to: "localizacao", label: "Localização" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-500"
                    onClick={toggleMenu} // Fecha o menu ao clicar no link
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Menu Desktop */}
        <ul className="hidden md:flex md:items-center md:space-x-10 text-slate-500">
          {[
            { to: "inicio", label: "Início" },
            { to: "quem-somos", label: "Quem Somos" },
            { to: "servicos", label: "Serviços" },
            { to: "contratos", label: "Contratos" },
            { to: "contato", label: "Contato" },
            { to: "localizacao", label: "Localização" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                className="cursor-pointer text-1xl"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Nav;
