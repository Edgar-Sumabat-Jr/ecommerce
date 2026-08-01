import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Your base URL here
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;