import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X } from "lucide-react";

const Alert = ({ isOpen }) => {
  const [aviso, setAviso] = useState(""); // Mensagem
  const [titleAviso, setTitleAviso] = useState(""); // Título da mensagem

  // Função para obter o aviso da API
  const obterAviso = async () => {
    try {
      const response = await fetch(
        "https://backend-fgt.vercel.app/api/aviso"
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
        <div className="p-4">
          {/* Título simples */}
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            {titleAviso}
          </h3>
          
          {/* Mensagem */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {aviso}
          </p>
        </div>,
        {
          position: "top-center",
          autoClose: 6000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: "custom-toast",
          toastClassName: "bg-white border border-gray-200 rounded-lg shadow-md",
          bodyClassName: "p-0",
        }
      );
    }
  }, [isOpen, aviso, titleAviso]);

  return (
    <ToastContainer
      position="top-center"
      autoClose={6000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className="custom-toast-container"
      toastClassName="custom-toast-item"
      bodyClassName="custom-toast-body"
      closeButton={({ closeToast }) => (
        <button
          onClick={closeToast}
          className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    />
  );
};

export default Alert;
