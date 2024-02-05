import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo_main.png";
import "./Navbar.css";

function Navbar() {
  const nagivate = useNavigate();

  const scrollToPage = (page) => {
    document
      .querySelector(`#${page}`)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <>
      <div className="navbar-container">
        <div
          className={`navbar bg-white-fade flex justify-around items-center`}
        >
          <picture className="w-50 pt-10 rounded">
            <img width="400" height="400" src={logo} alt="Logo" />
          </picture>

          <div className="flex justify-between pl-10">
            <ul className="menu menu-horizontal px-1 text-black flex gap-5">
              <li className="link">
                <button
                  onClick={() => {
                    nagivate("/");
                    scrollToPage("presentation");
                  }}
                >
                  Presentación
                </button>
              </li>
              <li className="link">
                <button>Objetivos</button>
              </li>
              <li className="link">
                <button
                  onClick={() => {
                    nagivate("/");
                    scrollToPage("completedfile");
                  }}
                >
                  Archivo Completo
                </button>
              </li>
              <li className="link">
                <button
                  onClick={() => {
                    nagivate("/");
                    scrollToPage("photographers");
                  }}
                >
                  Fotógrafos
                </button>
              </li>
              <li className="link">
                <button>Enlaces</button>
              </li>
              <li className="link">
                <button>Contacto y Créditos</button>
              </li>
              <li className="link">
                <Link to={"/uploads"}>Mapa</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
