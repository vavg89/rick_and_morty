import React, { useState } from 'react';
import './RegistrationForm.css'; // Importa los estilos CSS
import { useDispatch } from 'react-redux'; // Importa useDispatch
import { createUser } from '../../redux/actions'; // Importa la acción createUser
import { useLocation } from 'react-router-dom';
import { validation } from '../Form/validation'; // Reemplaza 'tuArchivoDeValidaciones' con la ruta correcta a tu archivo de validaciones

const RegistrationForm = () => {
  const dispatch = useDispatch(); // Obtiene la función dispatch de Redux
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' }); // Estado para almacenar errores
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los datos antes de enviarlos
    const formErrors = validation(userData);
    setErrors(formErrors);

    // Si no hay errores, enviar los datos al servidor
    if (Object.keys(formErrors).length === 0) {
      dispatch(createUser(userData));

      // Limpia el formulario después de enviar
      setUserData({ email: '', password: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  if (location.pathname !== '/') {
    // Si la ruta actual no es '/registro', no mostramos el formulario
    return null;
  }

  return (
    <div className="registration-form-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            value={userData.email}
            onChange={handleChange}
            className="form-control"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={userData.password}
            onChange={handleChange}
            className="form-control"
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <button type="submit" className="submit-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
