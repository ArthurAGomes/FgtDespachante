import React, { useState } from "react";

function AlterarMensagem() {
  const [title, setTitle] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Salvar a mensagem (pode ser feito através de uma API ou localStorage, por exemplo)
    setSucesso("Mensagem alterada com sucesso!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Alteração de Mensagem
        </h1>
        {sucesso && (
          <p className="text-green-500 text-center mb-4">{sucesso}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="title"
            >
              Título:
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="mensagem"
            >
              Mensagem:
            </label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows="4"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Salvar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}

export default AlterarMensagem;
