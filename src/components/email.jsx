import React from "react";

function CopiarEmail() {
  const handleCopy = () => {
    navigator.clipboard
      .writeText("lucasvargas.dev@gmail.com")
      .then(() => {
        alert("Email copiado para a área de transferência!");
      })
      .catch(() => {
        alert("Erro ao copiar o email.");
      });
  };

  return (
    <button
      onClick={handleCopy}
      className="font-bold text-white bg-ch2 p-2 rounded-md hover:bg-opacity-80 transition"
    >
      Copiar Email
    </button>
  );
}

export default CopiarEmail;
