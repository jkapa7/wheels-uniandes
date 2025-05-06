import React, { useState } from "react";
import "../styles/TripCard.css";
import ReservationModal from "./ReservationModal";

function TripCard({
  nombre,
  ruta = "Inicio – Destino",
  cupos = 2,
  origen,
  destino,
  conductor,
  generoConductor,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleReserveClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmReservation = () => {
    // Aquí iría la lógica para confirmar la reserva
    alert("¡Reserva confirmada!");
    setShowModal(false);
  };

  return (
    <>
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
          <button className="trip-reserve" onClick={handleReserveClick}>
            Reservar
          </button>
        </div>
      </div>
      {showModal && (
        <ReservationModal
          trip={{ nombre, origen, destino, conductor, cupos }}
          onClose={handleCloseModal}
          onConfirm={handleConfirmReservation}
        />
      )}
    </>
  );
}

export default TripCard;
