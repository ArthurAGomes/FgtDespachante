function Footer() {
  return (
    <footer className="bg-customDarkBlue text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Horários de Trabalho */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Horários de Trabalho</h3>
          <p className="text-sm">Segunda a Sexta: 8h - 18h</p>
          <p className="text-sm">Sábado: 8h - 12h</p>
          <p className="text-sm">Domingo: Fechado</p>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-customOrange transition"
          >
            <i className="lucide lucide-instagram text-2xl"></i>
          </a>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-customOrange transition"
          >
            <i className="lucide lucide-message-circle text-2xl"></i>
          </a>
        </div>

        {/* Créditos */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/arthuragomes"
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
