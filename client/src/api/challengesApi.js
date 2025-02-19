import axios from 'axios';

const API_URL = 'http://localhost:3001/api/challenges'; // Use full URL

export const getChallenges = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching challenges:", error);
    return { error: "Failed to fetch challenges" };
  }
};

export const submitSolution = async (challengeId, solutionData) => {
  const response = await axios.post(
    `${API_URL}/${challengeId}/submit`,
    solutionData
  );
  return response.data;
};