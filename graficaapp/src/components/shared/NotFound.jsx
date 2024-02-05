import React from "react";
import { Link } from "react-router-dom";
import logomain from "../../assets/logo_main.png";

function NotFound() {
  return (
    <div className="min-h-screen bg-bgmain flex flex-col justify-center items-center gap-20">
      <img src={logomain} alt="Logo de Grafica Popular y Arte Urbano" className="h-auto w-auto"/>
      <h3 className="font-extrabold text-4xl text-brown">
        404 | No se encontro la vista
      </h3>
      <Link>
        <button className="btn bg-brown text-white">Regresar al Inicio</button>
      </Link>
    </div>
  );
}

export default NotFound;
