// src/services/EmpleadoService.js
import axios from 'axios';

const EMPLEADO_API_URL = 'http://127.0.0.1:8000/api/empleados/';

class EmpleadoService {
  getEmpleados() {
    return axios.get(EMPLEADO_API_URL);
  }

  createEmpleado(empleado) {
    return axios.post(EMPLEADO_API_URL, empleado);
  }

  getEmpleadoById(empleadoId) {
    return axios.get(EMPLEADO_API_URL + empleadoId + '/');
  }

  updateEmpleado(empleadoId, empleado) {
    return axios.put(EMPLEADO_API_URL + empleadoId + '/', empleado);
  }

  deleteEmpleado(empleadoId) {
    return axios.delete(EMPLEADO_API_URL + empleadoId + '/');
  }
}

export default new EmpleadoService();
