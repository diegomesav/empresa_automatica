// src/App.js
import React from 'react';
import EmpleadoForm from './components/EmpleadoForm';
import EmpleadoList from './components/EmpleadoList';

function App() {
  return (
    <div className="App">
      <h1>Gestión de Empleados</h1>
      <EmpleadoForm />
      <EmpleadoList />
    </div>
  );
}

export default App;