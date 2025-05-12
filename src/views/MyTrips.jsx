import React, { useState } from "react";
import "../styles/MyTrips.css";

const MisViajes = () => {
  const [activeTab, setActiveTab] = useState("futuros");

  // Datos de ejemplo para viajes
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

  // Datos de ejemplo para solicitudes
  const [solicitudes, setSolicitudes] = useState([
    {
      id: 1,
      pasajero: "Juan Pérez",
      viaje: {
        origen: "Ciudad Universitaria",
        destino: "Centro",
        fecha: "2024-05-10",
        hora: "15:00",
      },
      estado: "pendiente",
    },
    {
      id: 2,
      pasajero: "María García",
      viaje: {
        origen: "Norte",
        destino: "Ciudad Universitaria",
        fecha: "2024-05-11",
        hora: "08:00",
      },
      estado: "pendiente",
    },
  ]);

  const handleAceptar = (id) => {
    setSolicitudes(
      solicitudes.map((solicitud) =>
        solicitud.id === id ? { ...solicitud, estado: "aceptada" } : solicitud
      )
    );
  };

  const handleRechazar = (id) => {
    setSolicitudes(
      solicitudes.map((solicitud) =>
        solicitud.id === id ? { ...solicitud, estado: "rechazada" } : solicitud
      )
    );
  };

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

  const renderSolicitudes = () => {
    return solicitudes.map((solicitud) => (
      <div key={solicitud.id} className="solicitud-card">
        <div className="solicitud-info">
          <h3>Solicitud de {solicitud.pasajero}</h3>
          <p>
            <strong>Viaje:</strong> {solicitud.viaje.origen} →{" "}
            {solicitud.viaje.destino}
          </p>
          <p>
            <strong>Fecha:</strong> {solicitud.viaje.fecha}
          </p>
          <p>
            <strong>Hora:</strong> {solicitud.viaje.hora}
          </p>
          <p>
            <strong>Estado:</strong> {solicitud.estado}
          </p>
        </div>

        {solicitud.estado === "pendiente" && (
          <div className="solicitud-actions">
            <button
              className="aceptar-button"
              onClick={() => handleAceptar(solicitud.id)}
            >
              Aceptar
            </button>
            <button
              className="rechazar-button"
              onClick={() => handleRechazar(solicitud.id)}
            >
              Rechazar
            </button>
          </div>
        )}
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
        <button
          className={`tab-button ${
            activeTab === "solicitudes" ? "active" : ""
          }`}
          onClick={() => setActiveTab("solicitudes")}
        >
          Solicitudes
        </button>
      </div>

      <div className="viajes-list">
        {activeTab === "solicitudes" ? renderSolicitudes() : renderViajes()}
      </div>
    </div>
  );
};

export default MisViajes;
