import React, { useState } from "react";
import "../styles/MyTrips.css";

const MisViajes = () => {
  const [activeTab, setActiveTab] = useState("futuros");

  // Datos de ejemplo
  const viajesFuturos = [
    {
      id: 1,
      origen: "Ciudad Universitaria",
      destino: "Centro",
      fecha: "2024-05-10",
      hora: "15:00",
      cupos: 3,
      estado: "activo",
    },
    // Agregar más viajes futuros aquí
  ];

  const viajesPasados = [
    {
      id: 2,
      origen: "Norte",
      destino: "Ciudad Universitaria",
      fecha: "2024-05-01",
      hora: "08:00",
      cupos: 4,
      estado: "completado",
    },
    // Agregar más viajes pasados aquí
  ];

  const renderViajes = () => {
    const viajes = activeTab === "futuros" ? viajesFuturos : viajesPasados;

    return viajes.map((viaje) => (
      <div key={viaje.id} className="viaje-card">
        <div className="viaje-info">
          <h3>
            {viaje.origen} → {viaje.destino}
          </h3>
          <p>
            <strong>Fecha:</strong> {viaje.fecha}
          </p>
          <p>
            <strong>Hora:</strong> {viaje.hora}
          </p>
          <p>
            <strong>Cupos:</strong> {viaje.cupos}
          </p>
          <p>
            <strong>Estado:</strong> {viaje.estado}
          </p>
        </div>
        <div className="viaje-actions">
          {activeTab === "futuros" && (
            <button className="cancelar-button">Cancelar Viaje</button>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="mis-viajes-container">
      <h1>Mis Viajes</h1>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "futuros" ? "active" : ""}`}
          onClick={() => setActiveTab("futuros")}
        >
          Viajes Futuros
        </button>
        <button
          className={`tab-button ${activeTab === "pasados" ? "active" : ""}`}
          onClick={() => setActiveTab("pasados")}
        >
          Viajes Pasados
        </button>
      </div>

      <div className="viajes-list">{renderViajes()}</div>
    </div>
  );
};

export default MisViajes;
