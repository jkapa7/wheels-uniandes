import React, { useState } from "react";
import VehicleForm from "../components/VehicleForm";
import CreateTripModal from "../components/CreateTripModal";
import "../styles/Settings.css";

const Configuracion = () => {
  const [showVehicleForm, setShowVehicleForm] = useState(false);
  const [showCreateTrip, setShowCreateTrip] = useState(false);
  const [vehicleData, setVehicleData] = useState(null);

  const handleVehicleSubmit = (data) => {
    // Aquí iría la lógica para guardar/actualizar el vehículo
    console.log("Datos del vehículo:", data);
    setShowVehicleForm(false);
    setVehicleData(data);
  };

  const handleCreateTrip = (tripData) => {
    // Aquí iría la lógica para crear el viaje
    console.log("Datos del viaje:", tripData);
    setShowCreateTrip(false);
  };

  return (
    <div className="configuracion-container">
      <h1>Configuración</h1>

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
            <button onClick={() => setShowVehicleForm(true)}>
              Actualizar Vehículo
            </button>
          </div>
        ) : (
          <button onClick={() => setShowVehicleForm(true)}>
            Registrar Vehículo
          </button>
        )}
      </div>

      <div className="configuracion-section">
        <h2>Gestión de Viajes</h2>
        <button onClick={() => setShowCreateTrip(true)}>
          Crear Nuevo Viaje
        </button>
      </div>

      {showVehicleForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <VehicleForm
              onSubmit={handleVehicleSubmit}
              initialData={vehicleData}
            />
            <button onClick={() => setShowVehicleForm(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {showCreateTrip && (
        <CreateTripModal
          onClose={() => setShowCreateTrip(false)}
          onSubmit={handleCreateTrip}
        />
      )}
    </div>
  );
};

export default Configuracion;
