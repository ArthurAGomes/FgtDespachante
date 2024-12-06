import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para navegação

function AlterarMensagem() {
  const [title, setTitle] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Hook para navegação após logout

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch("/mensagem");
      if (response.ok) {
        const data = await response.json();
        setTitle(data.title);
        setMensagem(data.mensagem);
      }
    };
    fetchMessage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("/api/mensagem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, mensagem }),
      });

      if (!response.ok) throw new Error("Erro ao salvar.");

      setSuccess("Mensagem alterada com sucesso!");
    } catch {
      setSuccess("Erro ao alterar mensagem.");
    }
  };

  // Função para lidar com o logout
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Erro ao sair.");

      localStorage.removeItem("authToken"); // Remove o token de autenticação
      navigate("/"); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Alteração de Mensagem
      </h1>

      {success && (
        <p
          className={`text-center py-2 px-4 mb-4 rounded-md ${
            success.includes("sucesso")
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {success}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Título
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o título"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Mensagem
          </label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite a mensagem"
            rows="5"
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Salvar Alerta
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300"
          >
            Sair
          </button>
        </div>
      </form>
    </div>
  );
}

export default AlterarMensagem;
