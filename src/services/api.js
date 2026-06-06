import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.yourservice.com",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default apiClient;
