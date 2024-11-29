import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; // Importando a biblioteca
import "react-toastify/dist/ReactToastify.css"; // Importando o CSS necessário

const Alert = ({ isOpen }) => {
  const [aviso, setAviso] = useState("");

  // Função para determinar o aviso com base no mês
  const obterAviso = (mes) => {
    let avisoGerado = ""; // Garantir que a variável tenha um valor inicial

    switch (mes) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        avisoGerado =
          "Aviso geral de IPVA: verifique o pagamento do IPVA para os finais de placa de 1 a 6.";
        break;
      case 7:
        avisoGerado =
          "Licenciamento: finais de placa 1 e 2 devem ser pagos em Julho.";
        break;
      case 8:
        avisoGerado =
          "Licenciamento: finais de placa 3 e 4 devem ser pagos em Agosto.";
        break;
      case 9:
        avisoGerado =
          "Licenciamento: finais de placa 5 e 6 devem ser pagos em Setembro.";
        break;
      case 10:
        avisoGerado =
          "Licenciamento: finais de placa 7 e 8 devem ser pagos em Outubro.";
        break;
      case 11:
        avisoGerado =
          "Licenciamento: final de placa 9 deve ser pago em Novembro.";
        break;
      case 12:
        avisoGerado =
          "Licenciamento: final de placa 0 deve ser pago em Dezembro.";
        break;
      default:
        avisoGerado = "Não há aviso para este mês.";
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
      toast.info(avisoGerado, {
        position: "top-center",
        autoClose: 50000, 
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isOpen]); // Recalcula o aviso sempre que `isOpen` mudar

  return (
    <>
      <ToastContainer/> {/* Contêiner de Toasts */}
    </>
  );
};

export default Alert;
