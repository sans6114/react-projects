import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

export const heroApi = axios.create({
  baseURL: `${base_url}/api/heroes`,
});
