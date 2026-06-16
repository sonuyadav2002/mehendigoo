import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://98.70.11.123:3000",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default apiClient;
