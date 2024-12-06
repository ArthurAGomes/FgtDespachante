import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = ({ isOpen }) => {
  const [aviso, setAviso] = useState(""); // Mensagem
  const [titleAviso, setTitleAviso] = useState(""); // Título da mensagem

  // Função para obter o aviso da API
  const obterAviso = async () => {
    try {
      const response = await fetch("/aviso"); // Ajuste o URL conforme necessário
      const data = await response.json();

      // Verifique se o título e a mensagem existem na resposta e atualize os estados
      setTitleAviso(data.title || "Aviso importante");
      setAviso(data.mensagem || "Sem mensagem disponível.");
    } catch (error) {
      console.error("Erro ao obter aviso:", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      obterAviso();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && aviso) {
      toast.info(
        <div className="text-center">
          <p className="text-gray-800 font-semibold text-lg">📢 {titleAviso}</p>
          <p className="text-gray-600 text-sm">{aviso}</p>
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
  }, [isOpen, aviso, titleAviso]); // Certifique-se de atualizar quando titleAviso mudar

  return <ToastContainer />;
};

export default Alert;
