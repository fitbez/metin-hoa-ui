import axios from 'axios';

const api = axios.create({
  baseURL: 'https://metin-hoa-server.onrender.com',
});

export const fetchBuilding = (id) => api.get(`/building/${id}`);
export const createBuilding = (data) => api.post('/building', data);
export const fetchUser = (building, id) => api.get(`/user/${building}/${id}`);
