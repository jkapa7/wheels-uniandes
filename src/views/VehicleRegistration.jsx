import { useState } from "react";
import Modal from "../components/Modal";
import "../styles/VehicleRegistration.css";

const VehicleRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    placa: "",
    modelo: "",
    marca: "",
    color: "",
    año: "",
    tipo: "carro",
    capacidad: "",
    combustible: "gasolina",
    transmision: "manual",
    kilometraje: "",
    estado: "excelente",
    observaciones: "",
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
    // Aquí iría la lógica para enviar los datos al backend
    console.log("Datos del vehículo:", formData);
    setIsModalOpen(false);
    // Resetear el formulario
    setFormData({
      placa: "",
      modelo: "",
      marca: "",
      color: "",
      año: "",
      tipo: "carro",
      capacidad: "",
      combustible: "gasolina",
      transmision: "manual",
      kilometraje: "",
      estado: "excelente",
      observaciones: "",
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="vehicle-registration-page">
      <div className="vehicle-registration-header">
        <h1 className="text-3xl font-bold mb-6 select-none">
          Gestión de Vehículos
        </h1>
        <button onClick={openModal} className="btn btn-primary hover-lift">
          Registrar Nuevo Vehículo
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Registro de Vehículo"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div className="form-group">
            <label htmlFor="combustible" className="block mb-2 select-none">
              Tipo de Combustible
            </label>
            <select
              id="combustible"
              name="combustible"
              value={formData.combustible}
              onChange={handleChange}
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
              value={formData.transmision}
              onChange={handleChange}
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
              value={formData.kilometraje}
              onChange={handleChange}
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
              value={formData.estado}
              onChange={handleChange}
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
              value={formData.observaciones}
              onChange={handleChange}
              className="form-control"
              rows="3"
              placeholder="Ingrese cualquier observación adicional sobre el vehículo"
            />
          </div>

          <div className="modal-footer">
            <button
              type="button"
              onClick={closeModal}
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
