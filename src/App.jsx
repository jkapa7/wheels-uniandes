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
import Settings from "./views/Settings";
import MyTrips from "./views/MyTrips";
import VehicleRegistration from "./views/VehicleRegistration";
import Sidebar from "./components/Sidebar";
import "./App.css";
import "./styles/Layout.css";

function AppContent() {
  const location = useLocation();

  const shouldShowSidebar = (path) => {
    return (
      path === "/home" ||
      path === "/settings" ||
      path === "/my-trips" ||
      path === "/vehicle-registration"
    );
  };

  const isAuthPage = (path) => {
    return path === "/" || path === "/register";
  };

  if (isAuthPage(location.pathname)) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <div className="main-layout">
      <Sidebar />
      <main className="main-content">
        <div className="content-container">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/my-trips" element={<MyTrips />} />
            <Route
              path="/vehicle-registration"
              element={<VehicleRegistration />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
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
