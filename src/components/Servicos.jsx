import React, { useState } from "react";
import {
  Car,
  FileText,
  RefreshCw,
  ClipboardCheck,
  Calendar,
  FilePlus,
  ArrowRightCircle,
  ExternalLink,
  CheckCircle,
  X,
  Star,
  Clock,
  Shield,
} from "lucide-react";

function Servicos() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    documents: [],
  });

  const handleOpenModal = (title, documents) => {
    setModalContent({ title, documents });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const services = [
    {
      title: "Licenciamento",
      description: "Verifique os débitos do seu veículo e mantenha sua documentação sempre em dia.",
      icon: Calendar,
      link: "https://www.ipva.fazenda.sp.gov.br/ipvanet_consulta/consulta.aspx",
      badge: "Popular",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "ATPVE",
      description: "Recibo de compra e venda digital de veículos de forma prática e segura.",
      icon: ClipboardCheck,
      documents: [
        "RENAVAM",
        "Placa",
        "Chassi",
        "Hodômetro",
        "E-mail do vendedor",
        "CPF do vendedor",
        "CPF do comprador",
        "Nome do comprador",
        "E-mail do comprador",
        "Valor da venda",
        "CEP do comprador",
        "Município do comprador",
        "Endereço Completo",
      ],
      badge: "Digital",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Liberação de veículo apreendido",
      description: "Libere seu veículo apreendido com agilidade e eficiência.",
      icon: FilePlus,
      documents: [
        "CRR ou TRV - ORIGINAL",
        "CNH do proprietário - ORIGINAL",
        "Licenciamento - cópia simples do último emitido",
      ],
      badge: "Urgente",
      color: "from-red-500 to-rose-600",
    },
    {
      title: "2ª via do Recibo de Venda",
      description: "Emissão da segunda via do Certificado de Registro de Veículo.",
      icon: FileText,
      documents: [
        "Declaração de perda com firma por autenticidade",
        "Laudo de vistoria ECV",
        "Cópia simples e legível da CNH",
        "Cópia simples e legível do comprovante de endereço em nome atual",
      ],
      badge: "Documentação",
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "1ª Emplacamento",
      description: "Serviço rápido para o primeiro emplacamento do seu veículo.",
      icon: Car,
      documents: [
        "Nota fiscal de fábrica",
        "Nota fiscal de venda",
        "RENAVE",
        "Decalque do chassi - ORIGINAL",
        "Cópia simples e legível da CNH",
        "Cópia simples e legível do comprovante de endereço em nome atual",
      ],
      badge: "Novo",
      color: "from-orange-500 to-amber-600",
    },
    {
      title: "Transferência",
      description: "Transfira a propriedade do veículo de forma prática e segura.",
      icon: ArrowRightCircle,
      documents: [
        "Recibo de venda com firma reconhecida pelo vendedor e comprador - ORIGINAL",
        "Laudo de vistoria ECV",
        "Cópia simples e legível da CNH",
        "Cópia simples e legível do comprovante de endereço em nome atual",
      ],
      badge: "Completo",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const badgeColors = {
    "Popular": "bg-green-100 text-green-800",
    "Digital": "bg-blue-100 text-blue-800",
    "Urgente": "bg-red-100 text-red-800",
    "Documentação": "bg-purple-100 text-purple-800",
    "Novo": "bg-orange-100 text-orange-800",
    "Completo": "bg-teal-100 text-teal-800",
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-primary-900 via-customDarkBlue to-primary-800 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-ocean-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-ocean-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold text-sm">Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Soluções Completas
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Conte com a nossa experiência para cuidar de toda a documentação do
            seu veículo de forma rápida, segura e sem complicação.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-modern hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              <div className="absolute -top-3 -right-3 z-10">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${badgeColors[service.badge]}`}>
                  {service.badge}
                </span>
              </div>

              {/* Conteúdo do card */}
              <div className="p-8 text-center">
                {/* Ícone */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl mb-6 shadow-strong group-hover:shadow-glow transition-all duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Título e descrição */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Botão de ação */}
                {service.link ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-soft hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                  >
                    <span>Verificar Débitos</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={() => handleOpenModal(service.title, service.documents)}
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-soft hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                  >
                    <span>Ver Documentos</span>
                    <FileText className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Seção de benefícios simplificada */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Rapidez</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Segurança</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Confiabilidade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal moderno */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div
            className="bg-white rounded-3xl shadow-strong max-w-2xl w-full max-h-[80vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do modal */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{modalContent.title}</h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-white/90 mt-2">Documentos necessários para este serviço:</p>
            </div>

            {/* Conteúdo do modal */}
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="space-y-3">
                {modalContent.documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer do modal */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transition-colors"
                >
                  Fechar
                </button>
                <a
                  href="https://wa.me/5511940774221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all text-center"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Servicos;
