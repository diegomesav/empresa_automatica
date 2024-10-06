// src/components/EmpleadoForm.js
import React, { useState } from 'react';
import EmpleadoService from '../services/EmpleadoService';

const EmpleadoForm = () => {
  const [empleado, setEmpleado] = useState({
    nombre: '',
    apellido: '',
    cargo: '',
    fecha_contratacion: '',
    salario: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({ ...empleado, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmpleadoService.createEmpleado(empleado)
      .then((response) => {
        console.log('Empleado creado con éxito:', response.data);
        // Aquí podrías redirigir o limpiar el formulario
      })
      .catch((error) => {
        console.error('Hubo un error al crear el empleado:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={empleado.nombre} onChange={handleChange} required />
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" name="apellido" value={empleado.apellido} onChange={handleChange} required />
      </div>
      <div>
        <label>Cargo:</label>
        <input type="text" name="cargo" value={empleado.cargo} onChange={handleChange} required />
      </div>
      <div>
        <label>Fecha de Contratación:</label>
        <input type="date" name="fecha_contratacion" value={empleado.fecha_contratacion} onChange={handleChange} required />
      </div>
      <div>
        <label>Salario:</label>
        <input type="number" name="salario" value={empleado.salario} onChange={handleChange} required />
      </div>
      <button type="submit">Registrar Empleado</button>
    </form>
  );
};

export default EmpleadoForm;
