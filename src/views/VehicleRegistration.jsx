import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import "../styles/VehicleRegistration.css";
import "../styles/common.css";

const VehicleRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehiclesList, setVehiclesList] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    placa: "",
    modelo: "",
    marca: "",
    color: "",
    año: "",
    tipo: "carro",
    capacidad: "",
  });

  // Simulamos obtener vehículos guardados
  useEffect(() => {
    // Esto sería reemplazado por una llamada a API o al almacenamiento local
    const savedVehicles = localStorage.getItem("vehicles");
    if (savedVehicles) {
      setVehiclesList(JSON.parse(savedVehicles));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se guardaría en la base de datos o en localStorage
    const updatedVehicles = [...vehiclesList, formData];
    setVehiclesList(updatedVehicles);

    // Guardar en localStorage (simulación)
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));

    setIsModalOpen(false);
    setSuccessMessage("¡Vehículo registrado con éxito!");
    setTimeout(() => setSuccessMessage(""), 3000);

    setFormData({
      placa: "",
      modelo: "",
      marca: "",
      color: "",
      año: "",
      tipo: "carro",
      capacidad: "",
    });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Registro de Vehículo</h1>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      <div className="vehicle-registration-header">
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary hover-lift"
        >
          Registrar Nuevo Vehículo
        </button>
      </div>

      {vehiclesList.length > 0 && (
        <div className="vehicles-list">
          <h2>Mis Vehículos</h2>
          <div className="vehicles-grid">
            {vehiclesList.map((vehicle, index) => (
              <div key={index} className="vehicle-card">
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
                    <strong>Tipo:</strong> {vehicle.tipo}
                  </p>
                  <p>
                    <strong>Capacidad:</strong> {vehicle.capacidad} pasajeros
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Registro de Vehículo"
      >
        <form onSubmit={handleSubmit} className="vehicle-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="placa" className="block mb-2 select-none">
                Placa
              </label>
              <input
                type="text"
                id="placa"
                name="placa"
                value={formData.placa}
                onChange={handleChange}
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
                value={formData.marca}
                onChange={handleChange}
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
                value={formData.modelo}
                onChange={handleChange}
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
                value={formData.año}
                onChange={handleChange}
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
                value={formData.color}
                onChange={handleChange}
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
                value={formData.tipo}
                onChange={handleChange}
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
                value={formData.capacidad}
                onChange={handleChange}
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
              Registrar Vehículo
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default VehicleRegistration;
