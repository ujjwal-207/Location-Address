import axios from "axios";

const API_URL = "http://localhost:5000/api/locations";

// I was trying to use this but suddenly i rember we have to use google maps api so
// const API_KEY = import.meta.env.VITE_OPENROUTESERVICE_API_KEY;
// const BASE_URL = "https://api.openrouteservice.org/v2/directions/driving-car";

// Save a new location
export const saveLocation = async (locationData) => {
  return axios.post(`${API_URL}/save`, locationData);
};

// Get locations for a user
export const getUserLocations = async (userId) => {
  return axios.get(`${API_URL}/${userId}`);
};

// Delete a location
export const deleteLocation = async (locationId) => {
  return axios.delete(`${API_URL}/${locationId}`);
};

//this is not needed
// export const getDirections = async (start, end) => {
//   try {
//     const response = await axios.get(`${BASE_URL}`, {
//       params: {
//         api_key: API_KEY,
//         start: `${start.lng},${start.lat}`,
//         end: `${end.lng},${end.lat}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching directions:", error);
//     throw error;
//   }
// };
