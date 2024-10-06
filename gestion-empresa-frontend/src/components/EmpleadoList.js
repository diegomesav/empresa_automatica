// src/components/EmpleadoList.js
import React, { useState, useEffect } from 'react';
import EmpleadoService from '../services/EmpleadoService';

const EmpleadoList = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    EmpleadoService.getEmpleados().then((response) => {
      setEmpleados(response.data);
    });
  }, []);

  const deleteEmpleado = (id) => {
    EmpleadoService.deleteEmpleado(id).then(() => {
      setEmpleados(empleados.filter((empleado) => empleado.id !== id));
    });
  };

  return (
    <div>
      <h2>Lista de Empleados</h2>
      <ul>
        {empleados.map((empleado) => (
          <li key={empleado.id}>
            {empleado.nombre} {empleado.apellido} - {empleado.cargo}
            <button onClick={() => deleteEmpleado(empleado.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpleadoList;
