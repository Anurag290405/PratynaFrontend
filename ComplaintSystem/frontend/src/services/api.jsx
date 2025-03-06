import axios from "axios";

const API_URL = "http://localhost:3000"; // Adjust as needed

export const loginUser = async (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const getUserProfile = async (token) => {
  return axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
