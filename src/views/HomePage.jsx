import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import TripCard from "../components/TripCard";
import FilterBar from "../components/FilterBar";
import goatLogo from "../assets/react.svg";

const mockTrips = [
  {
    name: "Laura Martínez",
    origin: "Uniandes",
    destination: "Suba",
    seats: 2,
    driver: "Laura Martínez",
    driverGender: "female",
  },
  {
    name: "Andrés Gómez",
    origin: "Chapinero",
    destination: "Cedritos",
    seats: 1,
    driver: "Andrés Gómez",
    driverGender: "male",
  },
  {
    name: "Maríana López",
    origin: "Usaquén",
    destination: "Centro",
    seats: 3,
    driver: "Maríana López",
    driverGender: "female",
  },
  {
    name: "Diego Ramírez",
    origin: "Teusaquillo",
    destination: "Usaquén",
    seats: 2,
    driver: "Diego Ramírez",
    driverGender: "male",
  },
  {
    name: "Camila Torres",
    origin: "Fontibón",
    destination: "Uniandes",
    seats: 1,
    driver: "Camila Torres",
    driverGender: "female",
  },
  {
    name: "Juan Pérez",
    origin: "Kennedy",
    destination: "Centro",
    seats: 2,
    driver: "Juan Pérez",
    driverGender: "male",
  },
  {
    name: "Sofía Herrera",
    origin: "Engativá",
    destination: "Chapinero",
    seats: 2,
    driver: "Sofía Herrera",
    driverGender: "female",
  },
  {
    name: "Carlos Ruiz",
    origin: "Suba",
    destination: "Usaquén",
    seats: 1,
    driver: "Carlos Ruiz",
    driverGender: "male",
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
      !filters.driverGender || trip.driverGender === filters.driverGender;
    const matchesOrigin =
      !filters.origin || trip.origin.toLowerCase().includes(filters.origin);
    const matchesDestination =
      !filters.destination ||
      trip.destination.toLowerCase().includes(filters.destination);

    return matchesGender && matchesOrigin && matchesDestination;
  });

  return (
    <div className="home-container">
      <main className="home-content">
        <FilterBar onFilterChange={handleFilterChange} />
        <section className="trips-list">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip, idx) => (
              <TripCard
                key={idx}
                name={trip.name}
                origin={trip.origin}
                destination={trip.destination}
                seats={trip.seats}
                driver={trip.driver}
                driverGender={trip.driverGender}
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
