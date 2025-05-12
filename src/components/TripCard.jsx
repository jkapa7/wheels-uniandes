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
  time,
  price,
  vehicleInfo,
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

  // Formatear la hora para mostrarla en formato 12 horas
  const formatTime = (timeString) => {
    try {
      const [hours, minutes] = timeString.split(":");
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? "PM" : "AM";
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minutes} ${ampm}`;
    } catch (error) {
      return timeString;
    }
  };

  return (
    <>
      <div className="trip-card">
        <div className="trip-info">
          <div className="trip-header">
            <div className="trip-title">{name}</div>
            <div className="trip-price">${price}</div>
          </div>
          <div className="trip-route">
            <div className="route-points">
              <span className="route-origin">{origin}</span>
              <span className="route-arrow">→</span>
              <span className="route-destination">{destination}</span>
            </div>
            <div className="trip-time">
              <span className="time-icon">🕒</span>
              <span className="time-value">{formatTime(time)}</span>
            </div>
          </div>
          <div className="trip-details-info">
            <div className="trip-driver">
              <span className="driver-icon" role="img" aria-label="driver">
                {driverGender === "female" ? "👩" : "👨"}
              </span>
              <span className="driver-name">{driver}</span>
            </div>
            <div className="vehicle-info">
              <span className="vehicle-icon">🚗</span>
              <span>{vehicleInfo}</span>
            </div>
          </div>
        </div>
        <div className="trip-actions">
          <div className="trip-seats">
            <span className="seats-icon">💺</span>
            <span>{seats} cupos</span>
          </div>
          <button className="trip-reserve" onClick={handleReserveClick}>
            Reservar
          </button>
        </div>
      </div>
      {showModal && (
        <ReservationModal
          trip={{
            name,
            origin,
            destination,
            driver,
            seats,
            time: formatTime(time),
            price,
            vehicleInfo,
          }}
          onClose={handleCloseModal}
          onConfirm={handleConfirmReservation}
        />
      )}
    </>
  );
}

export default TripCard;
