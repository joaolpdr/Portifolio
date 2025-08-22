import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // A URL onde o nosso backend está a correr
});

export default api;
