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
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Crear Nuevo Viaje</h2>
        <form onSubmit={handleSubmit}>
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

          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              Crear Viaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTripModal;
