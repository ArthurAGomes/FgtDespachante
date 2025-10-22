import { MapPin, Compass } from "lucide-react";

function Location() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header simplificado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos localizados no coração da Freguesia do Ó, prontos para atendê-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Informações simplificadas */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-primary-100 rounded-lg">
                <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1">
                  Endereço
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  Rua Estevão Furquim, 413<br />
                  Vila São Vicente, São Paulo - SP
                </p>
              </div>
            </div>

            <div className="flex gap-3 lg:gap-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+Estevão+Furquim,+413+-+Vila+São+Vicente,+São+Paulo+-+SP,+02733-000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm lg:text-base"
              >
                <Compass className="w-4 h-4 lg:w-5 lg:h-5" />
                Como Chegar
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="aspect-video">
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
    </section>
  );
}

export default Location;
