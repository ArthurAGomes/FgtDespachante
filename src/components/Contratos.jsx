import React from "react";
import { FileText, Eye } from "lucide-react"; // Importando ícones do Lucide

function Contratos() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-customDarkBlue">
          Contratos Disponíveis
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Clique para visualizar ou baixar os modelos de contrato necessários
          para dar andamento aos serviços.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1: Contrato de Transferência de Veículo */}
        <div className="w-72 bg-white border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform ">
          <div className="p-6 text-center">
            <div className="bg-customDarkBlue p-4 rounded-full mb-4 inline-block">
              <FileText className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-customDarkBlue">
              Contrato de Transferência Veiculo
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
                className="block w-full py-2 mt-4 text-center text-cusbg-customDarkBlue border border-cusbg-customDarkBlue rounded-md hover:bg-customDarkBlue hover:text-white transition duration-300"
              >
                <Eye className="inline-block mr-2" />
                Visualizar
              </a>
              {/* Botão para download */}
              <a
                href="/docs/contrato_transferencia_veiculo.pdf"
                download
                className="block w-full py-2 mt-2 text-center text-white bg-customOrange border border-cusbg-customDarkBlue rounded-md hover:bg-orange-400 transition duration-300"
              >
                Baixar
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Contrato de Compra e Venda de Veículo */}
        <div className="w-72 bg-white border  rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform ">
          <div className="p-6 text-center">
            <div className="bg-customDarkBlue p-4 rounded-full mb-4 inline-block">
              <FileText className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-customDarkBlue">
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
                className="block w-full py-2 mt-4 text-center text-cusbg-customDarkBlue border border-cusbg-customDarkBlue rounded-md hover:bg-customDarkBlue hover:text-white transition duration-300"
              >
                <Eye className="inline-block mr-2" />
                Visualizar
              </a>
              <a
                href="/docs/contrato_transferencia_veiculo.pdf"
                download
                className="block w-full py-2 mt-2 text-center text-white bg-customOrange border border-cusbg-customDarkBlue rounded-md hover:bg-orange-400 transition duration-300"
              >
                Baixar
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Contrato de Prestação de Serviços */}
        <div className="w-72 bg-white border  rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform ">
          <div className="p-6 text-center">
            <div className="bg-customDarkBlue p-4 rounded-full mb-4 inline-block">
              <FileText className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-customDarkBlue">
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
                className="block w-full py-2 mt-4 text-center text-cusbg-customDarkBlue border border-cusbg-customDarkBlue rounded-md hover:bg-customDarkBlue hover:text-white transition duration-300"
              >
                <Eye className="inline-block mr-2" />
                Visualizar
              </a>
              <a
                href="/docs/contrato_transferencia_veiculo.pdf"
                download
                className="block w-full py-2 mt-2 text-center text-white bg-customOrange border border-cusbg-customDarkBlue rounded-md hover:bg-orange-400 transition duration-300"
              >
                Baixar
              </a>
            </div>
          </div>
        </div>

        {/* Card 4: Contrato de Locação de Veículo */}
        <div className="w-72 bg-white border  rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform ">
          <div className="p-6 text-center">
            <div className="bg-customDarkBlue p-4 rounded-full mb-4 inline-block">
              <FileText className="text-white text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-customDarkBlue">
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
                className="block w-full py-2 mt-4 text-center text-cusbg-customDarkBlue border border-cusbg-customDarkBlue rounded-md hover:bg-customDarkBlue hover:text-white transition duration-300"
              >
                <Eye className="inline-block mr-2" />
                Visualizar
              </a>
              <a
                href="/docs/contrato_transferencia_veiculo.pdf"
                download
                className="block w-full py-2 mt-2 text-center text-white bg-customOrange border border-cusbg-customDarkBlue rounded-md hover:bg-orange-400 transition duration-300"
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
