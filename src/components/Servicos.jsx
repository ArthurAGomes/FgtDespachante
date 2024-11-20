import React from "react";
import { Car, FileText, RefreshCw } from "lucide-react"; // Importando os ícones do Lucide

function Servicos() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800">Nossos Serviços</h2>
        <p className="text-lg text-gray-600 mt-4">
          Conte com a nossa experiência para cuidar de toda a documentação do
          seu veículo de forma rápida e sem complicação.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1: Renovação de CNH */}
        <div className="max-w-sm bg-blue-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 text-center">
            <div className="bg-blue-600 p-4 rounded-full inline-block mb-4">
              <Car className="text-white text-3xl" /> {/* Ícone de Carro */}
            </div>
            <h3 className="text-2xl font-semibold text-blue-800">
              Renovação de CNH
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              Agilidade e eficiência para renovar sua habilitação.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Card 2: Transferência Veicular */}
        <div className="max-w-sm bg-blue-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 text-center">
            <div className="bg-blue-600 p-4 rounded-full inline-block mb-4">
              <RefreshCw className="text-white text-3xl" />{" "}
              {/* Ícone de Transferência */}
            </div>
            <h3 className="text-2xl font-semibold text-blue-800">
              Transferência Veicular
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              Efetue a transferência do seu veículo sem sair de casa.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Card 3: Documentação de Veículos */}
        <div className="max-w-sm bg-blue-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 text-center">
            <div className="bg-blue-600 p-4 rounded-full inline-block mb-4">
              <FileText className="text-white text-3xl" />{" "}
              {/* Ícone de Documentação */}
            </div>
            <h3 className="text-2xl font-semibold text-blue-800">
              Documentação de Veículos
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              Regularize e registre seu veículo com rapidez e segurança.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
