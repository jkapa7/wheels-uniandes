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
import Requests from "./views/Requests";
import Sidebar from "./components/Sidebar";
import "./App.css";

function AppContent() {
  const location = useLocation();

  const shouldShowSidebar = (path) => {
    return (
      path === "/home" ||
      path === "/settings" ||
      path === "/my-trips" ||
      path === "/requests"
    );
  };

  return (
    <>
      {shouldShowSidebar(location.pathname) && <Sidebar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/requests" element={<Requests />} />
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
