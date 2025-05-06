import React from "react";
import "../styles/TripCard.css";

function TripCard({
  nombre,
  ruta = "Inicio – Destino",
  cupos = 2,
  origen,
  destino,
  conductor,
  generoConductor,
}) {
  return (
    <div className="trip-card">
      <div className="trip-info">
        <div className="trip-title">{nombre}</div>
        <div className="trip-route">
          <span className="route-origin">{origen}</span>
          <span className="route-arrow">→</span>
          <span className="route-destination">{destino}</span>
        </div>
        <div className="trip-driver">
          <span className="driver-icon" role="img" aria-label="driver">
            {generoConductor === "female" ? "👩" : "👨"}
          </span>
          <span className="driver-name">{conductor}</span>
        </div>
      </div>
      <div className="trip-details">
        <span className="trip-icon" role="img" aria-label="car">
          🚗
        </span>
        <span className="trip-seats">{cupos} cupos</span>
        <button className="trip-reserve">Reservar</button>
      </div>
    </div>
  );
}

export default TripCard;
