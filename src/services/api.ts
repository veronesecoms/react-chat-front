import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3100",
});

// Global interceptor token
api.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers.Authorization = localStorage.getItem("token");
  }
  return config;
});

export default api
