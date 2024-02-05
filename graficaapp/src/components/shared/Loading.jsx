import React from "react";
import logomain from "../../assets/logo_main.png";

function Loading() {
  return (
    <div className="absolute top-0 left-0 min-h-screen bg-bgmain w-full flex flex-col justify-center items-center gap-10">
      <img
        src={logomain}
        alt="Logo de Grafica Popular y Arte Urbano"
        className="animate-bounce w-50 h-50"
      />
      <span className="loading loading-spinner loading-lg h-20"></span>
    </div>
  );
}

export default Loading;
