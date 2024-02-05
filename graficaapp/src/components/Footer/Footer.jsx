import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-end bg-brown h-32 mt-1 text-white">
      <span className="font-bold">
        ESPOL. Todos los derechos reservados (c) {new Date().getFullYear()}.
      </span>
    </div>
  );
}

export default Footer;
