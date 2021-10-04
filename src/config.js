const API_IP_URL = 'https://geo.ipify.org/api';
const API_KEY = process.env.REACT_APP_IP_GEOLOCATION_KEY;

export const BASE_SEARCH = `${API_IP_URL}/v1?apiKey=${API_KEY}&ipAddress=`;
