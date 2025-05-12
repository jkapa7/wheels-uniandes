import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import TripCard from "../components/TripCard";
import FilterBar from "../components/FilterBar";
import goatLogo from "../assets/image.png";

const mockTrips = [
  {
    name: "Laura Martínez",
    origin: "Uniandes",
    destination: "Suba",
    seats: 2,
    driver: "Laura Martínez",
    driverGender: "female",
    time: "08:30",
    price: "15.000",
    vehicleInfo: "Toyota Corolla 2022",
  },
  {
    name: "Andrés Gómez",
    origin: "Chapinero",
    destination: "Cedritos",
    seats: 1,
    driver: "Andrés Gómez",
    driverGender: "male",
    time: "09:15",
    price: "12.000",
    vehicleInfo: "Renault Logan 2021",
  },
  {
    name: "Maríana López",
    origin: "Usaquén",
    destination: "Centro",
    seats: 3,
    driver: "Maríana López",
    driverGender: "female",
    time: "10:00",
    price: "18.000",
    vehicleInfo: "Chevrolet Onix 2023",
  },
  {
    name: "Diego Ramírez",
    origin: "Teusaquillo",
    destination: "Usaquén",
    seats: 2,
    driver: "Diego Ramírez",
    driverGender: "male",
    time: "11:45",
    price: "14.000",
    vehicleInfo: "Volkswagen Polo 2022",
  },
  {
    name: "Camila Torres",
    origin: "Fontibón",
    destination: "Uniandes",
    seats: 1,
    driver: "Camila Torres",
    driverGender: "female",
    time: "13:30",
    price: "16.000",
    vehicleInfo: "Kia Rio 2023",
  },
  {
    name: "Juan Pérez",
    origin: "Kennedy",
    destination: "Centro",
    seats: 2,
    driver: "Juan Pérez",
    driverGender: "male",
    time: "14:15",
    price: "13.000",
    vehicleInfo: "Hyundai Accent 2021",
  },
  {
    name: "Sofía Herrera",
    origin: "Engativá",
    destination: "Chapinero",
    seats: 2,
    driver: "Sofía Herrera",
    driverGender: "female",
    time: "15:00",
    price: "15.000",
    vehicleInfo: "Mazda 2 2022",
  },
  {
    name: "Carlos Ruiz",
    origin: "Suba",
    destination: "Usaquén",
    seats: 1,
    driver: "Carlos Ruiz",
    driverGender: "male",
    time: "16:30",
    price: "12.000",
    vehicleInfo: "Suzuki Swift 2023",
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
      <header className="home-header">
        <img src={goatLogo} alt="Logo WheelsAndes" className="goat-logo" />
        <h1 className="home-title">Viajes Disponibles</h1>
      </header>
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
                time={trip.time}
                price={trip.price}
                vehicleInfo={trip.vehicleInfo}
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
