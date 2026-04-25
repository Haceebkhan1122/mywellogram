/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL;

const API = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 60000
});

API.interceptors.request.use(
  (config) => {
    try {
      const token = Cookies.get('Authorization');
      if (token) {
        config.headers['Authorization'] = token;
      }
    } catch (error) {
      console.error('Error setting headers:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const { response } = error;

    if (error?.response?.status === 403 || error?.response?.status === 401) {
      const Authorization = Cookies.get('Authorization');
      // toast.error('Login expired, redirecting...');
      if (Authorization) {
        Cookies.remove('Authorization');
        Cookies.remove('Authorization', { domain: 'mywellogram.com' });
      }
      setTimeout(() => {
      }, 5000);
    }

    if (response?.message === 'Network Error') {
    }

    const apiResponse = response ? response.data : Promise.reject(error);

    return apiResponse;
  }
);

export default API;
