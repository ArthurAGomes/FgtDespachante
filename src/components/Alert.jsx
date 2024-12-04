import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/img/fgt-logo.png"; // Importando a logo

const Alert = ({ isOpen }) => {
  const [aviso, setAviso] = useState("");

  // Função para determinar o aviso com base no mês
  const obterAviso = (mes) => {
    let avisoGerado = "";

    switch (mes) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        avisoGerado =
          "Verifique o pagamento do IPVA para os finais de placa de 1 a 6.";
        break;
      case 7:
        avisoGerado =
          "O prazo para pagamento do licenciamento dos finais de placa 1 e 2 termina este mês!";
        break;
      case 8:
        avisoGerado =
          "O prazo para pagamento do licenciamento dos finais de placa 3 e 4 termina este mês!";
        break;
      case 9:
        avisoGerado =
          "O prazo para pagamento do licenciamento dos finais de placa 5 e 6 termina este mês!";
        break;
      case 10:
        avisoGerado =
          "O prazo para pagamento do licenciamento dos finais de placa 7 e 8 termina este mês!";
        break;
      case 11:
        avisoGerado =
          "O prazo para pagamento do licenciamento do final de placa 9 termina este mês!";
        break;
      case 12:
        avisoGerado =
          "O prazo para pagamento do licenciamento do final de placa 0 termina este mês!";
        break;
      default:
        avisoGerado =
          "Não há pagamentos de IPVA ou licenciamento pendentes para este mês.";
        break;
    }

    return avisoGerado;
  };

  useEffect(() => {
    const mesAtual = new Date().getMonth() + 1; // Meses começam de 0, então somamos 1
    const avisoGerado = obterAviso(mesAtual);
    setAviso(avisoGerado);

    // Exibe o toast com o aviso gerado
    if (isOpen && avisoGerado) {
      toast.info(
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 mb-4 rounded-full border border-gray-300 object-fit" // Arredondamento e borda adicionados
          />
          {/* Mensagem */}
          <p className="text-gray-800 font-semibold text-lg mb-2">
            📢 Lembrete Importante!
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            {avisoGerado}
          </p>
          {/* Link */}
          <a
            href="#servicos"
            className="text-blue-600 underline font-medium mt-4"
          >
            Acesse a seção Serviços para consultar
          </a>
        </div>,
        {
          position: "top-center",
          autoClose: 20000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  }, [isOpen]);

  return <ToastContainer />;
};

export default Alert;
