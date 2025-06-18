// src/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // https://tradeverse-backend.onrender.com
  withCredentials: true, // optional: use if you're handling auth via cookies
});

export default api;
