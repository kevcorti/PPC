import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

export default apiClient;
