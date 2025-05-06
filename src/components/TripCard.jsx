import React from "react";
import "../styles/TripCard.css";

function TripCard({ nombre }) {
  return (
    <div className="trip-card">
      <div className="trip-info">
        <div className="trip-title">{nombre}</div>
        <div className="trip-route">Inicio – Destino</div>
      </div>
      <div className="trip-details">
        <span className="trip-icon" role="img" aria-label="car">
          🚗
        </span>
        <span className="trip-seats">2 cupos</span>
        <button className="trip-reserve">Reservar</button>
      </div>
    </div>
  );
}

export default TripCard;
