import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import "../styles/Settings.css";

const Configuracion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehicleData, setVehicleData] = useState(null);
  const [vehiclesList, setVehiclesList] = useState([]);
  const [showTripForm, setShowTripForm] = useState(false);
  const [showVehicleRequiredMessage, setShowVehicleRequiredMessage] =
    useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [tripData, setTripData] = useState({
    origen: "",
    destino: "",
    fecha: "",
    hora: "",
    asientos: "",
    precio: "",
    descripcion: "",
    vehiculo: "",
  });

  // Cargar vehículos guardados
  useEffect(() => {
    const savedVehicles = localStorage.getItem("vehicles");
    if (savedVehicles) {
      const vehicles = JSON.parse(savedVehicles);
      setVehiclesList(vehicles);
      if (vehicles.length > 0 && !vehicleData) {
        setVehicleData(vehicles[0]);
      }
    }
  }, []);

  const handleVehicleSubmit = (data) => {
    // Aseguramos que todos los vehículos sean de tipo "carro"
    const updatedData = {
      ...data,
      tipo: "carro",
    };

    console.log("Datos del vehículo:", updatedData);
    setIsModalOpen(false);
    setVehicleData(updatedData);

    // Guardar en localStorage
    let vehicles = [];
    const savedVehicles = localStorage.getItem("vehicles");
    if (savedVehicles) {
      vehicles = JSON.parse(savedVehicles);
    }

    // Verificar si ya existe el vehículo (por placa)
    const vehicleIndex = vehicles.findIndex(
      (v) => v.placa === updatedData.placa
    );
    if (vehicleIndex >= 0) {
      // Actualizar
      vehicles[vehicleIndex] = updatedData;
    } else {
      // Agregar nuevo
      vehicles.push(updatedData);
    }

    localStorage.setItem("vehicles", JSON.stringify(vehicles));
    setVehiclesList(vehicles);

    setSuccessMessage(
      vehicleIndex >= 0
        ? "Vehículo actualizado con éxito"
        : "Vehículo registrado con éxito"
    );
    setTimeout(() => setSuccessMessage(""), 3000);
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
    // Asegurarse de incluir el vehículo seleccionado
    const completeData = {
      ...tripData,
      vehiculo: vehicleData.placa,
      vehiculoInfo: {
        marca: vehicleData.marca,
        modelo: vehicleData.modelo,
        placa: vehicleData.placa,
        capacidad: vehicleData.capacidad,
        tipo: "carro",
      },
    };

    console.log("Datos del viaje:", completeData);

    // Guardar en localStorage
    let trips = [];
    const savedTrips = localStorage.getItem("trips");
    if (savedTrips) {
      trips = JSON.parse(savedTrips);
    }
    trips.push(completeData);
    localStorage.setItem("trips", JSON.stringify(trips));

    setShowTripForm(false);
    setSuccessMessage("Viaje creado con éxito");
    setTimeout(() => setSuccessMessage(""), 3000);

    setTripData({
      origen: "",
      destino: "",
      fecha: "",
      hora: "",
      asientos: "",
      precio: "",
      descripcion: "",
      vehiculo: "",
    });
  };

  const handleCreateTrip = () => {
    if (!vehicleData) {
      setShowVehicleRequiredMessage(true);
      setTimeout(() => {
        setShowVehicleRequiredMessage(false);
      }, 3000);
      return;
    }
    setShowTripForm(true);
  };

  const handleSelectVehicle = (vehicle) => {
    setVehicleData(vehicle);
  };

  return (
    <div className="configuracion-container">
      <h1 className="configuracion-title">Configuración</h1>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      <div className="configuracion-section">
        <h2>Vehículo</h2>
        {vehiclesList.length > 0 ? (
          <div>
            <div className="vehicle-selection">
              <h3>Selecciona tu vehículo</h3>
              <div className="vehicles-grid">
                {vehiclesList.map((vehicle, index) => (
                  <div
                    key={index}
                    className={`vehicle-card ${
                      vehicleData?.placa === vehicle.placa ? "selected" : ""
                    }`}
                    onClick={() => handleSelectVehicle(vehicle)}
                  >
                    <div className="vehicle-card-header">
                      <h3>
                        {vehicle.marca} {vehicle.modelo}
                      </h3>
                      <span className="vehicle-plate">{vehicle.placa}</span>
                    </div>
                    <div className="vehicle-card-body">
                      <p>
                        <strong>Año:</strong> {vehicle.año}
                      </p>
                      <p>
                        <strong>Color:</strong> {vehicle.color}
                      </p>
                      <p>
                        <strong>Capacidad:</strong> {vehicle.capacidad}{" "}
                        pasajeros
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="action-buttons">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary"
              >
                Registrar Nuevo Vehículo
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-secondary"
              >
                Actualizar Vehículo
              </button>
            </div>
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
          {showVehicleRequiredMessage && (
            <div className="alert alert-warning">
              Debes registrar un vehículo antes de crear un viaje
            </div>
          )}
          <button onClick={handleCreateTrip} className="btn btn-primary">
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
          <div className="form-grid">
            <div className="form-group active">
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

            <div className="form-group active">
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

            <div className="form-group active">
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

            <div className="form-group active">
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

            <div className="form-group active">
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

            {/* Eliminamos el tipo de vehículo y lo establecemos como valor fijo "carro" */}
            <input type="hidden" name="tipo" value="carro" />

            <div className="form-group active">
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
          <div className="form-group active">
            <label htmlFor="vehiculo">Vehículo</label>
            <div className="selected-vehicle">
              <p>
                <strong>Placa:</strong> {vehicleData?.placa}
              </p>
              <p>
                <strong>Vehículo:</strong> {vehicleData?.marca}{" "}
                {vehicleData?.modelo} ({vehicleData?.año})
              </p>
              <p>
                <strong>Capacidad:</strong> {vehicleData?.capacidad} pasajeros
              </p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group active">
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

            <div className="form-group active">
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

            <div className="form-group active">
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

            <div className="form-group active">
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

            <div className="form-group active">
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
              {vehicleData && (
                <small className="form-text">
                  Máximo: {vehicleData.capacidad} pasajeros
                </small>
              )}
            </div>

            <div className="form-group active">
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
          </div>

          <div className="form-group active">
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
