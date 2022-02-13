import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers['x-token'] = token ? token : '';
  return config;
});

export default instance;
