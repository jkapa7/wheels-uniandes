import React, { useState } from "react";
import "../styles/FilterBar.css";

const FilterBar = ({ onFilterChange, onClearFilters }) => {
  const [selectValues, setSelectValues] = useState({
    driverGender: "",
    origin: "",
    destination: "",
  });

  const bogotaLocalidades = [
    "Usaquén",
    "Chapinero",
    "Santa Fe",
    "San Cristóbal",
    "Usme",
    "Tunjuelito",
    "Bosa",
    "Kennedy",
    "Fontibón",
    "Engativá",
    "Suba",
    "Barrios Unidos",
    "Teusaquillo",
    "Los Mártires",
    "Antonio Nariño",
    "Puente Aranda",
    "La Candelaria",
    "Rafael Uribe Uribe",
    "Ciudad Bolívar",
    "Sumapaz",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    onFilterChange(name, value);
  };

  const handleClearFilters = () => {
    setSelectValues({
      driverGender: "",
      origin: "",
      destination: "",
    });
    onClearFilters();
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="driverGender">Conductor:</label>
        <select
          id="driverGender"
          name="driverGender"
          onChange={handleChange}
          className="filter-select"
          value={selectValues.driverGender}
        >
          <option value="">Todos</option>
          <option value="male">Hombre</option>
          <option value="female">Mujer</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="origin">Origen:</label>
        <select
          id="origin"
          name="origin"
          onChange={handleChange}
          className="filter-select"
          value={selectValues.origin}
        >
          <option value="">Todas las localidades</option>
          {bogotaLocalidades.map((localidad) => (
            <option key={localidad} value={localidad}>
              {localidad}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="destination">Destino:</label>
        <select
          id="destination"
          name="destination"
          onChange={handleChange}
          className="filter-select"
          value={selectValues.destination}
        >
          <option value="">Todas las localidades</option>
          {bogotaLocalidades.map((localidad) => (
            <option key={localidad} value={localidad}>
              {localidad}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group button-group">
        <button onClick={handleClearFilters} className="clear-filters-btn">
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
