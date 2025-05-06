import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import TripCard from "../components/TripCard";

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí iría la lógica de cierre de sesión
    navigate("/");
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a la Página Principal</h1>
        <button onClick={handleLogout} className="logout-button">
          Cerrar Sesión
        </button>
      </header>
      <main className="home-content">
        <section className="trips-list">
          <TripCard nombre="Laura Martínez" />
          <TripCard nombre="Andrés Gómez" />
          <TripCard nombre="Maríana López" />
          <TripCard nombre="Diego Ramírez" />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
