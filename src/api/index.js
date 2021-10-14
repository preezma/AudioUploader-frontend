import { API_ENDPOINTS } from './endpoints';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function uploadFile(id, file) {
  return axios.post(`${API_ENDPOINTS.user}/${id}/audio`, file);
}
export function changeFile(id, file) {
  return axios.put(`${API_ENDPOINTS.user}/${id}/audio`, file);
}

export function deleteFile(id) {
  return axios.delete(`${API_ENDPOINTS.user}/${id}/audio`);
}

export function getUsers() {
  return axios.get(API_ENDPOINTS.user);
}
export function getSingleUser(id) {
  return axios.get(`${API_ENDPOINTS.user}/${id}`);
}
