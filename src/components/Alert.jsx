import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-scroll"; // Importando o Link para rolagem suave
import logo from "../assets/img/fgt-logo.png";

const Alert = ({ isOpen }) => {
  const [aviso, setAviso] = useState("");

  const obterAviso = (mes) => {
    let avisoGerado = "";

    switch (mes) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        avisoGerado = (
          <>
            Verifique o pagamento do IPVA para os finais de placa de{" "}
            <span className="text-blue-600 font-bold">1 a 6</span>.
          </>
        );
        break;
      case 7:
        avisoGerado = (
          <>
            O prazo para pagamento do licenciamento dos finais de placa{" "}
            <span className="text-red-600 font-bold">1 e 2</span> termina este
            mês!
          </>
        );
        break;
      case 8:
        avisoGerado = (
          <>
            O prazo para pagamento do licenciamento dos finais de placa{" "}
            <span className="text-red-600 font-bold">3 e 4</span> termina este
            mês!
          </>
        );
        break;
      case 9:
        avisoGerado = (
          <>
            O prazo para pagamento do licenciamento dos finais de placa{" "}
            <span className="text-red-600 font-bold">5 e 6</span> termina este
            mês!
          </>
        );
        break;
      case 10:
        avisoGerado = (
          <>
            O prazo para pagamento do licenciamento dos finais de placa{" "}
            <span className="text-red-600 font-bold">7 e 8</span> termina este
            mês!
          </>
        );
        break;
      case 11:
        avisoGerado = (
          <>
            O prazo para pagamento do licenciamento do final de placa{" "}
            <span className="text-red-600 font-bold">9</span> termina este mês!
          </>
        );
        break;
      case 12:
        avisoGerado = (
          <>
            O prazo para pagamento do licenciamento do final de placa{" "}
            <span className="text-red-600 font-bold">0</span> termina este mês!
          </>
        );
        break;
      default:
        avisoGerado =
          "Não há pagamentos de IPVA ou licenciamento pendentes para este mês.";
        break;
    }

    return avisoGerado;
  };

  useEffect(() => {
    const mesAtual = new Date().getMonth() + 1;
    const avisoGerado = obterAviso(mesAtual);
    setAviso(avisoGerado);

    if (isOpen && avisoGerado) {
      toast.info(
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-12 object-contain rounded-md mb-4"
          />
          <p className="text-gray-800 font-semibold text-lg mb-3">
            📢 Lembrete Importante!
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">{avisoGerado}</p>
          <Link
            to="servicos"
            smooth={true}
            duration={500}
            className="mt-4 px-6 py-2 text-sm text-white bg-customDarkBlue rounded-lg shadow hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Acesse a seção Serviços
          </Link>
        </div>,
        {
          position: "top-center",
          autoClose: 10000,
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
