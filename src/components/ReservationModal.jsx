import React from "react";
import "../styles/ReservationModal.css";

function ReservationModal({ trip, onClose, onConfirm }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmar Reserva</h2>
        <div className="trip-details">
          <p>
            <strong>Conductor:</strong> {trip.conductor}
          </p>
          <p>
            <strong>Origen:</strong> {trip.origen}
          </p>
          <p>
            <strong>Destino:</strong> {trip.destino}
          </p>
          <p>
            <strong>Cupos disponibles:</strong> {trip.cupos}
          </p>
        </div>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={onClose}>
            Cancelar
          </button>
          <button className="confirm-button" onClick={onConfirm}>
            Confirmar Reserva
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReservationModal;
