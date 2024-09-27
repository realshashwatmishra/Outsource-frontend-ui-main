import axios from 'axios';

const strapiAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
});

export const fetchFeatures = async () => {
  try {
    const response = await strapiAPI.get('/api/features');
    return response.data; // Return the full response, including the data property
  } catch (error) {
    console.error('Error fetching features:', error);
    throw error;
  }
};

// Add more API functions as needed

export default strapiAPI;