import React from "react";
import "../styles/FilterBar.css";

const FilterBar = ({ onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
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
        >
          <option value="">Todos</option>
          <option value="male">Hombre</option>
          <option value="female">Mujer</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="origin">Origen:</label>
        <input
          type="text"
          id="origin"
          name="origin"
          placeholder="Ingrese origen"
          onChange={handleChange}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="destination">Destino:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          placeholder="Ingrese destino"
          onChange={handleChange}
          className="filter-input"
        />
      </div>
    </div>
  );
};

export default FilterBar;
