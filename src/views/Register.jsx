import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css";
import "../styles/common.css";
import loginRegisterImage from "../assets/loginRegisterImage.png";

function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^\d{10}$/.test(formData.telefono)) {
      newErrors.telefono = "El teléfono debe tener 10 dígitos";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
    } else if (!formData.email.endsWith("@uniandes.edu.co")) {
      newErrors.email = "El correo electrónico debe ser de Uniandes";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/login");
    }
  };

  return (
    <div className="page-container">
      <div className="auth-flex-container">
        <div className="auth-image-container">
          <img
            src={loginRegisterImage}
            alt="Login Register"
            className="auth-side-image"
          />
        </div>
        <div className="register-container">
          <div className="register-header">
            <h1 className="app-title">WheelsAndes</h1>
            <p className="app-subtitle">Comparte viajes, ahorra dinero</p>
          </div>
          <div className="register-box">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                />
                {errors.nombre && (
                  <div className="error-message">{errors.nombre}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Número de Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="3001234567"
                />
                {errors.telefono && (
                  <div className="error-message">{errors.telefono}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
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
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <div className="error-message">{errors.confirmPassword}</div>
                )}
              </div>
              <button type="submit" className="register-button">
                Registrarse
              </button>
              <div className="login-link">
                <p>
                  ¿Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
