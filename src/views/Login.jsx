import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import "../styles/common.css";
import loginRegisterImage from "../assets/loginRegisterImage.png";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!credentials.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "El correo electrónico no es válido";
    } else if (!credentials.email.endsWith("@uniandes.edu.co")) {
      newErrors.email = "El correo electrónico debe ser de Uniandes";
    }

    if (!credentials.password) {
      newErrors.password = "La contraseña es requerida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/home");
    }
  };

  return (
    <div className="login-page-container">
      <div className="auth-flex-container">
        <div className="auth-image-container">
          <img
            src={loginRegisterImage}
            alt="Login Register"
            className="auth-side-image"
          />
        </div>
        <div className="login-container">
          <div className="login-header">
            <h1 className="app-title">WheelsAndes</h1>
            <p className="app-subtitle">Comparte viajes, ahorra dinero</p>
          </div>
          <div className="login-box">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="ejemplo@uniandes.edu.co"
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>
              <button type="submit" className="login-button">
                Ingresar
              </button>
              <div className="register-link">
                <p>
                  ¿No tienes una cuenta?{" "}
                  <Link to="/register">Regístrate aquí</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
