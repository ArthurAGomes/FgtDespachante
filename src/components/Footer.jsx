import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-customDarkBlue text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Horários de Trabalho</h3>
          <p className="text-sm">Segunda a Sexta: 9h - 18h</p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://www.instagram.com/fgtdespachante/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-customOrange transition"
          >
            <FaInstagram className="text-2xl" />
          </a>

          <a
            href="https://www.facebook.com/FGTDESPACHANTE/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-customOrange transition"
          >
            <FaFacebookF className="text-2xl" />
          </a>

          <a
            href="https://wa.me/5511940774221"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-customOrange transition"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm">
            Desenvolvido por{" "}
            <a
              href="https://wa.me/5511940685885"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customOrange hover:underline"
            >
              ArthurAGomes
            </a>
          </p>
          <p className="text-sm">© 2024 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
