import React from "react";
import "../styles/ReservationModal.css";

function ReservationModal({ trip, onClose, onConfirm }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Confirmar Reserva</h2>
        <div className="trip-details">
          <div className="detail-section">
            <h3>Información del Viaje</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Conductor:</span>
                <span className="detail-value">{trip.driver}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Origen:</span>
                <span className="detail-value">{trip.origin}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Destino:</span>
                <span className="detail-value">{trip.destination}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Hora:</span>
                <span className="detail-value">{trip.time}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Cupos disponibles:</span>
                <span className="detail-value">{trip.seats}</span>
              </div>
            </div>
          </div>
          <div className="detail-section">
            <h3>Información del Vehículo</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Vehículo:</span>
                <span className="detail-value">{trip.vehicleInfo}</span>
              </div>
            </div>
          </div>
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
