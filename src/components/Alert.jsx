import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/img/fgt-logo.png"; // Importa a logo

const Alert = ({ isOpen }) => {
  const [aviso, setAviso] = useState(""); // Mensagem
  const [titleAviso, setTitleAviso] = useState(""); // Título da mensagem

  // Função para obter o aviso da API
  const obterAviso = async () => {
    try {
      const response = await fetch(
        "https://backend-fgt.onrender.com/api/aviso"
      ); // Ajuste o URL conforme necessário
      const data = await response.json();

      // Verifique se o título e a mensagem existem na resposta e atualize os estados
      setTitleAviso(data.title);
      setAviso(data.mensagem);
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
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-12 object-contain rounded-md"
          />
          <p className="text-lg font-sans font-bold text-black text-center mb-2">
            📢 {titleAviso}
          </p>
          <p className="text-sm text-gray-800 text-center">{aviso}</p>
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
