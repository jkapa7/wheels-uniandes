import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";
import goatLogo from "../assets/image.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // Aquí puedes agregar la lógica de logout
    navigate("/");
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/home") {
      navigate("/home");
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Cerrar el menú si la pantalla se redimensiona a un tamaño grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <button className="mobile-menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {isMenuOpen && (
        <div
          className="mobile-menu-backdrop visible"
          onClick={toggleMenu}
        ></div>
      )}

      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <img
            src={goatLogo}
            alt="Logo WheelsAndes"
            style={{ width: 50, borderRadius: 12 }}
          />
        </div>
        <div className="sidebar-top">
          <button onClick={handleHomeClick} className="sidebar-button">
            <span>🏠</span> Inicio
          </button>
          <Link
            to="/my-trips"
            className="sidebar-button"
            onClick={handleLinkClick}
          >
            <span>🚗</span> Mis Viajes
          </Link>
          <Link
            to="/settings"
            className="sidebar-button"
            onClick={handleLinkClick}
          >
            <span>⚙️</span> Configuración
          </Link>
        </div>
        <div className="sidebar-bottom">
          <button onClick={handleLogout} className="sidebar-button">
            <span>🚪</span> Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
