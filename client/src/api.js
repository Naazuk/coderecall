// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5500'; // Replace with your backend URL

// User Signup
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// User Login
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Fetch all queries
export const fetchQueries = async () => {
  try {
    const response = await axios.get(`${API_URL}/queries`);
    return response.data;
  } catch (error) {
    console.error('Error fetching queries:', error);
    throw error;
  }
};

// Post a new query
export const postQuery = async (queryData) => {
  try {
    const response = await axios.post(`${API_URL}/queries`, queryData);
    return response.data;
  } catch (error) {
    console.error('Error posting query:', error);
    throw error;
  }
};

// Delete a query
export const deleteQuery = async (queryId) => {
  try {
    const response = await axios.delete(`${API_URL}/queries/${queryId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting query:', error);
    throw error;
  }
};
