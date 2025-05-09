import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./views/Login";
import HomePage from "./views/HomePage";
import Register from "./views/Register";
import Configuracion from "./views/Configuracion";
import MisViajes from "./views/MisViajes";
import Solicitudes from "./views/Solicitudes";
import Sidebar from "./components/Sidebar";
import "./App.css";

function AppContent() {
  const location = useLocation();

  const shouldShowSidebar = (path) => {
    return (
      path === "/home" ||
      path === "/configuracion" ||
      path === "/mis-viajes" ||
      path === "/solicitudes"
    );
  };

  return (
    <>
      {shouldShowSidebar(location.pathname) && <Sidebar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/mis-viajes" element={<MisViajes />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
