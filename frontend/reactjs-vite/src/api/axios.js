import axios from "axios";

const api = axios.create({
  baseURL: "", // Leave empty so it uses relative paths (e.g., /api/products/ -> caught by Nginx)
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;