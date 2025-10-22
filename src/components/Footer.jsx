import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Mail, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    "Serviços": [
      { name: "Licenciamento", href: "#servicos" },
      { name: "Transferência", href: "#servicos" },
      { name: "ATPV-E", href: "#servicos" },
      { name: "Emplacamento", href: "#servicos" },
    ],
    "Empresa": [
      { name: "Quem Somos", href: "#quem-somos" },
      { name: "Contato", href: "#contato" },
      { name: "Localização", href: "#localizacao" },
      { name: "Formulários", href: "#formularios" },
    ],
    "Suporte": [
      { name: "WhatsApp", href: "https://wa.me/5511940774221" },
      { name: "Telefone", href: "tel:+551135325515" },
      { name: "E-mail", href: "mailto:contato@fgtdespachante.com" },
      { name: "Horários", href: "#contato" },
    ],
  };

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/fgtdespachante/",
      label: "Instagram",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/FGTDESPACHANTE/?locale=pt_BR",
      label: "Facebook",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/5511940774221",
      label: "WhatsApp",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-customDarkBlue to-primary-800 text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-20 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-ocean-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-gradient-to-br from-ocean-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Conteúdo principal do footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Informações da empresa */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  FGT Despachante
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Mais de 10 anos oferecendo serviços de documentação veicular 
                  com excelência, agilidade e confiabilidade.
                </p>
              </div>

              {/* Informações de contato */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-xl shadow-soft">
                    <FaPhone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/90 font-semibold">(11) 3532-5515</p>
                    <p className="text-white/70 text-sm">WhatsApp: (11) 94077-4221</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-xl shadow-soft">
                    <FaMapMarkerAlt className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/90 font-semibold">Rua Estevão Furquim, 413</p>
                    <p className="text-white/70 text-sm">Vila São Vicente, São Paulo - SP</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-xl shadow-soft">
                    <FaClock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/90 font-semibold">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-white/70 text-sm">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links do footer */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white transition-colors"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/20"></div>

        {/* Footer inferior */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Redes sociais */}
            <div className="flex items-center gap-4">
              <span className="text-white/80 font-medium">Siga-nos:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl shadow-soft hover:shadow-glow transform hover:scale-110 transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-white/70 text-sm mb-2">
                © 2024 FGT Despachante. Todos os direitos reservados.
              </p>
              <p className="text-white/60 text-xs">
                Desenvolvido por{" "}
                <a
                  href="https://wa.me/5511940685885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-primary-200 transition-colors"
                >
                  ArthurAGomes
                </a>
              </p>
            </div>

            {/* Botão voltar ao topo */}
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-ocean-500 rounded-xl shadow-soft hover:shadow-glow transform hover:scale-110 transition-all duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
