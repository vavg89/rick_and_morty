import React, { useState } from 'react';
import './RegistrationForm.css'; // Importa los estilos CSS
import { useDispatch } from 'react-redux'; // Importa useDispatch
import { createUser } from '../../redux/actions'; // Importa la acción createUser
import { useLocation } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch(); // Obtiene la función dispatch de Redux
  const [userData, setUserData] = useState({ email: '', password: '' });
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Llama a la acción createUser con los datos del usuario y utiliza dispatch para enviarla al store de Redux
    dispatch(createUser(userData));

    // Limpia el formulario después de enviar
    setUserData({ email: '', password: '' });
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
        </div>
        <button type="submit" className="submit-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
