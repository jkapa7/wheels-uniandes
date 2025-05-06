import React, { useState } from "react";
import "../styles/VehicleForm.css";

const VehicleForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    placa: initialData.placa || "",
    marca: initialData.marca || "",
    modelo: initialData.modelo || "",
    año: initialData.año || "",
    color: initialData.color || "",
    capacidad: initialData.capacidad || "",
  });

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
    <form className="vehicle-form" onSubmit={handleSubmit}>
      <h2>
        {initialData.placa ? "Actualizar Vehículo" : "Registrar Vehículo"}
      </h2>

      <div className="form-group">
        <label>Placa:</label>
        <input
          type="text"
          name="placa"
          value={formData.placa}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Marca:</label>
        <input
          type="text"
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Modelo:</label>
        <input
          type="text"
          name="modelo"
          value={formData.modelo}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Año:</label>
        <input
          type="number"
          name="año"
          value={formData.año}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Color:</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Capacidad (pasajeros):</label>
        <input
          type="number"
          name="capacidad"
          value={formData.capacidad}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-button">
        {initialData.placa ? "Actualizar" : "Registrar"}
      </button>
    </form>
  );
};

export default VehicleForm;
