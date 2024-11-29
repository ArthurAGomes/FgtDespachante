import React from "react";
import { FileText, Eye, Download } from "lucide-react";

function Forms() {
  const documentos = [
    {
      nome: "Autorização para Emissão de 2ª Via CRV",
      descricao: "Autorização para emissão de CRV com intenção de gravame.",
      arquivo:
        "/docs/autorizacao_para_emissao_2avia_CRV_com_intencao_de_gravame.pdf",
    },
    {
      nome: "Declaração de Óbito de Herdeiros",
      descricao: "Modelo de declaração para casos de óbito.",
      arquivo: "/docs/DeclaracaoDeObitoHerdeiros.pdf",
    },
    {
      nome: "Declaração de Ausência de Documentos",
      descricao: "Modelo de declaração para ausência de documentos.",
      arquivo: "/docs/DeclaraçãodeAusência.pdf",
    },
    {
      nome: "Declaração de Perda ou Extravio do CRV",
      descricao: "Modelo de declaração para perda ou extravio do CRV.",
      arquivo: "/docs/DeclaraçãoDePerdaExtravioDoCRRv2.pdf",
    },
    {
      nome: "Declaração de Residente",
      descricao: "Modelo de declaração de residente.",
      arquivo: "/docs/DeclaraçãodeResidente.pdf",
    },
    {
      nome: "Desbloqueio de Óbito",
      descricao: "Modelo de solicitação para desbloqueio de óbito.",
      arquivo: "/docs/DesbloqueiDeObito.pdf",
    },
    {
      nome: "Desistência de Compra e Venda",
      descricao: "Modelo de contrato para desistência de compra e venda.",
      arquivo: "/docs/DesistenciaCompraEvenda.pdf",
    },
    {
      nome: "Erro no Preenchimento ATPV-E",
      descricao: "Modelo para erros de preenchimento no ATPV-E.",
      arquivo: "/docs/ERRO PREENCHIMENTO ATPV-E.pdf",
    },
    {
      nome: "Motor 1",
      descricao: "Documento técnico sobre motor 1.",
      arquivo: "/docs/motor 1.pdf",
    },
    {
      nome: "Motor 2",
      descricao: "Documento técnico sobre motor 2.",
      arquivo: "/docs/motor 2.pdf",
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-customDarkBlue">Formulários</h2>
        <p className="text-lg text-gray-600 mt-4">
          Clique para visualizar ou baixar os documentos.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {documentos.map((doc, index) => (
          <div
            key={index}
            className="w-72 bg-white border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform"
            style={{ height: "300px" }} 
          >
            <div className="p-6 flex flex-col justify-between h-full text-center">
              <div>
                <div className="bg-customDarkBlue p-4 rounded-full mb-4 inline-block">
                  <FileText className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-customDarkBlue">
                  {doc.nome}
                </h3>
                <p className="text-md text-gray-700 mt-2">{doc.descricao}</p>
              </div>
              <div className="mt-6 flex gap-2">
                <a
                  href={doc.arquivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center text-customDarkBlue border border-customDarkBlue rounded-md hover:bg-customDarkBlue hover:text-white transition duration-300"
                >
                  <Eye className="inline-block mr-2" />
                  Visualizar
                </a>
                <a
                  href={doc.arquivo}
                  download
                  className="flex-1 py-2 text-center text-customDarkBlue border border-customDarkBlue rounded-md hover:bg-customDarkBlue hover:text-white transition duration-300"
                >
                  <Download className="inline-block mr-2" />
                  Baixar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forms;
