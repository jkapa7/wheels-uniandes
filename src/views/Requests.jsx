import React, { useState } from "react";
import "../styles/Requests.css";

const Solicitudes = () => {
  // Datos de ejemplo
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

  return (
    <div className="solicitudes-container">
      <h1>Solicitudes de Viaje</h1>

      <div className="solicitudes-list">
        {solicitudes.map((solicitud) => (
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
        ))}
      </div>
    </div>
  );
};

export default Solicitudes;
