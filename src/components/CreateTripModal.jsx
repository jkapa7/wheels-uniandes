import React, { useState } from "react";
import "../styles/CreateTripModal.css";

const CreateTripModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    time: "",
    seats: "",
    description: "",
  });

  const locations = [
    "Ciudad Universitaria",
    "Centro",
    "Norte",
    "Sur",
    "Oriente",
    "Occidente",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Crear Nuevo Viaje</h2>
          <button className="modal-close" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="trip-form">
          <div className="form-section">
            <h3>Detalles del Viaje</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Origen:</label>
                <select
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione una localidad</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Destino:</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione una localidad</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Hora:</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Cupos disponibles:</label>
                <input
                  type="number"
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Información Adicional</h3>
            <div className="form-group full-width">
              <label>Descripción:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Describe detalles adicionales del viaje..."
              />
            </div>
          </div>

          <div className="modal-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="confirm-button">
              Crear Viaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTripModal;
