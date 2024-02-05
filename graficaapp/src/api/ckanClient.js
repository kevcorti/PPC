import axios from "axios";

const ckanClient = axios.create({
  baseURL: import.meta.env.VITE_URL_CKAN_BACKEND,
  timeout: 10000,
  headers: {
    Authorization: import.meta.env.VITE_API_CKAN_KEY,
  },
});

export default ckanClient;
