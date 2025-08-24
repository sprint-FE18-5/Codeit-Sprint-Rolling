import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_BASE_ORIGIN = import.meta.env.VITE_API_BASE_ORIGIN;

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const originInstance = axios.create({
  baseURL: API_BASE_ORIGIN,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
export { originInstance };
