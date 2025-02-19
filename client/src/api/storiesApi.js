import axios from 'axios';

const API_URL = 'http://localhost:3001/api/stories'; // Use full URL

export const getDailyStory = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching stories:", error);
    return { error: "Failed to fetch stories" };
  }
};

