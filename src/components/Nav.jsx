import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/img/fgt-logo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: "inicio", label: "Início" },
    { to: "quem-somos", label: "Quem Somos" },
    { to: "servicos", label: "Serviços" },
    { to: "formularios", label: "Formulários" },
    { to: "contato", label: "Contato" },
    { to: "localizacao", label: "Localização" },
  ];

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-strong backdrop-blur-lg' 
          : 'bg-white/95 backdrop-blur-sm shadow-soft'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <div className="relative">
              <img
                src={logo}
                alt="FGT Despachante"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-ocean-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>

          {/* Botão Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-xl bg-primary-50 text-primary-600 hover:bg-primary-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                offset={-80}
                smooth={true}
                duration={500}
                className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium rounded-xl hover:bg-primary-50 transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-ocean-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* Botão WhatsApp Desktop */}
          <a
            href="https://wa.me/5511940774221"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-soft hover:shadow-medium hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="glass-effect border-t border-white/20">
            <nav className="px-4 py-6">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      offset={-80}
                      smooth={true}
                      duration={500}
                      className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium rounded-xl transition-all duration-300"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4 border-t border-gray-200">
                  <a
                    href="https://wa.me/5511940774221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Fale Conosco no WhatsApp</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Botão Flutuante WhatsApp Mobile */}
      <a
        href="https://wa.me/5511940774221"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-40 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-strong hover:shadow-glow transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      {/* Overlay para fechar menu mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}

export default Nav;
