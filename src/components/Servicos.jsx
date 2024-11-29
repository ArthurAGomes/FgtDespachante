import React, { useState } from "react";
import {
  Car,
  FileText,
  RefreshCw,
  ClipboardCheck,
  Calendar,
  FilePlus,
  ArrowRightCircle,
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
      title: "ATPVE",
      description:
        "Recibo de compra e venda digital de veículos de forma prática.",
      icon: <ClipboardCheck className="text-customDarkBlue text-3xl" />,
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
        "Endereço Completo"
      ],
    },
    {
      title: "Liberação de veículo apreendido",
      description: "Libere seu veículo apreendido.",
      icon: <FilePlus className="text-customDarkBlue text-3xl" />,
      documents: [
        "CRR ou TRV - ORIGINAL",
        "CNH do proprietário - ORIGINAL",
        "Licenciamento - cópia simples do último emitido",
      ],
    },
    {
      title: "2ª via do Recibo de Venda",
      description:
        "Emissão da segunda via do Certificado de Registro de Veículo.",
      icon: <FileText className="text-customDarkBlue text-3xl" />,
      documents: [
        "Declaração de perda com firma por autenticidade",
        "Laudo de vistoria ECV",
        "Cópia simples e legível da CNH",
        "Cópia simples e legível do comprovante de endereço em nome atual",
      ],
    },
    {
      title: "1ª Emplacamento",
      description:
        "Serviço rápido para o primeiro emplacamento do seu veículo.",
      icon: <Car className="text-customDarkBlue text-3xl" />,
      documents: [
        "Nota fiscal de fábrica",
        "Nota fiscal de venda",
        "RENAVE",
        "Decalque do chassi - ORIGINAL",
        "Cópia simples e legível da CNH",
        "Cópia simples e legível do comprovante de endereço em nome atual",
      ],
    },
    {
      title: "Transferência",
      description: "Transfira a propriedade do veículo de forma prática.",
      icon: <ArrowRightCircle className="text-customDarkBlue text-3xl" />,
      documents: [
        "Recibo de venda com firma reconhecida pelo vendedor e comprador - ORIGINAL",
        "Laudo de vistoria ECV",
        "Cópia simples e legível da CNH",
        "Cópia simples e legível do comprovante de endereço em nome atual",
      ],
    },
    {
      title: "Licenciamento",
      description: "Verifique os débitos do seu veículo no link abaixo.",
      icon: <Calendar className="text-customDarkBlue text-3xl" />,
      link: "https://www.ipva.fazenda.sp.gov.br/ipvanet_consulta/consulta.aspx", // Link direto
    },
  ];



  return (
    <div className="w-full py-16 bg-customDarkBlue">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Nossos Serviços</h2>
          <p className="text-lg text-gray-300 mt-4">
            Conte com a nossa experiência para cuidar de toda a documentação do
            seu veículo de forma rápida e sem complicação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-80 h-[350px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col items-center justify-between"
            >
              <div className="p-6 text-center flex-1 flex justify-center flex-col items-center">
                <div className="bg-white p-4 rounded-full inline-block mb-4 shadow">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-customDarkBlue">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 mt-2">
                  {service.description}
                </p>
              </div>
              {service.link ? (
                // Botão diferenciado para Licenciamento
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 px-4 py-3 bg-customDarkBlue text-white rounded hover:bg-blue-700"
                >
                  Verifique aqui
                </a>
              ) : (
                <button
                  onClick={() =>
                    handleOpenModal(service.title, service.documents)
                  }
                  className="mb-4 px-4 py-3 bg-customDarkBlue text-white rounded hover:bg-blue-700"
                >
                  Documentos Necessários
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-customDarkBlue mb-4">
              {modalContent.title}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Documentos necessários:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              {modalContent.documents.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="mt-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Servicos;
