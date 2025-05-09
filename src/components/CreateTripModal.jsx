import React, { useState } from "react";
import "../styles/CreateTripModal.css";

const CreateTripModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    origen: "",
    destino: "",
    hora: "",
    cupos: "",
    descripcion: "",
  });

  const localidades = [
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
              name="origen"
              value={formData.origen}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una localidad</option>
              {localidades.map((localidad) => (
                <option key={localidad} value={localidad}>
                  {localidad}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Destino:</label>
            <select
              name="destino"
              value={formData.destino}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una localidad</option>
              {localidades.map((localidad) => (
                <option key={localidad} value={localidad}>
                  {localidad}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Hora:</label>
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Cupos disponibles:</label>
            <input
              type="number"
              name="cupos"
              value={formData.cupos}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
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
