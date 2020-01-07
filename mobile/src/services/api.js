import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-mentalbox.herokuapp.com'
});

export default api;
