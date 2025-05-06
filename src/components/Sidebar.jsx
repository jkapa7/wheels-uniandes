import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Aquí puedes agregar la lógica de logout
    navigate("/");
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/home") {
      navigate("/home");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <button onClick={handleHomeClick} className="sidebar-button">
          <span>🏠</span> Inicio
        </button>
        <Link to="/configuracion" className="sidebar-button">
          <span>⚙️</span> Configuración
        </Link>
      </div>
      <div className="sidebar-bottom">
        <button onClick={handleLogout} className="sidebar-button">
          <span>🚪</span> Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
