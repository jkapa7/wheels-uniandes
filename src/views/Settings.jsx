import React, { useState } from "react";
import Modal from "../components/Modal";
import "../styles/Settings.css";
import goatLogo from "../assets/image.png";

const Configuracion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehicleData, setVehicleData] = useState(null);
  const [showTripForm, setShowTripForm] = useState(false);

  const handleVehicleSubmit = (data) => {
    // Aquí iría la lógica para guardar/actualizar el vehículo
    console.log("Datos del vehículo:", data);
    setIsModalOpen(false);
    setVehicleData(data);
  };

  const handleTripSubmit = (data) => {
    // Aquí iría la lógica para guardar el viaje
    console.log("Datos del viaje:", data);
    setShowTripForm(false);
  };

  return (
    <div className="configuracion-container">
      <div className="logo-container">
        <img src={goatLogo} alt="Logo WheelsAndes" className="logo-image" />
      </div>
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary hover-lift"
            >
              Actualizar Vehículo
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary hover-lift"
          >
            Registrar Vehículo
          </button>
        )}
      </div>

      <div className="configuracion-section">
        <h2>Gestión de Viajes</h2>
        <button
          onClick={() => setShowTripForm(true)}
          className="btn btn-primary hover-lift"
        >
          Crear Nuevo Viaje
        </button>
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
            <label htmlFor="placa" className="block mb-2 select-none">
              Placa
            </label>
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
            <label htmlFor="marca" className="block mb-2 select-none">
              Marca
            </label>
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
            <label htmlFor="modelo" className="block mb-2 select-none">
              Modelo
            </label>
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
            <label htmlFor="año" className="block mb-2 select-none">
              Año
            </label>
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
            <label htmlFor="color" className="block mb-2 select-none">
              Color
            </label>
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
            <label htmlFor="tipo" className="block mb-2 select-none">
              Tipo de Vehículo
            </label>
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
            <label htmlFor="capacidad" className="block mb-2 select-none">
              Capacidad de Pasajeros
            </label>
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

          <div className="form-group">
            <label htmlFor="combustible" className="block mb-2 select-none">
              Tipo de Combustible
            </label>
            <select
              id="combustible"
              name="combustible"
              defaultValue={vehicleData?.combustible || "gasolina"}
              className="form-control"
            >
              <option value="gasolina">Gasolina</option>
              <option value="diesel">Diesel</option>
              <option value="electrico">Eléctrico</option>
              <option value="hibrido">Híbrido</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="transmision" className="block mb-2 select-none">
              Transmisión
            </label>
            <select
              id="transmision"
              name="transmision"
              defaultValue={vehicleData?.transmision || "manual"}
              className="form-control"
            >
              <option value="manual">Manual</option>
              <option value="automatico">Automático</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="kilometraje" className="block mb-2 select-none">
              Kilometraje
            </label>
            <input
              type="number"
              id="kilometraje"
              name="kilometraje"
              defaultValue={vehicleData?.kilometraje}
              className="form-control"
              required
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="estado" className="block mb-2 select-none">
              Estado del Vehículo
            </label>
            <select
              id="estado"
              name="estado"
              defaultValue={vehicleData?.estado || "excelente"}
              className="form-control"
            >
              <option value="excelente">Excelente</option>
              <option value="bueno">Bueno</option>
              <option value="regular">Regular</option>
              <option value="malo">Malo</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="observaciones" className="block mb-2 select-none">
              Observaciones
            </label>
            <textarea
              id="observaciones"
              name="observaciones"
              defaultValue={vehicleData?.observaciones}
              className="form-control"
              rows="3"
              placeholder="Ingrese cualquier observación adicional sobre el vehículo"
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
              {vehicleData ? "Actualizar" : "Registrar"} Vehículo
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={showTripForm}
        onClose={() => setShowTripForm(false)}
        title="Crear Nuevo Viaje"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            handleTripSubmit(data);
          }}
          className="space-y-4"
        >
          <div className="form-group">
            <label htmlFor="origen" className="block mb-2 select-none">
              Origen
            </label>
            <input
              type="text"
              id="origen"
              name="origen"
              className="form-control"
              required
              placeholder="Ciudad de origen"
            />
          </div>

          <div className="form-group">
            <label htmlFor="destino" className="block mb-2 select-none">
              Destino
            </label>
            <input
              type="text"
              id="destino"
              name="destino"
              className="form-control"
              required
              placeholder="Ciudad de destino"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fecha" className="block mb-2 select-none">
              Fecha
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              className="form-control"
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="hora" className="block mb-2 select-none">
              Hora
            </label>
            <input
              type="time"
              id="hora"
              name="hora"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="asientos" className="block mb-2 select-none">
              Asientos Disponibles
            </label>
            <input
              type="number"
              id="asientos"
              name="asientos"
              className="form-control"
              required
              min="1"
              max={vehicleData?.capacidad || 4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="precio" className="block mb-2 select-none">
              Precio por Asiento
            </label>
            <input
              type="number"
              id="precio"
              name="precio"
              className="form-control"
              required
              min="0"
              step="1000"
            />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion" className="block mb-2 select-none">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
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
