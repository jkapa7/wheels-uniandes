import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import TripCard from "../components/TripCard";
import FilterBar from "../components/FilterBar";
import goatLogo from "../assets/react.svg";

const mockTrips = [
  {
    nombre: "Laura Martínez",
    origen: "Uniandes",
    destino: "Suba",
    cupos: 2,
    conductor: "Laura Martínez",
    generoConductor: "female",
  },
  {
    nombre: "Andrés Gómez",
    origen: "Chapinero",
    destino: "Cedritos",
    cupos: 1,
    conductor: "Andrés Gómez",
    generoConductor: "male",
  },
  {
    nombre: "Maríana López",
    origen: "Usaquén",
    destino: "Centro",
    cupos: 3,
    conductor: "Maríana López",
    generoConductor: "female",
  },
  {
    nombre: "Diego Ramírez",
    origen: "Teusaquillo",
    destino: "Usaquén",
    cupos: 2,
    conductor: "Diego Ramírez",
    generoConductor: "male",
  },
  {
    nombre: "Camila Torres",
    origen: "Fontibón",
    destino: "Uniandes",
    cupos: 1,
    conductor: "Camila Torres",
    generoConductor: "female",
  },
  {
    nombre: "Juan Pérez",
    origen: "Kennedy",
    destino: "Centro",
    cupos: 2,
    conductor: "Juan Pérez",
    generoConductor: "male",
  },
  {
    nombre: "Sofía Herrera",
    origen: "Engativá",
    destino: "Chapinero",
    cupos: 2,
    conductor: "Sofía Herrera",
    generoConductor: "female",
  },
  {
    nombre: "Carlos Ruiz",
    origen: "Suba",
    destino: "Usaquén",
    cupos: 1,
    conductor: "Carlos Ruiz",
    generoConductor: "male",
  },
];

function HomePage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    driverGender: "",
    origin: "",
    destination: "",
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value.toLowerCase(),
    }));
  };

  const filteredTrips = mockTrips.filter((trip) => {
    const matchesGender =
      !filters.driverGender || trip.generoConductor === filters.driverGender;
    const matchesOrigin =
      !filters.origin || trip.origen.toLowerCase().includes(filters.origin);
    const matchesDestination =
      !filters.destination ||
      trip.destino.toLowerCase().includes(filters.destination);

    return matchesGender && matchesOrigin && matchesDestination;
  });

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Viajes Disponibles</h1>
      </header>
      <main className="home-content">
        <FilterBar onFilterChange={handleFilterChange} />
        <section className="trips-list">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip, idx) => (
              <TripCard
                key={idx}
                nombre={trip.nombre}
                origen={trip.origen}
                destino={trip.destino}
                cupos={trip.cupos}
                conductor={trip.conductor}
                generoConductor={trip.generoConductor}
              />
            ))
          ) : (
            <div className="no-trips-message">
              No hay viajes disponibles con los filtros seleccionados
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default HomePage;
