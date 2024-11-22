import { MapPin, Compass } from "lucide-react";

function Location() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 my-20">
        {/* Texto de Destaque */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-customDarkBlue">
            Venha nos Visitar
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Estamos localizados no coração da Freguesia do Ó, prontos para
            atendê-lo. Encontre-nos facilmente e veja o melhor trajeto.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-customDarkBlue w-6 h-6" />
              <span className="text-gray-600">
                Rua Estevão Furquim, 413 - Vila São Vicente, São Paulo - SP
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Rua+Estevão+Furquim,+413+-+Vila+São+Vicente,+São+Paulo+-+SP,+02733-000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-center gap-2 bg-customDarkBlue text-white px-6 py-3 rounded-lg font-semibold shadow-md  focus:outline-none focus:ring-2 transition-all"
            >
              <Compass className="w-5 h-5" />
              Como Chegar
            </a>
          </div>
        </div>

        {/* Mapa Interativo */}
        <div className="lg:w-1/2 w-full">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9158196891636!2d-46.687487!3d-23.5262505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57a707d7bdb5%3A0x5937204e7646f2b9!2sRua%20Estev%C3%A3o%20Furquim%2C%20413%20-%20Vila%20S%C3%A3o%20Vicente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002733-000!5e0!3m2!1sen!2sbr!4v1697836043201!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
