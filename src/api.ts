import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

// Configuração global do Axios para a Fake Store API.
// Define a baseURL da API e inclui automaticamente o token JWT (se existir) no cabeçalho Authorization.
// Isso permite autenticar requisições protegidas de forma automática.