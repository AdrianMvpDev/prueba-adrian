import Axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const getTramosData = async (fechainicial, fechafinal) => {
  try {
    const response = await Axios.post(`${BASE_URL}/tramos`, { fechainicial, fechafinal });
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de /tramos:', error);
    throw error;
  }
};

export const getClienteData = async (fechainicial, fechafinal) => {
  try {
    const response = await Axios.post(`${BASE_URL}/cliente`, { fechainicial, fechafinal });
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de /cliente:', error);
    throw error;
  }
};

export const getTramosClienteData = async (fechainicial, fechafinal) => {
  try {
    const response = await Axios.post(`${BASE_URL}/tramos-cliente`, { fechainicial, fechafinal });
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de /tramos-cliente:', error);
    throw error;
  }
};
