import React, { useState } from "react";
import Modal from "../components/Modal";
import "../styles/Settings.css";

const Configuracion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehicleData, setVehicleData] = useState(null);
  const [showTripForm, setShowTripForm] = useState(false);
  const [tripData, setTripData] = useState({
    origen: "",
    destino: "",
    fecha: "",
    hora: "",
    asientos: "",
    precio: "",
    descripcion: "",
  });

  const handleVehicleSubmit = (data) => {
    console.log("Datos del vehículo:", data);
    setIsModalOpen(false);
    setVehicleData(data);
  };

  const handleTripChange = (e) => {
    const { name, value } = e.target;
    setTripData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTripSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del viaje:", tripData);
    setShowTripForm(false);
    setTripData({
      origen: "",
      destino: "",
      fecha: "",
      hora: "",
      asientos: "",
      precio: "",
      descripcion: "",
    });
  };

  return (
    <div className="configuracion-container">
      <h1 className="configuracion-title">Configuración</h1>

      <div className="configuracion-section">
        <h2>Vehículo</h2>
        {vehicleData ? (
          <div className="vehicle-info">
            <p>
              <strong>Placa:</strong> {vehicleData.placa}
            </p>
            <p>
              <strong>Marca:</strong> {vehicleData.marca}
            </p>
            <p>
              <strong>Modelo:</strong> {vehicleData.modelo}
            </p>
            <p>
              <strong>Año:</strong> {vehicleData.año}
            </p>
            <p>
              <strong>Color:</strong> {vehicleData.color}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary"
            >
              Actualizar Vehículo
            </button>
          </div>
        ) : (
          <div className="vehicle-info">
            <p>No tienes ningún vehículo registrado.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary"
            >
              Registrar Vehículo
            </button>
          </div>
        )}
      </div>

      <div className="configuracion-section">
        <h2>Gestión de Viajes</h2>
        <div className="vehicle-info">
          <button
            onClick={() => setShowTripForm(true)}
            className="btn btn-primary"
          >
            Crear Nuevo Viaje
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={vehicleData ? "Actualizar Vehículo" : "Registrar Vehículo"}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            handleVehicleSubmit(data);
          }}
          className="space-y-4"
        >
          <div className="form-group">
            <label htmlFor="placa">Placa</label>
            <input
              type="text"
              id="placa"
              name="placa"
              defaultValue={vehicleData?.placa}
              className="form-control"
              required
              placeholder="ABC123"
            />
          </div>

          <div className="form-group">
            <label htmlFor="marca">Marca</label>
            <input
              type="text"
              id="marca"
              name="marca"
              defaultValue={vehicleData?.marca}
              className="form-control"
              required
              placeholder="Toyota"
            />
          </div>

          <div className="form-group">
            <label htmlFor="modelo">Modelo</label>
            <input
              type="text"
              id="modelo"
              name="modelo"
              defaultValue={vehicleData?.modelo}
              className="form-control"
              required
              placeholder="Corolla"
            />
          </div>

          <div className="form-group">
            <label htmlFor="año">Año</label>
            <input
              type="number"
              id="año"
              name="año"
              defaultValue={vehicleData?.año}
              className="form-control"
              required
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>

          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              type="text"
              id="color"
              name="color"
              defaultValue={vehicleData?.color}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipo">Tipo de Vehículo</label>
            <select
              id="tipo"
              name="tipo"
              defaultValue={vehicleData?.tipo || "carro"}
              className="form-control"
            >
              <option value="carro">Carro</option>
              <option value="moto">Moto</option>
              <option value="camioneta">Camioneta</option>
              <option value="camion">Camión</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="capacidad">Capacidad de Pasajeros</label>
            <input
              type="number"
              id="capacidad"
              name="capacidad"
              defaultValue={vehicleData?.capacidad}
              className="form-control"
              required
              min="1"
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="btn btn-secondary"
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              {vehicleData ? "Actualizar" : "Registrar"}
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={showTripForm}
        onClose={() => setShowTripForm(false)}
        title="Crear Nuevo Viaje"
      >
        <form onSubmit={handleTripSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="origen">Origen</label>
            <input
              type="text"
              id="origen"
              name="origen"
              value={tripData.origen}
              onChange={handleTripChange}
              className="form-control"
              required
              placeholder="Ciudad de origen"
            />
          </div>

          <div className="form-group">
            <label htmlFor="destino">Destino</label>
            <input
              type="text"
              id="destino"
              name="destino"
              value={tripData.destino}
              onChange={handleTripChange}
              className="form-control"
              required
              placeholder="Ciudad de destino"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={tripData.fecha}
              onChange={handleTripChange}
              className="form-control"
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="hora">Hora</label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={tripData.hora}
              onChange={handleTripChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="asientos">Asientos Disponibles</label>
            <input
              type="number"
              id="asientos"
              name="asientos"
              value={tripData.asientos}
              onChange={handleTripChange}
              className="form-control"
              required
              min="1"
              max={vehicleData?.capacidad || 4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="precio">Precio por Asiento</label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={tripData.precio}
              onChange={handleTripChange}
              className="form-control"
              required
              min="0"
              step="1000"
            />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={tripData.descripcion}
              onChange={handleTripChange}
              className="form-control"
              rows="3"
              placeholder="Detalles adicionales del viaje"
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              onClick={() => setShowTripForm(false)}
              className="btn btn-secondary"
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Crear Viaje
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Configuracion;
