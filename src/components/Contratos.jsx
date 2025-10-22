import React, { useState } from "react";
import { FileText, Eye, Download, FileCheck } from "lucide-react";

function Forms() {
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

  const documentos = [
    {
      nome: "Autorização para Emissão de 2ª Via CRV",
      descricao: "Autorização para emissão de CRV com intenção de gravame.",
      arquivo: "/docs/autorizacao_para_emissao_2avia_CRV_com_intencao_de_gravame.pdf",
      categoria: "CRV",
    },
    {
      nome: "Declaração de Óbito de Herdeiros",
      descricao: "Modelo de declaração para casos de óbito.",
      arquivo: "/docs/DeclaracaoDeObitoHerdeiros.pdf",
      categoria: "Óbito",
    },
    {
      nome: "Declaração de Ausência de Documentos",
      descricao: "Modelo de declaração para ausência de documentos.",
      arquivo: "/docs/DeclaraçãodeAusência.pdf",
      categoria: "Declaração",
    },
    {
      nome: "Declaração de Perda ou Extravio do CRV",
      descricao: "Modelo de declaração para perda ou extravio do CRV.",
      arquivo: "/docs/DeclaraçãoDePerdaExtravioDoCRRv2.pdf",
      categoria: "CRV",
    },
    {
      nome: "Declaração de Residente",
      descricao: "Modelo de declaração de residente.",
      arquivo: "/docs/DeclaraçãodeResidente.pdf",
      categoria: "Declaração",
    },
    {
      nome: "Desbloqueio de Óbito",
      descricao: "Modelo de solicitação para desbloqueio de óbito.",
      arquivo: "/docs/DesbloqueiDeObito.pdf",
      categoria: "Óbito",
    },
    {
      nome: "Desistência de Compra e Venda",
      descricao: "Modelo de contrato para desistência de compra e venda.",
      arquivo: "/docs/DesistenciaCompraEvenda.pdf",
      categoria: "Contrato",
    },
    {
      nome: "Erro no Preenchimento ATPV-E",
      descricao: "Modelo para erros de preenchimento no ATPV-E.",
      arquivo: "/docs/ERRO PREENCHIMENTO ATPV-E.pdf",
      categoria: "ATPV-E",
    },
    {
      nome: "Motor 1",
      descricao: "Documento técnico sobre motor 1.",
      arquivo: "/docs/motor 1.pdf",
      categoria: "Técnico",
    },
    {
      nome: "Motor 2",
      descricao: "Documento técnico sobre motor 2.",
      arquivo: "/docs/motor 2.pdf",
      categoria: "Técnico",
    },
  ];

  const categorias = ["Todos", ...new Set(documentos.map(doc => doc.categoria))];

  const documentosFiltrados = filtroAtivo === "Todos" 
    ? documentos 
    : documentos.filter(doc => doc.categoria === filtroAtivo);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header simplificado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Formulários e Documentos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acesse todos os formulários necessários para seus processos.
          </p>
        </div>

        {/* Filtros funcionais */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 lg:mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroAtivo(categoria)}
              className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${
                filtroAtivo === categoria
                  ? "bg-primary-600 text-white shadow-soft"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid simplificado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {documentosFiltrados.map((doc, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 lg:p-6 hover:shadow-medium transition-all duration-300 group"
            >
              {/* Ícone simples */}
              <div className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-primary-100 rounded-lg mb-3 lg:mb-4">
                <FileText className="w-5 h-5 lg:w-6 lg:h-6 text-primary-600" />
              </div>

              {/* Título */}
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {doc.nome}
              </h3>
              
              {/* Descrição */}
              <p className="text-gray-600 text-xs lg:text-sm mb-3 lg:mb-4">
                {doc.descricao}
              </p>

              {/* Botões simplificados */}
              <div className="flex gap-2">
                <a
                  href={doc.arquivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1 lg:gap-2 px-2 lg:px-3 py-2 bg-primary-600 text-white text-xs lg:text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                  Ver
                </a>
                
                <a
                  href={doc.arquivo}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-1 lg:gap-2 px-2 lg:px-3 py-2 bg-gray-100 text-gray-700 text-xs lg:text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Download className="w-3 h-3 lg:w-4 lg:h-4" />
                  Baixar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informação simples */}
        <div className="text-center mt-12 p-4 bg-primary-50 rounded-xl">
          <p className="text-primary-700 font-medium">
            Todos os documentos estão atualizados conforme a legislação vigente
          </p>
        </div>
      </div>
    </section>
  );
}

export default Forms;
