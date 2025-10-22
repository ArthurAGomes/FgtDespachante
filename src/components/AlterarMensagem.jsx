import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Save, LogOut, MessageSquare, AlertCircle, CheckCircle } from "lucide-react";

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
      const response = await fetch(
        "https://backend-fgt.vercel.app/api/mensagem",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, mensagem }),
        }
      );

      if (!response.ok) throw new Error("Erro ao salvar.");

      setSuccess("Mensagem alterada com sucesso!");
    } catch {
      setSuccess("Erro ao alterar mensagem.");
    }
  };

const handleLogout = () => {
  localStorage.removeItem("authToken"); // Remove o token do armazenamento local
  navigate("/"); // Redireciona o usuário para a página inicial
};

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-soft"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Card Principal */}
        <div className="glass-card rounded-3xl p-8 shadow-strong animate-scale-in">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-ocean-500 rounded-2xl mb-4 shadow-glow">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Alteração de Mensagem
            </h1>
            <p className="text-white/80 text-sm">
              Gerencie as mensagens de alerta do site
            </p>
          </div>

          {/* Mensagem de Sucesso/Erro */}
          {success && (
            <div className={`mb-6 rounded-xl p-4 animate-fade-in ${
              success.includes("sucesso")
                ? "bg-green-500/20 border border-green-500/30"
                : "bg-red-500/20 border border-red-500/30"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                  success.includes("sucesso") ? "bg-green-500/30" : "bg-red-500/30"
                }`}>
                  {success.includes("sucesso") ? (
                    <CheckCircle className="w-4 h-4 text-green-200" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-200" />
                  )}
                </div>
                <p className={`text-sm ${
                  success.includes("sucesso") ? "text-green-200" : "text-red-200"
                }`}>
                  {success}
                </p>
              </div>
            </div>
          )}

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Título */}
            <div className="space-y-2">
              <label className="block text-white/90 text-sm font-medium">
                Título
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-modern bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/40"
                placeholder="Digite o título da mensagem"
                required
              />
            </div>

            {/* Campo Mensagem */}
            <div className="space-y-2">
              <label className="block text-white/90 text-sm font-medium">
                Mensagem
              </label>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="input-modern bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/40 resize-none"
                placeholder="Digite a mensagem de alerta"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 btn-primary bg-gradient-to-r from-white/20 to-white/10 border border-white/30 text-white hover:from-white/30 hover:to-white/20"
              >
                <div className="flex items-center justify-center gap-2">
                  <Save className="w-5 h-5" />
                  <span>Salvar Alerta</span>
                </div>
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-red-500/20 border border-red-500/30 text-red-200 rounded-xl hover:bg-red-500/30 transition-all duration-300"
              >
                <LogOut className="w-5 h-5" />
                <span>Sair</span>
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/60 text-xs text-center">
              © 2024 FGT Despachante. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlterarMensagem;
