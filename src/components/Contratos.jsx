import React from "react";
import { FileText, Eye } from "lucide-react"; // Importando ícones do Lucide

function Contratos() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800">
          Contratos Disponíveis
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Clique para visualizar ou baixar os modelos de contrato necessários
          para dar andamento aos serviços.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1: Contrato de Transferência de Veículo */}
        <div className="w-72 bg-white border border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform ">
          <div className="p-6 text-center">
            <div className="bg-blue-600 p-4 rounded-full mb-4 inline-block">
              <FileText className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800">
              Contrato de Transferência
            </h3>
            <p className="text-md text-gray-700 mt-2">
              Modelo de contrato para transferência de veículo.
            </p>
            <div className="mt-6">
              {/* Botão para visualizar */}
              <a
                href="/docs/contrato_transferencia_veiculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 mt-4 text-center text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <Eye className="inline-block mr-2" />
                Visualizar
              </a>
              {/* Botão para download */}
              <a
                href="/docs/contrato_transferencia_veiculo.pdf"
                download
                className="block w-full py-2 mt-2 text-center text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Baixar
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Contrato de Compra e Venda de Veículo */}
        <div className="w-72 bg-white border border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform ">
          <div className="p-6 text-center">
            <div className="bg-blue-600 p-4 rounded-full mb-4 inline-block">
              <FileText className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800">
              Contrato de Compra e Venda
            </h3>
            <p className="text-md text-gray-700 mt-2">
              Modelo de contrato para compra e venda de veículos.
            </p>
            <div className="mt-6">
              <a
                href="/docs/contrato_compra_venda_veiculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 mt-4 text-center text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <Eye className="inline-block mr-2" />
                Visualizar
              </a>
              <a
                href="/docs/contrato_compra_venda_veiculo.pdf"
                download
                className="block w-full py-2 mt-2 text-center text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Baixar
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Contrato de Prestação de Serviços */}
        <div className="w-72 bg-white border border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform ">
          <div className="p-6 text-center">
            <div className="bg-blue-600 p-4 rounded-full mb-4 inline-block">
              <FileText className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800">
              Contrato de Prestação de Serviços
            </h3>
            <p className="text-md text-gray-700 mt-2">
              Modelo de contrato para serviços de despachante.
            </p>
            <div className="mt-6">
              <a
                href="/docs/contrato_prestacao_servicos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 mt-4 text-center text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <Eye className="inline-block mr-2" />
                Visualizar
              </a>
              <a
                href="/docs/contrato_prestacao_servicos.pdf"
                download
                className="block w-full py-2 mt-2 text-center text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Baixar
              </a>
            </div>
          </div>
        </div>

        {/* Card 4: Contrato de Locação de Veículo */}
        <div className="w-72 bg-white border border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform ">
          <div className="p-6 text-center">
            <div className="bg-blue-600 p-4 rounded-full mb-4 inline-block">
              <FileText className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800">
              Contrato de Locação de Veículo
            </h3>
            <p className="text-md text-gray-700 mt-2">
              Modelo de contrato para locação de veículos.
            </p>
            <div className="mt-6">
              <a
                href="/docs/contrato_locacao_veiculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 mt-4 text-center text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <Eye className="inline-block mr-2" />
                Visualizar
              </a>
              <a
                href="/docs/contrato_locacao_veiculo.pdf"
                download
                className="block w-full py-2 mt-2 text-center text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Baixar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contratos;
