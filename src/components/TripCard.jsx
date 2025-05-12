import React, { useState } from "react";
import "../styles/TripCard.css";
import ReservationModal from "./ReservationModal";

function TripCard({
  name,
  route = "Inicio – Destino",
  seats = 2,
  origin,
  destination,
  driver,
  driverGender,
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
          <div className="trip-title">{name}</div>
          <div className="trip-route">
            <span className="route-origin">{origin}</span>
            <span className="route-arrow">→</span>
            <span className="route-destination">{destination}</span>
          </div>
          <div className="trip-driver">
            <span className="driver-icon" role="img" aria-label="driver">
              {driverGender === "female" ? "👩" : "👨"}
            </span>
            <span className="driver-name">{driver}</span>
          </div>
        </div>
        <div className="trip-details">
          <span className="trip-icon" role="img" aria-label="car">
            🚗
          </span>
          <span className="trip-seats">{seats} cupos</span>
          <button className="trip-reserve" onClick={handleReserveClick}>
            Reservar
          </button>
        </div>
      </div>
      {showModal && (
        <ReservationModal
          trip={{ name, origin, destination, driver, seats }}
          onClose={handleCloseModal}
          onConfirm={handleConfirmReservation}
        />
      )}
    </>
  );
}

export default TripCard;
