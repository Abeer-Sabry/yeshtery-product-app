import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://yeshtry-products-api.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
