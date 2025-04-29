import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

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
        <section className="welcome-section">
          <h2>¡Hola de nuevo!</h2>
          <p>
            Esta es tu página principal. Aquí puedes agregar el contenido que
            desees mostrar.
          </p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;

// test commit