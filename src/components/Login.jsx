import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, User, ArrowLeft, Shield } from "lucide-react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch(
        "https://backend-fgt.vercel.app/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) throw new Error("Login falhou.");

      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      navigate("/alterar-mensagem");
    } catch {
      setError("Usuário ou senha inválidos.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/"); 
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-soft"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Card de Login */}
        <div className="glass-card rounded-3xl p-8 shadow-strong animate-scale-in">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-ocean-500 rounded-2xl mb-4 shadow-glow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Acesso Administrativo
            </h1>
            <p className="text-white/80 text-sm">
              Faça login para acessar o painel de administração
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Campo de Usuário */}
            <div className="space-y-2">
              <label className="block text-white/90 text-sm font-medium">
                Usuário
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-white/60" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-modern pl-12 bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/40"
                  placeholder="Digite seu usuário"
                  required
                />
              </div>
            </div>

            {/* Campo de Senha */}
            <div className="space-y-2">
              <label className="block text-white/90 text-sm font-medium">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-white/60" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-modern pl-12 pr-12 bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/40"
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/60 hover:text-white/80 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mensagem de Erro */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-red-500/30 rounded-full flex items-center justify-center">
                    <span className="text-red-200 text-xs font-bold">!</span>
                  </div>
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Botões */}
            <div className="space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary bg-gradient-to-r from-white/20 to-white/10 border border-white/30 text-white hover:from-white/30 hover:to-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Entrando...</span>
                  </div>
                ) : (
                  "Entrar"
                )}
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar ao Site</span>
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

export default Login;
